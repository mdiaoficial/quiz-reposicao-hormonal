"use client";

import { useState } from "react";
import Resultado from "./Resultado";
import { useTrack } from "@/lib/useTrack";

type OpcaoBase = { id: string; label: string };

type PerguntaUnica = {
  id: string;
  pergunta: string;
  ajuda?: string;
  tipo: "unica";
  opcoes: (OpcaoBase & { contraindica?: boolean; biradsAlto?: boolean })[];
};

type PerguntaMultipla = {
  id: string;
  pergunta: string;
  ajuda?: string;
  tipo: "multipla";
  opcoes: (OpcaoBase & {
    contraindica?: boolean;
    exclusiva?: boolean; // ex: "Nenhum dos acima"
  })[];
};

type Pergunta = PerguntaUnica | PerguntaMultipla;

const perguntas: Pergunta[] = [
  {
    id: "janela",
    pergunta: "Há quanto tempo foi sua última menstruação?",
    ajuda:
      "A reposição tem maior benefício quando iniciada dentro da chamada janela de oportunidade.",
    tipo: "unica",
    opcoes: [
      { id: "a", label: "Ainda menstruo, mesmo que irregular" },
      { id: "b", label: "Parei há menos de 10 anos" },
      { id: "c", label: "Parei há mais de 10 anos" },
      { id: "d", label: "Tenho menos de 60 anos e ainda não entrei na menopausa" },
    ],
  },
  {
    id: "cancer",
    pergunta:
      "Você já teve câncer de mama, endométrio (útero) ou ovário?",
    tipo: "unica",
    opcoes: [
      { id: "sim", label: "Sim", contraindica: true },
      { id: "nao", label: "Não" },
      { id: "naosei", label: "Não sei / nunca investiguei" },
    ],
  },
  {
    id: "vascular",
    pergunta:
      "Você já teve trombose, embolia pulmonar ou AVC?",
    ajuda:
      "Inclui eventos venosos e arteriais — mesmo que tenham acontecido há muitos anos.",
    tipo: "unica",
    opcoes: [
      { id: "sim", label: "Sim, eu mesma já tive", contraindica: true },
      {
        id: "familiar",
        label: "Não, mas tenho parente de 1º grau que teve antes dos 50 anos",
      },
      { id: "nao", label: "Não, nem eu nem familiares próximos" },
    ],
  },
  {
    id: "outras",
    pergunta: "Algum desses se aplica a você hoje?",
    ajuda: "Selecione todos que se aplicam.",
    tipo: "multipla",
    opcoes: [
      { id: "figado", label: "Doença ativa do fígado", contraindica: true },
      {
        id: "sangramento",
        label: "Sangramento vaginal sem causa investigada",
        contraindica: true,
      },
      {
        id: "pressao",
        label: "Pressão alta sem controle",
        contraindica: true,
      },
      { id: "nenhum", label: "Nenhum dos acima", exclusiva: true },
    ],
  },
  {
    id: "sintomas",
    pergunta: "Quais sintomas você sente hoje?",
    ajuda: "Pode marcar mais de um.",
    tipo: "multipla",
    opcoes: [
      { id: "calor", label: "Calorões / suores noturnos" },
      { id: "sono", label: "Insônia ou sono ruim" },
      { id: "libido", label: "Queda de libido / ressecamento vaginal" },
      { id: "mente", label: "Névoa mental / esquecimento" },
      { id: "humor", label: "Cansaço, irritabilidade ou alterações de humor" },
      { id: "dores", label: "Dores articulares" },
      { id: "nenhum", label: "Não tenho sintomas significativos", exclusiva: true },
    ],
  },
  {
    id: "birads",
    pergunta:
      "Qual foi o resultado do seu último exame de mama (mamografia ou ultrassom)?",
    ajuda:
      "Se você não lembra a categoria, escolha 'Não sei / não tenho em mãos'.",
    tipo: "unica",
    opcoes: [
      { id: "baixo", label: "BI-RADS 1, 2 ou 3" },
      { id: "alto", label: "BI-RADS 4, 5 ou 6", biradsAlto: true },
      { id: "naotem", label: "Não sei / não tenho o laudo em mãos" },
      { id: "nuncafez", label: "Nunca fiz" },
    ],
  },
];

type Respostas = Record<string, string | string[]>;

function computarResultado(r: Respostas): "alta" | "baixa" {
  const cancer = r["cancer"] === "sim";
  const vascular = r["vascular"] === "sim";
  const outras = (r["outras"] as string[]) ?? [];
  const outrasContraindica =
    outras.includes("figado") ||
    outras.includes("sangramento") ||
    outras.includes("pressao");
  const biradsAlto = r["birads"] === "alto";
  return cancer || vascular || outrasContraindica || biradsAlto
    ? "baixa"
    : "alta";
}

