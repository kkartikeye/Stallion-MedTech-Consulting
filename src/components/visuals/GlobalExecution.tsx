/**
 * FIG. 04 — Global execution model.
 *
 * A restrained operating diagram, not a glowing world map. Two poles — the
 * client's home organization and the India-based engineering and supply
 * ecosystem — with the handoff band between them drawn as the subject,
 * because that band is where distributed programs actually fail.
 *
 * Geography is implied by relative position and a single time-offset scale,
 * never by flags, skylines, or landmass outlines.
 */

const HOME_ACTIVITIES = [
  "Program ownership",
  "Design authority",
  "Regulatory strategy",
  "Customer interface",
];

const REGION_ACTIVITIES = [
  "Engineering execution",
  "Supplier development",
  "Manufacturing coordination",
  "Local capability build",
];

const HANDOFFS = ["Specifications", "Design reviews", "Quality expectations", "Escalations"];

export function GlobalExecution({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-[1fr_auto_1fr]">
        {/* Home organization */}
        <div className="bg-white p-6">
          <p className="annotation-sm text-ink-500">Pole A</p>
          <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-950">
            Client organization
          </h3>
          <ul className="mt-4 space-y-1.5">
            {HOME_ACTIVITIES.map((item) => (
              <li key={item} className="text-sm text-ink-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* The handoff band — the actual subject of the figure */}
        <div className="relative bg-ink-950 p-6 md:w-56">
          <p className="annotation-sm text-accent-300">Handoff band</p>
          <p className="mt-2 text-xs leading-relaxed text-ink-300">
            Where distributed programs lose the benefit they were designed to capture.
          </p>

          <svg
            viewBox="0 0 200 90"
            className="mt-5 w-full text-ink-400"
            role="img"
            aria-label="Four handoff channels crossing between the two poles."
          >
            <g fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke">
              {HANDOFFS.map((_, i) => {
                const y = 14 + i * 21;
                return (
                  <g key={i}>
                    <path d={`M6 ${y} H194`} strokeOpacity="0.25" />
                    <path
                      d={`M6 ${y} H86`}
                      stroke="var(--color-accent-400)"
                      strokeOpacity="0.8"
                    />
                    <path d={`M100 ${y - 4} l8 4 l-8 4`} strokeOpacity="0.7" />
                    <circle cx="6" cy={y} r="2.5" strokeOpacity="0.8" />
                    <circle cx="194" cy={y} r="2.5" strokeOpacity="0.8" />
                  </g>
                );
              })}
            </g>
          </svg>

          <ul className="mt-4 space-y-1">
            {HANDOFFS.map((item) => (
              <li key={item} className="annotation-sm text-ink-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Regional pole */}
        <div className="bg-white p-6">
          <p className="annotation-sm text-ink-500">Pole B</p>
          <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-950">
            India &amp; APAC execution
          </h3>
          <ul className="mt-4 space-y-1.5">
            {REGION_ACTIVITIES.map((item) => (
              <li key={item} className="text-sm text-ink-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Time-offset scale: geography stated as the constraint it actually is */}
      <div className="mt-5 flex items-center gap-4">
        <span className="annotation-sm shrink-0 text-ink-500">Overlap window</span>
        <div className="relative h-1.5 flex-1 bg-ink-100" aria-hidden="true">
          <span className="absolute inset-y-0 left-[42%] right-[34%] bg-accent-500/70" />
        </div>
        <span className="annotation-sm shrink-0 text-ink-500">~3—4 h</span>
      </div>
      <p className="figure-caption mt-2 text-ink-500">
        Operating models that require synchronous decisions outside this window pay a full day per
        handoff.
      </p>
    </div>
  );
}
