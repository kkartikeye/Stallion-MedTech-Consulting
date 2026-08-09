export function Eyebrow({
  children,
  tone = "light",
  className = "",
  as: Tag = "p",
}: {
  children: string;
  tone?: "light" | "dark";
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag
      className={`type-eyebrow ${tone === "dark" ? "text-accent-300" : "text-accent-700"} ${className}`}
    >
      {children}
    </Tag>
  );
}
