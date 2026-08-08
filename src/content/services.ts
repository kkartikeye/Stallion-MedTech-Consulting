export type ServiceDetail = {
  id: string;
  title: string;
  situation: string;
  provide: string[];
  outputs: string[];
  structure: string;
};

export const servicesIntro = {
  eyebrow: "SERVICES",
  heading: "Structured support across the MedTech execution lifecycle",
  copy: "Each area below can stand alone or combine into a broader engagement. Scope, decision rights, and reporting are defined at the start of every project and documented in a written agreement.",
};

export const services: ServiceDetail[] = [
  {
    id: "project-program-leadership",
    title: "Project and Program Leadership",
    situation:
      "A critical initiative needs a single accountable owner, but no one internally has the bandwidth or mandate to run it end to end.",
    provide: [
      "Project or program leadership for a defined initiative or portfolio",
      "Integrated schedules, milestones, and dependency mapping",
      "Governance structure and decision pathways",
      "Risk, issue, and dependency tracking",
      "Cross-functional leadership across engineering, quality, regulatory, and operations",
      "Executive and stakeholder communication",
    ],
    outputs: [
      "Integrated project schedule and milestone plan",
      "Governance and decision-rights framework",
      "Risk and issue log with mitigation owners",
      "Regular executive status reporting",
    ],
    structure:
      "Typically an embedded project or program leader working within the client's team, reporting on a fixed cadence with clear escalation paths.",
  },
  {
    id: "product-development-support",
    title: "Product Development Support",
    situation:
      "A product development effort needs coordinated planning and readiness support to keep design, verification, and commercialization activities moving together.",
    provide: [
      "Development planning across phases and functions",
      "Requirements and deliverables coordination",
      "Design review readiness and follow-up tracking",
      "Verification and validation planning support",
      "Design transfer coordination",
      "Commercialization readiness planning",
      "Supplier and partner coordination",
    ],
    outputs: [
      "Phase-level development plan and deliverables tracker",
      "Design review readiness checklist and action log",
      "Design transfer coordination plan",
      "Commercialization readiness summary",
    ],
    structure:
      "Often delivered as embedded leadership for a specific program, or as targeted advisory support around a milestone such as a design review or transfer to manufacturing.",
  },
  {
    id: "sustaining-engineering-leadership",
    title: "Sustaining Engineering Leadership",
    situation:
      "Field issues, complaints, and product improvements are competing with new-product priorities and need dedicated leadership to stay on track.",
    provide: [
      "Leadership for product improvement initiatives",
      "Coordination of field and customer issue response",
      "Complaint-related cross-functional project coordination",
      "Root-cause investigation coordination",
      "Engineering change execution",
      "Obsolescence and continuity planning",
      "Product lifecycle planning",
    ],
    outputs: [
      "Sustaining engineering portfolio and priority view",
      "Root-cause investigation coordination plan",
      "Engineering change tracking and execution plan",
      "Obsolescence and continuity roadmap",
    ],
    structure:
      "Frequently an embedded sustaining engineering lead managing a portfolio of active issues and improvement projects alongside the client's team.",
  },
  {
    id: "engineering-technical-support",
    title: "Engineering and Technical Support",
    situation:
      "A project needs specific engineering expertise—systems, mechanical, electrical, software, test, or manufacturing—that internal teams do not currently have available.",
    provide: [
      "Systems, mechanical, and electrical engineering support",
      "Software and firmware support",
      "Test engineering and verification and validation support",
      "Manufacturing and supplier engineering support",
      "Technical documentation and data analysis",
    ],
    outputs: [
      "Scoped technical deliverables aligned to project requirements",
      "Documentation consistent with the client's existing standards",
      "Data analysis and summary reporting where applicable",
    ],
    structure:
      "Technical specialists are identified and engaged based on the specific scope, typically as part of an integrated delivery team led by a Stallion project leader.",
  },
  {
    id: "operational-process-improvement",
    title: "Operational and Process Improvement",
    situation:
      "Product development processes, intake, or reporting have become inconsistent, making prioritization and execution harder than they should be.",
    provide: [
      "Product-development process improvement",
      "Governance and workflow design",
      "Project intake and prioritization frameworks",
      "Reporting and management dashboards",
      "Cross-functional operating model design",
      "Continuous improvement initiatives",
    ],
    outputs: [
      "Documented process and workflow improvements",
      "Intake and prioritization framework",
      "Reporting structure or dashboard design",
    ],
    structure:
      "Usually delivered as a focused advisory engagement, often followed by embedded support to help the new process take hold.",
  },
  {
    id: "india-global-execution",
    title: "India and Global Execution Support",
    situation:
      "Teams and partners are split across geographies, and coordination between global and India-based functions needs stronger structure.",
    provide: [
      "Coordination between global and India-based teams",
      "Supplier and manufacturing-partner engagement",
      "Local execution support",
      "Cross-border project coordination",
      "Engineering resource development support",
      "Business and operational expansion support",
    ],
    outputs: [
      "Cross-border coordination plan and communication cadence",
      "Supplier and partner engagement plan",
      "Local execution support structure",
    ],
    structure:
      "A supporting capability layered into a broader project, program, or advisory engagement rather than a standalone offering.",
  },
];

export const servicesCta = {
  heading: "Not sure what structure you need?",
  copy: "Tell us about the work and we'll help determine the right scope, leadership, and technical support.",
  cta: { label: "Discuss a Project", href: "/contact" },
};
