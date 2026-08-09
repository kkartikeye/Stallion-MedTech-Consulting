import type { ReactNode } from "react";

/**
 * Editorial apparatus.
 *
 * Small typographic devices borrowed from technical documents — section
 * indices, figure numbers, datum labels, rules — used instead of the
 * floating rounded badges and icon chips that make a page read as
 * assembled from a component library.
 */

/**
 * Section index, e.g. "03 / Problems we solve". Replaces the eyebrow chip.
 * The number is what carries the sense of an authored, ordered document.
 */
export function SectionIndex({
  index,
  label,
  tone = "light",
  className = "",
}: {
  index: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`section-index flex items-center gap-2.5 ${
        tone === "dark" ? "text-ink-300" : "text-ink-500"
      } ${className}`}
    >
      <span className={tone === "dark" ? "text-accent-300" : "text-accent-700"}>{index}</span>
      <span aria-hidden="true" className={tone === "dark" ? "text-ink-600" : "text-ink-300"}>
        /
      </span>
      <span className="uppercase">{label}</span>
    </p>
  );
}

/**
 * Figure label, e.g. "FIG. 02 — MEDTECH PRODUCT LIFECYCLE".
 * Rendered as the caption of a <figure>, not as decoration.
 */
export function FigureLabel({
  number,
  title,
  tone = "light",
  className = "",
}: {
  number: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={`annotation ${tone === "dark" ? "text-ink-300" : "text-ink-500"} ${className}`}
    >
      <span className={tone === "dark" ? "text-accent-300" : "text-accent-700"}>FIG. {number}</span>
      <span aria-hidden="true" className="mx-2 opacity-50">
        —
      </span>
      {title}
    </span>
  );
}

/**
 * The trace rule: a divider derived from the geometry of the Stallion mark
 * rather than a generic hairline.
 */
export function TraceRule({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`rule-trace ${tone === "dark" ? "rule-trace-dark" : ""} ${className}`}
    />
  );
}

/**
 * A short marginal note — a definition, cross-reference, or observation
 * set beside the main column, as in a technical report.
 */
export function MarginNote({
  label,
  children,
  tone = "light",
}: {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <aside
      className={`border-l pl-4 ${
        tone === "dark" ? "border-ink-700 text-ink-300" : "border-ink-200 text-ink-600"
      }`}
    >
      <p
        className={`annotation-sm ${tone === "dark" ? "text-ink-400" : "text-ink-500"}`}
      >
        {label}
      </p>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </aside>
  );
}

/**
 * Editorial pull quote. Serif, oversized, given real whitespace — one or
 * two per page at most.
 */
export function PullQuote({
  children,
  attribution,
  tone = "light",
}: {
  children: string;
  attribution?: string;
  tone?: "light" | "dark";
}) {
  return (
    <figure className="m-0">
      <blockquote
        className={`type-editorial text-balance-pretty ${
          tone === "dark" ? "text-white" : "text-ink-900"
        }`}
      >
        {children}
      </blockquote>
      {attribution ? (
        <figcaption
          className={`annotation mt-5 ${tone === "dark" ? "text-ink-400" : "text-ink-500"}`}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
