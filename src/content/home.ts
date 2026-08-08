export const hero = {
  eyebrow: "MEDTECH CONSULTING · PROJECT LEADERSHIP · TECHNICAL EXECUTION",
  headline: "Leadership for complex MedTech execution.",
  supporting:
    "Stallion MedTech Consulting helps medical device companies move critical initiatives forward—from project definition and cross-functional planning through technical execution, issue resolution, and delivery.",
  primaryCta: { label: "Discuss a Project", href: "/contact" },
  secondaryCta: { label: "Explore Our Capabilities", href: "/services" },
};

export const executionPanel = {
  label: "Engagement Focus",
  stages: [
    { id: "define", label: "Define", detail: "Scope, ownership, success criteria" },
    { id: "plan", label: "Plan", detail: "Workstreams, milestones, dependencies" },
    { id: "execute", label: "Execute", detail: "Coordination, issue resolution" },
    { id: "transition", label: "Transition", detail: "Handoff, sustainable ownership" },
  ],
  workstreams: [
    { name: "Program Leadership", status: "On track" },
    { name: "Design Transfer", status: "In progress" },
    { name: "Supplier Coordination", status: "Monitoring" },
    { name: "Sustaining Engineering", status: "On track" },
  ],
  note: "Illustrative execution view — structured for a representative MedTech program.",
};

export const challenges = {
  label: "WHEN TO ENGAGE",
  heading: "When critical work needs focused leadership",
  items: [
    "A critical initiative lacks dedicated ownership",
    "Cross-functional teams are not aligned",
    "Timelines, risks, or decisions are unclear",
    "Sustaining issues are competing with new-product priorities",
    "Internal engineering capacity is constrained",
    "Suppliers or external partners need stronger coordination",
    "Leadership needs clearer visibility into execution",
  ],
};

export type CapabilityGroup = {
  id: string;
  title: string;
  items: string[];
  note?: string;
};

export const capabilities = {
  label: "CORE CAPABILITIES",
  heading: "Capabilities organized around how MedTech work actually gets done",
  groups: [
    {
      id: "project-program-leadership",
      title: "Project and Program Leadership",
      items: [
        "Project planning and execution",
        "Integrated schedules and milestones",
        "Governance and decision pathways",
        "Risk, issue, and dependency management",
        "Cross-functional leadership",
        "Executive and stakeholder communication",
        "Portfolio visibility and prioritization",
      ],
    },
    {
      id: "product-development-support",
      title: "Product Development Support",
      items: [
        "Development planning",
        "Requirements and deliverables coordination",
        "Design review readiness",
        "Verification and validation planning support",
        "Design transfer coordination",
        "Commercialization readiness",
        "Supplier and partner coordination",
      ],
    },
    {
      id: "sustaining-engineering-leadership",
      title: "Sustaining Engineering Leadership",
      items: [
        "Product improvement initiatives",
        "Field and customer issue coordination",
        "Complaint-related cross-functional projects",
        "Root-cause investigation coordination",
        "Engineering change execution",
        "Obsolescence and continuity initiatives",
        "Product lifecycle planning",
      ],
    },
    {
      id: "engineering-technical-support",
      title: "Engineering and Technical Support",
      items: [
        "Systems engineering",
        "Mechanical engineering",
        "Electrical engineering",
        "Software and firmware",
        "Test engineering",
        "Verification and validation",
        "Manufacturing engineering",
        "Supplier engineering",
        "Technical documentation",
        "Data analysis",
      ],
      note: "Technical specialists are engaged based on scope and project requirements.",
    },
    {
      id: "operational-process-improvement",
      title: "Operational and Process Improvement",
      items: [
        "Product-development process improvement",
        "Governance and workflow design",
        "Project intake and prioritization",
        "Reporting and management dashboards",
        "Cross-functional operating models",
        "Continuous improvement initiatives",
      ],
    },
    {
      id: "india-global-execution",
      title: "India and Global Execution Support",
      items: [
        "Coordination between global and India-based teams",
        "Supplier and manufacturing-partner engagement",
        "Local execution support",
        "Cross-border project coordination",
        "Engineering resource development",
        "Business and operational expansion support",
      ],
    },
  ] satisfies CapabilityGroup[],
};

export const engagementModels = {
  label: "FLEXIBLE DELIVERY",
  heading: "Support built around the work",
  models: [
    {
      id: "embedded-leadership",
      title: "Embedded Project Leadership",
      description:
        "A project leader works alongside the client's organization to lead a defined project, program, or portfolio.",
    },
    {
      id: "targeted-advisory",
      title: "Targeted Advisory Support",
      description:
        "Focused help with project recovery, planning, governance, prioritization, execution strategy, or operational improvement.",
    },
    {
      id: "integrated-delivery",
      title: "Integrated Delivery Team",
      description:
        "Stallion provides project leadership and assembles the technical specialists required for a defined body of work.",
    },
  ],
};

export const processPreview = {
  heading: "How we work",
  stages: [
    { number: "01", title: "Understand", detail: "Clarify need, context, constraints, and outcome." },
    { number: "02", title: "Structure", detail: "Define scope, ownership, plan, and risks." },
    { number: "03", title: "Execute", detail: "Lead the work and coordinate contributors." },
    { number: "04", title: "Transition", detail: "Transfer knowledge and sustainable ownership." },
  ],
  note: "The engagement is scaled to the problem—not forced into a predetermined consulting model.",
  cta: { label: "See how we work", href: "/how-we-work" },
};

export const whyStallion = {
  label: "WHY STALLION",
  heading: "Grounded, execution-first partnership",
  items: [
    "Project leadership grounded in technical understanding",
    "Practical support focused on execution",
    "Flexible access to specialized capabilities",
    "Clear ownership and communication",
    "Cross-functional operating experience",
    "Connection between strategic priorities and daily delivery",
    "Flexible engagement models for different company sizes",
  ],
};

export const closingCta = {
  heading: "Let's discuss what needs to move forward.",
  copy: "Tell us about the project, challenge, or capability gap you are working through. We'll help determine the right structure, leadership, and technical support for the engagement.",
  primaryCta: { label: "Discuss a Project", href: "/contact" },
  secondaryCta: { label: "Review Services", href: "/services" },
};
