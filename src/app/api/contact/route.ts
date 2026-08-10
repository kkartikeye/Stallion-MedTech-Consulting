import { NextResponse } from "next/server";
import { hasErrors, validateContactForm, type ContactFormValues } from "@/lib/contact-validation";
import { deliverContactSubmission } from "@/lib/contact-delivery";

/**
 * Contact form submission endpoint.
 *
 * Order of operations matters here. The submission is logged BEFORE delivery
 * is attempted, so a provider outage can never lose an enquiry — it is always
 * recoverable from the server log.
 *
 * The response then tells the truth about what happened:
 *   - delivered, or capture-only mode  -> success
 *   - delivery configured but failed   -> 502, so the sender knows to follow
 *                                         up rather than assuming it landed
 *
 * Returning success for a send that failed is the specific bug this design
 * avoids. See src/lib/contact-delivery.ts for the environment variables.
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

  // Capture first — this is the durable record regardless of delivery.
  console.info("[contact-form] submission", {
    name: values.name,
    email: values.email,
    company: values.company,
    role: values.role,
    capability: values.capability,
    stage: values.stage,
    timing: values.timing,
    challenge: values.challenge,
    receivedAt: new Date().toISOString(),
  });

  const delivery = await deliverContactSubmission(values);

  switch (delivery.status) {
    case "sent":
      return NextResponse.json({ success: true });

    case "not-configured":
      // Expected until credentials are added. Logged at info so it does not
      // read as an error in production logs.
      console.info(
        "[contact-form] capture-only mode — no delivery provider configured. " +
          "Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL to enable email.",
      );
      return NextResponse.json({ success: true });

    case "misconfigured":
      console.error("[contact-form] delivery misconfigured:", delivery.detail);
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message due to a configuration problem on our side. " +
            "Your details were recorded — please follow up directly if it's urgent.",
        },
        { status: 502 },
      );

    case "failed":
      console.error("[contact-form] DELIVERY FAILED — recover from the log above:", delivery.detail);
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message just now. Your details were recorded, " +
            "but please follow up directly if it's urgent.",
        },
        { status: 502 },
      );
  }
}
