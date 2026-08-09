import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorCard } from "@/components/cards/SectorCard";
import { sectorsWithPages, sectorsWithoutPages, sectorsIntro } from "@/content/sectors";

export function SectorsPreview() {
  return (
    <section className="section-y bg-white">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={sectorsIntro.eyebrow}
            heading={sectorsIntro.heading}
            copy={sectorsIntro.copy}
          />
          <Link
            href="/medtech"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
          >
            All sectors
            <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectorsWithPages.map((sector) => (
            <li key={sector.slug} className="h-full">
              <SectorCard sector={sector} />
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-card border border-ink-100 bg-sand-50 p-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
            Also supported
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            {sectorsWithoutPages.map((sector) => sector.title).join(" · ")}
          </p>
        </div>
      </Container>
    </section>
  );
}
