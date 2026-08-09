import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
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

      {/* Honesty notice sits above the content, not buried beneath it. */}
      <section className="bg-white pt-12">
        <Container>
          <div className="flex gap-3 rounded-card border border-ink-200 bg-sand-50 p-5">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink-600">{workDisclaimer}</p>
          </div>
        </Container>
      </section>

      {/* Real case studies render here first once approved ones exist. */}
      {caseStudies.length > 0 ? (
        <section className="section-y bg-white">
          <Container>
            <h2 className="type-h3 text-ink-950">Client engagements</h2>
            <ul className="mt-8 space-y-4">
              {caseStudies.map((study) => (
                <li
                  key={study.slug}
                  className="rounded-card border border-ink-100 bg-white p-6 shadow-card"
                >
                  <h3 className="type-h3 text-ink-950">{study.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{study.anonymizedClient}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{study.situation}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="section-y bg-white">
        <Container>
          <ul className="space-y-6">
            {engagementArchetypes.map((archetype, index) => {
              const capability = capabilityMap[archetype.capabilitySlug];
              const model = engagementModels.find(
                (entry) => entry.id === archetype.engagementModelId,
              );

              return (
                <li
                  key={archetype.id}
                  className="overflow-hidden rounded-panel border border-ink-100 bg-white shadow-card"
                >
                  <div className="border-b border-ink-100 bg-sand-50 px-6 py-5 sm:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[0.7rem] font-semibold tabular-nums text-ink-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="type-h3 text-ink-950">{archetype.title}</h2>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {model ? (
                          <span className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600">
                            {model.title}
                          </span>
                        ) : null}
                        {capability ? (
                          <Link
                            href={`/capabilities/${capability.slug}`}
                            className="group inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 transition-colors hover:bg-accent-100"
                          >
                            {capability.shortTitle}
                            <ArrowRight className="cta-arrow h-3 w-3" aria-hidden="true" />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Situation
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-700">
                          {archetype.situation}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Why it is hard
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-700">
                          {archetype.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Stallion&rsquo;s role
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-700">
                          {archetype.stallionRole}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Functions involved
                        </h3>
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                          {archetype.functions.map((fn) => (
                            <li
                              key={fn}
                              className="rounded-full border border-ink-200 bg-sand-50 px-3 py-1 text-xs text-ink-600"
                            >
                              {fn}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Approach
                        </h3>
                        <ul className="mt-2.5 space-y-2.5">
                          {archetype.approach.map((step) => (
                            <li
                              key={step}
                              className="flex gap-3 text-sm leading-relaxed text-ink-700"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                              />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Deliverables
                        </h3>
                        <ul className="mt-2.5 space-y-2">
                          {archetype.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="border-b border-ink-100 pb-2 text-sm leading-relaxed text-ink-700 last:border-0"
                            >
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
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
