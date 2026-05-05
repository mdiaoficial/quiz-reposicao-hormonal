export type ResultadoQuiz = "ALTA_PROBABILIDADE" | "BAIXA_PROBABILIDADE" | null;

const PHONE = "5511950610429";

export function whatsappUrl(resultado: ResultadoQuiz = null): string {
  const resultadoTexto =
    resultado === "ALTA_PROBABILIDADE"
      ? "ALTA PROBABILIDADE"
      : resultado === "BAIXA_PROBABILIDADE"
        ? "BAIXA PROBABILIDADE"
        : "ainda não fiz o quiz";

  const msg = `Oi, o resultado do meu quiz é ${resultadoTexto} e gostaria de realizar reposição hormonal`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}
