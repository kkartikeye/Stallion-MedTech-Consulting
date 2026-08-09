import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/Editorial";
import { insights, readingMinutes } from "@/content/insights";
import { insightsSection } from "@/content/home";

/**
 * Insights.
 *
 * Magazine layout: one lead piece set large with its opening line, and the
 * remainder as a numbered index beside it. Three equal cards is the pattern
 * every content site uses; a lead-plus-index is what a publication does.
 */
export function InsightsPreview() {
  const published = insights.filter((insight) => insight.status === "published");
  const pool = published.length > 0 ? published : insights;
  if (pool.length === 0) return null;

  const [lead, ...rest] = pool.slice(0, 4);
  const leadOpening = lead.body.find((block) => block.type === "paragraph");

  return (
    <section className="section-y bg-sand-50">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionIndex index={insightsSection.index} label={insightsSection.label} />
            <h2 className="type-h2 mt-5 max-w-lg text-balance-pretty text-ink-950">
              {insightsSection.heading}
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
          >
            All insights
            <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Lead */}
          <article>
            <Link href={`/insights/${lead.slug}`} className="group block">
              <p className="annotation-sm text-accent-700">
                {lead.category}
                {lead.status === "draft" ? (
                  <span className="ml-2 text-ink-500">· Draft</span>
                ) : null}
              </p>
              <h3 className="type-h3 mt-4 text-balance-pretty text-ink-950 transition-colors group-hover:text-accent-800">
                {lead.title}
              </h3>
              {leadOpening && leadOpening.type === "paragraph" ? (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600">
                  {leadOpening.text}
                </p>
              ) : null}
              <p className="annotation-sm mt-5 text-ink-500">
                {readingMinutes(lead)} min read
              </p>
            </Link>
          </article>

          {/* Index */}
          <ol className="border-t border-ink-200">
            {rest.map((insight, index) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group grid grid-cols-[2.25rem_1fr] gap-x-4 border-b border-ink-200 py-5 transition-colors hover:bg-white/70"
                >
                  <span className="section-index text-ink-500">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[0.975rem] font-semibold leading-snug tracking-tight text-ink-950 transition-colors group-hover:text-accent-800">
                      {insight.title}
                    </h3>
                    <p className="annotation-sm mt-2 text-ink-500">
                      {insight.category} · {readingMinutes(insight)} min
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
