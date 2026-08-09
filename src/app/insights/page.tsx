import { FileText } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { InsightCard } from "@/components/cards/InsightCard";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  insights,
  publishedInsights,
  draftInsights,
  insightsIntro,
  insightsDraftNotice,
} from "@/content/insights";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

/**
 * The index is indexable, but is marked noIndex while nothing is published
 * — an index of drafts is not a page worth surfacing in search.
 */
export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Practical perspective on MedTech product development, design transfer, sustaining engineering, software in device quality systems, and cross-border execution.",
  path: "/insights",
  noIndex: publishedInsights.length === 0,
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights" },
];

/** Categories actually in use, so the filter row never shows empty buckets. */
const activeCategories = Array.from(new Set(insights.map((insight) => insight.category)));

export default function InsightsPage() {
  const hasPublished = publishedInsights.length > 0;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={insightsIntro.eyebrow}
        heading={insightsIntro.heading}
        copy={insightsIntro.copy}
        crumbs={crumbs}
      >
        <ul className="flex flex-wrap gap-2">
          {activeCategories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-ink-200"
            >
              {category}
            </li>
          ))}
        </ul>
      </PageIntro>

      {!hasPublished ? (
        <section className="bg-white pt-12">
          <Container>
            <div className="flex gap-3 rounded-card border border-amber-200 bg-amber-50 p-5">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-amber-900">{insightsDraftNotice}</p>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-y bg-white">
        <Container>
          {hasPublished ? (
            <>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {publishedInsights.map((insight) => (
                  <li key={insight.slug} className="h-full">
                    <InsightCard insight={insight} />
                  </li>
                ))}
              </ul>

              {draftInsights.length > 0 ? (
                <div className="mt-16">
                  <h2 className="type-h3 text-ink-950">Drafts pending review</h2>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {draftInsights.map((insight) => (
                      <li key={insight.slug} className="h-full">
                        <InsightCard insight={insight} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight) => (
                <li key={insight.slug} className="h-full">
                  <InsightCard insight={insight} />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <CtaSection
        heading="Have a harder version of one of these?"
        copy="These pieces describe patterns. The specifics of your situation are what determine the right response."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore capabilities", href: "/capabilities" }}
      />
    </>
  );
}
