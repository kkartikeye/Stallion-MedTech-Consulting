import { notFound } from "next/navigation";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { sectorsWithPages, sectorMap, sectorDisclaimer } from "@/content/sectors";
import { capabilityMap } from "@/content/capabilities";
import { lifecycleStages } from "@/content/lifecycle";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return sectorsWithPages.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sector = sectorMap[slug];
  if (!sector?.hasPage) return {};

  return pageMetadata({
    title: sector.title,
    description: sector.metaDescription ?? sector.summary,
    path: `/medtech/${sector.slug}`,
  });
}

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sector = sectorMap[slug];
  if (!sector?.hasPage) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "MedTech Sectors", href: "/medtech" },
    { label: sector.shortTitle, href: `/medtech/${sector.slug}` },
  ];

  const relevant = (sector.relevantCapabilities ?? [])
    .map((capabilitySlug) => capabilityMap[capabilitySlug])
    .filter(Boolean);

  const emphasis = sector.lifecycleEmphasis ?? [];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={sector.title}
        heading={sector.heroHeadline ?? sector.title}
        copy={sector.heroCopy ?? sector.summary}
        crumbs={crumbs}
      />

      {/* What is changing */}
      {sector.shifts && sector.shifts.length > 0 ? (
        <section className="section-y bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <h2 className="type-h3 text-ink-950">What is changing</h2>
              <ul className="space-y-6">
                {sector.shifts.map((shift, index) => (
                  <li key={shift} className="flex gap-5">
                    <span className="text-sm font-semibold tabular-nums text-accent-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 border-b border-ink-100 pb-6 text-sm leading-relaxed text-ink-700 sm:text-base">
                      {shift}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Challenges */}
      {sector.challenges && sector.challenges.length > 0 ? (
        <section className="section-y bg-sand-50">
          <Container>
            <h2 className="type-h3 text-ink-950">Where companies typically need help</h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-card border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
              {sector.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 bg-white px-5 py-5 text-sm leading-relaxed text-ink-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Lifecycle emphasis */}
      {emphasis.length > 0 ? (
        <section className="section-y bg-white">
          <Container>
            <h2 className="type-h3 text-ink-950">Lifecycle stages most involved</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {lifecycleStages
                .filter((stage) => emphasis.includes(stage.id))
                .map((stage) => (
                  <li
                    key={stage.id}
                    className="rounded-card border border-accent-200 bg-accent-50 p-5"
                  >
                    <h3 className="text-sm font-semibold text-ink-950">{stage.label}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{stage.summary}</p>
                  </li>
                ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Capabilities */}
      {relevant.length > 0 ? (
        <section className="section-y bg-sand-50">
          <Container>
            <h2 className="type-h3 text-ink-950">Capabilities most relevant here</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relevant.map((capability) => (
                <li key={capability.slug} className="h-full">
                  <CapabilityCard capability={capability} />
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-3xl rounded-card border border-ink-100 bg-white p-5 text-sm leading-relaxed text-ink-600">
              {sectorDisclaimer}
            </p>
          </Container>
        </section>
      ) : null}

      <CtaSection
        heading={`Working in ${sector.shortTitle.toLowerCase()}?`}
        copy="Describe what you are working through and we will help determine which capabilities the situation actually calls for."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "All sectors", href: "/medtech" }}
      />
    </>
  );
}
