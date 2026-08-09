import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/content/site";

/**
 * Builds per-page metadata with a canonical URL. Pass `path` for every
 * page so canonicals are correct and duplicate-content signals stay clean.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/capabilities/strategy-growth". */
  path: string;
  /** Set for unpublished content that should not be indexed. */
  noIndex?: boolean;
}): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: socialTitle, description },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
