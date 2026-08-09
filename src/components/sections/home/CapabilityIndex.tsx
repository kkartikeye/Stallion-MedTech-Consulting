import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/Editorial";
import { capabilityGroups, capabilitiesInGroup, capabilities } from "@/content/capabilities";
import { capabilityIndex } from "@/content/home";

/**
 * Capability index.
 *
 * An editorial contents page: numbered rows, rules, and a summary that
 * appears on the same line. Replaces a twelve-card grid — twelve identical
 * cards communicated "we have twelve of something" and nothing else.
 *
 * The row number is the capability's position in the full list, so the
 * index reads as a real table of contents rather than four restarting
 * sequences.
 */
export function CapabilityIndex() {
  return (
    <section className="section-y bg-sand-50">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SectionIndex index={capabilityIndex.index} label={capabilityIndex.label} />
            <h2 className="type-h2 mt-5 text-balance-pretty text-ink-950">
              {capabilityIndex.heading}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-ink-600 lg:justify-self-end">
            {capabilityIndex.copy}
          </p>
        </div>

        <div className="mt-14">
          {capabilityGroups.map((group) => (
            <div key={group.id} className="mt-12 first:mt-0">
              <div className="flex items-baseline justify-between gap-6 border-b border-ink-950/15 pb-3">
                <h3 className="annotation text-ink-950">{group.label}</h3>
                <span className="annotation-sm hidden text-ink-500 sm:block">{group.caption}</span>
              </div>

              <ul>
                {capabilitiesInGroup(group.id).map((capability) => {
                  const number = capabilities.findIndex((c) => c.slug === capability.slug) + 1;
                  return (
                    <li key={capability.slug}>
                      <Link
                        href={`/capabilities/${capability.slug}`}
                        className="group grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 border-b border-ink-200/70 py-5 transition-colors hover:bg-white/70 md:grid-cols-[2.25rem_minmax(0,17rem)_1fr] md:gap-x-8"
                      >
                        <span className="section-index text-ink-500 transition-colors group-hover:text-accent-700">
                          {String(number).padStart(2, "0")}
                        </span>
                        <span className="text-[1.0625rem] font-semibold tracking-tight text-ink-950 md:text-lg">
                          {capability.title}
                        </span>
                        <span className="col-start-2 mt-1.5 text-sm leading-relaxed text-ink-600 md:col-start-3 md:mt-0">
                          {capability.summary}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
