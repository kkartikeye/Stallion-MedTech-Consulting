/**
 * Insights platform.
 *
 * IMPORTANT — every article below is an unpublished DRAFT written as a
 * starting point for review, marked `status: "draft"`. Drafts render with a
 * visible review banner and are excluded from the sitemap and from search
 * indexing until approved.
 *
 * To publish: review and edit the body, set `status: "published"`, and set
 * a real `publishedAt` date. Nothing else needs to change.
 *
 * Constraints for anything added here: no invented statistics, no citations
 * to sources that were not actually read, no claimed client examples, and
 * no regulatory interpretation presented as authoritative guidance.
 */

export type InsightCategory =
  | "Product Development"
  | "Strategy"
  | "Regulatory & Quality"
  | "Engineering"
  | "Digital Health"
  | "Manufacturing & Operations"
  | "Commercialization"
  | "Program Execution"
  | "Global MedTech";

export const insightCategories: InsightCategory[] = [
  "Product Development",
  "Strategy",
  "Regulatory & Quality",
  "Engineering",
  "Digital Health",
  "Manufacturing & Operations",
  "Commercialization",
  "Program Execution",
  "Global MedTech",
];

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  category: InsightCategory;
  author: string;
  /** ISO date. Only meaningful once status is "published". */
  publishedAt: string;
  status: "draft" | "published";
  body: ArticleBlock[];
  relatedCapability?: string;
  relatedSector?: string;
};

