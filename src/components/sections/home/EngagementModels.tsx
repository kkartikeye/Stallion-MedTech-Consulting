import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagementModels } from "@/content/home";

export function EngagementModels() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow={engagementModels.label}
          heading={engagementModels.heading}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {engagementModels.models.map((model, index) => (
            <div
              key={model.id}
              className="card-lift flex flex-col rounded-card border border-slate-200 bg-white p-7 shadow-card"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
                Model {index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                {model.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{model.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
