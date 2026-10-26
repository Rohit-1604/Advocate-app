// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import StatsCounter from '@/components/StatsCounter';

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/court.jpg"
          alt="Karkardooma Court Delhi"
          fill
          priority
          className="object-cover"
          quality={80}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/75 to-navy-dark/9" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light opacity-5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-gold-light text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6"
            style={{ animation: 'fadeInDown 0.8s ease-out' }}
          >
            Welcome to
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-playfair)',
              animation: 'hero-text 1s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            RS <span className="gradient-text">Sagar</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
              & Associates
            </span>
          </h1>

          <div
            className="section-divider mx-auto my-6"
            style={{ animation: 'width-grow 1s ease-out 0.5s both' }}
          />

          <p
            className="text-xl md:text-2xl text-white/90 italic mb-4"
            style={{
              fontFamily: 'var(--font-playfair)',
              animation: 'hero-sub 1.5s ease-out',
            }}
          >
            &ldquo;Justice Delayed is Justice Denied&rdquo;
          </p>

          <p
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}
          >
            With deep expertise in Criminal, Bail, Civil, and Family Law,
            we are committed to providing expert legal services with unwavering integrity and compassion.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: 'fadeInUp 1s ease-out 1s both' }}
          >
            <Link href="/contact" className="btn-primary text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Free Consultation
            </Link>
            <Link href="/about" className="btn-outline text-lg">
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ animation: 'float 2s ease-in-out infinite' }}
        >
          <svg className="w-6 h-10 text-white/50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 40">
            <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" fill="none" />
            <circle cx="12" cy="10" r="2" fill="currentColor">
              <animate attributeName="cy" values="10;20;10" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Image */}
            <ScrollReveal direction="left" className="md:w-2/5">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-navy opacity-10 rounded-2xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/ADV. Rajbir.jpeg"
                    alt="Advocate Rajbir Singh Sagar - Best Lawyer in Delhi"
                    width={400}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gold text-navy-dark rounded-2xl px-6 py-4 shadow-xl">
                  <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>Expert</span>
                  <p className="text-sm font-medium">Legal Counsel</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right" className="md:w-3/5">
              <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                About Us
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Dedicated to Protecting <br className="hidden md:block" />
                <span className="gradient-text-navy">Your Rights</span>
              </h2>
              <div className="section-divider mb-8" />

              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                Advocate Rajbir Singh Sagar has successfully represented clients across various courts
                in New Delhi and has provided expert consultation to clients throughout India. With
                extensive experience in Criminal, Bail, Civil, and Family Law matters, he is committed
                to delivering personalized legal solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                As a proud member of the <strong>Bar Council of India</strong>, Advocate Rajbir Singh
                Sagar sees the pursuit of justice as more than a profession. It&apos;s a personal mission.
                Known for his integrity, compassion, and relentless advocacy, he stands proudly for
                justice and excellence in every case.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Cases Won', value: '500+' },
                  { label: 'Happy Clients', value: '1000+' },
                  { label: 'Courts', value: 'All Delhi' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-cream rounded-xl">
                    <p className="text-2xl font-bold text-gold-ink" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-navy">
                Read Full Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRACTICE AREAS
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              What We Do
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Practice Areas
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide comprehensive legal services across multiple practice areas,
              ensuring expert representation for every client.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={(index * 100) as 0 | 100 | 200 | 300 | 400 | 500 | 600} direction="scale">
                <Link href={area.href} className="block h-full">
                  <div className="practice-card bg-white h-full group">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={area.imgSrc}
                        alt={area.imgAlt}
                        fill
                        className="card-image object-cover"
                      />
                      <div className="card-overlay absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-60" />
                      {/* Icon overlay */}
                      <div className="absolute bottom-4 left-4 bg-white/90 rounded-full p-3 shadow-lg">
                        <div className="text-gold-ink" dangerouslySetInnerHTML={{ __html: area.icon }} />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-navy mb-2 group-hover:text-gold-ink transition-colors"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        {area.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {area.description}
                      </p>
                      <span className="text-gold-ink text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS COUNTER
          ═══════════════════════════════════════════ */}
      <StatsCounter />

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Why Clients Trust Us
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Why Choose Us
            </h2>
            <div className="section-divider mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={(index * 100) as 0 | 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cream flex items-center justify-center group-hover:bg-gold transition-colors">
                    <div
                      className="text-gold-ink group-hover:text-navy-dark transition-colors"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-navy mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 navy-gradient-bg" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/court.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-navy-dark via-navy to-navy-dark opacity-95" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-gold-light text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              Get In Touch
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Need Legal Assistance?
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Don&apos;t navigate the legal system alone. Schedule a free consultation with
              Advocate Rajbir Singh Sagar and get the expert guidance you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
              <a
                href="tel:+919910017625"
                className="btn-outline text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const practiceAreas = [
  {
    title: 'Criminal Law',
    description:
      'Defending your rights in criminal proceedings, FIR matters, and trials with strategic advocacy.',
    imgSrc: '/images/criminal.jpg',
    imgAlt: 'Criminal Law - Defense and Trials in Delhi',
    href: '/practice/criminal-law',
    icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
  },
  {
    title: 'Family Law',
    description:
      'Guiding families through divorce, child custody, maintenance, and domestic violence matters.',
    imgSrc: '/images/family.jpg',
    imgAlt: 'Family Law - Divorce and Custody in Delhi',
    href: '/practice/family-law',
    icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
  },
  {
    title: 'Civil Law',
    description:
      'Resolving property disputes, contract issues, and civil litigation with a meticulous approach.',
    imgSrc: '/images/civil.jpg',
    imgAlt: 'Civil Law - Property and Contract Disputes',
    href: '/practice/civil-law',
    icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  },
  {
    title: 'Bail Matters',
    description:
      'Swift and strategic legal support for securing bail and navigating judicial procedures.',
    imgSrc: '/images/bail.jpg',
    imgAlt: 'Bail Matters - Bail Legal Support',
    href: '/practice/bail-matters',
    icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>',
  },
];

const whyChooseUs = [
  {
    title: 'Experienced',
    description: 'Extensive legal practice across all courts in Delhi with a proven track record.',
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>',
  },
  {
    title: 'Integrity',
    description: 'Honest, transparent, and ethical legal practice. Your trust is our most valuable asset.',
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
  },
  {
    title: 'Personalized',
    description: 'Every case receives individual attention and a tailored legal strategy for best outcomes.',
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>',
  },
  {
    title: 'Result-Oriented',
    description: '98% success rate speaks for itself. We fight relentlessly for the best possible outcome.',
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.856m-4.998 0a6.023 6.023 0 002.77.856"/></svg>',
  },
];
