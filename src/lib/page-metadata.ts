import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    openGraph: { title: socialTitle, description },
    twitter: { title: socialTitle, description },
  };
}
