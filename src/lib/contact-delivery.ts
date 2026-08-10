import type { ContactFormValues } from "./contact-validation";

/**
 * Contact form delivery.
 *
 * Deliberately provider-agnostic and inert until configured: with no
 * credentials present the route falls back to capture-only mode (the
 * submission is written to the server log and can be recovered from there),
 * exactly as it behaved before delivery existed.
 *
 * Resend is implemented over its REST API rather than its SDK so the site
 * gains no dependency and no bundle weight for a single POST.
 *
 * REQUIRED ENVIRONMENT VARIABLES (see .env.example)
 *   RESEND_API_KEY      API key from resend.com
 *   CONTACT_TO_EMAIL    Where enquiries should land
 *   CONTACT_FROM_EMAIL  A sender on a domain verified with the provider
 *
 * All three must be set. A partial configuration is treated as a
 * misconfiguration and reported, not silently ignored — a contact form that
 * appears to work while dropping enquiries is the failure mode this exists
 * to prevent.
 */

export type DeliveryResult =
  | { status: "sent" }
  | { status: "not-configured" }
  | { status: "misconfigured"; detail: string }
  | { status: "failed"; detail: string };

type DeliveryConfig = {
  apiKey: string;
  to: string;
  from: string;
};

function readConfig(): DeliveryConfig | { missing: string[] } | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  // Nothing set at all: capture-only mode, which is a valid state.
  if (!apiKey && !to && !from) return null;

  const missing: string[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!to) missing.push("CONTACT_TO_EMAIL");
  if (!from) missing.push("CONTACT_FROM_EMAIL");
  if (missing.length > 0) return { missing };

  return { apiKey: apiKey as string, to: to as string, from: from as string };
}

/** Plain text: reliable, quotable in a reply, and no template to maintain. */
function formatBody(values: ContactFormValues): string {
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company],
    ["Role", values.role || "—"],
    ["Capability", values.capability || "—"],
    ["Stage", values.stage || "—"],
    ["Timing", values.timing || "—"],
  ];

  const width = Math.max(...rows.map(([label]) => label.length));
  const details = rows.map(([label, value]) => `${label.padEnd(width)}  ${value}`).join("\n");

  return [
    "New enquiry from the Stallion MedTech Consulting website.",
    "",
    details,
    "",
    "What they are working on",
    "------------------------",
    values.challenge,
    "",
    `Received ${new Date().toISOString()}`,
  ].join("\n");
}

export async function deliverContactSubmission(
  values: ContactFormValues,
): Promise<DeliveryResult> {
  const config = readConfig();

  if (config === null) return { status: "not-configured" };

  if ("missing" in config) {
    return {
      status: "misconfigured",
      detail: `Delivery is partially configured. Missing: ${config.missing.join(", ")}.`,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        // Replying to the notification reaches the enquirer directly.
        reply_to: values.email,
        subject: `Enquiry — ${values.company}${values.name ? ` (${values.name})` : ""}`,
        text: formatBody(values),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      return {
        status: "failed",
        detail: `Provider responded ${response.status}. ${detail}`.trim(),
      };
    }

    return { status: "sent" };
  } catch (error) {
    return {
      status: "failed",
      detail: error instanceof Error ? error.message : "Unknown network error.",
    };
  }
}
