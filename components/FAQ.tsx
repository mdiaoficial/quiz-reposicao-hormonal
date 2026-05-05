"use client";

import { useState } from "react";
import CTAQuiz from "./CTAQuiz";

const faqs = [
  {
    q: "Reposição hormonal vai me fazer engordar?",
    a: "É um dos medos mais comuns, mas as fórmulas modernas — especialmente estradiol transdérmico com progesterona micronizada — não causam ganho de peso por si só. Pelo contrário: o controle hormonal pode ajudar a recuperar massa magra, melhorar o sono e reduzir compulsão alimentar, o que indiretamente favorece o peso.",
  },
  {
    q: "Vou ter que fazer reposição pra sempre?",
    a: "Não necessariamente. A duração é individualizada. Muitas mulheres mantêm enquanto há benefício e sintomas, e a decisão é revisada periodicamente em consulta. Existe segurança em uso prolongado quando o acompanhamento é feito corretamente.",
  },
  {
    q: "Tenho mioma / endometriose. Posso fazer?",
    a: "Na maioria dos casos, sim — mas exige escolha cuidadosa do tipo de hormônio e da via. É uma das situações em que a avaliação especializada faz toda a diferença.",
  },
  {
    q: "E se minha mãe ou irmã teve câncer de mama?",
    a: "Histórico familiar não é, por si só, contraindicação absoluta. Avaliamos o tipo de câncer, idade do diagnóstico, eventual mutação genética e o conjunto do seu próprio risco. Cada caso é único.",
  },
  {
    q: "Posso começar mesmo se minha menopausa foi há mais de 10 anos?",
    a: "É preciso muito mais cautela. A janela de oportunidade favorece quem inicia até 10 anos da menopausa ou antes dos 60 anos. Fora dessa janela, os riscos crescem em algumas situações. Não é proibido, mas a decisão precisa ser muito bem ponderada.",
  },
  {
    q: "Hormônio bioidêntico é a mesma coisa que reposição hormonal?",
    a: "Bioidêntico significa que a molécula é igual à produzida pelo corpo (estradiol, progesterona). Existem versões aprovadas em farmácia comum, com qualidade garantida. Cuidado com fórmulas manipuladas vendidas sob promessas mirabolantes — nem toda manipulação é segura ou eficaz.",
  },
  {
    q: "O quiz substitui uma consulta?",
    a: "Não. Ele é uma ferramenta educativa que orienta seu próximo passo. A indicação, escolha do hormônio, dose e via só podem ser definidas por um médico após avaliação individual com exames.",
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="bg-creme py-20 sm:py-28">
      <div className="container-soft">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-widest text-dourado-dark">
              Perguntas frequentes
            </p>
            <h2 className="section-title mt-3">
              Dúvidas honestas, respostas diretas.
            </h2>
            <p className="lead mt-5">
              Reuni aqui as perguntas que mais escuto no consultório. Se a sua
              não estiver, me chama no WhatsApp.
            </p>
            <div className="mt-7 hidden lg:block">
              <CTAQuiz label="Fazer o quiz" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-bege rounded-2xl border border-bege bg-white">
              {faqs.map((f, i) => {
                const ativo = aberto === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setAberto(ativo ? null : i)}
                      className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-creme/40"
                    >
                      <span className="font-serif text-lg text-verde-dark">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className={`mt-1 flex-shrink-0 text-2xl text-dourado-dark transition-transform ${
                          ativo ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {ativo && (
                      <div className="px-6 pb-6 text-base leading-relaxed text-carvao/80">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 lg:hidden">
              <CTAQuiz label="Fazer o quiz" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
