"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Practice Areas",
    href: "#",
    children: [
      { label: "Criminal Law", href: "/practice/criminal-law" },
      { label: "Family Law", href: "/practice/family-law" },
      { label: "Civil Law", href: "/practice/civil-law" },
      { label: "Bail Matters", href: "/practice/bail-matters" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Small delay before closing so a slightly wobbly mouse path does not snap the menu shut
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = (delay = 0) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), delay);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "header-scrolled py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="block select-none" style={{ textDecoration: "none" }}>
          <span
            className="text-2xl md:text-3xl font-bold tracking-wide text-white"
            style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.08em" }}
          >
            RS <span className="text-gold">Sagar</span>{" "}
            <span className="text-sm md:text-base font-normal align-top ml-1 opacity-80">
              &amp; Associates
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={() => closeDropdown(200)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) closeDropdown();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") closeDropdown();
                }}
              >
                <button
                  type="button"
                  // Mouse clicks only open (hover already did); keyboard Enter/Space toggles
                  onClick={(e) => (e.detail === 0 && dropdownOpen ? closeDropdown() : openDropdown())}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className="text-white/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wider flex items-center gap-1">
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  // pt-2 (not mt-2) keeps the gap under the button inside the hover area
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-52 bg-white rounded-xl shadow-2xl py-2 border border-gray-100"
                      style={{ animation: "fadeInDown 0.25s ease-out" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => closeDropdown()}
                          className="block px-5 py-3 text-gray-700 hover:bg-cream hover:text-gold-ink text-sm font-medium transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wider relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 ${mobileOpen ? "hamburger-open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-[280px] bg-navy-dark z-50 lg:hidden flex flex-col pt-20 px-8 ${mobileOpen ? "open" : ""}`}>
        <button
          className="absolute top-6 right-6 text-white/70 hover:text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-6 mb-3 font-semibold">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/80 hover:text-gold py-2 pl-4 border-l-2 border-white/10 hover:border-gold text-sm transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-gold py-3 text-lg font-medium transition-colors border-b border-white/5"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="mt-auto pb-8">
          <a
            href="tel:+919910017625"
            className="btn-primary w-full justify-center text-sm mt-6"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
