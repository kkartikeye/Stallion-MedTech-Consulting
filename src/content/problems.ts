/**
 * "Problems we solve", written in the client's language rather than in
 * consulting taxonomy. Each problem routes to the capability that owns it,
 * so a visitor who recognizes their situation lands on the right page
 * without having to translate it into our vocabulary first.
 */

export type Problem = {
  id: string;
  /** Stated the way a client would say it out loud. */
  statement: string;
  /** What is usually actually going on underneath. */
  reading: string;
  capabilitySlug: string;
};

export const problems: Problem[] = [
  {
    id: "slipping-program",
    statement: "Our development program keeps slipping.",
    reading:
      "Usually a dependency and ownership problem rather than an engineering one. Recovery starts with an honest plan, not a faster one.",
    capabilitySlug: "program-portfolio-transformation",
  },
  {
    id: "design-to-manufacturing",
    statement: "A product needs to move from design into manufacturing.",
    reading:
      "Transfer exposes every assumption the design team made about process capability, suppliers, and tolerance.",
    capabilitySlug: "manufacturing-supply-chain",
  },
  {
    id: "recurring-field-issue",
    statement: "The same field issue keeps coming back.",
    reading:
      "Individually handled incidents rarely converge on a root cause. It needs one owner and one investigation.",
    capabilitySlug: "post-market-lifecycle",
  },
  {
    id: "new-market",
    statement: "We're preparing to enter a new market.",
    reading:
      "Regulatory pathway, evidence, supply, and channel decisions are interdependent and usually sequenced separately.",
    capabilitySlug: "regulatory-market-access",
  },
  {
    id: "capacity-gap",
    statement: "We need specialist capability we don't have in-house.",
    reading:
      "The risk is not finding the skill — it is the specialist working detached from the rest of the program.",
    capabilitySlug: "engineering-technical",
  },
  {
    id: "portfolio-overload",
    statement: "We have more priorities than capacity.",
    reading:
      "Prioritization fails without visibility. The portfolio view usually has to exist before the conversation can be productive.",
    capabilitySlug: "program-portfolio-transformation",
  },
  {
    id: "supplier-coordination",
    statement: "A supplier or manufacturing partner isn't performing.",
    reading:
      "Often an expectation-alignment problem dressed as a capability problem. Both need testing before switching partners.",
    capabilitySlug: "manufacturing-supply-chain",
  },
  {
    id: "launch-convergence",
    statement: "Our launch requires several functions to converge.",
    reading:
      "Each function is tracking to its own date. Launch planning means making the trade-offs between them explicit early.",
    capabilitySlug: "commercialization",
  },
  {
    id: "india-expansion",
    statement: "We're expanding engineering or manufacturing into India.",
    reading:
      "The economics work when the handoffs do. Operating model and expectation alignment decide the outcome.",
    capabilitySlug: "india-global-execution",
  },
  {
    id: "process-debt",
    statement: "Our processes have grown faster than our operating model.",
    reading:
      "Procedural complexity accumulates until it slows work without reducing risk. Simplification is a change program.",
    capabilitySlug: "quality-compliance",
  },
  {
    id: "software-in-qms",
    statement: "Our software team and our quality system are in conflict.",
    reading:
      "Iterative delivery and discrete change control can coexist, but only if the lifecycle process is designed for both.",
    capabilitySlug: "digital-software-ai",
  },
  {
    id: "audit-findings",
    statement: "We have findings that need a credible remediation plan.",
    reading:
      "Knowing the fix is rarely the constraint. Owners, sequencing, and capacity are what make remediation stick.",
    capabilitySlug: "quality-compliance",
  },
];

export const problemsIntro = {
  eyebrow: "PROBLEMS WE SOLVE",
  heading: "Start with the situation, not the service list",
  copy: "If one of these sounds like the conversation happening internally right now, it links to the capability that handles it.",
};
