"use client";

import Link from "next/link";
import { useConsent } from "./ConsentProvider";

export default function ConsentBanner() {
  const { status, grant, deny } = useConsent();

  if (status !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
    >
      <div className="rounded-2xl border border-bege bg-white p-5 shadow-2xl shadow-verde/30">
        <h2 className="font-serif text-lg text-verde-dark">
          Sua privacidade
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-carvao/80">
          Usamos cookies para entender o desempenho desta página e melhorar a
          experiência. Isso inclui ferramentas da Meta (Facebook/Instagram)
          para mensurar visitas e cliques. Você pode aceitar ou recusar — sua
          escolha não afeta o quiz.
        </p>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={deny}
            className="rounded-full px-5 py-2.5 text-sm font-medium text-carvao/70 transition hover:text-verde-dark"
          >
            Recusar
          </button>
          <button
            onClick={grant}
            className="rounded-full bg-verde px-6 py-2.5 text-sm font-medium text-creme shadow-md transition hover:bg-verde-dark"
          >
            Aceitar
          </button>
        </div>
        <p className="mt-3 text-xs text-carvao/55">
          Saiba mais na{" "}
          <Link
            href="/privacidade"
            className="underline underline-offset-2 hover:text-verde-dark"
          >
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
