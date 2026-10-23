import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Best Family & Divorce Lawyer in Delhi | RS Sagar and Associates",
  description: "Expert family law attorney in Delhi. Specializing in divorce, child custody, maintenance, domestic violence cases at Karkardooma Court. Compassionate and confidential legal support.",
};

const services = [
  { title: "Divorce Proceedings", desc: "Expert handling of both mutual consent and contested divorce cases under Hindu Marriage Act, Special Marriage Act, and other personal laws." },
  { title: "Child Custody", desc: "Fighting for your parental rights with sensitivity, ensuring the best interests of the child are always prioritized." },
  { title: "Maintenance & Alimony", desc: "Securing fair maintenance orders for spouses and children under Section 125 CrPC and relevant personal laws." },
  { title: "Domestic Violence", desc: "Protection orders and legal remedies under the Protection of Women from Domestic Violence Act, 2005." },
  { title: "Hindu Marriage Act", desc: "Comprehensive legal services under HMA including restitution of conjugal rights, judicial separation, and nullity of marriage." },
  { title: "Muslim Personal Law", desc: "Expert guidance on matters of Nikah, Talaq, Khula, Mahr, and maintenance under Muslim personal law." },
];

const process = [
  { step: "01", title: "Confidential Consultation", desc: "A private, judgment-free consultation to understand your situation and explore legal options." },
  { step: "02", title: "Case Evaluation", desc: "Thorough analysis of your case including documents, evidence, and applicable laws." },
  { step: "03", title: "Mediation & Negotiation", desc: "We first attempt amicable resolution through counseling and negotiation to minimize trauma." },
  { step: "04", title: "Court Proceedings", desc: "If needed, aggressive representation in court to protect your rights and interests." },
];

export default function FamilyLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image src="/images/family.jpg" alt="Family Law Lawyer Delhi" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-dark)] via-[rgba(26,35,126,0.85)] to-[var(--navy-dark)]" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[var(--gold-light)] text-sm uppercase tracking-[0.3em] font-medium mb-4" style={{ animation: "fadeInDown 0.8s ease-out" }}>Practice Area</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)", animation: "hero-text 1s ease-out" }}>
            Family <span className="gradient-text">Law</span>
          </h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-white/50 text-sm">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link> / <Link href="/#practice" className="hover:text-[var(--gold)] transition-colors">Practice Areas</Link> / Family Law
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal direction="left" className="lg:w-3/5">
              <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Family & Matrimonial Law</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Compassionate Legal Support for Families
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Family matters are deeply personal and emotionally challenging. At RS Sagar and Associates, we understand that family law cases require not just legal expertise but also empathy, patience, and sensitivity. We are committed to helping families navigate through difficult times with dignity and care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advocate Rajbir Singh Sagar has helped hundreds of families resolve their disputes, from amicable mutual consent divorces to complex contested custody battles. His approach always prioritizes the well-being of all family members, especially children, while vigorously protecting his client&apos;s rights and interests.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are facing a divorce, fighting for custody of your children, seeking maintenance, or dealing with domestic violence, we provide confidential, compassionate, and effective legal representation tailored to your unique situation.
              </p>
              <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:w-2/5">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/family.jpg" alt="Family Lawyer Delhi" width={500} height={600} className="object-cover w-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Services</p>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Family Law Services</h2>
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
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>How We Handle Your Case</h2>
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
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Going Through a Family Dispute?</h2>
            <p className="text-white/70 text-lg mb-8">Let us help you navigate through this difficult time with compassion and expert legal guidance.</p>
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
