import Image from "next/image";
import CTAQuiz from "./CTAQuiz";
import CTAWhatsApp from "./CTAWhatsApp";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-creme">
      <div className="absolute inset-0 bg-gradient-to-br from-creme via-creme to-bege/60" />

      <div className="container-soft relative z-10 pt-8 pb-16 sm:pt-10 sm:pb-24">
        <nav className="flex items-center justify-between">
          <Image
            src="/logos/logo-longo-verde.png"
            alt="Dr. Daniel Dorta"
            width={180}
            height={48}
            priority
            style={{ height: "auto" }}
            className="h-10 w-auto sm:h-12"
          />
          <a
            href="#quiz"
            className="hidden sm:inline text-sm font-medium text-verde hover:text-dourado-dark transition"
          >
            Fazer o quiz
          </a>
        </nav>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-verde/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-verde">
              Para mulheres na perimenopausa, climatério e menopausa
            </span>

            <h1 className="mt-5 font-serif text-hero text-verde-dark">
              Reposição hormonal{" "}
              <em className="text-dourado-dark not-italic font-serif italic">
                não causa câncer
              </em>{" "}
              de mama em mulheres saudáveis.
            </h1>

            <p className="lead mt-6 max-w-xl">
              Você provavelmente ouviu o contrário — de médicos, amigas, da sua
              mãe. Essa informação está desatualizada. A ciência hoje mostra
              que, para a mulher certa, no momento certo, a reposição hormonal
              é segura e transforma a qualidade de vida.
            </p>

            <p className="mt-4 max-w-xl text-base text-carvao/70">
              Em 2 minutos, descubra se você é uma boa candidata para conversar
              com um especialista sobre reposição.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAQuiz variant="primary" label="Fazer o quiz · 2 min" />
              <CTAWhatsApp
                variant="secondary"
                label="Falar no WhatsApp"
                source="hero"
              />
            </div>

            <p className="mt-5 text-xs text-carvao/60">
              Quiz gratuito, sem cadastro · Baseado em diretrizes atuais
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-dourado/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-creme shadow-2xl shadow-verde/20">
                <Image
                  src="/fotos/dr-dorta-1.jpg"
                  alt="Dr. Daniel Dorta"
                  width={520}
                  height={640}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="font-serif text-xl text-verde-dark">
                  Dr. Daniel Dorta
                </p>
                <p className="mt-1 text-sm text-carvao/70">
                  Médico · Pós-graduado em Endocrinologia
                </p>
                <p className="text-sm text-carvao/70">CRM 174209-SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
