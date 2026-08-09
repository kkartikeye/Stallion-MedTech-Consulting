import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Sector } from "@/content/sectors";

/**
 * Sectors without a dedicated page render as a non-interactive card rather
 * than a link to nowhere — the architecture supports promoting them later
 * without changing this component.
 */
export function SectorCard({ sector }: { sector: Sector }) {
  const inner = (
    <>
      <h3 className="text-base font-semibold tracking-tight text-ink-950">{sector.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">{sector.summary}</p>
      {sector.hasPage ? (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
          Explore
          <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
        </span>
      ) : (
        <span className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
          Supported area
        </span>
      )}
    </>
  );

  if (!sector.hasPage) {
    return (
      <div className="flex h-full flex-col rounded-card border border-dashed border-ink-200 bg-sand-50 p-6">
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={`/medtech/${sector.slug}`}
      className="card-lift group flex h-full flex-col rounded-card border border-ink-100 bg-white p-6 shadow-card"
    >
      {inner}
    </Link>
  );
}
