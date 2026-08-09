import { Container } from "@/components/ui/Container";
import { SectionIndex, FigureLabel } from "@/components/ui/Editorial";
import {
  FunctionalIntersection,
  functionalIntersectionFunctions,
} from "@/components/visuals/FunctionalIntersection";
import { thesis } from "@/content/home";

/**
 * The thesis.
 *
 * One argument, stated at display size, with FIG. 01 carrying it. This is
 * the section that should be remembered, so it gets the most space and the
 * least UI — no cards, no icons, no buttons.
 */
export function Thesis() {
  return (
    <section className="section-y-lg bg-white">
      <Container>
        <SectionIndex index="01" label="The problem with functional org charts" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <h2 className="type-statement text-balance-pretty text-ink-950">{thesis.statement}</h2>

            <div className="mt-9 max-w-xl space-y-5">
              {thesis.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <figure className="m-0">
            <div className="text-ink-400">
              <FunctionalIntersection className="w-full" />
            </div>
            <figcaption className="mt-6 border-t border-ink-100 pt-4">
              <FigureLabel number="01" title="Where MedTech problems actually sit" />
              <p className="figure-caption mt-2 max-w-md text-ink-600">
                {functionalIntersectionFunctions.length} functions, every non-adjacent pair
                connected. The centre is not a function — it is where design transfer, field
                escalations, launch readiness, and remediation programs live.
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
