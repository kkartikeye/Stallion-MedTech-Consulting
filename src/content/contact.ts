import { capabilities } from "./capabilities";

/**
 * Contact.
 *
 * The form is deliberately short and framed as the opening of a consulting
 * conversation rather than a lead-capture form. The capability and stage
 * selects are drawn from the live site data so they never drift from the
 * pages that exist.
 *
 * The brief's separate "optional message" field was folded into the single
 * "what are you working on" field — two free-text boxes reliably reduces
 * completion, and brevity was the stronger requirement.
 */

export const contactIntro = {
  eyebrow: "CONTACT",
  heading: "What challenge are you trying to solve?",
  copy: "A short description is enough to start. We will follow up to understand the situation and, if there is a fit, propose how an engagement could be structured.",
};

export const NOT_SURE = "Not sure yet";

/** Capability options, plus an explicit escape hatch. */
export const capabilityOptions: string[] = [
  ...capabilities.map((capability) => capability.title),
  NOT_SURE,
];

export const projectStages = [
  "Exploring an idea",
  "Early planning",
  "Active program",
  "Program in difficulty",
  "Post-launch / sustaining",
  NOT_SURE,
] as const;

export const engagementTimings = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  NOT_SURE,
] as const;

export const contactDetailsLabels = {
  email: "Email",
  phone: "Phone",
  linkedin: "LinkedIn",
  location: "Location",
};

/**
 * Response expectation. Deliberately conservative — no unsupported
 * promise such as a guaranteed response window.
 */
export const responseNote =
  "We read every message. Expect a reply within a few business days; if something is time-sensitive, say so and we will prioritize it.";

export const privacyNote =
  "What you send is used only to respond to your enquiry. It is not sold, shared with third parties for marketing, or added to a mailing list.";

export const contactAlternatives = {
  heading: "Prefer a different route?",
  copy: "Email or LinkedIn work equally well if you would rather not use a form.",
};
