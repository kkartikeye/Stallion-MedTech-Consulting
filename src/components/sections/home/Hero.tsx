import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";
import { capabilityGroups, capabilitiesInGroup } from "@/content/capabilities";

/**
 * Typography-led hero. No stock photography — the credibility signal is the
 * clarity of the statement and the visible breadth of the capability set,
 * not an image of people in a meeting.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 32rem at 12% -10%, rgba(61,127,136,0.20), transparent), radial-gradient(42rem 26rem at 100% 0%, rgba(148,163,184,0.10), transparent)",
        }}
      />

      {/* Fine grid, echoing engineering drawing rather than decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow tone="dark" className="fade-up">
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="type-display fade-up fade-up-delay-1 mt-6 text-balance-pretty text-white">
            {hero.headline}
          </h1>
          <p className="type-lead fade-up fade-up-delay-2 mt-7 max-w-2xl text-ink-200">
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

        {/* Capability breadth, stated immediately rather than three sections down. */}
        <div className="fade-up fade-up-delay-3 mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div key={group.id}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-300">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {capabilitiesInGroup(group.id).map((capability) => (
                    <li key={capability.slug}>
                      <Link
                        href={`/capabilities/${capability.slug}`}
                        className="group inline-flex items-center gap-1.5 text-sm text-ink-300 transition-colors hover:text-white"
                      >
                        {capability.shortTitle}
                        <ArrowRight
                          className="cta-arrow h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
