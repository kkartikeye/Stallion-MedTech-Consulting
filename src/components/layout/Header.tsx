"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MegaMenuPanel, panelWidth } from "./MegaMenuPanels";
import { MobileNav } from "./MobileNav";
import { primaryCta, primaryNav, type NavMenuKey } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Delay before a hover-out closes the menu, so crossing a gap doesn't. */
const CLOSE_DELAY_MS = 120;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<NavMenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  /**
   * On a hover-capable device, `mouseenter` fires immediately before
   * `click`. Without this flag the pointer opens the menu and the click
   * then toggles it straight back shut, so clicking a closed menu appears
   * to do nothing. The flag lets the first click after a hover-open be a
   * no-op; the next one closes as expected.
   */
  const openedByHover = useRef(false);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  }, [cancelClose]);

  // Close everything on route change — the destination page is the feedback.
  // Adjusted during render rather than in an effect: this is derived state,
  // and an effect here would cause an extra render pass with the menu still
  // visibly open.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => () => cancelClose(), [cancelClose]);

  // Escape closes the open menu and returns focus to its trigger.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (openMenu) {
        const trigger = navRef.current?.querySelector<HTMLButtonElement>(
          `[data-menu-trigger="${openMenu}"]`,
        );
        setOpenMenu(null);
        trigger?.focus();
      }
      setMobileOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu, mobileOpen]);

  const closeMenu = useCallback(() => setOpenMenu(null), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          ref={navRef}
          /* The compact bar stays translucent so content reads through it.
             A large open panel does not: a light translucent surface over
             arbitrary content destroys legibility, so it goes solid. */
          className={`rounded-panel border border-ink-100/80 shadow-panel ${
            openMenu || mobileOpen
              ? "bg-white"
              : "chrome-translucent bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85"
          }`}
          onMouseLeave={scheduleClose}
        >
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5">
            <Logo />

            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                const baseClasses = `relative rounded-full px-3.5 py-2 text-sm font-medium transition-[color,background-color,transform] duration-150 active:scale-[0.96] ${
                  active ? "text-ink-950" : "text-ink-600 hover:text-ink-950"
                }`;

                if (!item.menu) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={scheduleClose}
                      className={`${baseClasses} hover:bg-sand-100`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const menuKey = item.menu;
                const isOpen = openMenu === menuKey;

                return (
                  <button
                    key={item.href}
                    type="button"
                    data-menu-trigger={menuKey}
                    aria-expanded={isOpen}
                    aria-controls={`megamenu-${menuKey}`}
                    aria-haspopup="true"
                    onClick={() => {
                      if (openedByHover.current) {
                        openedByHover.current = false;
                        return;
                      }
                      setOpenMenu(isOpen ? null : menuKey);
                    }}
                    onMouseEnter={() => {
                      cancelClose();
                      if (!isOpen) openedByHover.current = true;
                      setOpenMenu(menuKey);
                    }}
                    onMouseLeave={() => {
                      openedByHover.current = false;
                    }}
                    onFocus={() => {
                      cancelClose();
                      setOpenMenu(menuKey);
                    }}
                    className={`${baseClasses} inline-flex items-center gap-1 ${
                      isOpen ? "bg-sand-100" : "hover:bg-sand-100"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-ink-500 transition-transform duration-200 ease-out-quiet ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Button href={primaryCta.href} variant="primary" tone="light" size="sm">
                {primaryCta.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-full p-2 text-ink-700 transition-[background-color,transform] duration-150 hover:bg-sand-100 active:scale-90 lg:hidden"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>

          {/* Desktop mega-menu. Rendered inside the chrome panel so it reads
              as an extension of the header rather than a detached overlay. */}
          {openMenu ? (
            <div
              id={`megamenu-${openMenu}`}
              className="menu-in hidden border-t border-ink-100 lg:block"
              onMouseEnter={cancelClose}
            >
              <div className={`${panelWidth[openMenu]} px-6 py-7`}>
                <MegaMenuPanel menu={openMenu} onNavigate={closeMenu} />
              </div>
            </div>
          ) : null}

          {mobileOpen ? (
            <MobileNav
              isActive={(href) => isActive(pathname, href)}
              onNavigate={() => setMobileOpen(false)}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}