export default function Quiz() {
  const [iniciado, setIniciado] = useState(false);
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<Respostas>({});
  const [finalizado, setFinalizado] = useState(false);
  const track = useTrack();

  function iniciar() {
    track("QuizStart");
    setIniciado(true);
  }

  function reiniciar() {
    setRespostas({});
    setIndice(0);
    setFinalizado(false);
    setIniciado(false);
  }

  function avancar(novasRespostas: Respostas) {
    setRespostas(novasRespostas);
    if (indice < perguntas.length - 1) {
      setIndice(indice + 1);
    } else {
      const resultado = computarResultado(novasRespostas);
      track("QuizComplete", { resultado });
      setFinalizado(true);
    }
  }

  function voltar() {
    if (indice > 0) setIndice(indice - 1);
  }

  if (!iniciado) {
    return (
      <section id="quiz" className="bg-creme py-20 sm:py-28">
        <div className="container-soft">
          <div className="mx-auto max-w-2xl rounded-3xl border border-bege bg-white p-8 text-center shadow-xl shadow-verde/10 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-widest text-dourado-dark">
              Pronta para começar?
            </p>
            <h2 className="section-title mt-3">
              6 perguntas. 2 minutos. Sem cadastro.
            </h2>
            <p className="lead mt-5">
              Suas respostas ficam só no seu navegador. Não armazenamos dados,
              não pedimos e-mail nem WhatsApp.
            </p>
            <ul className="mx-auto mt-7 max-w-md space-y-2 text-left text-sm text-carvao/75">
              <li className="flex gap-2">
                <span className="text-dourado-dark">✓</span> Baseado em
                diretrizes atuais de sociedades médicas
              </li>
              <li className="flex gap-2">
                <span className="text-dourado-dark">✓</span> Não substitui
                consulta — orienta seu próximo passo
              </li>
              <li className="flex gap-2">
                <span className="text-dourado-dark">✓</span> Resultado
                imediato, com explicação clara
              </li>
            </ul>
            <button onClick={iniciar} className="btn-primary mt-8">
              Começar quiz <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (finalizado) {
    return (
      <section id="quiz" className="bg-creme py-20 sm:py-28">
        <div className="container-soft">
          <Resultado respostas={respostas} onReiniciar={reiniciar} />
        </div>
      </section>
    );
  }

  const p = perguntas[indice];
  const progresso = ((indice + 1) / perguntas.length) * 100;

  return (
    <section id="quiz" className="bg-creme py-20 sm:py-28">
      <div className="container-soft">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-carvao/70">
              <span>
                Pergunta {indice + 1} de {perguntas.length}
              </span>
              <span>{Math.round(progresso)}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-bege/60">
              <div
                className="h-full rounded-full bg-verde transition-all duration-500"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-bege bg-white p-7 shadow-lg sm:p-10">
            <h2 className="font-serif text-2xl leading-snug text-verde-dark sm:text-3xl">
              {p.pergunta}
            </h2>
            {p.ajuda && (
              <p className="mt-3 text-sm italic text-carvao/60">{p.ajuda}</p>
            )}

            <div className="mt-7">
              {p.tipo === "unica" ? (
                <PerguntaUnicaUI
                  pergunta={p}
                  onSelecionar={(opcaoId) =>
                    avancar({ ...respostas, [p.id]: opcaoId })
                  }
                />
              ) : (
                <PerguntaMultiplaUI
                  pergunta={p}
                  selecionadasIniciais={
                    (respostas[p.id] as string[] | undefined) ?? []
                  }
                  onConfirmar={(ids) =>
                    avancar({ ...respostas, [p.id]: ids })
                  }
                />
              )}
            </div>

            <div className="mt-6 flex items-center justify-between">
              {indice > 0 ? (
                <button
                  onClick={voltar}
                  className="text-sm font-medium text-carvao/60 hover:text-verde transition"
                >
                  ← Voltar
                </button>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerguntaUnicaUI({
  pergunta,
  onSelecionar,
}: {
  pergunta: PerguntaUnica;
  onSelecionar: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {pergunta.opcoes.map((o) => (
        <button
          key={o.id}
          onClick={() => onSelecionar(o.id)}
          className="block w-full rounded-2xl border-2 border-bege bg-creme/40 px-5 py-4 text-left text-base text-carvao transition hover:border-verde hover:bg-verde hover:text-creme focus:outline-none focus:ring-4 focus:ring-verde/20 sm:text-lg"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function PerguntaMultiplaUI({
  pergunta,
  selecionadasIniciais,
  onConfirmar,
}: {
  pergunta: PerguntaMultipla;
  selecionadasIniciais: string[];
  onConfirmar: (ids: string[]) => void;
}) {
  const [selecionadas, setSelecionadas] = useState<string[]>(
    selecionadasIniciais,
  );

  function alternar(id: string) {
    const opcao = pergunta.opcoes.find((o) => o.id === id);
    if (!opcao) return;

    if (opcao.exclusiva) {
      setSelecionadas(selecionadas.includes(id) ? [] : [id]);
      return;
    }

    const exclusivas = pergunta.opcoes
      .filter((o) => o.exclusiva)
      .map((o) => o.id);

    const semExclusivas = selecionadas.filter((s) => !exclusivas.includes(s));

    if (semExclusivas.includes(id)) {
      setSelecionadas(semExclusivas.filter((s) => s !== id));
    } else {
      setSelecionadas([...semExclusivas, id]);
    }
  }

  return (
    <div>
      <div className="space-y-3">
        {pergunta.opcoes.map((o) => {
          const ativa = selecionadas.includes(o.id);
          return (
            <button
              key={o.id}
              onClick={() => alternar(o.id)}
              className={`flex w-full items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-base transition focus:outline-none focus:ring-4 focus:ring-verde/20 sm:text-lg ${
                ativa
                  ? "border-verde bg-verde text-creme"
                  : "border-bege bg-creme/40 text-carvao hover:border-verde"
              }`}
            >
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 ${
                  ativa ? "border-creme bg-creme" : "border-carvao/30"
                }`}
              >
                {ativa && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#245d3f"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              {o.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onConfirmar(selecionadas)}
        disabled={selecionadas.length === 0}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:bg-carvao/20 disabled:shadow-none"
      >
        Continuar <span aria-hidden>→</span>
      </button>
    </div>
  );
}
