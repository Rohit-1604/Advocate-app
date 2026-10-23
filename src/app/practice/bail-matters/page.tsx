import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Best Bail Lawyer in Delhi | Anticipatory & Regular Bail | RS Sagar and Associates",
  description: "Expert bail lawyer in Delhi. Specializing in regular bail, anticipatory bail, interim bail, default bail, and transit bail at Karkardooma Court and High Court.",
};

const services = [
  { title: "Regular Bail", desc: "Application for bail after arrest under Section 437/439 CrPC, ensuring your liberty while trial proceedings continue." },
  { title: "Anticipatory Bail", desc: "Pre-arrest bail under Section 438 CrPC to protect against potential arrest in non-bailable offenses." },
  { title: "Interim Bail", desc: "Temporary bail for a short period while the main bail application is pending hearing before the court." },
  { title: "Default Bail", desc: "Statutory bail under Section 167(2) CrPC when the investigation is not completed within the prescribed time." },
  { title: "Transit Bail", desc: "Bail obtained from a local court when the accused apprehends arrest pursuant to an order from a court in another jurisdiction." },
  { title: "High Court Bail", desc: "Filing bail applications before the Delhi High Court in sessions-triable offenses and when lower court bail is rejected." },
];

const process = [
  { step: "01", title: "Immediate Response", desc: "We understand the urgency. Our team responds immediately to bail requests, day or night." },
  { step: "02", title: "Case Analysis", desc: "Quick but thorough analysis of the case, charges, FIR, and circumstances to build a strong bail application." },
  { step: "03", title: "Bail Application", desc: "Drafting a compelling bail application with relevant case law and presenting strong arguments before the court." },
  { step: "04", title: "Post-Bail Support", desc: "Assisting with bail bond formalities, surety arrangements, and ensuring compliance with bail conditions." },
];

export default function BailMattersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image src="/images/bail.jpg" alt="Bail Lawyer Delhi" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-dark)] via-[rgba(26,35,126,0.85)] to-[var(--navy-dark)]" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[var(--gold-light)] text-sm uppercase tracking-[0.3em] font-medium mb-4" style={{ animation: "fadeInDown 0.8s ease-out" }}>Practice Area</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)", animation: "hero-text 1s ease-out" }}>
            Bail <span className="gradient-text">Matters</span>
          </h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-white/50 text-sm">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link> / <Link href="/#practice" className="hover:text-[var(--gold)] transition-colors">Practice Areas</Link> / Bail Matters
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal direction="left" className="lg:w-3/5">
              <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Bail Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Swift &amp; Strategic Bail Assistance
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-4">
                When a loved one is arrested, time is of the essence. Every hour spent in custody is an hour too many. At RS Sagar and Associates, we understand the urgency of bail matters and provide immediate, round-the-clock legal assistance to secure your freedom.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advocate Rajbir Singh Sagar has successfully secured bail for hundreds of clients across Karkardooma Court, Delhi district courts, and the Delhi High Court. His deep understanding of criminal law, bail jurisprudence, and procedural requirements ensures that bail applications are presented with the strongest possible arguments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need regular bail after arrest, anticipatory bail to prevent arrest, or emergency interim bail, our team is equipped to handle the most complex and challenging bail matters. We also assist with bail bond formalities, surety arrangements, and ensure full compliance with all bail conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Bail Assistance</Link>
                <a href="tel:+919910017625" className="btn-navy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Emergency Call
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:w-2/5">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/bail.jpg" alt="Bail Lawyer Services Delhi" width={500} height={600} className="object-cover w-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Types of Bail</p>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Bail Services We Offer</h2>
            <div className="section-divider mx-auto" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={((i % 3) * 100) as 0 | 100 | 200}>
                <div className="bg-white p-6 rounded-xl border-l-4 border-[var(--gold)] hover:shadow-lg transition-all h-full">
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Approach</p>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>How We Secure Your Bail</h2>
            <div className="section-divider mx-auto" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--navy)] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>{p.step}</div>
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Need Urgent Bail Assistance?</h2>
            <p className="text-white/70 text-lg mb-8">We provide immediate legal assistance for bail matters. Call us now for emergency help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919910017625" className="btn-primary text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91-9910017625
              </a>
              <Link href="/contact" className="btn-outline">Contact Form</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
