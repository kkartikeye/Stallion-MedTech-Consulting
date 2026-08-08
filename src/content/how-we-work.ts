export const howWeWorkIntro = {
  eyebrow: "HOW WE WORK",
  heading: "A consistent model, scaled to the work",
  copy: "Every engagement moves through the same four stages. What changes is scope, duration, and how much of the work Stallion leads directly.",
};

export type WorkStage = {
  number: string;
  title: string;
  summary: string;
  activities: string[];
};

export const stages: WorkStage[] = [
  {
    number: "01",
    title: "Understand",
    summary:
      "Clarify the business need, technical context, constraints, stakeholders, current state, and desired outcome.",
    activities: [
      "Review the current state, prior decisions, and constraints",
      "Identify stakeholders, dependencies, and decision-makers",
      "Clarify the outcome that defines success",
    ],
  },
  {
    number: "02",
    title: "Structure",
    summary:
      "Define scope, deliverables, ownership, decision pathways, resources, risks, and an executable plan.",
    activities: [
      "Define scope, deliverables, and ownership",
      "Establish governance and decision pathways",
      "Identify required resources and specialist support",
      "Build a risk-aware, executable plan",
    ],
  },
  {
    number: "03",
    title: "Execute",
    summary:
      "Lead the work, coordinate contributors, resolve issues, communicate progress, and maintain accountability.",
    activities: [
      "Lead day-to-day execution and cross-functional coordination",
      "Resolve issues and manage risk as it emerges",
      "Communicate progress on a consistent, agreed cadence",
    ],
  },
  {
    number: "04",
    title: "Transition",
    summary:
      "Complete deliverables, transfer knowledge, establish ownership, and leave the client with a sustainable path forward.",
    activities: [
      "Complete and hand off agreed deliverables",
      "Transfer knowledge and documentation to the client team",
      "Confirm ongoing ownership and a sustainable path forward",
    ],
  },
];

export const engagementRange = {
  heading: "Engagements scale with the work",
  copy: "A Stallion engagement may range from a focused assessment to embedded project leadership or a fully integrated project team, depending on what the situation requires.",
  examples: [
    {
      title: "Focused Assessment",
      description: "A short, structured review of a specific problem, plan, or process—typically concluding with clear findings and recommendations.",
    },
    {
      title: "Embedded Leadership",
      description: "A Stallion project or program leader works inside the client's organization to own and drive a defined initiative.",
    },
    {
      title: "Integrated Project Team",
      description: "Stallion leads the initiative and assembles the technical specialists needed to execute a defined body of work.",
    },
  ],
};

export const howWeWorkCta = {
  heading: "Let's find the right starting point.",
  copy: "Whichever stage your initiative is in, we'll help determine what's needed next.",
  cta: { label: "Discuss a Project", href: "/contact" },
};
