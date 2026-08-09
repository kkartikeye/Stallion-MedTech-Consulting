import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Problem } from "@/content/problems";
import { capabilityMap } from "@/content/capabilities";

/**
 * Routes a visitor from their own description of the situation to the
 * capability that handles it — the primary discovery path on the homepage.
 */
export function ProblemCard({ problem }: { problem: Problem }) {
  const capability = capabilityMap[problem.capabilitySlug];

  return (
    <Link
      href={`/capabilities/${problem.capabilitySlug}`}
      className="card-lift group flex h-full flex-col rounded-card border border-ink-100 bg-white p-6 shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[0.975rem] font-semibold leading-snug tracking-tight text-ink-950">
          &ldquo;{problem.statement}&rdquo;
        </p>
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-accent-600"
          aria-hidden="true"
        />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{problem.reading}</p>
      {capability ? (
        <span className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-accent-700">
          {capability.shortTitle}
        </span>
      ) : null}
    </Link>
  );
}
