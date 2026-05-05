import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Conversions API (server-side) endpoint.
 *
 * Recebe eventos do front, enriquece com dados do request (IP, User-Agent,
 * fbp/fbc cookies) e envia pro Graph API da Meta.
 *
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

const GRAPH_API_VERSION = "v21.0";

type ClientPayload = {
  eventName: "PageView" | "QuizStart" | "QuizComplete" | "Contact";
  eventId: string;
  eventSourceUrl: string;
  customData?: Record<string, string | number | boolean>;
};

/** SHA-256 lowercase, padrão exigido pela Meta para PII em CAPI. */
function sha256(value: string): string {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

export async function POST(req: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  if (!pixelId || !accessToken || accessToken === "COLE_O_TOKEN_AQUI") {
    // Falha silenciosa em dev se token não configurado.
    return NextResponse.json(
      { skipped: true, reason: "CAPI not configured" },
      { status: 200 },
    );
  }

  let body: ClientPayload;
  try {
    body = (await req.json()) as ClientPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.eventName || !body.eventId) {
    return NextResponse.json(
      { error: "eventName and eventId required" },
      { status: 400 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "";
  const userAgent = req.headers.get("user-agent") || "";

  // Cookies que o pixel grava no navegador — Meta usa pra matching.
  const fbp = req.cookies.get("_fbp")?.value;
  const fbc = req.cookies.get("_fbc")?.value;

  const userData: Record<string, string | string[]> = {};
  if (ip) userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  // Suprime warning quando não temos PII — hash do user-agent ajuda matching.
  if (userAgent) {
    userData.external_id = sha256(userAgent);
  }

  const event = {
    event_name: body.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.eventId,
    event_source_url: body.eventSourceUrl,
    action_source: "website" as const,
    user_data: userData,
    custom_data: body.customData ?? {},
  };

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  const payload: {
    data: typeof event[];
    test_event_code?: string;
  } = { data: [event] };

  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      console.error("[Meta CAPI]", json);
      return NextResponse.json(
        { error: "CAPI rejected event", details: json },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, fbtrace_id: json.fbtrace_id });
  } catch (err) {
    console.error("[Meta CAPI] fetch failed", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
