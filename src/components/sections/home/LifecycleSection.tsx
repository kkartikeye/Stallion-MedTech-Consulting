import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LifecycleExplorer } from "@/components/sections/LifecycleExplorer";
import { CapabilityMatrix } from "@/components/sections/CapabilityMatrix";
import { lifecycleIntro } from "@/content/lifecycle";
import { matrixIntro } from "@/content/home";

/**
 * The lifecycle explorer and the capability matrix are two views of the
 * same idea, so they share one dark section: the explorer answers "what
 * happens at this stage", the matrix answers "where does Stallion engage".
 */
export function LifecycleSection() {
  return (
    <section className="section-y-lg bg-ink-950">
      <Container>
        <SectionHeading
          eyebrow={lifecycleIntro.eyebrow}
          heading={lifecycleIntro.heading}
          copy={lifecycleIntro.copy}
          tone="dark"
        />

        <div className="mt-12">
          <LifecycleExplorer />
        </div>

        <div className="mt-20 border-t border-white/10 pt-16">
          <SectionHeading
            eyebrow={matrixIntro.eyebrow}
            heading={matrixIntro.heading}
            copy={matrixIntro.copy}
            tone="dark"
          />
          <div className="mt-10">
            <CapabilityMatrix />
          </div>
        </div>
      </Container>
    </section>
  );
}
