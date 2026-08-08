import { PageIntro } from "@/components/ui/PageIntro";
import { StageDetail } from "@/components/sections/how-we-work/StageDetail";
import { EngagementRange } from "@/components/sections/how-we-work/EngagementRange";
import { InlineCta } from "@/components/ui/InlineCta";
import { howWeWorkIntro, stages, howWeWorkCta } from "@/content/how-we-work";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "A consistent four-stage model—Understand, Structure, Execute, Transition—scaled to each medical device project or program.",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro
        eyebrow={howWeWorkIntro.eyebrow}
        heading={howWeWorkIntro.heading}
        copy={howWeWorkIntro.copy}
      />

      <div>
        {stages.map((stage, index) => (
          <StageDetail key={stage.number} stage={stage} tone={index % 2 === 0 ? "light" : "muted"} />
        ))}
      </div>

      <EngagementRange />

      <InlineCta
        heading={howWeWorkCta.heading}
        copy={howWeWorkCta.copy}
        cta={howWeWorkCta.cta}
      />
    </>
  );
}
