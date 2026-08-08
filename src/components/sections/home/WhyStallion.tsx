import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyStallion } from "@/content/home";

export function WhyStallion() {
  return (
    <section className="section-y bg-slate-50">
      <Container>
        <SectionHeading eyebrow={whyStallion.label} heading={whyStallion.heading} />

        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {whyStallion.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
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
