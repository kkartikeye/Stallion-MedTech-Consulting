"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { capabilityGroups, capabilitiesInGroup } from "@/content/capabilities";
import { sectorsWithPages, sectorsWithoutPages } from "@/content/sectors";
import { approachNav, primaryCta, primaryNav } from "@/content/site";

/**
 * Mobile navigation.
 *
 * Designed for mobile rather than shrunk from the desktop menu: one
 * accordion level, generous tap targets, and the full capability list
 * available without a second screen. Only one section is open at a time so
 * the drawer never becomes an unscannable wall of links.
 */
export function MobileNav({
  isActive,
  onNavigate,
}: {
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenSection((current) => (current === key ? null : key));
  }

  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className="materialize max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-ink-100 px-4 pb-5 pt-3 lg:hidden"
      style={{ transformOrigin: "top" }}
    >
      <ul className="flex flex-col gap-0.5">
        {/* Capabilities */}
        <li>
          <SectionToggle
            label="Capabilities"
            isOpen={openSection === "capabilities"}
            onClick={() => toggle("capabilities")}
          />
          {openSection === "capabilities" ? (
            <div className="materialize pb-2 pl-3">
              {capabilityGroups.map((group) => (
                <div key={group.id} className="mt-3 first:mt-1">
                  <p className="px-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    {group.label}
                  </p>
                  <ul className="mt-1">
                    {capabilitiesInGroup(group.id).map((capability) => (
                      <li key={capability.slug}>
                        <Link
                          href={`/capabilities/${capability.slug}`}
                          onClick={onNavigate}
                          className="block rounded-lg px-3 py-2.5 text-sm text-ink-700 transition-[background-color,transform] active:scale-[0.99] active:bg-sand-100"
                        >
                          {capability.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/capabilities"
                onClick={onNavigate}
                className="mt-3 block rounded-lg px-3 py-2.5 text-sm font-semibold text-accent-700"
              >
                View all capabilities
              </Link>
            </div>
          ) : null}
        </li>

        {/* Sectors */}
        <li>
          <SectionToggle
            label="MedTech Sectors"
            isOpen={openSection === "medtech"}
            onClick={() => toggle("medtech")}
          />
          {openSection === "medtech" ? (
            <div className="materialize pb-2 pl-3">
              <ul className="mt-1">
                {sectorsWithPages.map((sector) => (
                  <li key={sector.slug}>
                    <Link
                      href={`/medtech/${sector.slug}`}
                      onClick={onNavigate}
                      className="block rounded-lg px-3 py-2.5 text-sm text-ink-700 transition-[background-color,transform] active:scale-[0.99] active:bg-sand-100"
                    >
                      {sector.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-3 px-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Also supported
              </p>
              <p className="mt-1.5 px-3 text-xs leading-relaxed text-ink-500">
                {sectorsWithoutPages.map((sector) => sector.shortTitle).join(" · ")}
              </p>
              <Link
                href="/medtech"
                onClick={onNavigate}
                className="mt-3 block rounded-lg px-3 py-2.5 text-sm font-semibold text-accent-700"
              >
                View all sectors
              </Link>
            </div>
          ) : null}
        </li>

        {/* How we work */}
        <li>
          <SectionToggle
            label="How We Work"
            isOpen={openSection === "approach"}
            onClick={() => toggle("approach")}
          />
          {openSection === "approach" ? (
            <ul className="materialize pb-2 pl-3">
              {approachNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink-700 transition-[background-color,transform] active:scale-[0.99] active:bg-sand-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>

        {/* Plain links */}
        {primaryNav
          .filter((item) => !item.menu)
          .map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-[color,background-color,transform] active:scale-[0.98] ${
                  isActive(item.href)
                    ? "bg-sand-100 font-semibold text-ink-950"
                    : "text-ink-700 hover:bg-sand-50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>

      <Button href={primaryCta.href} variant="primary" tone="light" className="mt-4 w-full" onClick={onNavigate}>
        {primaryCta.label}
      </Button>
    </nav>
  );
}

function SectionToggle({
  label,
  isOpen,
  onClick,
}: {
  label: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-ink-700 transition-[background-color,transform] active:scale-[0.98] active:bg-sand-100"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 text-ink-500 transition-transform duration-200 ease-out-quiet ${
          isOpen ? "rotate-180" : ""
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
