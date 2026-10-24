import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { BRAND } from "../data/projects.js";
import logo from "../assets/logo.png";

const PANEL_EASE = [0.22, 1, 0.36, 1];

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Properties", to: "/properties" },
  { label: "Contact", to: "/contact" },
];

/*
 * HEADER HEIGHT (keep in sync with Hero top padding):
 *   < md  : main bar only            = 80px  (5rem)
 *   >= md : utility bar 36px + 80px  = 116px (7.25rem)
 * The main bar has a FIXED height (h-20) and the logo is sized to fit
 * inside it, so the header never grows past these numbers.
 */

function Brand({ onClick, compact = false }) {
  return (
    <Link
      to="/"
      data-testid="nav-home"
      onClick={onClick}
      className="flex shrink-0 items-center"
      aria-label={`${BRAND.name} - Home`}
    >
      <img
        src={logo}
        alt={BRAND.name}
        className={`w-auto max-w-[60vw] object-contain ${
          compact ? "h-11 sm:h-12" : "h-12 sm:h-14 lg:h-16"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const skipFocusRestore = useRef(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  /* Close menu when route changes */
  const [lastPathname, setLastPathname] = useState(location.pathname);

  if (lastPathname !== location.pathname) {
    setLastPathname(location.pathname);
    setIsMenuOpen(false);
  }

  /* Lock page scroll when menu is open */
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [isMenuOpen]);

  /* Close menu when screen becomes desktop */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleBreakpointChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  /* Keyboard accessibility: Escape + focus trap */
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const toggle = toggleRef.current;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = panelRef.current.querySelectorAll(
        "a[href], button:not([disabled])"
      );

      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (!skipFocusRestore.current) {
        toggle?.focus();
      }

      skipFocusRestore.current = false;
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    skipFocusRestore.current = true;
    closeMenu();
  };

  const phoneHref = `tel:${BRAND.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <header
        data-testid="navbar"
        className="fixed inset-x-0 top-0 z-50 bg-[#eaf2f8]/95 text-[#0B2A4A] backdrop-blur"
      >
        {/* TOP UTILITY BAR (md and up) */}
        <div className="hidden h-9 bg-[#0B2A4A] text-[#eaf2f8] md:block">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
            <a
              href={`mailto:${BRAND.email}`}
              data-testid="nav-email"
              className="inline-flex min-w-0 items-center gap-2 text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-gold-light"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2} />
              <span className="truncate">{BRAND.email}</span>
            </a>

            <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light lg:inline-flex">
              {BRAND.name} & Real Estate Consultant
            </span>

            <span className="hidden min-w-0 max-w-72 items-center gap-2 text-[11px] font-medium tracking-wide text-white/70 xl:inline-flex">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2} />
              <span className="truncate">{BRAND.address}</span>
            </span>
          </div>
        </div>

        {/* MAIN NAVBAR (fixed 80px height) */}
        <div className="border-b border-gold/25 bg-[#eaf2f8]">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
            <Brand />

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 lg:flex xl:gap-10"
            >
              {LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-[#0B2A4A] hover:text-gold"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden items-center gap-3 lg:flex xl:gap-4">
              {/* Icon-only below xl so the row never overflows at 1024px */}
              <a
                href={phoneHref}
                aria-label={`Call ${BRAND.phone}`}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#0B2A4A]/15 bg-white px-3.5 text-sm font-semibold text-[#0B2A4A] transition-all duration-300 hover:border-gold hover:bg-[#d9e2ef] xl:px-5"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span className="hidden whitespace-nowrap xl:inline">
                  {BRAND.phone}
                </span>
              </a>

              <a
                href="#inquiry"
                data-testid="nav-enquire"
                className="group inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-royal px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,78,166,0.35)] transition-all duration-300 hover:bg-navy hover:text-white xl:px-6"
              >
                Enquire
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              ref={toggleRef}
              type="button"
              data-testid="nav-mobile-toggle"
              onClick={openMenu}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0B2A4A]/15 bg-white/70 text-[#0B2A4A] transition-all duration-300 hover:border-gold hover:bg-[#d9e2ef] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY (outside header so fixed is viewport-relative) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              key="mobile-backdrop"
              type="button"
              tabIndex={-1}
              aria-label="Close menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.1 : 0.3,
                ease: "easeOut",
              }}
              className="fixed inset-0 z-55 cursor-default bg-navy/40 backdrop-blur-md lg:hidden"
            />

            <motion.aside
              key="mobile-panel"
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : { type: "tween", duration: 0.42, ease: PANEL_EASE }
              }
              className="fixed inset-y-0 right-0 z-60 flex h-dvh w-[88%] max-w-sm flex-col overflow-hidden bg-navy text-white shadow-[-20px_0_60px_rgba(7,30,53,0.5)] lg:hidden"
            >
              {/* DRAWER HEADER */}
              <div className="flex h-20 shrink-0 items-center justify-between gap-3 border-b border-white/15 px-5">
                <Brand compact onClick={handleNavClick} />

                <button
                  ref={closeRef}
                  type="button"
                  data-testid="nav-mobile-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <X className="h-6 w-6" strokeWidth={2.2} />
                </button>
              </div>

              {/* MENU CONTENT */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                <nav aria-label="Mobile navigation">
                  <ul className="flex flex-col">
                    {LINKS.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: reduceMotion ? 0 : 0.08 + index * 0.055,
                          duration: 0.32,
                          ease: PANEL_EASE,
                        }}
                      >
                        <NavLink
                          to={link.to}
                          end={link.to === "/"}
                          data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                          onClick={handleNavClick}
                          className={({ isActive }) =>
                            `group flex min-h-14 items-center justify-between border-b border-white/12 px-1 transition-colors duration-200 sm:min-h-16 ${
                              isActive
                                ? "text-gold-light"
                                : "text-white hover:text-gold-light"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span className="flex items-center gap-3">
                                <span
                                  className={`h-1 w-1 rounded-full transition-transform duration-300 ${
                                    isActive ? "scale-100 bg-gold" : "scale-0"
                                  }`}
                                />
                                <span className="font-heading text-[1.2rem] font-semibold tracking-tight">
                                  {link.label}
                                </span>
                              </span>

                              <ArrowUpRight
                                className={`h-5 w-5 transition-all duration-300 ${
                                  isActive
                                    ? "translate-x-0 text-gold-light"
                                    : "text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1"
                                }`}
                              />
                            </>
                          )}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CONTACT CARD */}
                <div className="mt-6 rounded-3xl bg-white/10 p-4 ring-1 ring-white/15 sm:mt-8 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                    Get in touch
                  </p>

                  <div className="mt-3 flex flex-col gap-3 sm:mt-4">
                    <a
                      href={phoneHref}
                      data-testid="nav-mobile-phone"
                      onClick={handleNavClick}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-light active:scale-[0.98]"
                    >
                      <Phone className="h-4 w-4 shrink-0" />
                      <span className="truncate">Call {BRAND.phone}</span>
                    </a>

                    <a
                      href={`mailto:${BRAND.email}`}
                      data-testid="nav-mobile-email"
                      onClick={handleNavClick}
                      className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-light active:scale-[0.98]"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="truncate">{BRAND.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
