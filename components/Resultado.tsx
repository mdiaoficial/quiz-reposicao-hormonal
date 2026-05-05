"use client";

import CTAWhatsApp from "./CTAWhatsApp";
import type { ResultadoQuiz } from "@/lib/whatsapp";

type Respostas = Record<string, string | string[]>;

function calcular(respostas: Respostas): {
  resultado: ResultadoQuiz;
  semExameImagem: boolean;
} {
  const cancer = respostas["cancer"] === "sim";
  const vascular = respostas["vascular"] === "sim";

  const outras = (respostas["outras"] as string[]) ?? [];
  const outrasContraindica =
    outras.includes("figado") ||
    outras.includes("sangramento") ||
    outras.includes("pressao");

  const birads = respostas["birads"];
  const biradsAlto = birads === "alto";

  const semExameImagem = birads === "naotem" || birads === "nuncafez";

  const baixa =
    cancer || vascular || outrasContraindica || biradsAlto;

  return {
    resultado: baixa ? "BAIXA_PROBABILIDADE" : "ALTA_PROBABILIDADE",
    semExameImagem,
  };
}

export default function Resultado({
  respostas,
  onReiniciar,
}: {
  respostas: Respostas;
  onReiniciar: () => void;
}) {
  const { resultado, semExameImagem } = calcular(respostas);

  if (resultado === "ALTA_PROBABILIDADE") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border-2 border-verde bg-white p-8 shadow-2xl shadow-verde/20 sm:p-12">
          <div className="flex justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-verde text-3xl text-creme">
              ✓
            </span>
          </div>
          <p className="mt-5 text-center text-xs font-medium uppercase tracking-widest text-verde">
            Seu resultado
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-verde-dark sm:text-4xl">
            Tudo indica que você é uma boa candidata à reposição hormonal.
          </h2>
          <p className="lead mt-6">
            Com base nas suas respostas, não identificamos contraindicações
            absolutas. O próximo passo é uma{" "}
            <strong className="text-verde-dark">
              consulta com especialista
            </strong>{" "}
            para personalizar o protocolo — tipo de hormônio, via de
            administração, dose e acompanhamento.
          </p>

          {semExameImagem && (
            <div className="mt-6 rounded-2xl border border-dourado/40 bg-dourado/10 p-5">
              <p className="text-sm leading-relaxed text-carvao/80">
                <strong className="text-verde-dark">Dica:</strong> levar uma
                mamografia ou ultrassom de mama recente para a consulta torna
                a avaliação ainda mais precisa. Se você não tem o exame em
                dia, não se preocupe — o Dr. Dorta pode orientar.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAWhatsApp
              resultado={resultado}
              variant="primary"
              label="Falar com o Dr. Dorta no WhatsApp"
              source="resultado_alta"
            />
            <button
              onClick={onReiniciar}
              className="text-sm text-carvao/60 hover:text-verde transition"
            >
              Refazer o quiz
            </button>
          </div>

          <p className="mt-8 border-t border-bege pt-6 text-xs leading-relaxed text-carvao/60">
            Este quiz é uma ferramenta educativa baseada em diretrizes atuais
            de sociedades médicas. Não substitui consulta, diagnóstico ou
            prescrição. A indicação de terapia de reposição hormonal só pode
            ser feita por médico após avaliação clínica individual.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-3xl border-2 border-dourado-dark bg-white p-8 shadow-2xl shadow-dourado/20 sm:p-12">
        <div className="flex justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-dourado-dark text-3xl text-creme">
            !
          </span>
        </div>
        <p className="mt-5 text-center text-xs font-medium uppercase tracking-widest text-dourado-dark">
          Seu resultado
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl text-verde-dark sm:text-4xl">
          Seu caso pede uma avaliação mais cuidadosa.
        </h2>
        <p className="lead mt-6">
          Algumas das suas respostas sinalizam pontos que merecem atenção
          especializada. Isso{" "}
          <strong className="text-verde-dark">não significa</strong> que você
          está sem opções — existem caminhos seguros e individualizados, e só
          um médico pode definir o melhor para você.
        </p>
        <p className="mt-4 text-base text-carvao/75">
          O Dr. Daniel Dorta pode avaliar seu histórico em detalhe e propor a
          melhor conduta — seja reposição em formulação específica, terapias
          alternativas ou outro plano de cuidado.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <CTAWhatsApp
            resultado={resultado}
            variant="gold"
            label="Falar com o Dr. Dorta no WhatsApp"
            source="resultado_baixa"
          />
          <button
            onClick={onReiniciar}
            className="text-sm text-carvao/60 hover:text-verde transition"
          >
            Refazer o quiz
          </button>
        </div>

        <p className="mt-8 border-t border-bege pt-6 text-xs leading-relaxed text-carvao/60">
          Este quiz é uma ferramenta educativa baseada em diretrizes atuais
          de sociedades médicas. Não substitui consulta, diagnóstico ou
          prescrição. A indicação de terapia de reposição hormonal só pode
          ser feita por médico após avaliação clínica individual.
        </p>
      </div>
    </div>
  );
}
