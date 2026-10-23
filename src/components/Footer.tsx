import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--navy-dark)] to-[#0a0e3a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: About */}
          <div>
            <Link href="/" className="block mb-6" style={{ textDecoration: "none" }}>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                RS <span className="text-[var(--gold)]">Sagar</span>
              </span>
              <span className="text-xs ml-2 text-white/60">&amp; Associates</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Dedicated to providing expert legal services with integrity, compassion,
              and a commitment to justice. Proud member of the Bar Council of India.
            </p>
            <div className="flex items-center gap-2 text-[var(--gold)] text-xs font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Bar Council of India Member
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Practice Areas", href: "/practice/criminal-law" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-[var(--gold)] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Criminal Law", href: "/practice/criminal-law" },
                { label: "Family Law", href: "/practice/family-law" },
                { label: "Civil Law", href: "/practice/civil-law" },
                { label: "Bail Matters", href: "/practice/bail-matters" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-[var(--gold)] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--gold)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chamber D422, 4th Floor,<br />
                  Lawyers Chamber, Karkardooma Court,<br />
                  Shahdara, Delhi 110032
                </p>
              </div>
              <a href="tel:+919910017625" className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold)] text-sm transition-colors">
                <svg className="w-5 h-5 text-[var(--gold)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9910017625
              </a>
              <a href="mailto:rajbirssagar@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold)] text-sm transition-colors">
                <svg className="w-5 h-5 text-[var(--gold)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rajbirssagar@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} RS Sagar and Associates. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Advocate Rajbir Singh Sagar, Karkardooma Court, Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
