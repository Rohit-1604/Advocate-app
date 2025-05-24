"use client";
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f1ed] to-[#e3e6f3] py-12 px-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] font-playfair mb-4">
          Contact Rajbir Sagar
        </h1>
        <p className="text-gray-600 text-lg">
          Reach out for legal advice, consultation, or to schedule an appointment. We respond promptly and treat every inquiry with confidentiality.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10">
        {/* Contact Details */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="h-6 w-6 text-yellow-600" />
            <span className="text-gray-700 text-base">rajbirssagar@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-6 w-6 text-yellow-600" />
            <span className="text-gray-700 text-base">+91-9910017625</span>
          </div>
          <div className="flex items-start space-x-3">
            <MapPinIcon className="h-8 w-8 text-yellow-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700 text-base break-words">
              Chamber number - D422, 4th Floor, Lawyers Chamber, KARKARDOOMA COURT, Shahdara, Delhi, 110032
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex-1 space-y-5"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          {submitted ? (
            <div className="text-green-700 text-lg font-semibold text-center py-8">
              Thank you for reaching out! We will contact you soon.
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Your Good Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-[#1a237e] font-bold rounded-lg transition"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
