/**
 * Homepage narrative.
 *
 * The story order is deliberate: what Stallion is → the breadth of where it
 * helps → where it fits in the lifecycle → the client's own problem in
 * their words → sectors → why this firm → how work is structured →
 * insights → conversation.
 */

export const hero = {
  eyebrow: "MEDTECH CONSULTING & EXECUTION",
  headline: "Strategy to execution across the MedTech lifecycle.",
  supporting:
    "The hardest problems in medical technology cross engineering, quality, regulatory, operations, and commercial lines at once. Stallion works those intersections — strategic enough to advise, technical enough to understand the product, practical enough to deliver.",
  primaryCta: { label: "Discuss a Challenge", href: "/contact" },
  secondaryCta: { label: "Explore Capabilities", href: "/capabilities" },
};

/**
 * "Where we help" — the breadth statement. Deliberately fewer, broader
 * groupings than the twelve capabilities, so the homepage communicates
 * scope without becoming a directory.
 */
export const whereWeHelp = {
  eyebrow: "WHERE WE HELP",
  heading: "Broader than program management",
  copy: "Program leadership is where Stallion started and remains a core strength. It is now one part of a wider capability set spanning the product and business lifecycle.",
  areas: [
    {
      title: "Strategy & Growth",
      detail: "Portfolio, product, and market decisions tested against what can actually be built.",
      capabilitySlug: "strategy-growth",
    },
    {
      title: "Product & R&D",
      detail: "Development programs where technical work and design controls move as one plan.",
      capabilitySlug: "product-development-rd",
    },
    {
      title: "Regulatory & Quality",
      detail: "Pathway strategy, submission programs, and remediation run with real accountability.",
      capabilitySlug: "regulatory-market-access",
    },
    {
      title: "Engineering & Digital",
      detail: "Specialist engineering capacity, software lifecycle, connectivity, and AI-enabled products.",
      capabilitySlug: "engineering-technical",
    },
    {
      title: "Operations & Supply",
      detail: "Design transfer, manufacturing readiness, supplier development, and continuity.",
      capabilitySlug: "manufacturing-supply-chain",
    },
    {
      title: "Commercialization",
      detail: "Launch readiness, market entry, and the channel decisions that determine whether it lands.",
      capabilitySlug: "commercialization",
    },
    {
      title: "Program & Transformation",
      detail: "Program leadership, recovery, portfolio governance, and PMO development.",
      capabilitySlug: "program-portfolio-transformation",
    },
    {
      title: "Lifecycle & Post-Market",
      detail: "Sustaining engineering, field issues, obsolescence, and the long tail after launch.",
      capabilitySlug: "post-market-lifecycle",
    },
  ],
};

export const matrixIntro = {
  eyebrow: "WHERE STALLION ENGAGES",
  heading: "Capability meets lifecycle stage",
  copy: "MedTech problems cross functions and stages at the same time. This is where Stallion can engage — and the intersections are usually where the difficulty actually lives.",
  legend: {
    active: "Common engagement point",
    inactive: "Available as part of a broader program",
  },
};

export const whyStallion = {
  eyebrow: "WHY STALLION",
  heading: "A specialist firm, structured to be useful",
  copy: "Stallion is deliberately small. The engagement model is built around that fact rather than working to obscure it.",
  reasons: [
    {
      title: "Technical fluency, not just process",
      detail:
        "Engineering background means program conversations happen at the level of the actual problem, without translation through a technical intermediary.",
    },
    {
      title: "Strategy and execution in one engagement",
      detail:
        "Advice that never becomes a plan, and delivery that never questions the direction, are both common failure modes. Holding both avoids the handoff between them.",
    },
    {
      title: "Cross-functional operating experience",
      detail:
        "Most of the difficulty in MedTech sits between engineering, quality, regulatory, operations, and commercial. That boundary is the working environment, not an exception.",
    },
    {
      title: "Teams built for the problem",
      detail:
        "Rather than staffing from a fixed bench, Stallion scopes the disciplines the work requires and engages appropriately qualified specialists for them.",
    },
    {
      title: "Senior involvement throughout",
      detail:
        "The person who scopes the engagement stays accountable for delivering it. There is no handoff to a junior team after the proposal.",
    },
    {
      title: "Global reach with an India connection",
      detail:
        "Direct experience coordinating engineering and manufacturing work between mature MedTech markets and India-based teams and suppliers.",
    },
  ],
};

export const closingCta = {
  eyebrow: "START HERE",
  heading: "What challenge are you trying to solve?",
  copy: "Most useful conversations start with a problem rather than a service. Describe the situation and we will help define it, determine which expertise it actually requires, and propose a structure for the engagement.",
  primaryCta: { label: "Start a Conversation", href: "/contact" },
  secondaryCta: { label: "See how we work", href: "/how-we-work" },
};
