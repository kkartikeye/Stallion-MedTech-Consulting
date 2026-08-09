import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/Editorial";
import { engagementArchetypes } from "@/content/work";
import { capabilityMap } from "@/content/capabilities";
import { workSection } from "@/content/home";

/**
 * Representative work preview.
 *
 * Three engagement structures as short project stories — title, the
 * functions involved as a datum line, and the situation. Deliberately not
 * cards with equal heights: the functions row is the interesting part and
 * it gets the annotation treatment.
 */
export function WorkPreview() {
  const featured = engagementArchetypes.slice(0, 3);

  return (
    <section className="section-y bg-white">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionIndex index={workSection.index} label={workSection.label} />
            <h2 className="type-h2 mt-5 max-w-lg text-balance-pretty text-ink-950">
              {workSection.heading}
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
          >
            All engagement structures
            <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-600">{workSection.copy}</p>

        <ol className="mt-12 grid gap-px bg-ink-200 md:grid-cols-3">
          {featured.map((archetype, index) => {
            const capability = capabilityMap[archetype.capabilitySlug];
            return (
              <li key={archetype.id} className="bg-white">
                <Link href="/work" className="group flex h-full flex-col p-6 transition-colors hover:bg-sand-50">
                  <span className="section-index text-ink-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink-950">
                    {archetype.title}
                  </h3>
                  <p className="annotation-sm mt-3 leading-relaxed text-ink-500">
                    {archetype.functions.join(" · ")}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                    {archetype.situation}
                  </p>
                  {capability ? (
                    <span className="annotation-sm mt-5 text-accent-700">
                      → {capability.shortTitle}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
