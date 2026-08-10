import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilityGroups, capabilitiesInGroup } from "@/content/capabilities";
import { sectorsWithPages, sectorsWithoutPages } from "@/content/sectors";
import { approachNav, type NavMenuKey } from "@/content/site";

/**
 * Mega-menu panel contents.
 *
 * Everything here is derived from the capability and sector data, so the
 * menu cannot drift out of sync with the pages that actually exist. Links
 * are grouped and captioned rather than presented as one flat list of
 * forty equal-weight items.
 */

function PanelFooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
    >
      {children}
      <ArrowRight className="cta-arrow h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );
}

function CapabilitiesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <div className="grid gap-x-8 gap-y-7 lg:grid-cols-4">
        {capabilityGroups.map((group) => (
          <div key={group.id}>
            {/* Fixed caption block height so the link lists start on the same
                baseline regardless of whether a caption wraps to two lines. */}
            <div className="min-h-[3.25rem]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-950">
                {group.label}
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-500">{group.caption}</p>
            </div>
            <ul className="mt-3 space-y-1">
              {capabilitiesInGroup(group.id).map((capability) => (
                <li key={capability.slug}>
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    onClick={onNavigate}
                    className="block rounded-lg px-2.5 py-2 -mx-2.5 text-sm font-medium text-ink-700 transition-[background-color,color] hover:bg-sand-100 hover:text-ink-950"
                  >
                    {capability.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7 border-t border-ink-100 pt-5">
        <PanelFooterLink href="/capabilities">View all capabilities</PanelFooterLink>
      </div>
    </div>
  );
}

function SectorsPanel({ onNavigate }: { onNavigate: () => void }) {
  const hasUnlisted = sectorsWithoutPages.length > 0;

  return (
    <div>
      <div className={`grid gap-x-8 gap-y-7 ${hasUnlisted ? "lg:grid-cols-[1.6fr_1fr]" : ""}`}>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-950">
            Sectors
          </p>
          <ul className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {sectorsWithPages.map((sector) => (
              <li key={sector.slug}>
                <Link
                  href={`/medtech/${sector.slug}`}
                  onClick={onNavigate}
                  className="block rounded-lg px-2.5 py-2 -mx-2.5 text-sm font-medium text-ink-700 transition-[background-color,color] hover:bg-sand-100 hover:text-ink-950"
                >
                  {sector.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {hasUnlisted ? (
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-950">
              Also supported
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {sectorsWithoutPages.map((sector) => (
                <li
                  key={sector.slug}
                  className="border border-ink-100 bg-sand-50 px-3 py-1.5 text-xs text-ink-500"
                >
                  {sector.shortTitle}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="mt-7 border-t border-ink-100 pt-5">
        <PanelFooterLink href="/medtech">View all MedTech sectors</PanelFooterLink>
      </div>
    </div>
  );
}

function ApproachPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {approachNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="rounded-xl border border-transparent px-4 py-3.5 transition-[background-color,border-color] hover:border-ink-100 hover:bg-sand-50"
        >
          <span className="block text-sm font-semibold text-ink-950">{item.label}</span>
          {item.description ? (
            <span className="mt-1 block text-xs leading-relaxed text-ink-500">
              {item.description}
            </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

export function MegaMenuPanel({
  menu,
  onNavigate,
}: {
  menu: NavMenuKey;
  onNavigate: () => void;
}) {
  if (menu === "capabilities") return <CapabilitiesPanel onNavigate={onNavigate} />;
  if (menu === "medtech") return <SectorsPanel onNavigate={onNavigate} />;
  return <ApproachPanel onNavigate={onNavigate} />;
}

/** Panels differ enough in content volume to warrant different widths. */
export const panelWidth: Record<NavMenuKey, string> = {
  capabilities: "max-w-6xl",
  medtech: "max-w-5xl",
  approach: "max-w-2xl",
};
