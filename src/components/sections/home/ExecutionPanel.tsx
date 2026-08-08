import { executionPanel } from "@/content/home";

const statusStyles: Record<string, string> = {
  "On track": "bg-accent-400/15 text-accent-300 ring-accent-400/30",
  "In progress": "bg-amber-400/15 text-amber-300 ring-amber-400/30",
  Monitoring: "bg-slate-400/15 text-slate-300 ring-slate-400/30",
};

export function ExecutionPanel() {
  return (
    <div className="relative rounded-panel border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-sm sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
          {executionPanel.label}
        </span>
        <span className="h-2 w-2 rounded-full bg-accent-400" aria-hidden="true" />
      </div>

      <ol className="mt-7 grid grid-cols-4 gap-2" aria-label="Engagement lifecycle stages">
        {executionPanel.stages.map((stage, index) => (
          <li key={stage.id} className="relative">
            <div className="flex items-center">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent-400/40 bg-accent-500/15 text-[0.7rem] font-semibold text-accent-200">
                {index + 1}
              </span>
              {index < executionPanel.stages.length - 1 ? (
                <span className="ml-1 h-px flex-1 bg-white/15" aria-hidden="true" />
              ) : null}
            </div>
            <p className="mt-3 text-sm font-semibold text-white">{stage.label}</p>
            <p className="mt-1 text-xs leading-snug text-slate-400">{stage.detail}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Representative workstreams
        </p>
        <ul className="mt-4 space-y-2.5">
          {executionPanel.workstreams.map((workstream) => (
            <li
              key={workstream.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="text-sm text-slate-200">{workstream.name}</span>
              <span
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[0.7rem] font-medium ring-1 ring-inset ${
                  statusStyles[workstream.status] ?? statusStyles.Monitoring
                }`}
              >
                {workstream.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-[0.7rem] leading-relaxed text-slate-400">{executionPanel.note}</p>
    </div>
  );
}
