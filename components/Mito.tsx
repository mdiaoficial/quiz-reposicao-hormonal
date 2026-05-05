import CTAQuiz from "./CTAQuiz";

const mitos = [
  {
    titulo: "“Reposição hormonal dá câncer de mama.”",
    fonte: "— o que muitas amigas e até médicos ainda repetem",
  },
  {
    titulo: "“É só pra quem tá em sofrimento extremo.”",
    fonte: "— como se calorão, insônia e libido baixa fossem ‘normais’",
  },
  {
    titulo: "“Vou engordar e ficar inchada.”",
    fonte: "— um dos medos mais comuns, baseado em fórmulas antigas",
  },
];

export default function Mito() {
  return (
    <section className="bg-creme py-20 sm:py-28">
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-dourado-dark">
            O que você provavelmente já ouviu
          </p>
          <h2 className="section-title mt-3">
            Três frases que travam milhares de mulheres todos os dias.
          </h2>
          <p className="lead mt-5">
            Se algumas dessas frases já fizeram você desistir de procurar ajuda
            — você não está sozinha. O problema é que a ciência avançou, mas a
            mensagem que circula nos consultórios e grupos de WhatsApp não.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {mitos.map((m) => (
            <article
              key={m.titulo}
              className="rounded-2xl border border-bege bg-white/60 p-7 shadow-sm transition hover:shadow-md"
            >
              <p className="font-serif text-xl leading-snug text-verde-dark">
                {m.titulo}
              </p>
              <p className="mt-4 text-sm italic text-carvao/60">{m.fonte}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <CTAQuiz label="Quero saber se é seguro pra mim" />
          <span className="text-sm text-carvao/60">
            6 perguntas · sem cadastro
          </span>
        </div>
      </div>
    </section>
  );
}
