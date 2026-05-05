import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-verde-dark py-14 text-creme/80">
      <div className="container-soft">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logos/logo-longo-creme.png"
              alt="Dr. Daniel Dorta"
              width={200}
              height={56}
              style={{ height: "auto" }}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-creme/70">
              Cuidado guiado por humildade, empatia e dignidade. Excelência
              clínica com protocolos fundamentados, ética e atualização
              constante.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-serif text-base text-dourado">Clínica Dorta</h4>
            <p className="mt-3 text-sm leading-relaxed text-creme/75">
              Rua Mato Grosso, 306 — Conjunto 1813
              <br />
              Higienópolis — São Paulo, SP
            </p>
            <p className="mt-3 text-sm text-creme/75">
              Dr. Daniel Dorta — CRM 174209-SP
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-base text-dourado">Navegar</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#quiz" className="text-creme/75 hover:text-dourado transition">
                  Fazer o quiz
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511950610429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-creme/75 hover:text-dourado transition"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-creme/15 pt-6">
          <p className="text-xs leading-relaxed text-creme/55">
            <strong className="text-creme/80">Aviso médico:</strong> Este
            quiz é uma ferramenta educativa baseada em diretrizes atuais de
            sociedades médicas. Não substitui consulta, diagnóstico ou
            prescrição. A indicação de terapia de reposição hormonal só pode
            ser feita por médico após avaliação clínica individual.
          </p>
          <p className="mt-4 text-xs text-creme/40">
            © {new Date().getFullYear()} Clínica Dorta. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
