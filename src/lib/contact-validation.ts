import { capabilityOptions, projectStages, engagementTimings } from "@/content/contact";

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  capability: string;
  stage: string;
  timing: string;
  challenge: string;
  /** Honeypot field. Must stay empty; bots that fill every field trip it. */
  website: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared so the client and the route agree on what a valid option is. */
function isOneOf(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter a work email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.company.trim()) {
    errors.company = "Enter your company.";
  }

  if (values.capability && !isOneOf(values.capability, capabilityOptions)) {
    errors.capability = "Select an option from the list.";
  }

  if (values.stage && !isOneOf(values.stage, projectStages)) {
    errors.stage = "Select an option from the list.";
  }

  if (values.timing && !isOneOf(values.timing, engagementTimings)) {
    errors.timing = "Select an option from the list.";
  }

  if (!values.challenge.trim()) {
    errors.challenge = "Tell us briefly what you're working on.";
  } else if (values.challenge.trim().length < 20) {
    errors.challenge = "A little more detail helps — at least 20 characters.";
  }

  if (values.website.trim().length > 0) {
    errors.website = "Spam check failed.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
