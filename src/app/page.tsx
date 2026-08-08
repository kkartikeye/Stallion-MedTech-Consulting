import { Hero } from "@/components/sections/home/Hero";
import { Challenges } from "@/components/sections/home/Challenges";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { EngagementModels } from "@/components/sections/home/EngagementModels";
import { ProcessPreview } from "@/components/sections/home/ProcessPreview";
import { WhyStallion } from "@/components/sections/home/WhyStallion";
import { ClosingCta } from "@/components/sections/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Capabilities />
      <EngagementModels />
      <ProcessPreview />
      <WhyStallion />
      <ClosingCta />
    </>
  );
}
