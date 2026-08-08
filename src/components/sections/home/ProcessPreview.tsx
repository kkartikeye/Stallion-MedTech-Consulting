import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { processPreview } from "@/content/home";

export function ProcessPreview() {
  return (
    <section className="section-y bg-slate-950">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {processPreview.heading}
          </h2>
          <Button href={processPreview.cta.href} variant="secondary" tone="dark" className="shrink-0">
            {processPreview.cta.label}
          </Button>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processPreview.stages.map((stage) => (
            <li
              key={stage.number}
              className="card-lift rounded-card border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]"
            >
              <span className="text-sm font-semibold text-accent-300">{stage.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{stage.detail}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
          {processPreview.note}
        </p>
      </Container>
    </section>
  );
}
