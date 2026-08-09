import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { CapabilityMatrix } from "@/components/sections/CapabilityMatrix";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { capabilityGroups, capabilitiesInGroup, capabilitiesIntro } from "@/content/capabilities";
import { matrixIntro } from "@/content/home";
import { specialistNote } from "@/content/site";
import { breadcrumbSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Capabilities",
  description:
    "MedTech consulting capabilities across strategy, product development, engineering, digital health, regulatory, quality, clinical evidence, manufacturing, commercialization, program delivery, lifecycle management, and India and global execution.",
  path: "/capabilities",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={capabilitiesIntro.eyebrow}
        heading={capabilitiesIntro.heading}
        copy={capabilitiesIntro.copy}
        crumbs={crumbs}
      />

      {capabilityGroups.map((group, index) => (
        <section
          key={group.id}
          className={`section-y ${index % 2 === 0 ? "bg-white" : "bg-sand-50"}`}
        >
          <Container>
            <div className="flex flex-col gap-2 border-b border-ink-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="type-h3 text-ink-950">{group.label}</h2>
                <p className="mt-1.5 text-sm text-ink-500">{group.caption}</p>
              </div>
              <span className="text-xs font-medium tabular-nums text-ink-500">
                {String(index + 1).padStart(2, "0")} / {String(capabilityGroups.length).padStart(2, "0")}
              </span>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilitiesInGroup(group.id).map((capability) => (
                <li key={capability.slug} className="h-full">
                  <CapabilityCard capability={capability} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="section-y bg-ink-950">
        <Container>
          <SectionHeading
            eyebrow={matrixIntro.eyebrow}
            heading={matrixIntro.heading}
            copy={matrixIntro.copy}
            tone="dark"
          />
          <div className="mt-10">
            <CapabilityMatrix />
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <div className="rounded-panel border border-ink-100 bg-sand-50 p-6 sm:p-8">
            <h2 className="text-base font-semibold text-ink-950">How specialist expertise works</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-600">{specialistNote}</p>
            <Link
              href="/how-we-work#engagement-models"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
            >
              See engagement models
              <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Not sure which of these you need?"
        copy="Most engagements draw on several. Describe the situation and we will map it to the right combination."
        cta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "See how we work", href: "/how-we-work" }}
      />
    </>
  );
}
