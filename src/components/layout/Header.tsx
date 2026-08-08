"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { primaryCta, primaryNav } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-panel border border-slate-200/80 bg-white/95 shadow-panel backdrop-blur supports-[backdrop-filter]:bg-white/90">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5">
            <Logo />

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1.5 lg:flex"
            >
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                      active
                        ? "border border-slate-200 bg-white text-slate-950 shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Button href={primaryCta.href} variant="primary" tone="light" className="px-5 py-2.5 text-[0.8rem]">
                {primaryCta.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>

          {open ? (
            <nav
              id="mobile-nav"
              aria-label="Mobile"
              className="border-t border-slate-200 px-4 pb-4 pt-2 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                          active
                            ? "bg-slate-50 font-semibold text-slate-950"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Button
                href={primaryCta.href}
                variant="primary"
                tone="light"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </Button>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
