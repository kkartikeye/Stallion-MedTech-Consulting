import { Container } from "@/components/ui/Container";
import type { ServiceDetail } from "@/content/services";

export function ServiceSection({
  service,
  index,
  tone,
}: {
  service: ServiceDetail;
  index: number;
  tone: "light" | "muted";
}) {
  return (
    <section id={service.id} className={`scroll-mt-28 py-16 sm:py-20 ${tone === "muted" ? "bg-slate-50" : "bg-white"}`}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold text-accent-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {service.situation}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-700">How it may be structured: </span>
              {service.structure}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card-lift rounded-card border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                What Stallion provides
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {service.provide.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-lift rounded-card border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Typical outputs
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {service.outputs.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
