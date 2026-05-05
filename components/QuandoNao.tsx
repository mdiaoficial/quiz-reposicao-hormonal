import CTAQuiz from "./CTAQuiz";

const contraindicacoes = [
  "Câncer de mama, endométrio ou ovário (atual ou histórico)",
  "Trombose venosa profunda ou embolia pulmonar prévia",
  "AVC ou infarto recente",
  "Doença hepática ativa",
  "Sangramento vaginal sem causa investigada",
  "Hipertensão arterial não controlada",
];

export default function QuandoNao() {
  return (
    <section className="bg-bege/40 py-20 sm:py-28">
      <div className="container-soft">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-verde">
              Honestidade científica
            </p>
            <h2 className="section-title mt-3">
              A reposição não é para todas. E está tudo bem.
            </h2>
            <p className="lead mt-5">
              Existem situações em que a TRH realmente não é indicada — ou
              precisa de muito mais cautela. É exatamente para isso que serve
              o quiz: identificar, em poucos minutos, sinais que pedem uma
              avaliação especializada antes de qualquer prescrição.
            </p>
            <p className="mt-4 text-base text-carvao/70">
              Mesmo nesses casos, raramente significa "sem opções". Significa
              "outro caminho, conduzido com mais cuidado".
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-bege bg-creme p-8 shadow-sm">
              <h3 className="font-serif text-xl text-verde-dark">
                Situações que pedem cautela ou contraindicação
              </h3>
              <ul className="mt-5 space-y-3">
                {contraindicacoes.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-base text-carvao/85"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dourado-dark"
                    />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-carvao/60">
                O quiz considera essas e outras variáveis para sinalizar se
                vale a pena uma consulta especializada.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <CTAQuiz label="Quero descobrir o meu caso" />
        </div>
      </div>
    </section>
  );
}
