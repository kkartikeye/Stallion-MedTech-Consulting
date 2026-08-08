export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-accent-300" : "text-accent-700"
      } ${className}`}
    >
      {children}
    </p>
  );
}
