import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { founder } from "@/content/about";

export function FounderSection() {
  return (
    <section className="section-y bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-start lg:gap-14">
          <div className="flex flex-col items-start gap-4">
            <div className="flex h-40 w-40 items-center justify-center rounded-card border border-slate-200 bg-white text-slate-300 shadow-card sm:h-48 sm:w-48">
              <User className="h-16 w-16" aria-hidden="true" strokeWidth={1.25} />
            </div>
            <p className="max-w-[13rem] text-xs leading-relaxed text-slate-400">
              {founder.portraitNote}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-accent-700">{founder.title}</p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">{founder.bio}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {founder.experienceThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600"
                >
                  {theme}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Certification: </span>
              <span className="text-slate-400">{founder.certification}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
