import type { LucideIcon } from "lucide-react";
import { ClipboardList, Cpu, Globe, Layers, RefreshCw, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/content/home";

const icons: Record<string, LucideIcon> = {
  "project-program-leadership": ClipboardList,
  "product-development-support": Layers,
  "sustaining-engineering-leadership": Wrench,
  "engineering-technical-support": Cpu,
  "operational-process-improvement": RefreshCw,
  "india-global-execution": Globe,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="section-y bg-slate-50">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={capabilities.label} heading={capabilities.heading} />
          <Button href="/services" variant="secondary" tone="light" className="shrink-0">
            View all services
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.groups.map((group) => {
            const Icon = icons[group.id] ?? Layers;
            const preview = group.items.slice(0, 5);
            const remaining = group.items.length - preview.length;

            return (
              <div
                key={group.id}
                className="card-lift flex flex-col rounded-card border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{group.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-600">
                  {preview.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {remaining > 0 ? (
                  <p className="mt-2 text-xs font-medium text-slate-400">+{remaining} more</p>
                ) : null}
                {group.note ? (
                  <p className="mt-4 text-xs leading-relaxed text-slate-500">{group.note}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
