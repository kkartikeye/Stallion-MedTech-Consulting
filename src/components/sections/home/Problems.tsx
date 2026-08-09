import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/Editorial";
import { problems } from "@/content/problems";
import { capabilityMap } from "@/content/capabilities";
import { problemsSection } from "@/content/home";

/**
 * Problems we solve.
 *
 * Typographic, not cards. Each row is the client's own sentence set large,
 * with the reading of it and the owning capability as marginal apparatus.
 * Six situations rather than twelve — a wall of twelve equal cards is an
 * inventory, not an argument.
 */
const FEATURED = [
  "slipping-program",
  "design-to-manufacturing",
  "recurring-field-issue",
  "audit-findings",
  "launch-convergence",
  "india-expansion",
];

export function Problems() {
  const featured = FEATURED.map((id) => problems.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <section className="section-y bg-white">
      <Container>
        <SectionIndex index={problemsSection.index} label={problemsSection.label} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="type-h2 max-w-xl text-balance-pretty text-ink-950">
            {problemsSection.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-600 lg:text-right">
            {problemsSection.copy}
          </p>
        </div>

        <ul className="mt-12 border-t border-ink-200">
          {featured.map((problem) => {
            const capability = capabilityMap[problem.capabilitySlug];
            return (
              <li key={problem.id}>
                <Link
                  href={`/capabilities/${problem.capabilitySlug}`}
                  className="group grid gap-x-10 gap-y-3 border-b border-ink-200 py-7 transition-colors hover:bg-sand-50 lg:grid-cols-[1.15fr_0.85fr] lg:py-8"
                >
                  <p className="text-xl font-medium leading-snug tracking-tight text-ink-950 transition-colors group-hover:text-accent-800 sm:text-2xl">
                    &ldquo;{problem.statement}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm leading-relaxed text-ink-600">{problem.reading}</p>
                    {capability ? (
                      <p className="annotation-sm mt-3 text-ink-500 transition-colors group-hover:text-accent-700">
                        → {capability.shortTitle}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
