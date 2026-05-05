import Image from "next/image";
import CTAWhatsApp from "./CTAWhatsApp";

export default function SobreDoutor() {
  return (
    <section className="bg-verde-dark py-20 text-creme sm:py-28">
      <div className="container-soft">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-dourado/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-creme/20 shadow-2xl">
                <Image
                  src="/fotos/dr-dorta-2.jpg"
                  alt="Dr. Daniel Dorta"
                  width={460}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-widest text-dourado">
              Quem vai te receber
            </p>
            <h2 className="mt-3 font-serif text-section text-creme">
              Dr. Daniel Dorta
            </h2>
            <p className="mt-2 text-base text-creme/70">
              Médico · Pós-graduado em Endocrinologia · CRM 174209-SP
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-creme/85">
              <p>
                Atendimento guiado pela humildade, empatia e dignidade,
                colocando o bem-estar da paciente no centro. A excelência
                clínica é construída com protocolos bem fundamentados,
                atualização constante e ética.
              </p>
              <p>
                A proposta é oferecer jornadas de saúde únicas e seguras,
                unindo ciência de ponta a um cuidado humano e acolhedor que
                prioriza a qualidade de vida duradoura de cada paciente.
              </p>
            </div>

            <div className="mt-8">
              <CTAWhatsApp
                variant="gold"
                label="Conversar no WhatsApp"
                source="sobre_doutor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
