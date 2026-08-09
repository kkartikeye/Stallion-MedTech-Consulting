import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { readingMinutes, type Insight } from "@/content/insights";

function formatDate(iso: string): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function InsightCard({ insight }: { insight: Insight }) {
  const published = formatDate(insight.publishedAt);

  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="card-lift group flex h-full flex-col rounded-card border border-ink-100 bg-white p-6 shadow-card"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent-700">
          {insight.category}
        </span>
        {insight.status === "draft" ? (
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-amber-700">
            Draft
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-ink-950">
        {insight.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">{insight.summary}</p>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-ink-500">
        <span>{published ?? "Unpublished draft"}</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-accent-700">
          {readingMinutes(insight)} min read
          <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
