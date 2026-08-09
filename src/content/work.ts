/**
 * Representative work.
 *
 * IMPORTANT — no client work is described here. Stallion has not published
 * approved client case studies, so this file contains two things:
 *
 *  1. `engagementArchetypes` — illustrative engagement *structures*. They
 *     describe how a type of work would be scoped, staffed, and run. They
 *     are explicitly labelled as illustrative in the UI and contain no
 *     client names, metrics, outcomes, or claimed results.
 *
 *  2. `caseStudies` — the data model for real, client-approved case
 *     studies, currently empty. When approved cases exist, add them here
 *     and the /work page renders them ahead of the archetypes with no
 *     component changes.
 *
 * Do not add invented outcomes, percentages, client names, or logos to
 * either structure.
 */

export type EngagementArchetype = {
  id: string;
  title: string;
  /** The circumstance that typically triggers this engagement. */
  situation: string;
  /** Why it is hard. */
  challenge: string;
  /** How Stallion would structure it. */
  approach: string[];
  /** What Stallion is accountable for. */
  stallionRole: string;
  /** Which client functions are typically involved. */
  functions: string[];
  deliverables: string[];
  capabilitySlug: string;
  engagementModelId: string;
};

export const engagementArchetypes: EngagementArchetype[] = [
  {
    id: "design-transfer-program",
    title: "Global Design Transfer Program",
    situation:
      "A device is approaching transfer to a manufacturing site or contract manufacturer in another region, with the launch date already committed.",
    challenge:
      "Design assumptions have not been tested against the receiving site's process capability, and the transfer plan exists as a milestone rather than a plan. Engineering, quality, and operations each hold part of the picture.",
    approach: [
      "Assess transfer readiness against explicit criteria rather than a milestone date",
      "Build a single transfer plan spanning design, process validation, supplier, and tooling readiness",
      "Establish a working cadence across sending and receiving sites in different time zones",
      "Run risk and issue closure to a defined gate before ramp",
    ],
    stallionRole:
      "Program lead accountable for the transfer plan, cross-site coordination, and readiness reporting to the steering group.",
    functions: ["R&D", "Manufacturing Engineering", "Quality", "Supply Chain", "Regulatory"],
    deliverables: [
      "Transfer readiness assessment with gap closure plan",
      "Integrated transfer plan and gate criteria",
      "Cross-site working cadence and escalation structure",
      "Risk register with named owners",
    ],
    capabilitySlug: "manufacturing-supply-chain",
    engagementModelId: "embedded",
  },
  {
    id: "sustaining-portfolio",
    title: "Cross-Functional Sustaining Portfolio",
    situation:
      "Field issues, complaints, and improvement requests are accumulating on a mature product family, handled reactively by whoever is available.",
    challenge:
      "No consolidated view of the backlog exists, priorities are set by escalation, and sustaining work loses every resourcing contest against new product development.",
    approach: [
      "Consolidate open field issues, changes, and improvement requests into one visible portfolio",
      "Establish prioritization criteria that survive contact with an escalation",
      "Assign single-threaded ownership to recurring issues rather than individual incidents",
      "Set a review cadence with the authority to make trade-off decisions",
    ],
    stallionRole:
      "Sustaining lead owning the portfolio view, prioritization process, and cross-functional coordination of active investigations.",
    functions: ["Sustaining Engineering", "Quality", "Service", "Manufacturing", "Regulatory"],
    deliverables: [
      "Consolidated sustaining portfolio with prioritization logic",
      "Ownership map for recurring issues",
      "Investigation coordination plan",
      "Review cadence and decision framework",
    ],
    capabilitySlug: "post-market-lifecycle",
    engagementModelId: "embedded",
  },
  {
    id: "program-recovery",
    title: "Development Program Recovery",
    situation:
      "A development program has missed several milestones. Each replan has been more optimistic than the last, and confidence in reported status has eroded.",
    challenge:
      "The plan reflects intent rather than dependencies. Accountability is distributed across functions to the point where no one owns the outcome, and the real constraints are not visible to leadership.",
    approach: [
      "Independent assessment of actual status, separate from reported status",
      "Rebuild the plan from dependencies and capacity rather than from the target date",
      "Establish decision rights so blocking questions get resolved rather than escalated indefinitely",
      "Report candidly, including the parts leadership will not want to hear",
    ],
    stallionRole:
      "Program lead accountable for the recovery plan and for honest status reporting to the executive sponsor.",
    functions: ["R&D", "Program Management", "Quality", "Regulatory", "Operations"],
    deliverables: [
      "Independent program assessment",
      "Dependency-based recovery plan with critical path",
      "Governance and decision-rights structure",
      "Executive reporting pack and cadence",
    ],
    capabilitySlug: "program-portfolio-transformation",
    engagementModelId: "embedded",
  },
  {
    id: "operating-model",
    title: "Product Development Operating Model",
    situation:
      "A growing company's development practice varies by team. Process documentation has accumulated, but execution consistency has not improved with it.",
    challenge:
      "Procedural weight has increased faster than clarity. Teams work around the process, which makes the documented system and the actual system diverge — a problem that eventually surfaces in an audit.",
    approach: [
      "Map how development actually runs, not how the procedures describe it",
      "Identify where process weight adds risk control and where it only adds delay",
      "Redesign the phase structure and deliverable set around real decision points",
      "Support adoption, because a redesigned process that nobody follows changes nothing",
    ],
    stallionRole:
      "Advisory lead through assessment and redesign, with embedded support during adoption.",
    functions: ["R&D", "Quality", "Program Management", "Regulatory"],
    deliverables: [
      "Current-state assessment of development practice",
      "Redesigned phase structure and deliverable set",
      "Updated procedures and templates",
      "Adoption and training plan",
    ],
    capabilitySlug: "product-development-rd",
    engagementModelId: "work-package",
  },
  {
    id: "india-execution",
    title: "Global-to-India Engineering Program",
    situation:
      "An organization is expanding engineering or manufacturing activity into India and the distributed model is producing more coordination overhead than capacity gain.",
    challenge:
      "Specifications assume shared context that does not exist across sites, handoffs cost a full day each, and quality expectations were communicated once at kickoff.",
    approach: [
      "Define the operating model explicitly: what is owned where, and what requires joint decision",
      "Restructure handoffs so each site can progress without waiting on the other",
      "Align technical and quality expectations in writing, with worked examples",
      "Build local capability deliberately rather than assuming it accrues over time",
    ],
    stallionRole:
      "Cross-border program lead coordinating both sides and accountable for the joint delivery plan.",
    functions: ["R&D", "Manufacturing", "Quality", "Supply Chain", "Local Engineering"],
    deliverables: [
      "Cross-border operating model definition",
      "Revised handoff and cadence structure",
      "Technical and quality expectation alignment documentation",
      "Capability development plan",
    ],
    capabilitySlug: "india-global-execution",
    engagementModelId: "global-delivery",
  },
  {
    id: "quality-remediation",
    title: "Quality System Remediation Program",
    situation:
      "Audit or inspection findings require a remediation plan, and the organization needs it to be credible as well as complete.",
    challenge:
      "The technical content of the fixes is generally understood. What is missing is sequencing, ownership, and the capacity to execute alongside normal operations — which is why previous commitments slipped.",
    approach: [
      "Translate findings into a work breakdown with named owners and realistic durations",
      "Sequence by risk and dependency rather than by finding number",
      "Track closure with effectiveness criteria defined up front",
      "Report progress in a form that stands up to external scrutiny",
    ],
    stallionRole:
      "Program lead for remediation planning, tracking, and reporting, working alongside the client's quality leadership.",
    functions: ["Quality", "R&D", "Manufacturing", "Regulatory", "Executive Sponsor"],
    deliverables: [
      "Remediation program plan with owners and sequencing",
      "Closure tracking with effectiveness criteria",
      "Executive and audit-ready progress reporting",
      "Resource and capacity plan",
    ],
    capabilitySlug: "quality-compliance",
    engagementModelId: "transformation",
  },
];

