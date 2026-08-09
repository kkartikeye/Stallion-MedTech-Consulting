import { Hero } from "@/components/sections/home/Hero";
import { Thesis } from "@/components/sections/home/Thesis";
import { LifecycleSection } from "@/components/sections/home/LifecycleSection";
import { Problems } from "@/components/sections/home/Problems";
import { ManufacturingBreak } from "@/components/sections/home/ManufacturingBreak";
import { CapabilityIndex } from "@/components/sections/home/CapabilityIndex";
import { SectorsPreview } from "@/components/sections/home/SectorsPreview";
import { ApproachPreview } from "@/components/sections/home/ApproachPreview";
import { GlobalSection } from "@/components/sections/home/GlobalSection";
import { WorkPreview } from "@/components/sections/home/WorkPreview";
import { InsightsPreview } from "@/components/sections/home/InsightsPreview";
import { WhyStallion } from "@/components/sections/home/WhyStallion";
import { CtaSection } from "@/components/ui/CtaSection";
import { closingCta } from "@/content/home";

/**
 * Homepage.
 *
 * Sequenced for pacing rather than uniformity: a dense argument (Thesis)
 * against a dark diagram section (Lifecycle), then a typographic list
 * (Problems) released by a full-bleed image (ManufacturingBreak), then
 * reference material (CapabilityIndex, Sectors) before the closing
 * sections. Section padding varies deliberately — Sectors is tight,
 * Thesis and Lifecycle are large.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Thesis />
      <LifecycleSection />
      <Problems />
      <ManufacturingBreak />
      <CapabilityIndex />
      <SectorsPreview />
      <ApproachPreview />
      <GlobalSection />
      <WorkPreview />
      <InsightsPreview />
      <WhyStallion />
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
