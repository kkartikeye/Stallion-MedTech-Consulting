import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

/**
 * Wayfinding matters most when someone is lost, so this offers the real
 * entry points rather than a dead end with a back button.
 */
const destinations = [
  { label: "Capabilities", href: "/capabilities", detail: "What we help companies do" },
  { label: "MedTech Sectors", href: "/medtech", detail: "Where those capabilities apply" },
  { label: "How We Work", href: "/how-we-work", detail: "Our engagement model" },
  { label: "Insights", href: "/insights", detail: "Notes on MedTech execution" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-24 pt-40 sm:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(50rem 26rem at 20% -10%, rgba(61,127,136,0.20), transparent)",
        }}
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">404</Eyebrow>
          <h1 className="type-h1 mt-5 text-balance-pretty text-white">
            That page doesn&rsquo;t exist.
          </h1>
          <p className="type-lead mt-6 text-ink-200">
            The link may be out of date. Here is where most people are heading.
          </p>
          <div className="mt-8">
            <Button href="/" tone="dark" variant="primary">
              Back to home
            </Button>
          </div>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="group block h-full bg-ink-950 p-6 transition-colors hover:bg-ink-900"
              >
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {destination.label}
                  <ArrowRight className="cta-arrow h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                </span>
                <span className="mt-1.5 block text-xs leading-relaxed text-ink-300">
                  {destination.detail}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
