import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { capabilities, capabilityMap } from "@/content/capabilities";
import { lifecycleStages } from "@/content/lifecycle";
import { sectorMap } from "@/content/sectors";
import { insights } from "@/content/insights";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return capabilities.map((capability) => ({ slug: capability.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const capability = capabilityMap[slug];
  if (!capability) return {};

  return pageMetadata({
    title: capability.title,
    description: capability.metaDescription,
    path: `/capabilities/${capability.slug}`,
  });
}

export default async function CapabilityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const capability = capabilityMap[slug];
  if (!capability) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Capabilities", href: "/capabilities" },
    { label: capability.shortTitle, href: `/capabilities/${capability.slug}` },
  ];

  const related = capability.relatedCapabilities
    .map((relatedSlug) => capabilityMap[relatedSlug])
    .filter(Boolean);

  const relatedSectors = capability.relatedSectors
    .map((sectorSlug) => sectorMap[sectorSlug])
    .filter(Boolean);

  const relatedInsights = insights.filter(
    (insight) => insight.relatedCapability === capability.slug,
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: capability.title,
            description: capability.metaDescription,
            path: `/capabilities/${capability.slug}`,
          }),
        ]}
      />

      <PageIntro
        eyebrow={capability.title}
        heading={capability.heroHeadline}
        copy={capability.heroCopy}
        crumbs={crumbs}
      />

      {/* Challenges */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="type-h3 text-ink-950">Challenges we help address</h2>
            <ul className="space-y-px overflow-hidden rounded-card border border-ink-100 bg-ink-100">
              {capability.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 bg-white px-5 py-4 text-sm leading-relaxed text-ink-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="section-y bg-sand-50">
        <Container>
          <h2 className="type-h3 text-ink-950">What we do</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {capability.serviceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-card border border-ink-100 bg-white p-6 shadow-card"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-accent-700">
                  {area.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {capability.qualifierNote ? (
            <div className="mt-8 flex gap-3 rounded-card border border-ink-200 bg-white p-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-ink-600">{capability.qualifierNote}</p>
            </div>
          ) : null}
        </Container>
      </section>

      {/* Deliverables + lifecycle */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="type-h3 text-ink-950">Typical deliverables</h2>
              <ul className="mt-6 space-y-3">
                {capability.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex gap-3 border-b border-ink-100 pb-3 text-sm leading-relaxed text-ink-700 last:border-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                    />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="type-h3 text-ink-950">Where this fits in the lifecycle</h2>
              <ul className="mt-6 space-y-2">
                {lifecycleStages.map((stage) => {
                  const active = capability.lifecycleStages.includes(stage.id);
                  return (
                    <li
                      key={stage.id}
                      /* De-emphasis comes from the muted surface, not from
                         `opacity`, which would drag the text below the
                         contrast threshold along with the background. */
                      className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 ${
                        active ? "border-accent-200 bg-accent-50" : "border-ink-100 bg-sand-50"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${active ? "text-ink-950" : "text-ink-500"}`}
                      >
                        {stage.label}
                      </span>
                      <span
                        className={`text-xs ${active ? "text-accent-700" : "text-ink-500"}`}
                      >
                        {active ? "Common engagement point" : "Within a broader program"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Sectors */}
      {relatedSectors.length > 0 ? (
        <section className="section-y bg-sand-50">
          <Container>
            <h2 className="type-h3 text-ink-950">Relevant MedTech sectors</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {relatedSectors.map((sector) =>
                sector.hasPage ? (
                  <li key={sector.slug}>
                    <Link
                      href={`/medtech/${sector.slug}`}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-[border-color,color,transform] hover:border-accent-400 hover:text-ink-950 active:scale-[0.97]"
                    >
                      {sector.title}
                      <ArrowRight className="cta-arrow h-3 w-3 opacity-50" aria-hidden="true" />
                    </Link>
                  </li>
                ) : (
                  <li
                    key={sector.slug}
                    className="rounded-full border border-dashed border-ink-200 bg-white px-4 py-2 text-sm text-ink-500"
                  >
                    {sector.title}
                  </li>
                ),
              )}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Related capabilities */}
      {related.length > 0 ? (
        <section className="section-y bg-white">
          <Container>
            <h2 className="type-h3 text-ink-950">Related capabilities</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedCapability) => (
                <li key={relatedCapability.slug} className="h-full">
                  <CapabilityCard capability={relatedCapability} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Insights */}
      {relatedInsights.length > 0 ? (
        <section className="section-y bg-sand-50">
          <Container>
            <h2 className="type-h3 text-ink-950">Related insights</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedInsights.map((insight) => (
                <li key={insight.slug} className="h-full">
                  <InsightCard insight={insight} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaSection
        heading={`Working through something in ${capability.shortTitle.toLowerCase()}?`}
        copy="Describe the situation and we will help determine what the work actually requires and how to structure it."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "All capabilities", href: "/capabilities" }}
      />
    </>
  );
}
