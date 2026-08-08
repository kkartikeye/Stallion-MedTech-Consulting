import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageIntro({
  eyebrow,
  heading,
  copy,
}: {
  eyebrow: string;
  heading: string;
  copy?: string;
}) {
  return (
    <section className="bg-slate-950 pb-16 pt-40 sm:pb-20 sm:pt-44">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="dark" className="fade-up">
            {eyebrow}
          </Eyebrow>
          <h1 className="fade-up fade-up-delay-1 mt-5 text-balance-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {heading}
          </h1>
          {copy ? (
            <p className="fade-up fade-up-delay-2 mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {copy}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
