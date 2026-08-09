import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyStallion } from "@/content/home";
import { siteConfig } from "@/content/site";

export function WhyStallion() {
  return (
    <section className="section-y bg-sand-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={whyStallion.eyebrow}
              heading={whyStallion.heading}
              copy={whyStallion.copy}
            />
            <p className="type-editorial mt-10 max-w-md text-balance-pretty text-ink-800">
              {siteConfig.positioning}
            </p>
          </div>

          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {whyStallion.reasons.map((reason) => (
              <div key={reason.title}>
                <dt className="text-[0.975rem] font-semibold tracking-tight text-ink-950">
                  {reason.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-600">{reason.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
