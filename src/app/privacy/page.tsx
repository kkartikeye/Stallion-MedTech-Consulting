import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { businessDetails, isPlaceholder, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/page-metadata";

/**
 * Privacy notice.
 *
 * This describes what the site actually does today: one contact form, no
 * analytics, no advertising or tracking cookies, and self-hosted fonts (so
 * no third-party font requests at runtime). Nothing here is aspirational.
 *
 * IF THAT CHANGES — adding analytics, a CRM integration, embedded media, or
 * an email delivery provider — this page must be updated to match, and a
 * qualified adviser should confirm the wording against the obligations that
 * apply in the jurisdictions Stallion operates in.
 */
export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Stallion MedTech Consulting handles information submitted through this website.",
  path: "/privacy",
});

const sections = [
  {
    heading: "What this notice covers",
    paragraphs: [
      `This notice explains how ${siteConfig.name} handles personal information submitted through this website. It applies to this website only.`,
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "The only personal information this site collects is what you choose to enter into the contact form: your name, work email address, company, role if you provide it, and the description of what you are working on, along with the optional capability, stage, and timing selections.",
      "The form includes a hidden anti-spam field that is not visible to you and is used only to detect automated submissions.",
    ],
  },
  {
    heading: "How we use it",
    paragraphs: [
      "Submitted information is used solely to respond to your enquiry and, where relevant, to discuss a potential engagement. It is not sold, rented, or shared with third parties for marketing purposes, and it is not added to a mailing list.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This site does not set advertising or tracking cookies and does not run third-party analytics. Fonts are served from this site rather than from a third-party font host, so viewing these pages does not make requests to external services.",
    ],
  },
  {
    heading: "Retention",
    paragraphs: [
      "Enquiry correspondence is retained for as long as needed to respond and to maintain a record of business discussions. You can ask us to delete your enquiry at any time.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask us to confirm what information we hold about you, correct it, or delete it. Contact us using the details below and we will respond.",
    ],
  },
];

export default function PrivacyPage() {
  const contactEmail = businessDetails.email;
  const emailIsPlaceholder = isPlaceholder(contactEmail);

  return (
    <>
      <PageIntro
        eyebrow="PRIVACY"
        heading="Privacy Policy"
        copy="What this site collects, why, and what you can ask us to do about it."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="max-w-2xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="type-h3 text-ink-950">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-ink-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="type-h3 text-ink-950">Contacting us</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                For any question about this notice or the information we hold, reach us at{" "}
                {emailIsPlaceholder ? (
                  <span className="text-ink-500">{contactEmail}</span>
                ) : (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="link-underline font-medium text-ink-900"
                  >
                    {contactEmail}
                  </a>
                )}
                {emailIsPlaceholder ? " (contact details are being finalized)" : ""}, or through the{" "}
                <a href="/contact" className="link-underline font-medium text-ink-900">
                  contact form
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
