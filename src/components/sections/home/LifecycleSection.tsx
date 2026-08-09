import { Container } from "@/components/ui/Container";
import { SectionIndex, FigureLabel } from "@/components/ui/Editorial";
import { LifecycleExplorer } from "@/components/sections/LifecycleExplorer";
import { LifecycleCoverage } from "@/components/visuals/LifecycleCoverage";
import { lifecycleSection } from "@/content/home";

/**
 * Lifecycle. Graphical, not photographic — per the art direction, this is
 * where the site shows its own thinking rather than borrowed imagery.
 *
 * Two related views: the explorer answers "what happens at this stage",
 * FIG. 02 answers "where does Stallion engage across all of them".
 */
export function LifecycleSection() {
  return (
    <section className="section-y-lg bg-ink-950">
      <Container>
        <SectionIndex index={lifecycleSection.index} label={lifecycleSection.label} tone="dark" />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="type-h2 max-w-xl text-balance-pretty text-white">
            {lifecycleSection.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-300 lg:text-right">
            {lifecycleSection.copy}
          </p>
        </div>

        <div className="mt-12">
          <LifecycleExplorer />
        </div>

        <figure className="mt-20 border-t border-white/10 pt-14">
          <LifecycleCoverage />
          <figcaption className="mt-8">
            <FigureLabel number="02" title="Capability coverage across the lifecycle" tone="dark" />
            <p className="figure-caption mt-2 max-w-xl text-ink-300">
              A continuous band marks a common engagement point. Gaps are not exclusions — they are
              stages where that capability normally contributes inside a broader program.
            </p>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
