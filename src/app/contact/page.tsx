"use client";
import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Advocate Rajbir Singh Sagar,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`
    );
    window.open(`https://wa.me/919910017625?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Legal Inquiry: ${formData.subject || 'General Consultation'}`);
    const body = encodeURIComponent(
      `Dear Advocate Rajbir Singh Sagar,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nLooking forward to your response.\n\nRegards,\n${formData.name}`
    );
    window.open(`mailto:rajbirssagar@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 navy-gradient-bg" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/court.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy-dark to-navy opacity-90" />
        <div className="relative z-10 text-center px-6">
          <p
            className="text-gold-light text-sm uppercase tracking-[0.3em] font-medium mb-4"
            style={{ animation: 'fadeInDown 0.8s ease-out' }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)', animation: 'hero-text 1s ease-out' }}
          >
            Contact <span className="gradient-text">Us</span>
          </h1>
          <div className="section-divider mx-auto" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Details */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-2xl font-bold text-navy mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Reach out for legal advice, consultation, or to schedule an appointment.
                    We respond promptly and treat every inquiry with the utmost confidentiality.
                  </p>
                </div>

                {/* Contact Cards */}
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                      <div
                        className="text-gold-ink group-hover:text-navy-dark transition-colors"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">{item.label}</p>
                      <p className="text-gray-700 font-medium text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </a>
                ))}

                {/* Office Hours */}
                <div className="p-5 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">Office Hours</p>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium text-gray-800">Mon – Sat:</span> 9:00 AM – 6:00 PM</p>
                    <p><span className="font-medium text-gray-800">Sunday:</span> By Appointment Only</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold text-navy mb-3"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Your message has been sent. We will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                      className="btn-navy"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3
                      className="text-2xl font-bold text-navy mb-2"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      Send Us a Message
                    </h3>
                    <p className="text-muted text-sm mb-8">
                      Fill in the form below and choose how you&apos;d like to reach us.
                    </p>

                    <form className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-ink focus:border-gold-ink outline-none transition-all text-sm"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                            Phone Number <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-ink focus:border-gold-ink outline-none transition-all text-sm"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-ink focus:border-gold-ink outline-none transition-all text-sm"
                            placeholder="you@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-ink focus:border-gold-ink outline-none transition-all text-sm"
                          >
                            <option value="">Select a subject</option>
                            <option value="Criminal Law">Criminal Law</option>
                            <option value="Family Law / Divorce">Family Law / Divorce</option>
                            <option value="Civil Law">Civil Law</option>
                            <option value="Bail Matter">Bail Matter</option>
                            <option value="General Consultation">General Consultation</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                          Your Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-ink focus:border-gold-ink outline-none transition-all text-sm resize-none"
                          placeholder="Briefly describe your legal matter..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          type="submit"
                          onClick={handleWhatsApp}
                          className="flex-1 py-3.5 px-6 rounded-xl font-semibold text-white bg-whatsapp-ink hover:bg-whatsapp-ink/90 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Send via WhatsApp
                        </button>
                        <button
                          type="submit"
                          onClick={handleEmail}
                          className="flex-1 btn-navy justify-center text-sm"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Send via Email
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Google Maps Embed */}
          <ScrollReveal className="mt-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="RS Sagar and Associates Office Location - Karkardooma Court"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0477!2d77.3033!3d28.6562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb34e2ae5b79%3A0x7a8b59e36b7b91b8!2sKarkardooma%20Court!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

const contactInfo = [
  {
    label: 'Phone',
    value: '+91-9910017625',
    href: 'tel:+919910017625',
    external: false,
    icon: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  },
  {
    label: 'Email',
    value: 'rajbirssagar@gmail.com',
    href: 'mailto:rajbirssagar@gmail.com',
    external: false,
    icon: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    label: 'Office Address',
    value: 'Chamber D422, 4th Floor, Lawyers Chamber, Karkardooma Court, Shahdara, Delhi 110032',
    href: 'https://maps.google.com/?q=Karkardooma+Court+Delhi',
    external: true,
    icon: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>',
  },
];
