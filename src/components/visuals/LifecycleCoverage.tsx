import { Fragment } from "react";
import Link from "next/link";
import { lifecycleStages } from "@/content/lifecycle";
import { capabilities, capabilityGroups } from "@/content/capabilities";

/**
 * FIG. 02 — Capability coverage across the MedTech lifecycle.
 *
 * Replaces an earlier dot matrix. Contiguous stages render as a continuous
 * band rather than separate dots, so the figure reads as a coverage chart —
 * a planning artifact — instead of a spreadsheet. Capabilities are grouped,
 * with the group name as a spanning row, which gives the figure structure
 * and keeps twelve rows from reading as an undifferentiated list.
 *
 * Still a real <table>: stages are column headers, capabilities are row
 * headers, and each cell states in visually-hidden text whether it is a
 * common engagement point. No JavaScript required.
 */
export function LifecycleCoverage() {
  const stageCount = lifecycleStages.length;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[54rem] border-collapse text-left">
        <caption className="sr-only">
          Stallion capabilities mapped against the eight MedTech lifecycle stages. A marked cell
          indicates a common engagement point for that capability at that stage.
        </caption>

        <thead>
          <tr>
            <th
              scope="col"
              className="annotation-sm sticky left-0 z-10 w-[15rem] bg-ink-950 pb-4 pr-6 text-left font-medium text-ink-300"
            >
              Capability
            </th>
            {lifecycleStages.map((stage, i) => (
              <th
                key={stage.id}
                scope="col"
                className="annotation-sm px-2 pb-4 text-left font-medium text-ink-300"
                style={{ width: `${(100 - 28) / stageCount}%` }}
              >
                <span className="block text-accent-300/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 block">{stage.label}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {capabilityGroups.map((group) => {
            const rows = capabilities.filter((c) => c.group === group.id);
            return (
              <Fragment key={group.id}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={stageCount + 1}
                    className="annotation-sm border-t border-white/10 pb-2 pt-6 text-left font-medium text-ink-300"
                  >
                    {group.label}
                  </th>
                </tr>

                {rows.map((capability) => {
                  const active = new Set(capability.lifecycleStages);
                  return (
                    <tr key={capability.slug} className="group/row">
                      <th
                        scope="row"
                        className="sticky left-0 z-10 bg-ink-950 py-1.5 pr-6 text-left text-[0.8rem] font-normal"
                      >
                        <Link
                          href={`/capabilities/${capability.slug}`}
                          className="text-ink-200 transition-colors hover:text-accent-300"
                        >
                          {capability.shortTitle}
                        </Link>
                      </th>

                      {lifecycleStages.map((stage, i) => {
                        const isActive = active.has(stage.id);
                        const prevActive = i > 0 && active.has(lifecycleStages[i - 1].id);
                        const nextActive =
                          i < stageCount - 1 && active.has(lifecycleStages[i + 1].id);

                        return (
                          <td key={stage.id} className="px-0 py-1.5 align-middle">
                            <span className="sr-only">
                              {stage.label}:{" "}
                              {isActive
                                ? "common engagement point"
                                : "available within a broader program"}
                            </span>
                            <span
                              aria-hidden="true"
                              className="relative mx-0 block h-[0.4375rem]"
                            >
                              {/* Baseline rail */}
                              <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/[0.07]" />
                              {isActive ? (
                                <span
                                  className={`absolute inset-y-0 bg-accent-400/85 transition-colors group-hover/row:bg-accent-300 ${
                                    prevActive ? "left-0" : "left-[15%] rounded-l-[1px]"
                                  } ${nextActive ? "right-0" : "right-[15%] rounded-r-[1px]"}`}
                                />
                              ) : null}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
