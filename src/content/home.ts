/**
 * Homepage narrative.
 *
 * Written to be recognised by someone who does this work: design transfer,
 * V&V strategy, CAPA closure, supplier readiness, sustaining backlogs. The
 * test for every line is whether a VP of R&D would read it and think "yes,
 * that is my Tuesday" rather than "yes, that is consulting."
 */

export const hero = {
  eyebrow: "MEDTECH CONSULTING & EXECUTION",
  headline: "Strategy to execution across the MedTech lifecycle.",
  supporting:
    "Design transfer, verification strategy, supplier readiness, CAPA closure, launch coordination. The work that decides whether a medical device program lands rarely belongs to one function — and that is where Stallion works.",
  primaryCta: { label: "Discuss a Challenge", href: "/contact" },
  secondaryCta: { label: "Explore Capabilities", href: "/capabilities" },
};

export const thesis = {
  statement: "Medical technology does not move through an organization one function at a time.",
  paragraphs: [
    "A design transfer is an engineering problem, a supplier problem, a process validation problem, and a schedule problem — arriving at once, owned by four people who each hold a quarter of it.",
    "Organizations are structured by function because that is how you run operations. It is not how you resolve a recurring field issue, sequence a market expansion, or get a launch to converge. Those problems live in the gaps, and the gaps have no head of department.",
    "Stallion works in those gaps: close enough to the technology to argue about the actual engineering, experienced enough in cross-functional delivery to keep a program moving when it depends on five teams with different priorities.",
  ],
};

/**
 * Capability index. Presented as an editorial contents page rather than a
 * card grid — twelve equally weighted cards was the single most templated
 * element on the old homepage.
 */
export const capabilityIndex = {
  index: "05",
  label: "What we do",
  heading: "Twelve capabilities",
  copy: "Most engagements draw on several at once — that is usually why someone calls. Each also stands alone as a defined piece of work.",
};

export const sectorsSection = {
  index: "06",
  label: "MedTech sectors",
  heading: "Where the capabilities get applied",
  copy: "The engineering discipline changes by sector. The failure modes rarely do.",
};

export const lifecycleSection = {
  index: "02",
  label: "Where we engage",
  heading: "Eight stages, and the seams between them",
  copy: "Stallion can engage at any stage. The more useful answer is that most engagements start at a seam — transfer, launch convergence, a field issue that spans four functions.",
};

export const problemsSection = {
  index: "03",
  label: "Problems we solve",
  heading: "Start with the situation",
  copy: "If one of these is the conversation happening internally this week, it links to the capability that owns it.",
};

export const manufacturingBreak = {
  index: "04",
  label: "Physical reality",
  statement: "A design is a hypothesis until a supplier holds the tolerance at volume.",
  copy: "Transfer, process validation, supplier qualification, and ramp are where optimistic assumptions become measurable. Stallion works the operational half of a program with the same structure applied to the development half.",
  cta: { label: "Manufacturing & Supply Chain", href: "/capabilities/manufacturing-supply-chain" },
};

export const globalSection = {
  index: "08",
  label: "Global & India execution",
  heading: "The economics work when the handoffs do",
  copy: "Distributing engineering or manufacturing to India is usually modelled on capacity and cost. What the model omits is coordination cost — and that is where the expected benefit is lost.",
  cta: { label: "India & Global Execution", href: "/capabilities/india-global-execution" },
};

export const approachSection = {
  index: "07",
  label: "How we work",
  heading: "Advise or execute — usually both",
  copy: "Some engagements are a two-week assessment. Others run a multi-workstream program for a year. The structure is the same; the span across it is what changes.",
};

export const workSection = {
  index: "09",
  label: "Representative work",
  heading: "How the engagements are built",
  copy: "Illustrative structures rather than client stories — the situation, why it resists, and what the client ends up holding.",
};

export const insightsSection = {
  index: "10",
  label: "Insights",
  heading: "Notes on how MedTech work actually goes",
};

export const whyStallion = {
  index: "11",
  label: "Why Stallion",
  heading: "A specialist firm, structured honestly",
  copy: "Stallion is deliberately small. The engagement model is built around that rather than working to obscure it.",
  reasons: [
    {
      title: "Technical fluency, not just process",
      detail:
        "Engineering background means the conversation happens at the level of the actual problem — tolerance stack, test strategy, failure mode — without translation through an intermediary.",
    },
    {
      title: "Strategy and execution in one engagement",
      detail:
        "Advice that never becomes a plan, and delivery that never questions the direction, are both common failure modes. Holding both removes the handoff between them.",
    },
    {
      title: "Cross-functional work is the default",
      detail:
        "The boundary between engineering, quality, regulatory, operations, and commercial is the working environment here, not an exception to be escalated.",
    },
    {
      title: "Teams scoped to the problem",
      detail:
        "Rather than staffing from a fixed bench, Stallion determines which disciplines the work genuinely requires and engages appropriately qualified specialists for them.",
    },
    {
      title: "Senior involvement throughout",
      detail:
        "The person who scopes the engagement stays accountable for delivering it. No handoff to a junior team after the proposal.",
    },
    {
      title: "Direct U.S.–India execution experience",
      detail:
        "Coordinating engineering and manufacturing programs between mature MedTech markets and India-based teams and suppliers, including the handoffs that decide whether it works.",
    },
  ],
};

export const closingCta = {
  eyebrow: "START HERE",
  heading: "What challenge are you trying to solve?",
  copy: "Most useful conversations start with a problem rather than a service. Describe the situation and we will help define it, determine which expertise it actually requires, and propose a structure.",
  primaryCta: { label: "Start a Conversation", href: "/contact" },
  secondaryCta: { label: "See how we work", href: "/how-we-work" },
};
