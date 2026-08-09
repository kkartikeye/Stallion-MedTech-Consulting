import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaSection } from "@/components/ui/CtaSection";
import { InsightCard } from "@/components/cards/InsightCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { insights, getInsight, readingMinutes, insightsDraftNotice } from "@/content/insights";
import { capabilityMap } from "@/content/capabilities";
import { sectorMap } from "@/content/sectors";
import { pageMetadata } from "@/lib/page-metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};

  return pageMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/insights/${insight.slug}`,
    // Drafts are readable by anyone with the link but never indexed.
    noIndex: insight.status === "draft",
  });
}

function formatDate(iso: string): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: insight.title, href: `/insights/${insight.slug}` },
  ];

  const capability = insight.relatedCapability
    ? capabilityMap[insight.relatedCapability]
    : undefined;
  const sector = insight.relatedSector ? sectorMap[insight.relatedSector] : undefined;
  const published = formatDate(insight.publishedAt);

  const related = insights
    .filter((entry) => entry.slug !== insight.slug && entry.category === insight.category)
    .concat(insights.filter((entry) => entry.slug !== insight.slug))
    .filter((entry, index, all) => all.findIndex((e) => e.slug === entry.slug) === index)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: insight.title,
            description: insight.summary,
            path: `/insights/${insight.slug}`,
            author: insight.author,
            publishedAt: insight.publishedAt,
          }),
        ]}
      />

      <article>
        <header className="relative overflow-hidden bg-ink-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(55rem 28rem at 12% -20%, rgba(61,127,136,0.20), transparent)",
            }}
          />
          <Container className="relative">
            <Breadcrumbs crumbs={crumbs} className="mb-7" />
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent-500/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent-200">
                  {insight.category}
                </span>
                {insight.status === "draft" ? (
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-amber-200">
                    Draft
                  </span>
                ) : null}
              </div>

              <h1 className="type-h1 mt-6 text-balance-pretty text-white">{insight.title}</h1>
              <p className="type-lead mt-6 text-ink-200">{insight.summary}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-300">
                <span>{insight.author}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-500" />
                <span>{published ?? "Unpublished draft"}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-500" />
                <span>{readingMinutes(insight)} min read</span>
              </div>
            </div>
          </Container>
        </header>

        <div className="section-y bg-white">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.6fr_0.65fr] lg:gap-16">
              <div>
                {insight.status === "draft" ? (
                  <div className="mb-10 flex gap-3 rounded-card border border-amber-200 bg-amber-50 p-5">
                    <FileText
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed text-amber-900">
                      {insightsDraftNotice}
                    </p>
                  </div>
                ) : null}

                <div className="prose-article max-w-2xl">
                  {insight.body.map((block, index) => {
                    if (block.type === "heading") {
                      return <h2 key={index}>{block.text}</h2>;
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={index}>
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={index}>{block.text}</p>;
                  })}
                </div>
              </div>

              {/* Sticky context rail */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-card border border-ink-100 bg-sand-50 p-6">
                  <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Related
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {capability ? (
                      <li>
                        <Link
                          href={`/capabilities/${capability.slug}`}
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
                        >
                          {capability.shortTitle}
                          <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ) : null}
                    {sector?.hasPage ? (
                      <li>
                        <Link
                          href={`/medtech/${sector.slug}`}
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
                        >
                          {sector.shortTitle}
                          <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ) : null}
                  </ul>

                  <div className="mt-6 border-t border-ink-200 pt-5">
                    <p className="text-sm leading-relaxed text-ink-600">
                      Working through something similar?
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors hover:text-accent-700"
                    >
                      Start a conversation
                      <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="section-y bg-sand-50">
          <Container>
            <h2 className="type-h3 text-ink-950">More insights</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((entry) => (
                <li key={entry.slug} className="h-full">
                  <InsightCard insight={entry} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaSection
        heading="What are you working through?"
        copy="If this describes a problem you are dealing with, the specifics are what matter. Tell us about them."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />
    </>
  );
}
