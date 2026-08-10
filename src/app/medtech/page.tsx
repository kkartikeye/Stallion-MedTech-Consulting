import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { SectorCard } from "@/components/cards/SectorCard";
import { MarginNote } from "@/components/ui/Editorial";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  sectorsWithPages,
  sectorsWithoutPages,
  sectorsIntro,
  sectorDisclaimer,
} from "@/content/sectors";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "MedTech Sectors",
  description:
    "Areas of medical technology Stallion supports: medical devices, capital equipment, surgical and interventional, diagnostics and IVD, digital health and SaMD, connected devices, drug delivery and combination products, and contract manufacturing.",
  path: "/medtech",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "MedTech Sectors", href: "/medtech" },
];

export default function MedTechPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={sectorsIntro.eyebrow}
        heading={sectorsIntro.heading}
        copy={sectorsIntro.copy}
        crumbs={crumbs}
      />

      <section className="section-y bg-white">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectorsWithPages.map((sector) => (
              <li key={sector.slug} className="h-full">
                <SectorCard sector={sector} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {sectorsWithoutPages.length > 0 ? (
        <section className="section-y bg-sand-50">
          <Container>
            <h2 className="type-h3 text-ink-950">Additional areas we support</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">
              These areas draw on the same capability set. Dedicated pages will follow as the
              material warrants them.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectorsWithoutPages.map((sector) => (
                <li key={sector.slug} className="h-full">
                  <SectorCard sector={sector} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="section-y-tight bg-sand-50">
        <Container>
          <div className="max-w-3xl">
            <MarginNote label="Note on these pages">{sectorDisclaimer}</MarginNote>
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Not seeing your area?"
        copy="The capability set travels across medical technology. If your product does not map neatly to one of these, the conversation is the same."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore capabilities", href: "/capabilities" }}
      />
    </>
  );
}
