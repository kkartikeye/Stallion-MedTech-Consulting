/**
 * The engagement model: how work is framed, structured, and handed back.
 *
 * The five-stage model evolves the original Understand / Structure /
 * Execute / Transition framing by separating alignment (getting agreement
 * on outcomes and decision rights) from structuring the delivery model,
 * because that is where most engagements actually stall.
 */

export type WorkStage = {
  number: string;
  id: string;
  title: string;
  summary: string;
  activities: string[];
  /** What the client has at the end of the stage. */
  output: string;
};

export const howWeWorkIntro = {
  eyebrow: "HOW WE WORK",
  heading: "A consistent model, scaled to the work",
  copy: "Every engagement moves through the same five stages. What changes is the depth of each one, how long it lasts, and how much of the work Stallion leads directly.",
};

export const stages: WorkStage[] = [
  {
    number: "01",
    id: "understand",
    title: "Understand",
    summary:
      "Frame the problem. Separate the stated problem from the actual one before committing anyone to a plan.",
    activities: [
      "Review current state, prior decisions, and the constraints that are genuinely fixed",
      "Talk to the people doing the work, not only the people sponsoring it",
      "Identify stakeholders, dependencies, and where decisions actually get made",
      "Test whether the presenting problem is the real one",
    ],
    output: "A shared, specific statement of the problem and what would count as solving it.",
  },
  {
    number: "02",
    id: "align",
    title: "Align",
    summary:
      "Agree the outcome, the decision rights, and the definition of done — in writing, before work starts.",
    activities: [
      "Define the outcome and the measures that indicate progress",
      "Establish decision rights and escalation paths",
      "Agree scope boundaries, including what is explicitly out of scope",
      "Confirm reporting cadence and audience",
    ],
    output: "A written engagement definition with scope, outcomes, ownership, and governance.",
  },
  {
    number: "03",
    id: "build",
    title: "Build",
    summary:
      "Assemble the right team and the right plan. Specialist expertise is scoped to the work rather than assumed.",
    activities: [
      "Determine which disciplines the work genuinely requires",
      "Identify and engage appropriately qualified specialists",
      "Build a risk-aware, dependency-mapped plan",
      "Set up the working structure: cadence, tooling, and reporting",
    ],
    output: "A resourced plan and a team structured for the specific problem.",
  },
  {
    number: "04",
    id: "deliver",
    title: "Deliver",
    summary:
      "Execute, resolve issues, and keep status honest. Momentum comes from decisions being made, not from meetings being held.",
    activities: [
      "Lead day-to-day execution and cross-functional coordination",
      "Drive issues to closure and manage risk as it emerges",
      "Report progress candidly on the agreed cadence, including bad news early",
      "Adjust the plan when reality requires it, visibly",
    ],
    output: "Delivered work, with a documented trail of decisions and changes.",
  },
  {
    number: "05",
    id: "transfer",
    title: "Transfer",
    summary:
      "Leave capability behind. The engagement should end with the client able to carry the work without us.",
    activities: [
      "Complete and hand off agreed deliverables",
      "Transfer knowledge, documentation, and working structures to the client team",
      "Confirm ongoing ownership by name, not by function",
      "Agree what, if anything, warrants continued support",
    ],
    output: "Client ownership, documented, with no dependency on Stallion to continue.",
  },
];

export type EngagementModel = {
  id: string;
  title: string;
  description: string;
  /** Typical shape — deliberately qualitative, no invented pricing. */
  bestFor: string;
};

export const engagementModelsIntro = {
  eyebrow: "ENGAGEMENT MODELS",
  heading: "Not every engagement starts with a project manager",
  copy: "The model follows the problem. Some engagements are a two-week assessment; others are a multi-workstream delivery team. These are the shapes work usually takes.",
};

export const engagementModels: EngagementModel[] = [
  {
    id: "advisory",
    title: "Advisory",
    description:
      "Ongoing access to a senior perspective on decisions in flight — strategy, structure, sequencing, or a specific technical judgement call.",
    bestFor: "Leaders who need a sounding board rather than added headcount.",
  },
  {
    id: "assessment",
    title: "Assessment",
    description:
      "A short, structured review of a program, process, supplier, or quality system, concluding with findings and a recommended path.",
    bestFor: "Situations where the diagnosis is genuinely contested.",
  },
  {
    id: "work-package",
    title: "Defined Work Package",
    description:
      "A scoped body of work with agreed deliverables and a fixed endpoint — a transfer plan, a remediation program, a market assessment.",
    bestFor: "Clear scope with a definable finish line.",
  },
  {
    id: "embedded",
    title: "Embedded Expertise",
    description:
      "A Stallion lead works inside the client organization, carrying real accountability for a defined initiative alongside the internal team.",
    bestFor: "Critical initiatives with no available internal owner.",
  },
  {
    id: "fractional",
    title: "Fractional Leadership",
    description:
      "Part-time senior leadership for an organization that needs the function but not yet the full-time role.",
    bestFor: "Growing companies between stages of build-out.",
  },
  {
    id: "integrated-team",
    title: "Integrated Project Team",
    description:
      "Stallion leads the initiative and assembles the specialists required to execute it as one accountable team.",
    bestFor: "Work requiring several disciplines the client cannot resource internally.",
  },
  {
    id: "transformation",
    title: "Transformation Program",
    description:
      "Multi-workstream change with governance, sequencing, and executive reporting — an operating model change, a PMO stand-up, a large remediation.",
    bestFor: "Change that spans functions and needs delivery structure.",
  },
  {
    id: "specialist",
    title: "Specialist Technical Support",
    description:
      "Targeted engineering or technical capacity scoped to a specific gap, kept integrated with the wider program.",
    bestFor: "A single discipline is the bottleneck.",
  },
  {
    id: "global-delivery",
    title: "Global & India Execution",
    description:
      "Cross-border delivery connecting client teams with India-based engineering, manufacturing, or supplier coordination.",
    bestFor: "Distributed programs and regional capability building.",
  },
];

export const operatingModel = {
  eyebrow: "OPERATING MODEL",
  heading: "A boutique firm, structured honestly",
  copy: "Stallion is a specialist firm, not a large consultancy — and the engagement model is built around that rather than disguising it.",
  points: [
    {
      title: "Senior involvement is not a pitch team",
      detail:
        "The person who scopes the engagement stays involved in delivering it. There is no handoff to a junior bench after the proposal.",
    },
    {
      title: "Specialists are scoped to the work",
      detail:
        "Rather than maintaining every discipline permanently in-house, Stallion identifies and engages appropriately qualified specialists based on what the engagement actually requires.",
    },
    {
      title: "Accountability stays in one place",
      detail:
        "However many specialists are involved, one Stallion lead remains accountable for the outcome and for coordinating them.",
    },
    {
      title: "Engagements are designed to end",
      detail:
        "The transfer stage is part of the model, not an afterthought. Success is the client carrying the work forward without us.",
    },
  ],
};

export const howWeWorkCta = {
  heading: "Let's find the right starting point.",
  copy: "Whichever stage your initiative is in, a short conversation is usually enough to determine what the work actually needs.",
  cta: { label: "Start a Conversation", href: "/contact" },
};
