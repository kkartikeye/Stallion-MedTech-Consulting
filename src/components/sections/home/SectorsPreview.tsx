import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/Editorial";
import { sectorsWithPages, sectorsWithoutPages } from "@/content/sectors";
import { sectorsSection } from "@/content/home";

/**
 * Sectors.
 *
 * Deliberately the tightest section on the page. After the capability index
 * this is reference information, not an argument — a compact two-column
 * list on rules, with the unsupported-page sectors as one line of text
 * rather than six more dashed cards.
 */
export function SectorsPreview() {
  return (
    <section className="section-y-tight bg-white">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
          <div>
            <SectionIndex index={sectorsSection.index} label={sectorsSection.label} />
            <h2 className="type-h3 mt-4 text-ink-950">{sectorsSection.heading}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-600 sm:text-right">
            {sectorsSection.copy}
          </p>
        </div>

        <ul className="mt-8 grid border-t border-ink-200 sm:grid-cols-2 sm:gap-x-12">
          {sectorsWithPages.map((sector) => (
            <li key={sector.slug}>
              <Link
                href={`/medtech/${sector.slug}`}
                className="group flex items-baseline justify-between gap-4 border-b border-ink-200 py-3.5 transition-colors hover:text-accent-800"
              >
                <span className="text-sm font-medium text-ink-800 transition-colors group-hover:text-accent-800">
                  {sector.title}
                </span>
                <ArrowRight
                  className="cta-arrow h-3.5 w-3.5 shrink-0 text-ink-300 transition-colors group-hover:text-accent-700"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="annotation-sm mt-6 leading-relaxed text-ink-500">
          Also supported —{" "}
          <span className="normal-case tracking-normal">
            {sectorsWithoutPages.map((sector) => sector.title).join(", ")}
          </span>
        </p>
      </Container>
    </section>
  );
}
