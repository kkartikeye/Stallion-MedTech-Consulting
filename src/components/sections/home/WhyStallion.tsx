import { Container } from "@/components/ui/Container";
import { SectionIndex, PullQuote } from "@/components/ui/Editorial";
import { whyStallion } from "@/content/home";
import { siteConfig } from "@/content/site";

/**
 * Why Stallion.
 *
 * A pull quote isolated with real whitespace, then the reasons as a plain
 * definition list on rules — no cards, no icons. The positioning line is
 * the only serif moment on the page besides the manufacturing break.
 */
export function WhyStallion() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionIndex index={whyStallion.index} label={whyStallion.label} />

        <div className="mt-12 max-w-3xl">
          <PullQuote>{siteConfig.positioning}</PullQuote>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-10 border-t border-ink-200 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {whyStallion.reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="text-[0.975rem] font-semibold tracking-tight text-ink-950">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{reason.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
