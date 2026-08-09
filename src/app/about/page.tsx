import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { SectionIndex, PullQuote, TraceRule } from "@/components/ui/Editorial";
import { FounderProfile } from "@/components/sections/about/FounderProfile";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  aboutIntro,
  whyWeExist,
  founderStatement,
  operatingPhilosophy,
  aboutCta,
} from "@/content/about";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Stallion MedTech Consulting exists to take ownership of MedTech problems that cross functional boundaries — combining strategic judgment, technical fluency, and accountable delivery.",
  path: "/about",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={aboutIntro.eyebrow}
        heading={aboutIntro.heading}
        copy={aboutIntro.copy}
        crumbs={crumbs}
      />

      {/* Founder statement first — the brand is founder-led, so the page
          opens in a voice rather than in third-person firm copy. */}
      <section className="section-y bg-white">
        <Container>
          <div className="max-w-3xl">
            <PullQuote attribution={founderStatement.attribution}>
              {founderStatement.quote}
            </PullQuote>
            <div className="mt-10 max-w-2xl space-y-5">
              {founderStatement.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <TraceRule className="mt-16 max-w-3xl" />
        </Container>
      </section>

      {/* Why the firm exists */}
      <section className="section-y bg-sand-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionIndex index="01" label="Why Stallion exists" />
              <h2 className="type-h2 mt-5 text-balance-pretty text-ink-950">
                {whyWeExist.heading}
              </h2>
            </div>
            <div className="max-w-2xl space-y-5">
              {whyWeExist.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Operating philosophy — numbered principles on rules, not cards */}
      <section className="section-y bg-ink-950">
        <Container>
          <SectionIndex index="02" label="Operating philosophy" tone="dark" />
          <h2 className="type-h2 mt-5 max-w-xl text-balance-pretty text-white">
            {operatingPhilosophy.heading}
          </h2>

          <ol className="mt-14 border-t border-white/15">
            {operatingPhilosophy.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid gap-x-10 gap-y-2 border-b border-white/10 py-6 lg:grid-cols-[2.5rem_0.85fr_1.15fr]"
              >
                <span className="section-index text-accent-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-300">{principle.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FounderProfile />

      <CtaSection heading={aboutCta.heading} copy={aboutCta.copy} cta={aboutCta.cta} />
    </>
  );
}
