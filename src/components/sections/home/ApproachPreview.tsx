import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stages, engagementModels } from "@/content/how-we-work";

export function ApproachPreview() {
  return (
    <section className="section-y bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="HOW WE WORK"
              heading="Five stages, scaled to the work"
              copy="What changes between a two-week assessment and a multi-year program is depth, not structure."
            />
            <Link
              href="/how-we-work"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
            >
              See how we work
              <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <ol className="grid gap-px overflow-hidden rounded-card border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-5">
              {stages.map((stage) => (
                <li key={stage.id} className="bg-white p-5">
                  <span className="text-[0.7rem] font-semibold tabular-nums text-accent-700">
                    {stage.number}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold tracking-tight text-ink-950">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{stage.output}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Engagement models
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {engagementModels.map((model) => (
                  <li
                    key={model.id}
                    className="rounded-full border border-ink-200 bg-sand-50 px-3.5 py-1.5 text-xs font-medium text-ink-700"
                  >
                    {model.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
