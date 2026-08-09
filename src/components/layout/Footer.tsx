import Link from "next/link";
import { Mail, MapPin, Phone, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/content/capabilities";
import { sectorsWithPages } from "@/content/sectors";
import {
  approachNav,
  businessDetails,
  isPlaceholder,
  legalDisclaimer,
  siteConfig,
} from "@/content/site";

const contactRows = [
  { icon: Mail, label: "Email", value: businessDetails.email, href: (v: string) => `mailto:${v}` },
  { icon: Phone, label: "Phone", value: businessDetails.phone, href: (v: string) => `tel:${v}` },
  { icon: Link2, label: "LinkedIn", value: businessDetails.linkedinUrl, href: (v: string) => v },
  { icon: MapPin, label: "Location", value: businessDetails.location },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link-underline w-fit text-ink-700 transition hover:text-ink-950"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-sand-50">
      <Container className="section-y">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2.6fr] lg:gap-14">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
              {siteConfig.positioning}
            </p>
            <Button href="/contact" variant="primary" tone="light" size="sm" className="mt-6">
              Start a Conversation
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn
              title="Capabilities"
              links={capabilities.slice(0, 6).map((capability) => ({
                label: capability.shortTitle,
                href: `/capabilities/${capability.slug}`,
              }))}
            />
            <FooterColumn
              title="More capabilities"
              links={[
                ...capabilities.slice(6).map((capability) => ({
                  label: capability.shortTitle,
                  href: `/capabilities/${capability.slug}`,
                })),
              ]}
            />
            <FooterColumn
              title="MedTech Sectors"
              links={[
                ...sectorsWithPages.slice(0, 6).map((sector) => ({
                  label: sector.shortTitle,
                  href: `/medtech/${sector.slug}`,
                })),
                { label: "All sectors", href: "/medtech" },
              ]}
            />
            <FooterColumn
              title="Firm"
              links={[
                ...approachNav.map((item) => ({ label: item.label, href: item.href })),
                { label: "Insights", href: "/insights" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-panel border border-ink-100 bg-white p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {contactRows.map((row) => {
            const placeholder = isPlaceholder(row.value);
            return (
              <div key={row.label} className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-sand-100 text-ink-900">
                  <row.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    {row.label}
                  </div>
                  {placeholder || !row.href ? (
                    <div className={`mt-1 text-sm ${placeholder ? "text-ink-500" : "text-ink-700"}`}>
                      {row.value}
                    </div>
                  ) : (
                    <a
                      href={row.href(row.value)}
                      className="mt-1 block break-all text-sm font-medium text-ink-900 transition hover:text-ink-600"
                    >
                      {row.value}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-5 text-xs leading-relaxed text-ink-500">
          {legalDisclaimer}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-ink-200 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="link-underline w-fit hover:text-ink-950">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
