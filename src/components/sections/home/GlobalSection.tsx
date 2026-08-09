import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex, FigureLabel } from "@/components/ui/Editorial";
import { GlobalExecution } from "@/components/visuals/GlobalExecution";
import { Figure } from "@/components/visuals/Figure";
import { globalSection } from "@/content/home";

/**
 * Global & India execution.
 *
 * Narrow text column beside a wide figure — deliberately different
 * proportions from every other section. The industrial image sits below at
 * full width with its own caption, so geography is communicated through
 * manufacturing context rather than a skyline.
 */
export function GlobalSection() {
  return (
    <section className="section-y bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div>
            <SectionIndex index={globalSection.index} label={globalSection.label} />
            <h2 className="type-h2 mt-5 text-balance-pretty text-ink-950">
              {globalSection.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-600">{globalSection.copy}</p>
            <Link
              href={globalSection.cta.href}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
            >
              {globalSection.cta.label}
              <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <figure className="m-0">
            <GlobalExecution />
            <figcaption className="mt-6 border-t border-ink-100 pt-4">
              <FigureLabel number="04" title="Cross-border operating model" />
            </figcaption>
          </figure>
        </div>
      </Container>

      <div className="mt-16">
        <Container>
          <Figure slot="homeIndia" aspect="aspect-21/9" tone="dark" captionTone="light" sizes="100vw" />
        </Container>
      </div>
    </section>
  );
}
