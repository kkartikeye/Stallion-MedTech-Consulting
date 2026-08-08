import { Link2, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactIntro } from "@/content/contact";
import { businessDetails, isPlaceholder } from "@/content/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell Stallion MedTech Consulting about the project, challenge, or capability gap you're working through.",
});

const detailRows = [
  { icon: Mail, label: "Email", value: businessDetails.email, href: (v: string) => `mailto:${v}` },
  { icon: Phone, label: "Phone", value: businessDetails.phone, href: (v: string) => `tel:${v}` },
  { icon: Link2, label: "LinkedIn", value: businessDetails.linkedinUrl, href: (v: string) => v },
  { icon: MapPin, label: "Location", value: businessDetails.location },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow={contactIntro.eyebrow} heading={contactIntro.heading} copy={contactIntro.copy} />

      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Contact details</h2>
              <ul className="mt-5 space-y-5">
                {detailRows.map((row) => {
                  const placeholder = isPlaceholder(row.value);
                  return (
                    <li key={row.label} className="flex items-start gap-3">
                      <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">{row.label}</p>
                        {placeholder || !row.href ? (
                          <p className={placeholder ? "text-sm text-slate-400" : "text-sm text-slate-700"}>
                            {row.value}
                          </p>
                        ) : (
                          <a href={row.href(row.value)} className="text-sm text-slate-700 hover:text-accent-700">
                            {row.value}
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 rounded-card border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                We typically respond within a few business days. For time-sensitive requests, please
                note that in your project description.
              </div>
            </div>

            <div className="rounded-panel border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
