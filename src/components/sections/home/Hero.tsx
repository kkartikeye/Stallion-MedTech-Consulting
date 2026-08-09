import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/visuals/Figure";
import { hero } from "@/content/home";

/**
 * Hero.
 *
 * Asymmetric: type occupies a narrow left column and the technical image
 * runs off the right edge of the viewport, cropped hard. The heading
 * overlaps the image on wide screens so the two are one composition rather
 * than a text block sitting politely beside a picture.
 *
 * No capability directory here any more — that was breadth stated as a
 * list, which is what made the old hero read as a template.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Image plate, bled off the right edge. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <div className="absolute inset-0">
          <Figure
            slot="homeHero"
            aspect="h-full"
            tone="dark"
            showCaption={false}
            priority
            fit="slice"
            sizes="46vw"
            className="h-full [&>div]:h-full"
          />
        </div>
        {/* Gradient tying the plate into the type field. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-ink-950 to-transparent"
        />
      </div>

      <Container className="relative pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-28 lg:pt-52">
        <div className="max-w-[38rem]">
          <p className="annotation fade-up text-accent-300">{hero.eyebrow}</p>

          <h1 className="type-display fade-up fade-up-delay-1 mt-7 text-balance-pretty text-white">
            {hero.headline}
          </h1>

          <p className="type-lead fade-up fade-up-delay-2 mt-7 max-w-xl text-ink-200">
            {hero.supporting}
          </p>

          <div className="fade-up fade-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} tone="dark" variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} tone="dark" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>

      {/* Narrow screens get the plate below the type rather than a squeezed
          side-by-side that serves neither. */}
      <div className="relative lg:hidden">
        <Figure
          slot="homeHero"
          aspect="aspect-16/10"
          tone="dark"
          showCaption={false}
          fit="slice"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
