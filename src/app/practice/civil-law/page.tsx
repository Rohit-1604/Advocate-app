import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Best Civil Lawyer in Delhi | Property Disputes | RS Sagar and Associates",
  description: "Expert civil litigation lawyer in Delhi. Specializing in property disputes, contract issues, recovery suits, injunctions, and partition suits at Karkardooma Court.",
};

const services = [
  { title: "Property Disputes", desc: "Resolution of property ownership conflicts, title disputes, possession claims, and encroachment matters." },
  { title: "Contract Disputes", desc: "Enforcement, breach of contract claims, specific performance, and damages recovery for all types of agreements." },
  { title: "Recovery Suits", desc: "Filing and defending money recovery suits, executing decrees, and enforcing payment obligations." },
  { title: "Injunction Orders", desc: "Obtaining temporary and permanent injunctions to protect your rights and prevent irreparable harm." },
  { title: "Partition Suits", desc: "Division of jointly held properties among co-owners, including family partition and ancestral property matters." },
  { title: "Landlord-Tenant Disputes", desc: "Eviction proceedings, rent disputes, lease agreements, and tenancy rights litigation." },
];

const process = [
  { step: "01", title: "Document Review", desc: "Comprehensive review of all documents, agreements, and evidence related to your civil matter." },
  { step: "02", title: "Legal Opinion", desc: "Providing a clear, honest legal opinion on the merits of your case and possible outcomes." },
  { step: "03", title: "Negotiation", desc: "Attempting out-of-court settlement to save time and costs before proceeding to litigation." },
  { step: "04", title: "Litigation", desc: "Vigorous courtroom representation with meticulous preparation and persuasive advocacy." },
];

export default function CivilLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image src="/images/civil.jpg" alt="Civil Law Attorney Delhi" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy/85 to-navy-dark" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold-light text-sm uppercase tracking-[0.3em] font-medium mb-4" style={{ animation: "fadeInDown 0.8s ease-out" }}>Practice Area</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)", animation: "hero-text 1s ease-out" }}>
            Civil <span className="gradient-text">Law</span>
          </h1>
          <div className="section-divider mx-auto mb-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal direction="left" className="lg:w-3/5">
              <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">Civil Litigation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Resolving Disputes with Precision
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Civil disputes can be complex, time-consuming, and emotionally draining. Whether it&apos;s a property conflict with a neighbor, a breach of contract by a business partner, or a landlord-tenant disagreement, having the right legal representation can make all the difference.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At RS Sagar and Associates, we bring a meticulous and client-focused approach to every civil case. Advocate Rajbir Singh Sagar has extensive experience in handling civil matters across all courts in Delhi, from filing suits to executing decrees, ensuring that our clients&apos; rights and interests are fully protected.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe in exploring all avenues, including negotiation and mediation, before resorting to litigation. However, when court proceedings are necessary, we provide robust and well-prepared representation to achieve the best possible outcome.
              </p>
              <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:w-2/5">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/civil.jpg" alt="Civil Law Services Delhi" width={500} height={600} className="object-cover w-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Services</p>
            <h2 className="text-3xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Civil Law Services</h2>
            <div className="section-divider mx-auto" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={((i % 3) * 100) as 0 | 100 | 200}>
                <div className="bg-white p-6 rounded-xl border-l-4 border-gold hover:shadow-lg transition-all h-full">
                  <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
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
            <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Approach</p>
            <h2 className="text-3xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>How We Handle Your Case</h2>
            <div className="section-divider mx-auto" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>{p.step}</div>
                  <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h3>
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
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Have a Civil Dispute?</h2>
            <p className="text-white/70 text-lg mb-8">Let our experienced team help you resolve your civil matter efficiently and effectively.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Schedule Consultation</Link>
              <a href="tel:+919910017625" className="btn-outline">Call Now</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
