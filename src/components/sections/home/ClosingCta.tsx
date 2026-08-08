import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { closingCta } from "@/content/home";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(50rem 26rem at 85% 110%, rgba(61,127,136,0.2), transparent)",
        }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-balance-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          {closingCta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {closingCta.copy}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={closingCta.primaryCta.href} tone="dark" variant="primary">
            {closingCta.primaryCta.label}
          </Button>
          <Button href={closingCta.secondaryCta.href} tone="dark" variant="secondary">
            {closingCta.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
