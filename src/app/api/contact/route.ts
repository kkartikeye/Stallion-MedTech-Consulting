import { NextResponse } from "next/server";
import { hasErrors, validateContactForm, type ContactFormValues } from "@/lib/contact-validation";

/**
 * Contact form submission endpoint.
 *
 * This performs real server-side validation and spam checks and is a
 * genuine round trip (not a simulated success). No email/CRM delivery
 * service has been configured yet, so submissions are logged server-side
 * for manual follow-up. Once a business email or a service (e.g. an ESP,
 * a CRM webhook, or Resend/Postmark) is available, wire it in below.
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
    company: body.company ?? "",
    email: body.email ?? "",
    phone: body.phone ?? "",
    projectType: body.projectType ?? "",
    description: body.description ?? "",
    timing: body.timing ?? "",
    website: body.website ?? "",
  };

  const errors = validateContactForm(values);

  if (hasErrors(errors)) {
    return NextResponse.json(
      { success: false, message: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  // Honeypot tripped: report success to the bot without processing further.
  if (values.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  console.info("[contact-form] new submission", {
    name: values.name,
    company: values.company,
    email: values.email,
    projectType: values.projectType,
    timing: values.timing,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
