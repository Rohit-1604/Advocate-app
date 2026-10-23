"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "What types of cases do you handle?",
    a: "We specialize in Criminal Law, Family Law (divorce, child custody, maintenance), Civil Law (property disputes, contract issues, recovery suits), and Bail Matters (regular bail, anticipatory bail, interim bail). Our practice covers a wide spectrum of legal issues across all courts in Delhi.",
  },
  {
    q: "How do I schedule a consultation?",
    a: "You can schedule a consultation by calling us at +91-9910017625, sending a WhatsApp message, emailing at rajbirssagar@gmail.com, or filling out the contact form on our website. We typically respond within a few hours during business days.",
  },
  {
    q: "What are your consultation fees?",
    a: "We offer a free initial consultation to understand your case. After the initial assessment, fees are discussed transparently based on the complexity and nature of the case. We believe in fair and transparent pricing with no hidden charges.",
  },
  {
    q: "How long does a typical criminal case take?",
    a: "The duration varies significantly based on the nature and complexity of the case. Simple cases may resolve in a few months, while complex criminal trials can take 1-3 years. We always strive to expedite proceedings while ensuring the best possible outcome for our clients.",
  },
  {
    q: "Can you help with urgent bail matters?",
    a: "Absolutely. Bail matters are one of our core specializations. We handle emergency bail applications and can file for regular bail, anticipatory bail, interim bail, and default bail. We understand the urgency and act swiftly to secure bail for our clients.",
  },
  {
    q: "Do you handle cases outside Delhi?",
    a: "While our primary practice is at Karkardooma Court and other courts in Delhi, we do take up cases in courts across India depending on the nature and complexity of the matter. We have successfully represented clients from various states.",
  },
  {
    q: "What documents do I need for a divorce case?",
    a: "For a divorce case, you typically need your marriage certificate, photographs, address proof of both parties, income proof, details of any children, and any evidence relevant to the grounds for divorce. During your consultation, we will provide a comprehensive list tailored to your specific situation.",
  },
  {
    q: "How do you maintain client confidentiality?",
    a: "Client confidentiality is paramount to our practice. All information shared with us is protected under attorney-client privilege. We follow strict data protection protocols, and no information is shared with any third party without explicit written consent from our clients.",
  },
  {
    q: "What is the process for filing a civil suit?",
    a: "The process begins with drafting and filing a plaint in the appropriate court, followed by serving notice to the defendant. The court then sets hearing dates, and both parties present their arguments and evidence. We guide you through every step, from initial filing to final judgment.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes, we offer online consultations via phone call, WhatsApp video call, or Google Meet for clients who cannot visit our office in person. This is especially convenient for clients based outside Delhi or those with mobility constraints.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 navy-gradient-bg" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/court.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-dark)] to-[var(--navy)] opacity-90" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[var(--gold-light)] text-sm uppercase tracking-[0.3em] font-medium mb-4" style={{ animation: "fadeInDown 0.8s ease-out" }}>
            Common Questions
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)", animation: "hero-text 1s ease-out" }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-white/50 text-sm">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link> / FAQ
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Got Questions?</p>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              We Have Answers
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 px-4 text-left group"
                >
                  <span className="text-[var(--navy)] font-semibold text-base pr-4 group-hover:text-[var(--gold)] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`text-[var(--gold)] flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                  <p className="text-gray-500 text-sm leading-relaxed px-4 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Still Have Questions?
          </h2>
          <p className="text-gray-500 mb-8">
            Don&apos;t hesitate to reach out. We&apos;re here to help you with any legal queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <a href="https://wa.me/919910017625" target="_blank" rel="noopener noreferrer" className="btn-navy">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
