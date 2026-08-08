import { Container } from "@/components/ui/Container";
import type { WorkStage } from "@/content/how-we-work";

export function StageDetail({ stage, tone }: { stage: WorkStage; tone: "light" | "muted" }) {
  return (
    <section className={`py-14 sm:py-16 ${tone === "muted" ? "bg-slate-50" : "bg-white"}`}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:items-start lg:gap-14">
          <div className="flex items-baseline gap-4 lg:flex-col lg:items-start lg:gap-1">
            <span className="text-3xl font-semibold text-accent-600">{stage.number}</span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{stage.title}</h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">{stage.summary}</p>
            <ul className="mt-5 space-y-2">
              {stage.activities.map((activity) => (
                <li key={activity} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
