export default function Ciencia() {
  return (
    <section className="bg-verde-dark py-20 text-creme sm:py-28">
      <div className="container-soft">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-dourado">
              O que a ciência atualizada diz
            </p>
            <h2 className="mt-3 font-serif text-section text-creme">
              O estudo que assustou o mundo em 2002 foi{" "}
              <em className="not-italic text-dourado">reanalisado</em> — e
              mudou tudo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-creme/80">
              Em 2002, um grande estudo americano (WHI) foi interrompido sob
              alarme de que a reposição hormonal aumentava risco de câncer.
              O problema: a maioria das mulheres do estudo tinha mais de 60
              anos e iniciou a terapia tarde demais.
            </p>
            <p className="mt-4 text-base leading-relaxed text-creme/80">
              Reanálises feitas pelas próprias autoras nos anos seguintes, e
              dezenas de estudos depois, mostraram um cenário muito diferente
              para mulheres que iniciam dentro da{" "}
              <strong className="text-creme">janela de oportunidade</strong>{" "}
              — antes dos 60 anos ou nos primeiros 10 anos da menopausa.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Card
                titulo="Janela de oportunidade"
                texto="Iniciar a TRH antes dos 60 anos ou nos primeiros 10 anos da menopausa traz benefício cardiovascular e ósseo, com risco mínimo."
              />
              <Card
                titulo="Risco absoluto pequeno"
                texto="O aumento de risco de câncer de mama, quando existe, é menor que o associado a sobrepeso, sedentarismo ou consumo regular de álcool."
              />
              <Card
                titulo="Tipo de hormônio importa"
                texto="Estradiol bioidêntico transdérmico e progesterona micronizada têm perfil de segurança diferente das fórmulas antigas dos anos 90."
              />
              <Card
                titulo="Avaliação individual"
                texto="A decisão depende de histórico, exames de imagem, sintomas e fatores de risco — nunca de uma regra geral aplicada a todas."
              />
            </div>

            <p className="mt-8 text-sm italic text-creme/60">
              Posicionamentos atuais: Sociedade Brasileira de Climatério
              (SOBRAC), International Menopause Society (IMS), Endocrine
              Society e North American Menopause Society (NAMS).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="rounded-2xl border border-creme/15 bg-creme/5 p-6 backdrop-blur">
      <h3 className="font-serif text-lg text-dourado">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-creme/85">{texto}</p>
    </div>
  );
}
