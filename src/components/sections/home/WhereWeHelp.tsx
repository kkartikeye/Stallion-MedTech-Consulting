import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whereWeHelp } from "@/content/home";

export function WhereWeHelp() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow={whereWeHelp.eyebrow}
          heading={whereWeHelp.heading}
          copy={whereWeHelp.copy}
        />

        <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {whereWeHelp.areas.map((area, index) => (
            <Link
              key={area.title}
              href={`/capabilities/${area.capabilitySlug}`}
              className="group border-t border-ink-200 pt-5 transition-colors hover:border-accent-500"
            >
              <span className="text-[0.7rem] font-semibold tabular-nums text-ink-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-950">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{area.detail}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-700 opacity-0 transition-opacity group-hover:opacity-100">
                Explore
                <ArrowRight className="cta-arrow h-3 w-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
