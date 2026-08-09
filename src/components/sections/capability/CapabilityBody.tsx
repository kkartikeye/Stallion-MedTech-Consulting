import { Container } from "@/components/ui/Container";
import { SectionIndex, FigureLabel, MarginNote, PullQuote } from "@/components/ui/Editorial";
import { Figure } from "@/components/visuals/Figure";
import { StrategySpectrum } from "@/components/visuals/StrategySpectrum";
import { GlobalExecution } from "@/components/visuals/GlobalExecution";
import { lifecycleStages } from "@/content/lifecycle";
import type { Capability } from "@/content/capabilities";

/**
 * Capability page body.
 *
 * Four compositions over one design system, chosen by `capability.layout`.
 * The underlying content model is identical — what changes is which part
 * leads, how service areas are presented, and what visual carries the page.
 * Without this, twelve pages sharing one template is the clearest possible
 * signal that the content was generated rather than authored.
 */

/* ---------------------------------------------------------------- shared */

function Challenges({ capability, tone = "light" }: { capability: Capability; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className={`border-t ${dark ? "border-white/15" : "border-ink-200"}`}>
      {capability.challenges.map((challenge, i) => (
        <li
          key={challenge}
          className={`grid grid-cols-[2.25rem_1fr] gap-x-4 border-b py-4 ${
            dark ? "border-white/10" : "border-ink-200"
          }`}
        >
          <span className={`section-index ${dark ? "text-ink-300" : "text-ink-500"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className={`text-sm leading-relaxed ${dark ? "text-ink-200" : "text-ink-700"}`}>
            {challenge}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Service areas as a plain indexed list — no cards, no icons. */
function ServiceAreas({ capability }: { capability: Capability }) {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
      {capability.serviceAreas.map((area) => (
        <div key={area.title}>
          <h3 className="annotation border-b border-ink-950/15 pb-2.5 text-ink-950">
            {area.title}
          </h3>
          <ul className="mt-4 space-y-2">
            {area.items.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-ink-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Deliverables({ capability }: { capability: Capability }) {
  return (
    <ol className="border-t border-ink-200">
      {capability.deliverables.map((deliverable, i) => (
        <li
          key={deliverable}
          className="grid grid-cols-[2.25rem_1fr] gap-x-4 border-b border-ink-200 py-3.5"
        >
          <span className="section-index text-accent-700">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-sm leading-relaxed text-ink-700">{deliverable}</span>
        </li>
      ))}
    </ol>
  );
}

/** Lifecycle span drawn as a coverage bar rather than eight list rows. */
function LifecycleSpan({ capability }: { capability: Capability }) {
  const active = new Set(capability.lifecycleStages);
  return (
    <figure className="m-0">
      <div className="flex gap-px" aria-hidden="true">
        {lifecycleStages.map((stage) => (
          <div key={stage.id} className="flex-1">
            <div className={`h-1.5 ${active.has(stage.id) ? "bg-accent-500" : "bg-ink-200"}`} />
            <p
              className={`annotation-sm mt-2.5 leading-tight ${
                active.has(stage.id) ? "text-ink-800" : "text-ink-500"
              }`}
            >
              {stage.label}
            </p>
          </div>
        ))}
      </div>
      <p className="sr-only">
        Common engagement points:{" "}
        {lifecycleStages
          .filter((s) => active.has(s.id))
          .map((s) => s.label)
          .join(", ")}
        .
      </p>
      <figcaption className="mt-5 border-t border-ink-200 pt-3">
        <FigureLabel number="02" title="Lifecycle coverage for this capability" />
      </figcaption>
    </figure>
  );
}

function QualifierNote({ capability }: { capability: Capability }) {
  if (!capability.qualifierNote) return null;
  return (
    <div className="mt-12">
      <MarginNote label="Scope of practice">{capability.qualifierNote}</MarginNote>
    </div>
  );
}

/* --------------------------------------------------------------- layouts */

/**
 * DIAGRAM — strategy and digital. Leads with an argument and the
 * advise-to-execute spectrum; no photography, because the subject is
 * reasoning rather than physical work.
 */
function DiagramLayout({ capability }: { capability: Capability }) {
  return (
    <>
      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionIndex index="01" label="Where it goes wrong" />
              <h2 className="type-h2 mt-5 text-balance-pretty text-ink-950">
                Challenges we help address
              </h2>
            </div>
            <Challenges capability={capability} />
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <SectionIndex index="02" label="Engagement shape" />
              <h2 className="type-h2 mt-5 max-w-md text-balance-pretty text-ink-950">
                From a position to a plan
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-600">
                Work in this area can stop at a recommendation or continue into delivery. The span
                is agreed at the outset rather than discovered later.
              </p>
              <div className="mt-10">
                <LifecycleSpan capability={capability} />
              </div>
            </div>
            <figure className="m-0">
              <StrategySpectrum />
              <figcaption className="mt-8 border-t border-ink-200 pt-3">
                <FigureLabel number="03" title="Advise-to-execute span by engagement model" />
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionIndex index="03" label="What we do" />
          <div className="mt-10">
            <ServiceAreas capability={capability} />
          </div>
          <QualifierNote capability={capability} />
          <div className="mt-16 grid gap-12 border-t border-ink-200 pt-12 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
            <h2 className="annotation text-ink-950">Typical deliverables</h2>
            <Deliverables capability={capability} />
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * TECHNICAL — engineering, product, manufacturing, global execution.
 * Leads with a full-width technical image and puts the physical work first.
 */
function TechnicalLayout({ capability }: { capability: Capability }) {
  return (
    <>
      {capability.imageSlot ? (
        <section className="bg-ink-950">
          <Figure
            slot={capability.imageSlot}
            aspect="aspect-16/9 sm:aspect-21/9"
            tone="dark"
            fit="slice"
            showCaption={false}
            sizes="100vw"
          />
        </section>
      ) : null}

      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionIndex index="01" label="Where it goes wrong" />
              <h2 className="type-h2 mt-5 text-balance-pretty text-ink-950">
                Challenges we help address
              </h2>
              <div className="mt-10 hidden lg:block">
                <LifecycleSpan capability={capability} />
              </div>
            </div>
            <Challenges capability={capability} />
          </div>
          <div className="mt-12 lg:hidden">
            <LifecycleSpan capability={capability} />
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container>
          <SectionIndex index="02" label="What we do" />
          <div className="mt-10">
            <ServiceAreas capability={capability} />
          </div>
          <QualifierNote capability={capability} />
        </Container>
      </section>

      {capability.slug === "india-global-execution" ? (
        <section className="section-y bg-white">
          <Container>
            <SectionIndex index="03" label="Operating model" />
            <figure className="mt-10">
              <GlobalExecution />
              <figcaption className="mt-6 border-t border-ink-200 pt-3">
                <FigureLabel number="04" title="Cross-border operating model" />
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
            <h2 className="annotation text-ink-950">Typical deliverables</h2>
            <Deliverables capability={capability} />
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * DOCUMENTATION — regulatory, quality, clinical. Presented as a structured
 * dossier: dark contents panel, numbered sections, scope-of-practice note
 * given real prominence rather than buried in a tint box.
 */
function DocumentationLayout({ capability }: { capability: Capability }) {
  return (
    <>
      <section className="section-y bg-ink-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionIndex index="01" label="Where it goes wrong" tone="dark" />
              <h2 className="type-h2 mt-5 text-balance-pretty text-white">
                Challenges we help address
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">
                Most findings in this area are not knowledge problems. The organization usually
                knows what good looks like — what is missing is ownership, sequencing, and capacity.
              </p>
            </div>
            <Challenges capability={capability} tone="dark" />
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
            <div>
              <SectionIndex index="02" label="Scope" />
              <h2 className="type-h3 mt-5 text-ink-950">What we do</h2>
            </div>
            <div>
              <ServiceAreas capability={capability} />
              <QualifierNote capability={capability} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionIndex index="03" label="Output" />
              <h2 className="type-h3 mt-5 text-ink-950">Typical deliverables</h2>
              <div className="mt-8">
                <Deliverables capability={capability} />
              </div>
            </div>
            <div className="lg:pt-16">
              <LifecycleSpan capability={capability} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * DELIVERY — program, commercialization, lifecycle. Leads with a pull quote
 * about ownership, then puts deliverables and cadence forward, because
 * these engagements are bought on execution confidence.
 */
function DeliveryLayout({ capability }: { capability: Capability }) {
  return (
    <>
      <section className="section-y bg-white">
        <Container>
          <div className="max-w-3xl">
            <PullQuote>{capability.summary}</PullQuote>
          </div>

          <div className="mt-16 grid gap-12 border-t border-ink-200 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionIndex index="01" label="Where it goes wrong" />
              <h2 className="type-h2 mt-5 text-balance-pretty text-ink-950">
                Challenges we help address
              </h2>
            </div>
            <Challenges capability={capability} />
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container>
          <SectionIndex index="02" label="What we do" />
          <div className="mt-10">
            <ServiceAreas capability={capability} />
          </div>
          <QualifierNote capability={capability} />
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionIndex index="03" label="Output" />
              <h2 className="type-h3 mt-5 text-ink-950">Typical deliverables</h2>
              <div className="mt-8">
                <Deliverables capability={capability} />
              </div>
            </div>
            <div className="lg:pt-16">
              <LifecycleSpan capability={capability} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function CapabilityBody({ capability }: { capability: Capability }) {
  switch (capability.layout) {
    case "technical":
      return <TechnicalLayout capability={capability} />;
    case "documentation":
      return <DocumentationLayout capability={capability} />;
    case "delivery":
      return <DeliveryLayout capability={capability} />;
    default:
      return <DiagramLayout capability={capability} />;
  }
}
