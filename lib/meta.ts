/**
 * Helpers compartilhados Pixel + CAPI.
 *
 * Eventos do funil:
 *  - PageView         → carregamento da home (browser)
 *  - QuizStart        → clique em "Começar quiz"
 *  - QuizComplete     → resposta da última pergunta (com parâmetro resultado)
 *  - Contact          → clique em qualquer botão de WhatsApp
 *
 * O event_id é o mesmo no browser e no servidor → permite que a Meta
 * faça deduplicação quando os dois canais entregam o mesmo evento.
 */

export type MetaEventName =
  | "PageView"
  | "QuizStart"
  | "QuizComplete"
  | "Contact";

export type MetaCustomData = Record<string, string | number | boolean>;

/** Gera um ID único pra deduplicação Pixel ↔ CAPI. */
export function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Dispara evento no Pixel do navegador (só roda client-side). */
export function trackPixel(
  name: MetaEventName,
  data: MetaCustomData = {},
  eventId?: string,
) {
  if (typeof window === "undefined" || !window.fbq) return;

  const isStandard = name === "PageView" || name === "Contact";
  const method = isStandard ? "track" : "trackCustom";

  window.fbq(method, name, data, eventId ? { eventID: eventId } : undefined);
}

/** Envia o mesmo evento via API route (server → CAPI). */
export async function trackCapi(
  name: MetaEventName,
  data: MetaCustomData = {},
  eventId: string,
) {
  try {
    await fetch("/api/meta/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: name,
        eventId,
        eventSourceUrl: window.location.href,
        customData: data,
      }),
      keepalive: true,
    });
  } catch {
    // Silencia: rastreamento nunca pode quebrar a UX
  }
}

/** Dispara browser + servidor com o mesmo event_id (deduplicação). */
export function trackBoth(name: MetaEventName, data: MetaCustomData = {}) {
  const id = newEventId();
  trackPixel(name, data, id);
  void trackCapi(name, data, id);
}
