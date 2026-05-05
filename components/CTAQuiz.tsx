type Props = {
  variant?: "primary" | "gold";
  label?: string;
  className?: string;
};

export default function CTAQuiz({
  variant = "primary",
  label = "Fazer o quiz agora",
  className = "",
}: Props) {
  const cls = variant === "gold" ? "btn-gold" : "btn-primary";
  return (
    <a href="#quiz" className={`${cls} ${className}`}>
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
