import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { SectionIndex } from "@/components/ui/Editorial";
import { CapabilityBody } from "@/components/sections/capability/CapabilityBody";
import { JsonLd } from "@/components/ui/JsonLd";
import { capabilities, capabilityMap } from "@/content/capabilities";
import { sectorMap } from "@/content/sectors";
import { insights, readingMinutes } from "@/content/insights";
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
    .map((s) => capabilityMap[s])
    .filter(Boolean);

  const relatedSectors = capability.relatedSectors.map((s) => sectorMap[s]).filter(Boolean);

  const relatedInsights = insights.filter((i) => i.relatedCapability === capability.slug);

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

      <CapabilityBody capability={capability} />

      {/* Cross-references, set as an editorial index rather than more cards. */}
      <section className="section-y-tight bg-sand-50">
        <Container>
          <SectionIndex index="—" label="Cross-references" />

          <div className="mt-8 grid gap-10 border-t border-ink-200 pt-8 md:grid-cols-3 md:gap-12">
            <div>
              <h2 className="annotation-sm text-ink-500">Related capabilities</h2>
              <ul className="mt-4 space-y-2">
                {related.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      href={`/capabilities/${entry.slug}`}
                      className="group inline-flex items-baseline gap-2 text-sm font-medium text-ink-800 transition-colors hover:text-accent-800"
                    >
                      {entry.shortTitle}
                      <ArrowRight
                        className="cta-arrow h-3 w-3 shrink-0 text-ink-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="annotation-sm text-ink-500">Relevant sectors</h2>
              <ul className="mt-4 space-y-2">
                {relatedSectors.map((sector) => (
                  <li key={sector.slug}>
                    {sector.hasPage ? (
                      <Link
                        href={`/medtech/${sector.slug}`}
                        className="group inline-flex items-baseline gap-2 text-sm font-medium text-ink-800 transition-colors hover:text-accent-800"
                      >
                        {sector.title}
                        <ArrowRight
                          className="cta-arrow h-3 w-3 shrink-0 text-ink-300"
                          aria-hidden="true"
                        />
                      </Link>
                    ) : (
                      <span className="text-sm text-ink-500">{sector.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="annotation-sm text-ink-500">Related insights</h2>
              {relatedInsights.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {relatedInsights.map((insight) => (
                    <li key={insight.slug}>
                      <Link
                        href={`/insights/${insight.slug}`}
                        className="group block text-sm font-medium leading-snug text-ink-800 transition-colors hover:text-accent-800"
                      >
                        {insight.title}
                        <span className="annotation-sm mt-1 block text-ink-500">
                          {readingMinutes(insight)} min
                          {insight.status === "draft" ? " · Draft" : ""}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-ink-500">None published for this capability yet.</p>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        heading={`Working through something in ${capability.shortTitle.toLowerCase()}?`}
        copy="Describe the situation and we will help determine what the work actually requires and how to structure it."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "All capabilities", href: "/capabilities" }}
      />
    </>
  );
}