export const insights: Insight[] = [
  {
    slug: "design-transfer-fails-on-assumptions",
    title: "Design transfer fails on assumptions, not on tooling",
    summary:
      "By the time a transfer is visibly in trouble, the decisions that caused it are eighteen months old. The useful work happens much earlier than the transfer plan suggests.",
    category: "Manufacturing & Operations",
    author: "Stallion MedTech Consulting",
    publishedAt: "",
    status: "draft",
    relatedCapability: "manufacturing-supply-chain",
    relatedSector: "medical-devices",
    body: [
      {
        type: "paragraph",
        text: "Design transfer is usually described as a phase. It is more accurately a test — the point at which every assumption the development team made about manufacturability gets measured against a real process, a real supplier, and a real operator.",
      },
      {
        type: "paragraph",
        text: "When a transfer goes badly, the post-mortem tends to focus on the transfer period itself: the tooling was late, the validation runs failed, the supplier could not hold tolerance. Those are symptoms. The decisions that determined the outcome were made much earlier, usually without anyone from manufacturing in the room.",
      },
      { type: "heading", text: "The assumptions that cause the damage" },
      {
        type: "paragraph",
        text: "A small number of assumption types account for a disproportionate share of transfer difficulty:",
      },
      {
        type: "list",
        items: [
          "That a tolerance achievable in prototype quantities is achievable at production volume and rate.",
          "That the supplier who built prototypes is the right supplier for production — or that switching is a commercial exercise rather than a technical one.",
          "That process validation can be planned once the design is frozen, rather than influencing what gets frozen.",
          "That the receiving site's capability matches the sending site's, because both are part of the same company.",
          "That documentation written for design intent is sufficient for someone building the product for the first time.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are unusual or careless. They are reasonable working assumptions that were never converted into verified facts, largely because the person who would have challenged them was not involved when they were made.",
      },
      { type: "heading", text: "Readiness is a set of criteria, not a date" },
      {
        type: "paragraph",
        text: "The most common structural weakness in a transfer plan is that readiness is expressed as a milestone. A date arrives, a gate meeting happens, and the program proceeds because stopping is expensive.",
      },
      {
        type: "paragraph",
        text: "Defining readiness as explicit criteria changes the conversation. Which processes have demonstrated capability, at what volume, with what data? Which suppliers are qualified against the actual production specification rather than the prototype one? Which documentation has been used by someone who did not write it? These questions have answers that are either yes or no, and they are considerably harder to defer than a date.",
      },
      { type: "heading", text: "What to do earlier" },
      {
        type: "paragraph",
        text: "The practical intervention is unglamorous: bring manufacturing and supplier engineering into design decisions early enough that their input can still change something, and convert assumptions into verified facts on a schedule rather than at the gate.",
      },
      {
        type: "list",
        items: [
          "Identify the three or four assumptions the transfer most depends on, in writing, during development.",
          "Assign each one an owner and a date by which it becomes a verified fact.",
          "Run design for manufacturability review as a decision point, not a courtesy review.",
          "Test the documentation by having someone unfamiliar with the design build from it.",
          "Define gate criteria before the gate date is under pressure.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this eliminates transfer risk. It moves the discovery of that risk to a point in the program where the cost of responding is measured in weeks rather than quarters.",
      },
    ],
  },
  {
    slug: "sustaining-engineering-prioritization",
    title: "Why sustaining engineering always loses the argument",
    summary:
      "The installed base competes with new product development for the same engineers, and loses — until something escalates. The fix is structural, not motivational.",
    category: "Engineering",
    author: "Stallion MedTech Consulting",
    publishedAt: "",
    status: "draft",
    relatedCapability: "post-market-lifecycle",
    relatedSector: "capital-equipment",
    body: [
      {
        type: "paragraph",
        text: "Ask almost any MedTech engineering leader whether sustaining work is adequately resourced, and the answer is no. Ask what happens when a sustaining task and a new product task compete for the same engineer, and the answer is consistent across organizations: the new product wins.",
      },
      {
        type: "paragraph",
        text: "This is not a failure of judgment. It is what the incentive structure produces. New product development has a launch date, an executive sponsor, and a revenue number attached. Sustaining work has a backlog.",
      },
      { type: "heading", text: "The costs are real but arrive late" },
      {
        type: "paragraph",
        text: "Deferred sustaining work does not disappear; it converts into other categories. A recurring field issue becomes a complaint trend. An unaddressed component obsolescence becomes a supply interruption. A growing change backlog becomes an audit observation about change control. By the time the cost is visible, it has been reclassified as a quality problem or a supply problem, and the connection to the original deferral is lost.",
      },
      { type: "heading", text: "Three structural changes that help" },
      {
        type: "paragraph",
        text: "Exhorting teams to take sustaining more seriously does not work, because the individual decisions being made are locally rational. What changes behaviour is structure.",
      },
      {
        type: "list",
        items: [
          "Make the backlog visible as a portfolio. A list of tickets is invisible to leadership; a portfolio view with aging, risk, and ownership is not.",
          "Protect capacity rather than assigning priority. Priority is renegotiated under pressure. Ring-fenced capacity is harder to raid, and the raid becomes a visible decision when it happens.",
          "Give recurring issues a single owner. Incidents handled individually never converge on a root cause, and the same investigation gets started repeatedly by different people.",
        ],
      },
      { type: "heading", text: "Prioritization criteria that survive escalation" },
      {
        type: "paragraph",
        text: "Most sustaining backlogs are prioritized by whoever escalated most recently. Replacing that with explicit criteria — patient risk, field impact, regulatory exposure, supply continuity, cost — does not remove escalation, but it forces an escalation to argue against a stated standard rather than simply be louder.",
      },
      {
        type: "paragraph",
        text: "The organizations that handle this well are rarely the ones that care most. They are the ones where the trade-off is made explicitly, by someone with the authority to make it, in a forum where it is recorded.",
      },
    ],
  },
  {
    slug: "software-inside-a-device-quality-system",
    title: "Shipping software inside a device quality system",
    summary:
      "Iterative delivery and discrete change control are both reasonable. Making them coexist requires designing the lifecycle process for both, rather than letting one quietly win.",
    category: "Digital Health",
    author: "Stallion MedTech Consulting",
    publishedAt: "",
    status: "draft",
    relatedCapability: "digital-software-ai",
    relatedSector: "digital-health-samd",
    body: [
      {
        type: "paragraph",
        text: "Software organizations release continuously and treat change as the normal state. Device quality systems were designed around discrete, controlled, documented change. Both positions are defensible. The difficulty is that most organizations never explicitly decide how the two will coexist, so one of them wins by attrition.",
      },
      { type: "heading", text: "Two failure modes" },
      {
        type: "paragraph",
        text: "When the quality system wins by attrition, software delivery slows to the cadence of documentation. Engineers experience the process as an obstacle, work accumulates in large batches to amortize the overhead, and large batches carry more risk than the frequent small changes the process was trying to control.",
      },
      {
        type: "paragraph",
        text: "When engineering practice wins by attrition, the documented system and the actual system diverge. Records get reconstructed after the fact. This is the more dangerous failure, because it is invisible until an audit, and because reconstructed records are exactly what scrutiny is designed to detect.",
      },
      { type: "heading", text: "Designing for both" },
      {
        type: "paragraph",
        text: "The productive framing is not how much process software needs, but which changes genuinely carry risk and therefore warrant control commensurate with it.",
      },
      {
        type: "list",
        items: [
          "Define change categories by risk, and match the required evidence to the category rather than applying one workflow to everything.",
          "Generate records from the work itself. Evidence produced by the toolchain during development is both cheaper and more trustworthy than evidence assembled afterward.",
          "Decide the release model deliberately — including whether every build is a release, and what a release means for a connected product with remote update capability.",
          "Treat automated verification as a first-class part of the validation strategy rather than something separate that engineers do for themselves.",
          "Plan post-market monitoring as part of the lifecycle, not as an obligation discovered after launch.",
        ],
      },
      { type: "heading", text: "AI-enabled features raise the stakes" },
      {
        type: "paragraph",
        text: "Where a product includes models whose behaviour can change with retraining or data drift, the question of what constitutes a controlled change becomes sharper. An organization that has not resolved the basic software lifecycle question will not resolve this one either. Getting the underlying process right first is the practical prerequisite.",
      },
      {
        type: "paragraph",
        text: "Specific regulatory expectations vary by market, product classification, and intended use, and change over time. Any organization working through these questions should confirm current requirements with appropriately qualified regulatory professionals for its specific product and markets.",
      },
    ],
  },
  {
    slug: "cross-border-programs-handoff-problem",
    title: "In cross-border programs, the handoff is the whole problem",
    summary:
      "Distributed engineering economics work when the handoffs do. Most of the expected benefit is lost in the seams between sites, not in the work itself.",
    category: "Global MedTech",
    author: "Stallion MedTech Consulting",
    publishedAt: "",
    status: "draft",
    relatedCapability: "india-global-execution",
    relatedSector: "contract-manufacturing-suppliers",
    body: [
      {
        type: "paragraph",
        text: "Organizations distributing engineering or manufacturing work across regions usually model the decision on capacity and cost. The model is rarely wrong about either. What it tends to omit is coordination cost, which is where the expected benefit is most often lost.",
      },
      { type: "heading", text: "Where the time actually goes" },
      {
        type: "paragraph",
        text: "In a program split across distant time zones, a question that would take ten minutes to resolve in a shared office can consume a full day. That cost is tolerable occasionally and severe when it is structural — when the operating model requires a handoff for routine decisions.",
      },
      {
        type: "list",
        items: [
          "Ownership defined by task rather than by outcome, so any non-trivial question requires the other site.",
          "Specifications that assume shared context, tribal knowledge, or familiarity with prior decisions.",
          "Quality expectations communicated once at kickoff and assumed understood thereafter.",
          "Review cycles that require synchronous participation from both sites.",
          "Escalation paths that only exist in one region's working hours.",
        ],
      },
      { type: "heading", text: "Designing the model rather than inheriting it" },
      {
        type: "paragraph",
        text: "The organizations that get this right treat the operating model as a design problem with the same seriousness as the technical architecture. Ownership is assigned so each site can progress independently for a meaningful stretch of work. Interfaces between sites are defined as deliberately as interfaces between subsystems.",
      },
      {
        type: "paragraph",
        text: "Expectations get written down with worked examples, because an abstract quality standard and a marked-up example of an acceptable and unacceptable output are not equivalent teaching tools.",
      },
      { type: "heading", text: "Capability does not accrue automatically" },
      {
        type: "paragraph",
        text: "A common assumption is that a regional team becomes progressively more autonomous simply by doing the work. In practice, capability transfers when someone plans for it: deliberate exposure to decisions rather than tasks, explicit succession of ownership, and a defined point at which the receiving site owns an area outright.",
      },
      {
        type: "paragraph",
        text: "Without that plan, the distributed model can persist for years in its most expensive configuration — full coordination overhead, limited autonomy, and the original economic case never realized.",
      },
    ],
  },
];

export const publishedInsights = insights.filter((insight) => insight.status === "published");

/** Drafts are visible on the site (clearly marked) but never indexed. */
export const draftInsights = insights.filter((insight) => insight.status === "draft");

export function getInsight(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

/** Average adult reading speed, rounded up, minimum one minute. */
export function readingMinutes(insight: Insight): number {
  const words = insight.body
    .map((block) => (block.type === "list" ? block.items.join(" ") : block.text))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 225));
}

export const insightsIntro = {
  eyebrow: "INSIGHTS",
  heading: "Notes on how MedTech work actually goes",
  copy: "Practical perspective on the problems that recur across medical technology programs — written for the people responsible for delivering them.",
};

export const insightsDraftNotice =
  "These pieces are unpublished drafts prepared for review. They are excluded from search indexing until approved.";
