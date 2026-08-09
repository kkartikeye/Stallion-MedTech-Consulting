import { NextResponse } from "next/server";
import { hasErrors, validateContactForm, type ContactFormValues } from "@/lib/contact-validation";

/**
 * Contact form submission endpoint.
 *
 * This performs real server-side validation and spam checks and is a
 * genuine round trip (not a simulated success). No email/CRM delivery
 * service has been configured yet, so submissions are logged server-side
 * for manual follow-up.
 *
 * TO ENABLE DELIVERY: set CONTACT_DELIVERY_* environment variables and
 * replace the `console.info` below with the provider call (Resend,
 * Postmark, SES, or a CRM webhook). Everything else — validation, honeypot,
 * error shape — already works and does not need to change.
 */
export async function POST(request: Request) {
  let body: Partial<ContactFormValues>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const values: ContactFormValues = {
    name: body.name ?? "",
    email: body.email ?? "",
    company: body.company ?? "",
    role: body.role ?? "",
    capability: body.capability ?? "",
    stage: body.stage ?? "",
    timing: body.timing ?? "",
    challenge: body.challenge ?? "",
    website: body.website ?? "",
  };

  // Honeypot tripped: report success to the bot without processing further.
  // Checked before validation so a bot learns nothing from the error shape.
  if (values.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const errors = validateContactForm(values);

  if (hasErrors(errors)) {
    return NextResponse.json(
      { success: false, message: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  console.info("[contact-form] new submission", {
    name: values.name,
    email: values.email,
    company: values.company,
    role: values.role,
    capability: values.capability,
    stage: values.stage,
    timing: values.timing,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
