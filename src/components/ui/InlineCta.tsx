import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function InlineCta({
  heading,
  copy,
  cta,
}: {
  heading: string;
  copy: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="text-center">
        <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
          {copy}
        </p>
        <div className="mt-8">
          <Button href={cta.href} tone="dark" variant="primary">
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
