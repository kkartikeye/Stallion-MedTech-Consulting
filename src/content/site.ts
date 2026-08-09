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
  description?: string;
};

/**
 * Top-level navigation. `menu` selects which mega-menu panel opens on
 * desktop; items without one are plain links. Panel contents are derived
 * from the capability and sector data so the menu never drifts from the
 * pages that actually exist.
 */
export type NavMenuKey = "capabilities" | "medtech" | "approach";

export type PrimaryNavItem = NavItem & {
  menu?: NavMenuKey;
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stallionmedtech-consulting.vercel.app";

export const siteConfig = {
  name: "Stallion MedTech Consulting",
  shortName: "Stallion MedTech",
  wordmarkLine1: "Stallion",
  wordmarkLine2: "MedTech Consulting",
  tagline: "Strategy to execution across the MedTech lifecycle.",
  positioning:
    "Strategic enough to advise. Technical enough to understand the product. Practical enough to execute.",
  supportingMessage:
    "Stallion helps medical technology companies solve problems that cross engineering, quality, regulatory, operations, and commercial boundaries.",
  description:
    "MedTech consulting across strategy, product development, engineering, regulatory, quality, manufacturing, commercialization, and program delivery — with particular strength connecting global organizations to India-based engineering and supply.",
  foundingYear: 2024,
} as const;

export const primaryNav: PrimaryNavItem[] = [
  { label: "Capabilities", href: "/capabilities", menu: "capabilities" },
  { label: "MedTech Sectors", href: "/medtech", menu: "medtech" },
  { label: "How We Work", href: "/how-we-work", menu: "approach" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

/** Links shown in the "How We Work" mega-menu panel. */
export const approachNav: NavItem[] = [
  {
    label: "Our Approach",
    href: "/how-we-work",
    description: "The five stages every engagement moves through.",
  },
  {
    label: "Engagement Models",
    href: "/how-we-work#engagement-models",
    description: "Advisory, embedded, integrated team, and specialist support.",
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    description: "From early-stage MedTech to global manufacturers.",
  },
  {
    label: "Representative Work",
    href: "/work",
    description: "Anonymized engagement types and how they were structured.",
  },
];

export const primaryCta: NavItem = { label: "Start a Conversation", href: "/contact" };

/**
 * Business details not yet confirmed. Values wrapped in square brackets are
 * rendered as visible placeholders (not live links) by the `isPlaceholder`
 * helper below, so nothing on the site ever points to a dead href.
 *
 * Replace each bracketed value with the real detail before publishing.
 */
export const businessDetails = {
  email: "[BUSINESS EMAIL]",
  phone: "[PHONE]",
  linkedinUrl: "[LINKEDIN URL]",
  location: "[BUSINESS LOCATION]",
  formEndpoint: "/api/contact",
} as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[") && value.endsWith("]");
}

/** True when every business contact detail is still a placeholder. */
export const hasConfirmedContactDetail = [
  businessDetails.email,
  businessDetails.phone,
  businessDetails.linkedinUrl,
].some((value) => !isPlaceholder(value));

export const legalDisclaimer =
  "Stallion MedTech Consulting provides consulting, program leadership, and technical support services. Engagement scope and responsibilities are defined individually. Clients retain responsibility for regulatory submissions, quality-system approvals, clinical decisions, product decisions, and compliance obligations unless otherwise established through a written agreement. Where an engagement requires specifically qualified professionals, Stallion identifies and coordinates appropriately qualified specialists.";

/**
 * Shown wherever the site describes regulated or specialist work, so the
 * distinction between consulting/program support and activities requiring
 * qualified individuals is never blurred.
 */
export const specialistNote =
  "Specialist expertise is incorporated based on engagement requirements. Work requiring specifically qualified professionals is performed by appropriately qualified specialists.";