/**
 * Real, client-approved case studies. Empty by design.
 *
 * To publish one: confirm written client approval, then add an entry. The
 * /work page renders these above the illustrative archetypes automatically.
 * Every field must be factual — leave `outcome` undefined rather than
 * describing a result that was not measured.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  anonymizedClient: string;
  situation: string;
  challenge: string;
  approach: string[];
  stallionRole: string;
  functions: string[];
  deliverables: string[];
  outcome?: string;
  capabilitySlug: string;
  sectorSlug: string;
  publishedAt: string;
};

export const caseStudies: CaseStudy[] = [];

export const workIntro = {
  eyebrow: "REPRESENTATIVE WORK",
  heading: "How these engagements are actually structured",
  copy: "Rather than describe client work we cannot yet name, these are the engagement structures themselves: the situation, why it is hard, how Stallion would scope it, and what the client ends up holding.",
};

export const workDisclaimer =
  "These are illustrative engagement structures, not client case studies. They describe how Stallion scopes and runs each type of work. No client names, results, or performance claims are represented. Client case studies will be published only with written approval.";

export const workCta = {
  heading: "Recognize one of these?",
  copy: "If your situation resembles one of these structures, a short conversation will establish how closely it actually maps.",
  cta: { label: "Start a Conversation", href: "/contact" },
};
