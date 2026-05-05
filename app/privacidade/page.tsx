import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade · Dr. Daniel Dorta",
  description:
    "Como tratamos seus dados ao usar o quiz e o site da Clínica Dorta.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <main className="bg-creme">
      <header className="bg-verde-dark py-10 text-creme">
        <div className="container-soft flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/logo-longo-creme.png"
              alt="Dr. Daniel Dorta"
              width={180}
              height={48}
              style={{ height: "auto" }}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-creme/80 hover:text-dourado transition"
          >
            ← Voltar à página inicial
          </Link>
        </div>
      </header>

      <article className="container-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-dourado-dark">
            Última atualização: 04/05/2026
          </p>
          <h1 className="mt-3 font-serif text-section text-verde-dark">
            Política de Privacidade
          </h1>

          <div className="prose-content mt-10 space-y-8 text-base leading-relaxed text-carvao/85">
            <Bloco titulo="1. Quem somos">
              <p>
                Esta política se aplica ao site do <strong>Dr. Daniel Dorta</strong> e
                à <strong>Clínica Dorta</strong>, localizada na Rua Mato Grosso,
                306 — Conjunto 1813, Higienópolis, São Paulo, SP. Para dúvidas
                sobre o tratamento dos seus dados, entre em contato pelo
                WhatsApp informado no site.
              </p>
            </Bloco>

            <Bloco titulo="2. Quais dados coletamos">
              <p>
                Esta página utiliza um <strong>quiz educativo</strong> sobre
                reposição hormonal. O quiz <strong>não exige cadastro</strong> e
                <strong>não armazena</strong> as respostas em nossos servidores
                — todas ficam apenas no seu navegador e desaparecem ao fechar
                a aba.
              </p>
              <p>
                Coletamos apenas dados técnicos relacionados à navegação:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Endereço IP e informações do dispositivo (modelo, navegador, sistema operacional)</li>
                <li>Páginas acessadas, tempo de permanência e cliques</li>
                <li>Origem do acesso (link de anúncio, busca orgânica, etc.)</li>
              </ul>
              <p className="mt-3">
                Esses dados são tratados de forma agregada e <strong>não permitem</strong> sua
                identificação pessoal direta.
              </p>
            </Bloco>

            <Bloco titulo="3. Cookies e tecnologias de mensuração">
              <p>
                Usamos cookies e ferramentas de mensuração apenas{" "}
                <strong>após o seu consentimento explícito</strong>, manifestado
                pelo botão <em>Aceitar</em> no banner que aparece na primeira
                visita. Caso você recuse, nenhuma ferramenta de rastreamento
                publicitário é ativada.
              </p>
              <p>
                As ferramentas utilizadas, mediante consentimento, incluem:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  <strong>Meta Pixel e Conversions API</strong> (Meta Platforms,
                  Inc.) — para mensurar a eficácia de campanhas no Facebook e
                  Instagram. Coleta IP, identificadores de navegador e eventos
                  de navegação.
                </li>
              </ul>
              <p className="mt-3">
                Você pode revogar o consentimento a qualquer momento limpando
                os dados do site nas configurações do seu navegador. A nova
                visita exibirá o banner novamente.
              </p>
            </Bloco>

            <Bloco titulo="4. Para que usamos os dados">
              <ul className="list-disc space-y-1.5 pl-6">
                <li>Entender o desempenho do site e melhorar a experiência</li>
                <li>Mensurar resultados de campanhas publicitárias</li>
                <li>Cumprir obrigações legais e regulatórias do CFM</li>
              </ul>
              <p className="mt-3">
                <strong>Não</strong> usamos os dados para diagnóstico clínico,
                tomada de decisão automatizada com efeitos médicos, ou venda a
                terceiros.
              </p>
            </Bloco>

            <Bloco titulo="5. Compartilhamento de dados">
              <p>
                Compartilhamos dados apenas com fornecedores que prestam
                serviços ao site, dentro dos limites estritamente necessários:
                hospedagem (Vercel Inc.) e mensuração publicitária (Meta
                Platforms, Inc.). Esses fornecedores estão sujeitos às próprias
                políticas de privacidade e a contratos de tratamento de dados
                conformes à LGPD.
              </p>
            </Bloco>

            <Bloco titulo="6. Seus direitos (LGPD)">
              <p>
                Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018),
                você tem direito a:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar, corrigir ou excluir seus dados</li>
                <li>Revogar consentimento</li>
                <li>Solicitar portabilidade ou anonimização</li>
                <li>Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD)</li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer direito, entre em contato pelo WhatsApp
                divulgado no site.
              </p>
            </Bloco>

            <Bloco titulo="7. Segurança e retenção">
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para
                proteger os dados coletados. Dados de mensuração são retidos
                pelo prazo padrão das plataformas (Meta: até 24 meses) e
                podem ser excluídos antes mediante solicitação.
              </p>
            </Bloco>

            <Bloco titulo="8. Aviso médico importante">
              <p>
                O quiz disponível neste site é uma{" "}
                <strong>ferramenta educativa</strong> baseada em diretrizes de
                sociedades médicas. Ele não substitui consulta, diagnóstico ou
                prescrição. A indicação de terapia de reposição hormonal só
                pode ser feita por médico após avaliação clínica individual.
              </p>
              <p className="mt-3 text-sm italic text-carvao/65">
                Dr. Daniel Dorta — CRM 174209-SP
              </p>
            </Bloco>

            <Bloco titulo="9. Atualizações">
              <p>
                Esta política pode ser atualizada periodicamente. A data da
                última atualização aparece no topo da página. Mudanças
                materiais serão sinalizadas no banner inicial do site.
              </p>
            </Bloco>
          </div>

          <div className="mt-12 border-t border-bege pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-medium text-verde hover:text-dourado-dark transition"
            >
              ← Voltar à página inicial
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

function Bloco({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-verde-dark">{titulo}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
