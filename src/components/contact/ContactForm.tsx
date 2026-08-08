"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { businessDetails } from "@/content/site";
import { desiredTimingOptions, projectTypes } from "@/content/contact";
import {
  hasErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contact-validation";

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  description: "",
  timing: desiredTimingOptions[0],
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "mt-1.5 w-full rounded-button border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus-visible:border-accent-500 focus-visible:outline-2 focus-visible:outline-accent-500";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
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

      const data: { success?: boolean; message?: string; errors?: ContactFormErrors } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
        setServerMessage(data.message ?? "Something went wrong while sending your message. Please try again.");
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
        className="flex flex-col items-start gap-3 rounded-card border border-accent-200 bg-accent-50 p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-accent-600" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-slate-950">Thank you for reaching out.</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          We&rsquo;ve received your message and will follow up soon to discuss next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-accent-700 underline underline-offset-4"
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
          className="flex items-start gap-3 rounded-card border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <TriangleAlert className="mt-0.5 h-4.5 w-4.5 shrink-0" aria-hidden="true" />
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
          id={`${formId}-company`}
          label="Company"
          required
          error={errors.company}
          value={values.company}
          onChange={(v) => updateField("company", v)}
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Field
          id={`${formId}-phone`}
          label="Phone"
          type="tel"
          optional
          error={errors.phone}
          value={values.phone}
          onChange={(v) => updateField("phone", v)}
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-projectType`} className="text-sm font-medium text-slate-800">
            Project type <span aria-hidden="true" className="text-accent-600">*</span>
          </label>
          <select
            id={`${formId}-projectType`}
            required
            value={values.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? `${formId}-projectType-error` : undefined}
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id={`${formId}-projectType-error`} className="mt-1.5 text-sm text-red-600">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-timing`} className="text-sm font-medium text-slate-800">
            Desired timing
          </label>
          <select
            id={`${formId}-timing`}
            value={values.timing}
            onChange={(e) => updateField("timing", e.target.value)}
            className={fieldClasses}
          >
            {desiredTimingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-description`} className="text-sm font-medium text-slate-800">
          Brief project description <span aria-hidden="true" className="text-accent-600">*</span>
        </label>
        <textarea
          id={`${formId}-description`}
          required
          rows={5}
          value={values.description}
          onChange={(e) => updateField("description", e.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? `${formId}-description-error` : undefined}
          className={fieldClasses}
          placeholder="What's the initiative, challenge, or capability gap you're working through?"
        />
        {errors.description ? (
          <p id={`${formId}-description-error`} className="mt-1.5 text-sm text-red-600">
            {errors.description}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from sighted and keyboard users, visible to bots that fill every field. */}
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-button bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
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
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}{" "}
        {required ? (
          <span aria-hidden="true" className="text-accent-600">
            *
          </span>
        ) : null}
        {optional ? <span className="text-slate-400">(optional)</span> : null}
      </label>
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
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
