import { projectTypes } from "@/content/contact";

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  timing: string;
  /** Honeypot field. Must stay empty; bots that fill every field trip it. */
  website: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.company.trim()) {
    errors.company = "Enter your company.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter a work email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.projectType.trim() || !(projectTypes as readonly string[]).includes(values.projectType)) {
    errors.projectType = "Select a project type.";
  }

  if (!values.description.trim()) {
    errors.description = "Add a brief project description.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Add a little more detail (at least 20 characters).";
  }

  if (values.website.trim().length > 0) {
    errors.website = "Spam check failed.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
