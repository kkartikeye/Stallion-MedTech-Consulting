import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex, FigureLabel } from "@/components/ui/Editorial";
import { StrategySpectrum } from "@/components/visuals/StrategySpectrum";
import { stages } from "@/content/how-we-work";
import { approachSection } from "@/content/home";

/**
 * How we work.
 *
 * Compact and tight — this is a summary, and the detail lives on
 * /how-we-work. FIG. 03 does the arguing: engagement models plotted as
 * spans across one axis, which shows "advise or execute" far faster than a
 * paragraph claiming both.
 */
export function ApproachPreview() {
  return (
    <section className="section-y bg-sand-50">
      <Container>
        <SectionIndex index={approachSection.index} label={approachSection.label} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="type-h2 max-w-xl text-balance-pretty text-ink-950">
            {approachSection.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-600 lg:text-right">
            {approachSection.copy}
          </p>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Five stages as a numbered list, not five cards. */}
          <ol className="border-t border-ink-200">
            {stages.map((stage) => (
              <li
                key={stage.id}
                className="grid grid-cols-[2.25rem_1fr] gap-x-4 border-b border-ink-200 py-4"
              >
                <span className="section-index text-accent-700">{stage.number}</span>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-ink-950">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600">{stage.output}</p>
                </div>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/how-we-work"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
              >
                See how we work
                <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
          </ol>

          <figure className="m-0">
            <StrategySpectrum />
            <figcaption className="mt-8 border-t border-ink-200 pt-4">
              <FigureLabel number="03" title="Engagement models across the advise–execute span" />
              <p className="figure-caption mt-2 max-w-lg text-ink-600">
                Stallion is not fixed at one end. An advisory engagement occupies a narrow span; a
                transformation program runs the full width.
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
