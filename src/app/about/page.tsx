import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Advocate Rajbir Singh Sagar | RS Sagar and Associates",
  description:
    "Learn about Advocate Rajbir Singh Sagar, an experienced legal professional at Karkardooma Court, Delhi. Expert in criminal, family, civil law and bail matters. Bar Council of India member.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 navy-gradient-bg" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/court.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy opacity-90" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold-light text-sm uppercase tracking-[0.3em] font-medium mb-4" style={{ animation: "fadeInDown 0.8s ease-out" }}>
            Know Your Advocate
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)", animation: "hero-text 1s ease-out" }}>
            About <span className="gradient-text">Us</span>
          </h1>
          <div className="section-divider mx-auto mb-4" />
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <ScrollReveal direction="left" className="md:w-2/5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image src="/images/ADV. Rajbir.jpeg" alt="Advocate Rajbir Singh Sagar" width={400} height={500} className="object-cover w-full" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-gold text-navy-dark rounded-2xl px-6 py-4 shadow-xl text-center">
                  <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Expert</span>
                  <p className="text-sm font-medium">Legal Counsel</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="md:w-3/5">
              <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">Advocate Rajbir Singh Sagar</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                A Legacy of Justice &amp; Excellence
              </h2>
              <p className="text-gold-ink text-sm mb-6 font-medium">Member, Bar Council of India</p>
              <div className="section-divider mb-8" />

              <p className="text-gray-600 leading-relaxed mb-4">
                Advocate Rajbir Singh Sagar has built a distinguished career in the legal profession. Practicing primarily at Karkardooma Court, Delhi, he has successfully represented clients across a wide range of legal matters including criminal defense, family disputes, civil litigation, and bail proceedings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                His legal acumen extends across various courts in New Delhi, and he has provided expert consultation to clients throughout India. What sets Advocate Sagar apart is his unwavering commitment to each client&apos;s case, treating every matter, big or small, with the same level of dedication and thoroughness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a proud member of the Bar Council of India, he upholds the highest standards of professional ethics and integrity. His approach combines deep legal knowledge with genuine compassion for his clients, making him one of the most trusted advocates in the Karkardooma Court community.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Criminal Law", "Family Law", "Civil Litigation", "Bail Matters", "Property Disputes", "Divorce"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-cream text-navy text-xs font-semibold rounded-full">{tag}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-gold-ink text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Why Choose Us</h2>
            <div className="section-divider mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="text-center p-8 rounded-2xl bg-cream hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 text-gold-ink flex items-center justify-center" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h3 className="text-lg font-bold text-navy mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Need Legal Assistance?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Schedule a free consultation today and let us help you navigate through your legal challenges.
            </p>
            <Link href="/contact" className="btn-primary text-lg">Contact Us Today</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}


const whyUs = [
  {
    title: "Experienced",
    desc: "Extensive legal practice with deep expertise across multiple practice areas.",
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/></svg>',
  },
  {
    title: "Integrity",
    desc: "Honest and transparent legal practice built on trust and ethical values.",
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
  },
  {
    title: "Personalized",
    desc: "Every case receives individual attention and a tailored strategy for the best outcome.",
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>',
  },
  {
    title: "Result-Oriented",
    desc: "98% success rate. We fight relentlessly for the best possible outcome in every case.",
    icon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172"/></svg>',
  },
];
