import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/**
 * Dark page header used by every route other than the homepage. Keeping
 * one component means the top of every page shares the same rhythm and
 * the fixed header always has the contrast it needs behind it.
 */
export function PageIntro({
  eyebrow,
  heading,
  copy,
  crumbs,
  children,
}: {
  eyebrow: string;
  heading: string;
  copy?: string;
  crumbs?: Crumb[];
  /** Optional slot below the copy — CTAs, meta rows, tags. */
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(55rem 28rem at 12% -20%, rgba(61,127,136,0.20), transparent), radial-gradient(38rem 22rem at 100% 0%, rgba(148,163,184,0.10), transparent)",
        }}
      />
      <Container className="relative">
        {crumbs ? <Breadcrumbs crumbs={crumbs} className="mb-7" /> : null}
        <div className="max-w-3xl">
          <Eyebrow tone="dark" className="fade-up">
            {eyebrow}
          </Eyebrow>
          <h1 className="type-h1 fade-up fade-up-delay-1 mt-5 text-balance-pretty text-white">
            {heading}
          </h1>
          {copy ? (
            <p className="type-lead fade-up fade-up-delay-2 mt-6 max-w-2xl text-ink-200">{copy}</p>
          ) : null}
          {children ? <div className="fade-up fade-up-delay-3 mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
