import Link from "next/link";
import { siteConfig } from "@/content/site";

/**
 * Centralized logo handling. No approved Stallion mark asset exists yet, so
 * this renders a text wordmark with a small geometric accent. Once an
 * approved SVG is supplied, replace <Mark /> with it — the header and
 * footer never need to change.
 */
function Mark({ tone }: { tone: "light" | "dark" }) {
  const stroke = tone === "dark" ? "#ffffff" : "#0a0f1a";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 18L9 6L13 14L16 8L21 18"
        stroke={stroke}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-lg transition-transform duration-150 active:scale-[0.97]"
      aria-label={`${siteConfig.name} — home`}
    >
      <Mark tone={tone} />
      <span
        className={`text-[0.95rem] font-semibold leading-tight tracking-tight ${
          tone === "dark" ? "text-white" : "text-ink-950"
        }`}
      >
        {siteConfig.wordmarkLine1}
        <span className="font-normal opacity-75"> {siteConfig.wordmarkLine2}</span>
      </span>
    </Link>
  );
}
