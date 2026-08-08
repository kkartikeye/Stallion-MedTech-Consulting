import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const toneStyles =
    tone === "dark"
      ? "border-white/10 bg-white/[0.04]"
      : "border-slate-200 bg-white shadow-card";

  return (
    <div className={`rounded-card border p-6 sm:p-7 ${toneStyles} ${className}`}>{children}</div>
  );
}
