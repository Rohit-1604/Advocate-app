// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';

// Font setup
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
    'family lawyer delhi',
    'bail lawyer delhi',
    'civil lawyer delhi',
    'karkardooma court lawyer',
    'best advocate in delhi',
  ].join(', '),
  openGraph: {
    title: 'Best Lawyer in Delhi | RS Sagar and Associates',
    description:
      'Advocate Rajbir Singh Sagar – Expert in criminal law, divorce, family law, and bail matters at Karkardooma Court, Delhi.',
    url: 'https://rssagarandassociates.com',
    siteName: 'RS Sagar and Associates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Lawyer in Delhi | RS Sagar and Associates',
    description:
      'Expert legal services in criminal law, divorce, family law, and bail matters at Karkardooma Court, Delhi.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Advocate Rajbir Singh Sagar',
  alternateName: 'RS Sagar and Associates',
  description:
    'Expert lawyer in Delhi specializing in criminal law, divorce, family law, civil disputes, and bail matters at Karkardooma Court.',
  url: 'https://rssagarandassociates.com',
  telephone: '+91-9910017625',
  email: 'rajbirssagar@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chamber D422, 4th Floor, Lawyers Chamber, Karkardooma Court',
    addressLocality: 'Shahdara',
    addressRegion: 'Delhi',
    postalCode: '110032',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.6562',
    longitude: '77.3033',
  },
  areaServed: {
    '@type': 'City',
    name: 'Delhi',
  },
  priceRange: '$$',
  openingHours: 'Mo-Sa 09:00-18:00',
  knowsAbout: [
    'Criminal Law',
    'Family Law',
    'Civil Law',
    'Bail Matters',
    'Divorce',
    'Property Disputes',
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'Bar Council of India',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
