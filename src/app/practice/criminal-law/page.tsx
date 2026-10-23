import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Best Criminal Lawyer in Delhi | Criminal Defense | RS Sagar and Associates",
  description: "Expert criminal defense lawyer in Delhi. Advocate Rajbir Singh Sagar specializes in FIR matters, criminal trials, appeals, cyber crime, cheque bounce cases at Karkardooma Court.",
};

const services = [
  { title: "FIR & Police Matters", desc: "Assistance with FIR registration, quashing of FIR, and handling police complaints and investigations." },
  { title: "Criminal Trials", desc: "Comprehensive defense representation in Sessions Court and Magistrate Court for all criminal charges." },
  { title: "Criminal Appeals", desc: "Filing and arguing appeals in High Court against unfavorable trial court verdicts." },
  { title: "White Collar Crime", desc: "Defense in fraud, embezzlement, forgery, and corporate criminal matters." },
  { title: "Cyber Crime", desc: "Legal representation in cases involving online fraud, hacking, identity theft, and digital offenses." },
  { title: "Cheque Bounce (Sec 138 NI Act)", desc: "Filing and defending cases under Section 138 of the Negotiable Instruments Act." },
];

const process = [
  { step: "01", title: "Case Assessment", desc: "We thoroughly analyze your case, review all evidence, and understand the charges against you." },
  { step: "02", title: "Strategy Development", desc: "Our team develops a tailored defense strategy based on the specific facts and circumstances." },
  { step: "03", title: "Court Representation", desc: "We provide aggressive and skilled representation at every hearing and court proceeding." },
  { step: "04", title: "Resolution", desc: "We work tirelessly toward the best possible outcome, whether acquittal, reduced charges, or favorable settlement." },
];

export default function CriminalLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image src="/images/criminal.jpg" alt="Criminal Law Defense Delhi" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-dark)] via-[rgba(26,35,126,0.85)] to-[var(--navy-dark)]" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[var(--gold-light)] text-sm uppercase tracking-[0.3em] font-medium mb-4" style={{ animation: "fadeInDown 0.8s ease-out" }}>Practice Area</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)", animation: "hero-text 1s ease-out" }}>
            Criminal <span className="gradient-text">Law</span>
          </h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-white/50 text-sm">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link> / <Link href="/#practice" className="hover:text-[var(--gold)] transition-colors">Practice Areas</Link> / Criminal Law
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal direction="left" className="lg:w-3/5">
              <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Criminal Defense</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Defending Your Rights with Vigour
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Being accused of a criminal offense can be one of the most stressful experiences of your life. At RS Sagar and Associates, we understand the gravity of criminal charges and provide aggressive, strategic defense to protect your rights, freedom, and reputation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advocate Rajbir Singh Sagar has extensive experience handling a wide range of criminal cases, from minor offenses to serious charges including murder, assault, theft, fraud, and cyber crimes. With deep expertise in practice at Karkardooma Court and other courts across Delhi, he has built a reputation for thorough preparation, sharp courtroom advocacy, and a relentless pursuit of justice for his clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe that every accused person deserves a fair trial and competent representation. Our approach combines meticulous legal research, strategic planning, and persuasive advocacy to achieve the best possible outcome for every client.
              </p>
              <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:w-2/5">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/criminal.jpg" alt="Criminal Law Attorney Delhi" width={500} height={600} className="object-cover w-full" />
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
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Criminal Law Services</h2>
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
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Facing Criminal Charges?</h2>
            <p className="text-white/70 text-lg mb-8">Don&apos;t face the legal system alone. Contact us for immediate legal assistance.</p>
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
