import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Capability } from "@/content/capabilities";

export function CapabilityCard({
  capability,
  compact = false,
}: {
  capability: Capability;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/capabilities/${capability.slug}`}
      className="card-lift group flex h-full flex-col rounded-card border border-ink-100 bg-white p-6 shadow-card"
    >
      <h3 className="text-base font-semibold tracking-tight text-ink-950">{capability.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">{capability.summary}</p>
      {!compact ? (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
          Explore
          <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
        </span>
      ) : null}
    </Link>
  );
}
