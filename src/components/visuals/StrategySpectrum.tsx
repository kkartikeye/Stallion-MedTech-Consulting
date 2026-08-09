import { engagementModels } from "@/content/how-we-work";

/**
 * FIG. 03 — Strategy to execution.
 *
 * A single axis from Advise to Transfer, with engagement models plotted as
 * spans across it. The point of the figure is that Stallion is not fixed at
 * one end: some engagements are a short advisory span, some run the whole
 * width.
 *
 * Drawn as a measurement scale rather than a process arrow — ticks, spans,
 * and a datum line, which is both more distinctive and more honest about
 * what it represents.
 */

const PHASES = ["Advise", "Structure", "Build", "Execute", "Transfer"] as const;

/** [startPhase, endPhase] indices, inclusive. */
const SPANS: { modelId: string; from: number; to: number }[] = [
  { modelId: "advisory", from: 0, to: 0 },
  { modelId: "assessment", from: 0, to: 1 },
  { modelId: "work-package", from: 1, to: 3 },
  { modelId: "embedded", from: 1, to: 4 },
  { modelId: "integrated-team", from: 1, to: 4 },
  { modelId: "transformation", from: 0, to: 4 },
  { modelId: "specialist", from: 2, to: 3 },
];

const LEFT = 8;
const RIGHT = 92;
const STEP = (RIGHT - LEFT) / (PHASES.length - 1);

export function StrategySpectrum({ className = "" }: { className?: string }) {
  const rows = SPANS.map((span) => ({
    ...span,
    title: engagementModels.find((m) => m.id === span.modelId)?.title ?? span.modelId,
  }));

  return (
    <div className={className}>
      {/* Axis */}
      <div className="relative">
        <div className="relative h-px w-full bg-ink-200" aria-hidden="true">
          {PHASES.map((_, i) => (
            <span
              key={i}
              className="absolute top-0 h-2 w-px bg-ink-300"
              style={{ left: `${LEFT + i * STEP}%` }}
            />
          ))}
        </div>
        <div className="relative mt-3 h-4" aria-hidden="true">
          {PHASES.map((phase, i) => (
            <span
              key={phase}
              className="annotation-sm absolute -translate-x-1/2 whitespace-nowrap text-ink-500"
              style={{ left: `${LEFT + i * STEP}%` }}
            >
              {phase}
            </span>
          ))}
        </div>
      </div>

      {/* Spans. A definition list keeps the mapping available to assistive
          technology; the bars are decorative reinforcement. */}
      <dl className="mt-9 space-y-3">
        {rows.map((row) => (
          <div key={row.modelId} className="grid grid-cols-[10.5rem_1fr] items-center gap-4">
            <dt className="text-xs font-medium text-ink-700 sm:text-[0.8rem]">{row.title}</dt>
            <dd className="relative h-6">
              <span className="sr-only">
                {PHASES[row.from]}
                {row.from === row.to ? "" : ` through ${PHASES[row.to]}`}
              </span>
              <span
                aria-hidden="true"
                className="absolute top-1/2 h-px -translate-y-1/2 bg-ink-100"
                style={{ left: `${LEFT}%`, width: `${RIGHT - LEFT}%` }}
              />
              <span
                aria-hidden="true"
                className="absolute top-1/2 h-1.5 -translate-y-1/2 bg-accent-500/80"
                style={{
                  left: `${LEFT + row.from * STEP}%`,
                  width: `${Math.max(row.to - row.from, 0) * STEP || 1.25}%`,
                }}
              />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
