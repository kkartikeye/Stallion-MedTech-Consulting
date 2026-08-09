import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InsightCard } from "@/components/cards/InsightCard";
import { insights, insightsIntro } from "@/content/insights";

/**
 * Shows the three most recent published pieces, falling back to drafts
 * while nothing is published yet. Draft cards are visibly labelled, so the
 * section is honest about its own state rather than implying a live blog.
 */
export function InsightsPreview() {
  const published = insights.filter((insight) => insight.status === "published");
  const featured = (published.length > 0 ? published : insights).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="section-y bg-sand-50">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={insightsIntro.eyebrow}
            heading={insightsIntro.heading}
            copy={insightsIntro.copy}
          />
          <Link
            href="/insights"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
          >
            All insights
            <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((insight) => (
            <li key={insight.slug} className="h-full">
              <InsightCard insight={insight} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
