import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/Editorial";
import { Figure } from "@/components/visuals/Figure";
import { manufacturingBreak } from "@/content/home";

/**
 * The photographic break.
 *
 * Full-bleed, dark, and almost no UI: one statement, one paragraph, one
 * link. Its job is pacing — after the dense problems list the page needs a
 * moment where the image carries the meaning and the reader stops scanning.
 */
export function ManufacturingBreak() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <Figure
        slot="homeManufacturing"
        aspect="aspect-4/5 sm:aspect-21/9"
        tone="dark"
        showCaption={false}
        fit="slice"
        sizes="100vw"
        className="absolute inset-0 [&>div]:h-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/40 sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/80 sm:to-transparent"
      />

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <SectionIndex
            index={manufacturingBreak.index}
            label={manufacturingBreak.label}
            tone="dark"
          />
          <p className="type-editorial mt-7 text-balance-pretty text-white">
            {manufacturingBreak.statement}
          </p>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-200">
            {manufacturingBreak.copy}
          </p>
          <Link
            href={manufacturingBreak.cta.href}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent-300"
          >
            {manufacturingBreak.cta.label}
            <ArrowRight className="cta-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
