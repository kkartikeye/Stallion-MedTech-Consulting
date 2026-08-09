import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/ui/CtaSection";
import { FounderProfile } from "@/components/sections/about/FounderProfile";
import { JsonLd } from "@/components/ui/JsonLd";
import { aboutIntro, whyWeExist, operatingPhilosophy, aboutCta } from "@/content/about";
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

      {/* Why the firm exists — before any biography. */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow={whyWeExist.eyebrow} heading={whyWeExist.heading} />
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

      {/* Operating philosophy */}
      <section className="section-y bg-ink-950">
        <Container>
          <SectionHeading
            eyebrow={operatingPhilosophy.eyebrow}
            heading={operatingPhilosophy.heading}
            tone="dark"
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {operatingPhilosophy.principles.map((principle, index) => (
              <li key={principle.title} className="bg-ink-950 p-6 sm:p-7">
                <span className="text-[0.7rem] font-semibold tabular-nums text-accent-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2.5 text-[0.975rem] font-semibold tracking-tight text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{principle.detail}</p>
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
