import { PageIntro } from "@/components/ui/PageIntro";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { InlineCta } from "@/components/ui/InlineCta";
import { servicesIntro, services, servicesCta } from "@/content/services";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Project and program leadership, product development support, sustaining engineering, engineering support, process improvement, and India and global execution support for medical device companies.",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow={servicesIntro.eyebrow}
        heading={servicesIntro.heading}
        copy={servicesIntro.copy}
      />

      <div>
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
            tone={index % 2 === 0 ? "light" : "muted"}
          />
        ))}
      </div>

      <InlineCta heading={servicesCta.heading} copy={servicesCta.copy} cta={servicesCta.cta} />
    </>
  );
}
