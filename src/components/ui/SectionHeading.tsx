import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  heading,
  copy,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  heading: ReactNode;
  copy?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`text-balance-pretty text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] ${
          tone === "dark" ? "text-white" : "text-slate-950"
        }`}
      >
        {heading}
      </h2>
      {copy ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
