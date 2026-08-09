import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  heading,
  copy,
  tone = "light",
  align = "left",
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  heading: ReactNode;
  copy?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <Eyebrow tone={tone} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Tag
        className={`type-h2 text-balance-pretty ${tone === "dark" ? "text-white" : "text-ink-950"}`}
      >
        {heading}
      </Tag>
      {copy ? (
        <p
          className={`type-lead mt-5 ${tone === "dark" ? "text-ink-200" : "text-ink-600"}`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
