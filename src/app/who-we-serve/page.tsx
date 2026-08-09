import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { clientTypes, whoWeServeIntro, whoWeServeCta } from "@/content/who-we-serve";
import { capabilityMap } from "@/content/capabilities";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Who We Serve",
  description:
    "Stallion supports early-stage and growth-stage MedTech companies, established and global manufacturers, suppliers and contract manufacturers, companies entering India and APAC, and investor teams needing technical perspective.",
  path: "/who-we-serve",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Who We Serve", href: "/who-we-serve" },
];

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={whoWeServeIntro.eyebrow}
        heading={whoWeServeIntro.heading}
        copy={whoWeServeIntro.copy}
        crumbs={crumbs}
      />

      <section className="section-y bg-white">
        <Container>
          <ul className="space-y-px overflow-hidden rounded-panel border border-ink-100 bg-ink-100">
            {clientTypes.map((clientType, index) => (
              <li key={clientType.id} className="bg-white p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
                  <div>
                    <span className="text-[0.7rem] font-semibold tabular-nums text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="type-h3 mt-2 text-ink-950">{clientType.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {clientType.situation}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                      What tends to be needed
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {clientType.needs.map((need) => (
                        <li key={need} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                          />
                          {need}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {clientType.capabilities.map((slug) => {
                        const capability = capabilityMap[slug];
                        if (!capability) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/capabilities/${slug}`}
                              className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-sand-50 px-3.5 py-1.5 text-xs font-medium text-ink-700 transition-[border-color,color,transform] hover:border-accent-400 hover:text-ink-950 active:scale-[0.97]"
                            >
                              {capability.shortTitle}
                              <ArrowRight
                                className="cta-arrow h-3 w-3 opacity-50"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    {clientType.qualifier ? (
                      <p className="mt-5 flex gap-2.5 rounded-xl bg-sand-50 px-4 py-3 text-xs leading-relaxed text-ink-500">
                        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-500" aria-hidden="true" />
                        {clientType.qualifier}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection
        heading={whoWeServeCta.heading}
        copy={whoWeServeCta.copy}
        cta={whoWeServeCta.cta}
        secondaryCta={{ label: "Explore capabilities", href: "/capabilities" }}
      />
    </>
  );
}
