import { Link2, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { contactIntro, responseNote, contactAlternatives } from "@/content/contact";
import { businessDetails, hasConfirmedContactDetail, isPlaceholder } from "@/content/site";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Describe the MedTech challenge you're working through. Stallion will help define the problem, determine the expertise it requires, and propose a structure for the engagement.",
  path: "/contact",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const detailRows = [
  { icon: Mail, label: "Email", value: businessDetails.email, href: (v: string) => `mailto:${v}` },
  { icon: Phone, label: "Phone", value: businessDetails.phone, href: (v: string) => `tel:${v}` },
  { icon: Link2, label: "LinkedIn", value: businessDetails.linkedinUrl, href: (v: string) => v },
  { icon: MapPin, label: "Location", value: businessDetails.location },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow={contactIntro.eyebrow}
        heading={contactIntro.heading}
        copy={contactIntro.copy}
        crumbs={crumbs}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <h2 className="text-lg font-semibold text-ink-950">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {[
                  "We read your message and follow up with questions if the situation is unclear.",
                  "A short call to understand the problem, the constraints, and what has already been tried.",
                  "If there is a fit, a written proposal covering scope, approach, and how the engagement would be structured.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3.5">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-[0.7rem] font-semibold text-accent-700">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-600">{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 rounded-card border border-ink-100 bg-sand-50 p-5 text-sm leading-relaxed text-ink-600">
                {responseNote}
              </p>

              <div className="mt-10">
                <h2 className="text-lg font-semibold text-ink-950">
                  {contactAlternatives.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {hasConfirmedContactDetail
                    ? contactAlternatives.copy
                    : "Direct contact details are being finalized. The form is the reliable route in the meantime."}
                </p>

                <ul className="mt-5 space-y-5">
                  {detailRows.map((row) => {
                    const placeholder = isPlaceholder(row.value);
                    return (
                      <li key={row.label} className="flex items-start gap-3">
                        <row.icon
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
                            {row.label}
                          </p>
                          {placeholder || !row.href ? (
                            <p
                              className={`mt-0.5 text-sm ${placeholder ? "text-ink-500" : "text-ink-700"}`}
                            >
                              {row.value}
                            </p>
                          ) : (
                            <a
                              href={row.href(row.value)}
                              className="mt-0.5 block break-all text-sm text-ink-700 transition-colors hover:text-accent-700"
                            >
                              {row.value}
                            </a>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="rounded-panel border border-ink-100 bg-white p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
