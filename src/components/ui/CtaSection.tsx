import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * The single closing CTA used at the foot of every page. One component
 * keeps the last thing a visitor sees consistent across the site.
 */
export function CtaSection({
  eyebrow,
  heading,
  copy,
  cta,
  secondaryCta,
}: {
  eyebrow?: string;
  heading: string;
  copy: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(40rem 20rem at 50% 120%, rgba(61,127,136,0.22), transparent)",
        }}
      />
      <Container className="relative text-center">
        {eyebrow ? <Eyebrow tone="dark" className="mb-4">{eyebrow}</Eyebrow> : null}
        <h2 className="type-h2 mx-auto max-w-2xl text-balance-tight text-white">{heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
          {copy}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={cta.href} tone="dark" variant="primary">
            {cta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} tone="dark" variant="secondary">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
