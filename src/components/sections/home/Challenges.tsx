import { CircleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { challenges } from "@/content/home";

export function Challenges() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading eyebrow={challenges.label} heading={challenges.heading} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {challenges.items.map((item) => (
            <li
              key={item}
              className="card-lift flex items-start gap-3 rounded-card border border-slate-200 bg-slate-50/60 p-5"
            >
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
