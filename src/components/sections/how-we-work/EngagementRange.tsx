import { Container } from "@/components/ui/Container";
import { engagementRange } from "@/content/how-we-work";

export function EngagementRange() {
  return (
    <section className="section-y bg-slate-950">
      <Container>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {engagementRange.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          {engagementRange.copy}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {engagementRange.examples.map((example) => (
            <div
              key={example.title}
              className="card-lift rounded-card border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]"
            >
              <h3 className="text-lg font-semibold text-white">{example.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{example.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
