import CTAQuiz from "./CTAQuiz";

const beneficios = [
  { icone: "🌙", titulo: "Sono profundo de volta", texto: "Suor noturno e despertares constantes diminuem nas primeiras semanas." },
  { icone: "🔥", titulo: "Fim dos calorões", texto: "Os fogachos, principal queixa do climatério, costumam ceder rapidamente." },
  { icone: "💗", titulo: "Libido e prazer", texto: "Ressecamento vaginal, dor e queda de desejo respondem bem ao tratamento." },
  { icone: "🧠", titulo: "Clareza mental", texto: "A névoa mental, o esquecimento e a dificuldade de concentração melhoram." },
  { icone: "🦴", titulo: "Ossos protegidos", texto: "TRH é um dos tratamentos mais eficazes na prevenção de osteoporose." },
  { icone: "❤️", titulo: "Coração e metabolismo", texto: "Iniciada na janela certa, reduz risco cardiovascular e melhora perfil lipídico." },
];

export default function Beneficios() {
  return (
    <section className="bg-creme py-20 sm:py-28">
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-dourado-dark">
            O que volta quando o tratamento é certo
          </p>
          <h2 className="section-title mt-3">
            Você não precisa aceitar viver assim como se fosse normal.
          </h2>
          <p className="lead mt-5">
            Os sintomas da menopausa não são frescura nem fase a ser
            aguentada em silêncio. Eles têm explicação hormonal — e tratamento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <article
              key={b.titulo}
              className="group rounded-2xl border border-bege bg-white/70 p-7 transition hover:border-dourado hover:shadow-lg"
            >
              <span className="text-3xl">{b.icone}</span>
              <h3 className="mt-4 font-serif text-xl text-verde-dark">
                {b.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-carvao/75">
                {b.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <CTAQuiz variant="gold" label="Ver se sou candidata · 2 min" />
        </div>
      </div>
    </section>
  );
}
