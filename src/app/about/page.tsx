import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { FounderSection } from "@/components/sections/about/FounderSection";
import { InlineCta } from "@/components/ui/InlineCta";
import { aboutIntro, aboutCopy } from "@/content/about";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Stallion MedTech Consulting combines structured project leadership with technical understanding and flexible access to specialized engineering talent.",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow={aboutIntro.eyebrow} heading={aboutIntro.heading} />

      <section className="section-y bg-white">
        <Container>
          <div className="max-w-2xl space-y-5">
            {aboutCopy.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <FounderSection />

      <InlineCta
        heading="Let's discuss what needs to move forward."
        copy="Tell us about the project, challenge, or capability gap you are working through."
        cta={{ label: "Discuss a Project", href: "/contact" }}
      />
    </>
  );
}
