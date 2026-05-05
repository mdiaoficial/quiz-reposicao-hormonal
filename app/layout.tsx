import type { Metadata } from "next";
import "./globals.css";
import { ConsentProvider } from "@/components/ConsentProvider";
import ConsentBanner from "@/components/ConsentBanner";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Reposição Hormonal é Segura para Mim? — Quiz · Dr. Daniel Dorta",
  description:
    "Descubra em 2 minutos se você é uma boa candidata à reposição hormonal na menopausa. Quiz baseado em ciência atualizada. Dr. Daniel Dorta — CRM 174209-SP.",
  openGraph: {
    title: "Reposição Hormonal é Segura para Mim? — Quiz · Dr. Daniel Dorta",
    description:
      "Quiz baseado em ciência atualizada para mulheres na perimenopausa, climatério e menopausa.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ConsentProvider>
          <MetaPixel />
          {children}
          <ConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
