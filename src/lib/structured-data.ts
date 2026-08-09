import { businessDetails, isPlaceholder, siteConfig, siteUrl } from "@/content/site";

/**
 * JSON-LD builders.
 *
 * Only facts that are actually confirmed get emitted. Placeholder business
 * details are omitted rather than published as literal "[BUSINESS EMAIL]"
 * strings, which would be worse than absent data for both search engines
 * and anyone reading the markup.
 */

type Json = Record<string, unknown>;

function withoutPlaceholders(entries: Record<string, string | undefined>): Json {
  return Object.fromEntries(
    Object.entries(entries).filter(
      ([, value]) => typeof value === "string" && value.length > 0 && !isPlaceholder(value),
    ),
  );
}

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteUrl,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: String(siteConfig.foundingYear),
    founder: { "@type": "Person", name: "Kartikeye Khanna" },
    knowsAbout: [
      "Medical device product development",
      "MedTech program management",
      "Design transfer",
      "Regulatory strategy",
      "Quality systems and remediation",
      "Sustaining engineering",
      "Software as a medical device",
      "Manufacturing and supply chain",
      "Commercialization and market entry",
      "India and global MedTech execution",
    ],
    areaServed: "Global",
    ...withoutPlaceholders({
      email: businessDetails.email,
      telephone: businessDetails.phone,
    }),
    ...(isPlaceholder(businessDetails.linkedinUrl) ? {} : { sameAs: [businessDetails.linkedinUrl] }),
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteUrl}${service.path}`,
    serviceType: service.name,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "Global",
  };
}

export function breadcrumbSchema(trail: { label: string; href: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  author: string;
  publishedAt: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${siteUrl}${article.path}`,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@id": `${siteUrl}/#organization` },
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
  };
}
