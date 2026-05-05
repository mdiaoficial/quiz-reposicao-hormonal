import Hero from "@/components/Hero";
import Mito from "@/components/Mito";
import Ciencia from "@/components/Ciencia";
import Beneficios from "@/components/Beneficios";
import QuandoNao from "@/components/QuandoNao";
import Quiz from "@/components/Quiz";
import SobreDoutor from "@/components/SobreDoutor";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mito />
      <Ciencia />
      <Beneficios />
      <QuandoNao />
      <Quiz />
      <SobreDoutor />
      <FAQ />
      <Footer />
    </main>
  );
}
