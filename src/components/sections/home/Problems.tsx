import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { problems, problemsIntro } from "@/content/problems";

export function Problems() {
  return (
    <section className="section-y bg-sand-50">
      <Container>
        <SectionHeading
          eyebrow={problemsIntro.eyebrow}
          heading={problemsIntro.heading}
          copy={problemsIntro.copy}
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <li key={problem.id} className="h-full">
              <ProblemCard problem={problem} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
