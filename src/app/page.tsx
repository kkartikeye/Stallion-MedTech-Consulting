import { Hero } from "@/components/sections/home/Hero";
import { WhereWeHelp } from "@/components/sections/home/WhereWeHelp";
import { LifecycleSection } from "@/components/sections/home/LifecycleSection";
import { Problems } from "@/components/sections/home/Problems";
import { SectorsPreview } from "@/components/sections/home/SectorsPreview";
import { WhyStallion } from "@/components/sections/home/WhyStallion";
import { ApproachPreview } from "@/components/sections/home/ApproachPreview";
import { InsightsPreview } from "@/components/sections/home/InsightsPreview";
import { CtaSection } from "@/components/ui/CtaSection";
import { closingCta } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <WhereWeHelp />
      <LifecycleSection />
      <Problems />
      <SectorsPreview />
      <WhyStallion />
      <ApproachPreview />
      <InsightsPreview />
      <CtaSection
        eyebrow={closingCta.eyebrow}
        heading={closingCta.heading}
        copy={closingCta.copy}
        cta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
