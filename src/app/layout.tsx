// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Font setup
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-playfair',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Best Lawyer in Delhi | Rajbir Advocate Karkardooma | Criminal & Divorce Lawyer',
  description:
    'Advocate Rajbir Singh Sagar – Best lawyer in Delhi, Karkardooma Court. Expert in criminal law, divorce, family law, and bail matters. Trusted, experienced, and result-oriented legal services.',
  keywords: [
    'best lawyer in delhi',
    'best criminal lawyer in delhi',
    'best divorce lawyer in delhi',
    'rajbir advocate',
    'rajbir advocate karkardooma',
    'advocate karkardooma',
    'criminal lawyer delhi',
    'divorce lawyer delhi',
  ].join(', '),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-[#F4F1ED] shadow-sm">
          <div className="container mx-auto flex items-center justify-between py-3 px-4">
            {/* Stylish Text Logo */}
            <Link href="/" className="block select-none" style={{ textDecoration: 'none' }}>
              <span
                className="
                  font-playfair
                  text-3xl
                  md:text-4xl
                  font-bold
                  tracking-wide
                  text-[#2d2a32]
                  uppercase
                  drop-shadow-sm
                  transition
                  hover:text-yellow-700
                "
                style={{
                  letterSpacing: '0.12em',
                }}
              >
                RS <span className="text-yellow-700">Sagar</span>{' '}
                <span className="font-montserrat text-base align-top ml-1">and Associates</span>
              </span>
            </Link>
            {/* Navigation */}
            <nav className="flex space-x-8" aria-label="Main Navigation">
              <Link href="/" className="text-gray-700 hover:text-yellow-700 font-medium transition">
                Home
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-700 font-medium transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {/* Main Content */}
        <main>{children}</main>
        {/* Footer */}
        <footer className="mt-8 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RS Sagar and Associates. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
