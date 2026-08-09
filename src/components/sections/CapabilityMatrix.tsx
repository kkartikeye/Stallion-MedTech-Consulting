import Link from "next/link";
import { lifecycleStages } from "@/content/lifecycle";
import { capabilities } from "@/content/capabilities";
import { matrixIntro } from "@/content/home";

/**
 * The capability × lifecycle matrix — the site's signature visual.
 *
 * Built as a real table so it is navigable and comprehensible with a
 * screen reader: stages are column headers, capabilities are row headers,
 * and each cell states in visually-hidden text whether it is a common
 * engagement point. No JavaScript is required to render or read it.
 *
 * On narrow screens the table scrolls horizontally inside its own
 * container with the capability column pinned, so the page body never
 * scrolls sideways.
 */
export function CapabilityMatrix() {
  return (
    <figure className="m-0">
      <div className="overflow-x-auto rounded-panel border border-white/10 bg-white/[0.03]">
        <table className="w-full min-w-[52rem] border-collapse text-left">
          <caption className="sr-only">
            Stallion capabilities mapped against MedTech lifecycle stages. Marked cells indicate a
            common engagement point.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 bg-ink-950 px-5 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-300"
              >
                Capability
              </th>
              {lifecycleStages.map((stage) => (
                <th
                  key={stage.id}
                  scope="col"
                  className="px-3 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-300"
                >
                  {stage.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {capabilities.map((capability) => (
              <tr key={capability.slug} className="border-t border-white/[0.07]">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-ink-950 px-5 py-3 text-left text-sm font-medium"
                >
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    className="text-ink-100 transition-colors hover:text-accent-300"
                  >
                    {capability.shortTitle}
                  </Link>
                </th>
                {lifecycleStages.map((stage) => {
                  const active = capability.lifecycleStages.includes(stage.id);
                  return (
                    <td key={stage.id} className="px-3 py-3 text-center align-middle">
                      <span className="sr-only">
                        {stage.label}:{" "}
                        {active ? "common engagement point" : "available within a broader program"}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mx-auto block h-2 w-2 rounded-full ${
                          active ? "bg-accent-400" : "bg-white/[0.12]"
                        }`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-300">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-400" />
          {matrixIntro.legend.active}
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-white/[0.12]" />
          {matrixIntro.legend.inactive}
        </span>
      </figcaption>
    </figure>
  );
}
