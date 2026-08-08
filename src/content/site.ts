/**
 * Central site + business configuration.
 *
 * This is the single place to edit navigation, calls to action, and the
 * business details that are not yet confirmed. Bracketed values such as
 * "[BUSINESS EMAIL]" are intentional placeholders — replace them before
 * publishing and the UI will automatically switch from placeholder text
 * to live links.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stallionmedtech-consulting.vercel.app";

export const siteConfig = {
  name: "Stallion MedTech Consulting",
  shortName: "Stallion MedTech",
  wordmarkLine1: "Stallion",
  wordmarkLine2: "MedTech Consulting",
  tagline: "Leadership for complex MedTech execution.",
  positioning: "One accountable partner—from project definition through execution.",
  supportingMessage:
    "We help medical device companies define, organize, and deliver complex initiatives through experienced project leadership, cross-functional coordination, and technical support tailored to the work.",
  description:
    "Project leadership, program management, product development support, sustaining engineering coordination, and flexible technical capabilities for medical device companies.",
} as const;

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavItem = { label: "Discuss a Project", href: "/contact" };

/**
 * Business details not yet confirmed. Values wrapped in square brackets are
 * rendered as visible placeholders (not live links) by the `isPlaceholder`
 * helper below, so nothing on the site ever points to a dead href.
 */
export const businessDetails = {
  email: "[BUSINESS EMAIL]",
  phone: "[PHONE]",
  linkedinUrl: "[LINKEDIN URL]",
  location: "[BUSINESS LOCATION]",
  formEndpoint: "/api/contact",
  privacyPolicyUrl: "[PRIVACY POLICY URL]",
} as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[") && value.endsWith("]");
}

export const legalDisclaimer =
  "Stallion MedTech Consulting provides project leadership, engineering support, and business consulting services. Engagement scope and responsibilities are defined individually. Clients retain responsibility for regulatory submissions, quality-system approvals, product decisions, and compliance obligations unless otherwise established through a written agreement.";
