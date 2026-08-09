import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href: string };

/**
 * Wayfinding for nested routes. The final crumb is the current page and is
 * marked `aria-current` rather than linked.
 */
export function Breadcrumbs({
  crumbs,
  className = "",
  tone = "dark",
}: {
  crumbs: Crumb[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const linkTone = tone === "dark" ? "text-ink-300 hover:text-white" : "text-ink-500 hover:text-ink-950";
  const currentTone = tone === "dark" ? "text-white" : "text-ink-950";
  const dividerTone = tone === "dark" ? "text-ink-500" : "text-ink-300";

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-medium">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className={`h-3 w-3 ${dividerTone}`} aria-hidden="true" />
              ) : null}
              {isLast ? (
                <span aria-current="page" className={currentTone}>
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className={`transition-colors ${linkTone}`}>
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
