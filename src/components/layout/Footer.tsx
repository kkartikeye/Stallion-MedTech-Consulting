import Link from "next/link";
import { Mail, MapPin, Phone, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import {
  businessDetails,
  isPlaceholder,
  legalDisclaimer,
  primaryNav,
  siteConfig,
} from "@/content/site";

const contactRows = [
  { icon: Mail, label: "Email", value: businessDetails.email, href: (v: string) => `mailto:${v}` },
  { icon: Phone, label: "Phone", value: businessDetails.phone, href: (v: string) => `tel:${v}` },
  { icon: Link2, label: "LinkedIn", value: businessDetails.linkedinUrl, href: (v: string) => v },
  { icon: MapPin, label: "Location", value: businessDetails.location },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="section-y">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1.2fr] lg:gap-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {siteConfig.positioning}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline w-fit text-slate-700 transition hover:text-slate-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="link-underline w-fit text-slate-700 transition hover:text-slate-950"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-panel border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="text-sm font-semibold text-slate-950">{siteConfig.name}</div>
            <div className="mt-5 space-y-4">
              {contactRows.map((row) => {
                const placeholder = isPlaceholder(row.value);
                return (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      <row.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {row.label}
                      </div>
                      {placeholder || !row.href ? (
                        <div className={`mt-1 text-sm ${placeholder ? "text-slate-400" : "text-slate-700"}`}>
                          {row.value}
                        </div>
                      ) : (
                        <a
                          href={row.href(row.value)}
                          className="mt-1 block break-all text-sm font-medium text-slate-900 transition hover:text-slate-700"
                        >
                          {row.value}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button href="/contact" variant="primary" tone="light" className="mt-5 w-full">
              Discuss a Project
            </Button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-xs leading-relaxed text-slate-500">
          {legalDisclaimer}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          {isPlaceholder(businessDetails.privacyPolicyUrl) ? (
            <span>{businessDetails.privacyPolicyUrl} — Privacy Policy</span>
          ) : (
            <a href={businessDetails.privacyPolicyUrl} className="link-underline w-fit hover:text-slate-950">
              Privacy Policy
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}
