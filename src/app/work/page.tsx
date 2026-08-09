import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { SectionIndex, MarginNote, TraceRule } from "@/components/ui/Editorial";
import { TechnicalPlate, type PlateVariant } from "@/components/visuals/TechnicalPlate";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  engagementArchetypes,
  caseStudies,
  workIntro,
  workDisclaimer,
  workCta,
} from "@/content/work";
import { capabilityMap } from "@/content/capabilities";
import { engagementModels } from "@/content/how-we-work";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Representative Work",
  description:
    "Illustrative MedTech engagement structures: design transfer programs, sustaining portfolios, program recovery, development operating models, cross-border execution, and quality remediation.",
  path: "/work",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Representative Work", href: "/work" },
];

/** A technical plate per archetype, matched to the kind of work. */
const ARCHETYPE_PLATE: Record<string, PlateVariant> = {
  "design-transfer-program": "fabrication",
  "sustaining-portfolio": "assembly",
  "program-recovery": "assembly",
  "operating-model": "electronics",
  "india-execution": "network",
  "quality-remediation": "electronics",
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={workIntro.eyebrow}
        heading={workIntro.heading}
        copy={workIntro.copy}
        crumbs={crumbs}
      />

      {/* Honesty notice, as a margin note rather than an alert box. */}
      <section className="bg-white pt-14">
        <Container>
          <div className="max-w-3xl">
            <MarginNote label="Note on this page">{workDisclaimer}</MarginNote>
          </div>
        </Container>
      </section>

      {caseStudies.length > 0 ? (
        <section className="section-y bg-white">
          <Container>
            <SectionIndex index="—" label="Client engagements" />
            <ul className="mt-8 space-y-8">
              {caseStudies.map((study) => (
                <li key={study.slug} className="border-t border-ink-200 pt-6">
                  <h2 className="type-h3 text-ink-950">{study.title}</h2>
                  <p className="annotation-sm mt-2 text-ink-500">{study.anonymizedClient}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">
                    {study.situation}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="section-y bg-white">
        <Container>
          {engagementArchetypes.map((archetype, index) => {
            const capability = capabilityMap[archetype.capabilitySlug];
            const model = engagementModels.find((m) => m.id === archetype.engagementModelId);
            const plate = ARCHETYPE_PLATE[archetype.id] ?? "assembly";
            // Alternate which side the plate falls on so the page has a
            // rhythm instead of six identical rows.
            const flip = index % 2 === 1;

            return (
              <article
                key={archetype.id}
                className="border-t border-ink-950/15 py-14 first:border-t-0 first:pt-0 lg:py-20"
              >
                {/* Title block */}
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-baseline">
                  <div>
                    <SectionIndex
                      index={String(index + 1).padStart(2, "0")}
                      label={model?.title ?? "Engagement"}
                    />
                    <h2 className="type-h2 mt-4 max-w-2xl text-balance-pretty text-ink-950">
                      {archetype.title}
                    </h2>
                  </div>
                  {capability ? (
                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
                    >
                      {capability.shortTitle}
                      <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>

                {/* Functions as a datum line under the title */}
                <p className="annotation-sm mt-6 leading-relaxed text-ink-500">
                  {archetype.functions.join("  ·  ")}
                </p>
                <TraceRule className="mt-3 max-w-md" />

                {/* Story */}
                <div
                  className={`mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-[1.15fr_0.85fr] ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="annotation-sm text-ink-500">Situation</h3>
                      <p className="mt-2.5 text-base leading-relaxed text-ink-700">
                        {archetype.situation}
                      </p>
                    </div>
                    <div>
                      <h3 className="annotation-sm text-ink-500">Why it resists</h3>
                      <p className="mt-2.5 text-base leading-relaxed text-ink-700">
                        {archetype.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="annotation-sm text-ink-500">Stallion&rsquo;s role</h3>
                      <p className="mt-2.5 text-base leading-relaxed text-ink-700">
                        {archetype.stallionRole}
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Technical plate keyed to the type of work */}
                    <div className="surface-drafting-light plate-marks relative mb-9 aspect-16/10 overflow-hidden text-ink-400">
                      <TechnicalPlate
                        variant={plate}
                        className="absolute inset-0 h-full w-full p-[8%]"
                      />
                    </div>

                    <h3 className="annotation-sm text-ink-500">Approach</h3>
                    <ol className="mt-3 border-t border-ink-200">
                      {archetype.approach.map((step, i) => (
                        <li
                          key={step}
                          className="grid grid-cols-[1.75rem_1fr] gap-x-3 border-b border-ink-200 py-3"
                        >
                          <span className="section-index text-ink-500">{i + 1}</span>
                          <span className="text-sm leading-relaxed text-ink-700">{step}</span>
                        </li>
                      ))}
                    </ol>

                    <h3 className="annotation-sm mt-8 text-ink-500">What the client holds</h3>
                    <ul className="mt-3 space-y-1.5">
                      {archetype.deliverables.map((deliverable) => (
                        <li key={deliverable} className="text-sm leading-relaxed text-ink-700">
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <CtaSection
        heading={workCta.heading}
        copy={workCta.copy}
        cta={workCta.cta}
        secondaryCta={{ label: "See how we work", href: "/how-we-work" }}
      />
    </>
  );
}
