import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  howWeWorkIntro,
  stages,
  engagementModels,
  engagementModelsIntro,
  operatingModel,
  howWeWorkCta,
} from "@/content/how-we-work";
import { specialistNote } from "@/content/site";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "A five-stage engagement model — Understand, Align, Build, Deliver, Transfer — and nine engagement models ranging from advisory through integrated project teams and global execution.",
  path: "/how-we-work",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "How We Work", href: "/how-we-work" },
];

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={howWeWorkIntro.eyebrow}
        heading={howWeWorkIntro.heading}
        copy={howWeWorkIntro.copy}
        crumbs={crumbs}
      />

      {/* Stages */}
      <section className="section-y bg-white">
        <Container>
          <ol className="space-y-px overflow-hidden rounded-panel border border-ink-100 bg-ink-100">
            {stages.map((stage) => (
              <li key={stage.id} className="bg-white p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
                  <div>
                    <span className="text-sm font-semibold tabular-nums text-accent-700">
                      {stage.number}
                    </span>
                    <h2 className="type-h3 mt-2 text-ink-950">{stage.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{stage.summary}</p>
                  </div>

                  <div>
                    <ul className="space-y-2.5">
                      {stage.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex gap-3 text-sm leading-relaxed text-ink-700"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                          />
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-xl bg-sand-50 px-4 py-3 text-sm leading-relaxed text-ink-600">
                      <span className="font-semibold text-ink-800">You end up with: </span>
                      {stage.output}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Engagement models */}
      <section id="engagement-models" className="section-y bg-sand-50 scroll-mt-28">
        <Container>
          <SectionHeading
            eyebrow={engagementModelsIntro.eyebrow}
            heading={engagementModelsIntro.heading}
            copy={engagementModelsIntro.copy}
          />

          {/* Engagement models as a specification table on rules — nine
              equal cards read as a component-library demo. */}
          <dl className="mt-12 border-t border-ink-200">
            {engagementModels.map((model, index) => (
              <div
                key={model.id}
                className="grid gap-x-10 gap-y-2 border-b border-ink-200 py-6 lg:grid-cols-[2.5rem_0.7fr_1.3fr]"
              >
                <dt className="section-index text-ink-500">
                  <span className="sr-only">Model number </span>
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="text-base font-semibold tracking-tight text-ink-950">
                  {model.title}
                  <span className="annotation-sm mt-2 block font-normal text-ink-500">
                    {model.bestFor}
                  </span>
                </dd>
                <dd className="text-sm leading-relaxed text-ink-600">{model.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Operating model */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading
              eyebrow={operatingModel.eyebrow}
              heading={operatingModel.heading}
              copy={operatingModel.copy}
            />

            <dl className="grid gap-8 sm:grid-cols-2">
              {operatingModel.points.map((point) => (
                <div key={point.title}>
                  <dt className="text-[0.975rem] font-semibold tracking-tight text-ink-950">
                    {point.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-600">{point.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-12 max-w-3xl rounded-card border border-ink-100 bg-sand-50 p-5 text-sm leading-relaxed text-ink-600">
            {specialistNote}
          </p>
        </Container>
      </section>

      <CtaSection
        heading={howWeWorkCta.heading}
        copy={howWeWorkCta.copy}
        cta={howWeWorkCta.cta}
        secondaryCta={{ label: "See representative work", href: "/work" }}
      />
    </>
  );
}
