"use client";

import { useId, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { businessDetails } from "@/content/site";
import {
  capabilityOptions,
  projectStages,
  engagementTimings,
  privacyNote,
} from "@/content/contact";
import {
  hasErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contact-validation";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  role: "",
  capability: "",
  stage: "",
  timing: "",
  challenge: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "mt-1.5 w-full rounded-button border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-950 placeholder:text-ink-500 transition-colors duration-150 focus-visible:border-accent-500 focus-visible:outline-2 focus-visible:outline-accent-500";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear the field's error as soon as the user edits it — validating
    // inline rather than only on submit.
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      setStatus("error");
      setServerMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setServerMessage(null);

    try {
      const response = await fetch(businessDetails.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data: { success?: boolean; message?: string; errors?: ContactFormErrors } =
        await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
        setServerMessage(
          data.message ?? "Something went wrong while sending your message. Please try again.",
        );
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="materialize flex flex-col items-start gap-3 rounded-card border border-accent-200 bg-accent-50 p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-accent-600" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-ink-950">Thanks — that came through.</h3>
        <p className="text-sm leading-relaxed text-ink-600">
          We&rsquo;ll read it properly and follow up to understand the situation before suggesting
          anything.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-accent-700 underline underline-offset-4 transition-transform active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && serverMessage ? (
        <div
          role="alert"
          className="materialize flex items-start gap-3 rounded-card border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => updateField("name", v)}
          autoComplete="name"
        />
        <Field
          id={`${formId}-email`}
          label="Work email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(v) => updateField("email", v)}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-company`}
          label="Company"
          required
          error={errors.company}
          value={values.company}
          onChange={(v) => updateField("company", v)}
          autoComplete="organization"
        />
        <Field
          id={`${formId}-role`}
          label="Role"
          optional
          error={errors.role}
          value={values.role}
          onChange={(v) => updateField("role", v)}
          autoComplete="organization-title"
        />
      </div>

      <div>
        <Label htmlFor={`${formId}-challenge`} required>
          What are you working on?
        </Label>
        <textarea
          id={`${formId}-challenge`}
          required
          rows={5}
          value={values.challenge}
          onChange={(e) => updateField("challenge", e.target.value)}
          aria-invalid={Boolean(errors.challenge)}
          aria-describedby={errors.challenge ? `${formId}-challenge-error` : undefined}
          className={fieldClasses}
          placeholder="The situation, what has been tried, and what would count as solving it."
        />
        {errors.challenge ? (
          <FieldError id={`${formId}-challenge-error`}>{errors.challenge}</FieldError>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <SelectField
          id={`${formId}-capability`}
          label="Relevant capability"
          placeholder="Select if known"
          options={capabilityOptions}
          value={values.capability}
          error={errors.capability}
          onChange={(v) => updateField("capability", v)}
        />
        <SelectField
          id={`${formId}-stage`}
          label="Project stage"
          placeholder="Select if known"
          options={[...projectStages]}
          value={values.stage}
          error={errors.stage}
          onChange={(v) => updateField("stage", v)}
        />
        <SelectField
          id={`${formId}-timing`}
          label="Timing"
          placeholder="Select if known"
          options={[...engagementTimings]}
          value={values.timing}
          error={errors.timing}
          onChange={(v) => updateField("timing", v)}
        />
      </div>

      {/* Honeypot: hidden from sighted and keyboard users, visible to bots
          that fill every field. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-ink-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-ink-500">{privacyNote}</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-button bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out-quiet hover:bg-ink-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Discuss Your Challenge"
          )}
        </button>
      </div>
    </form>
  );
}

function Label({
  htmlFor,
  required,
  optional,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink-800">
      {children}{" "}
      {required ? (
        <span aria-hidden="true" className="text-accent-600">
          *
        </span>
      ) : null}
      {optional ? <span className="text-ink-500">(optional)</span> : null}
    </label>
  );
}

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {children}
    </p>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  optional,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required} optional={optional}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClasses}
      />
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} optional>
        {label}
      </Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClasses}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </div>
  );
}
