import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { MarginNote } from "@/components/ui/Editorial";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  insights,
  publishedInsights,
  insightsIntro,
  insightsDraftNotice,
  readingMinutes,
} from "@/content/insights";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

/**
 * Insights index, set as a publication contents page: numbered entries on
 * rules with category and reading time as marginal data. Three-across cards
 * is what every content site does; this is what a journal does.
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

export default function InsightsPage() {
  const hasPublished = publishedInsights.length > 0;
  const listed = hasPublished ? publishedInsights : insights;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={insightsIntro.eyebrow}
        heading={insightsIntro.heading}
        copy={insightsIntro.copy}
        crumbs={crumbs}
      />

      <section className="section-y bg-white">
        <Container>
          {!hasPublished ? (
            <div className="mb-14 max-w-2xl">
              <MarginNote label="Editorial status">{insightsDraftNotice}</MarginNote>
            </div>
          ) : null}

          <ol className="border-t border-ink-950/15">
            {listed.map((insight, index) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group grid gap-x-10 gap-y-3 border-b border-ink-200 py-7 transition-colors hover:bg-sand-50 lg:grid-cols-[2.5rem_1.25fr_0.75fr] lg:py-8"
                >
                  <span className="section-index text-ink-500 transition-colors group-hover:text-accent-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="type-h3 text-balance-pretty text-ink-950 transition-colors group-hover:text-accent-800">
                      {insight.title}
                    </h2>
                    <p className="annotation-sm mt-3 text-ink-500">
                      {insight.category}
                      <span aria-hidden="true" className="mx-2 opacity-50">
                        ·
                      </span>
                      {readingMinutes(insight)} min
                      {insight.status === "draft" ? (
                        <>
                          <span aria-hidden="true" className="mx-2 opacity-50">
                            ·
                          </span>
                          <span className="text-amber-700">Draft</span>
                        </>
                      ) : null}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-600">{insight.summary}</p>
                </Link>
              </li>
            ))}
          </ol>
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
