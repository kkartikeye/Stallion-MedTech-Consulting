import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { founder } from "@/content/about";
import { isPlaceholder } from "@/content/site";

/**
 * Founder section.
 *
 * No approved portrait exists, so the default is a typographic layout that
 * is complete on its own rather than an empty photo frame with a
 * "placeholder" caption. Supply `founder.portraitUrl` and the image slot
 * appears automatically.
 *
 * The certification line renders only when a real credential has been
 * confirmed — an unverified certification is never displayed.
 */
export function FounderProfile() {
  const hasPortrait = Boolean(founder.portraitUrl);
  const hasCertification =
    Boolean(founder.certification) && !isPlaceholder(founder.certification);

  return (
    <section className="section-y bg-sand-50">
      <Container>
        <div
          className={`grid gap-10 lg:gap-16 ${
            hasPortrait ? "lg:grid-cols-[0.7fr_1.3fr]" : "lg:grid-cols-[0.8fr_1.2fr]"
          }`}
        >
          <div>
            <Eyebrow className="mb-4">FOUNDER</Eyebrow>
            {hasPortrait ? (
              <div className="relative aspect-4/5 w-full max-w-xs overflow-hidden rounded-card border border-ink-100 bg-white shadow-card">
                <Image
                  src={founder.portraitUrl as string}
                  alt={`${founder.name}, ${founder.title} at Stallion MedTech Consulting`}
                  fill
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <>
                <h2 className="type-h2 text-balance-pretty text-ink-950">{founder.name}</h2>
                <p className="mt-2 text-sm font-medium text-accent-700">{founder.title}</p>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-500">
                  {founder.background}
                </p>
              </>
            )}
          </div>

          <div>
            {hasPortrait ? (
              <>
                <h2 className="type-h2 text-ink-950">{founder.name}</h2>
                <p className="mt-2 text-sm font-medium text-accent-700">{founder.title}</p>
              </>
            ) : null}

            <div className={`max-w-2xl space-y-5 ${hasPortrait ? "mt-6" : ""}`}>
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Experience spans
              </p>
              <ul className="mt-3 grid gap-x-8 border-t border-ink-200 sm:grid-cols-2">
                {founder.experienceThemes.map((theme) => (
                  <li
                    key={theme}
                    className="border-b border-ink-200 py-2.5 text-sm text-ink-600"
                  >
                    {theme}
                  </li>
                ))}
              </ul>
            </div>

            {hasCertification ? (
              <p className="mt-6 text-sm text-ink-600">
                <span className="font-semibold text-ink-800">Certification: </span>
                {founder.certification}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
