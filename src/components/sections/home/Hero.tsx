import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExecutionPanel } from "./ExecutionPanel";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-40 sm:pb-24 sm:pt-44 lg:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 32rem at 15% -10%, rgba(61,127,136,0.18), transparent), radial-gradient(40rem 24rem at 100% 0%, rgba(148,163,184,0.12), transparent)",
        }}
      />

      <Container className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <Eyebrow tone="dark" className="fade-up">
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="fade-up fade-up-delay-1 mt-5 text-balance-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem] lg:leading-[1.05]">
            {hero.headline}
          </h1>
          <p className="fade-up fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
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

        <div className="fade-up fade-up-delay-2">
          <ExecutionPanel />
        </div>
      </Container>
    </section>
  );
}
