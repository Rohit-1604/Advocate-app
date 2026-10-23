"use client";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    caseType: "Criminal Defense",
    quote:
      "Advocate Rajbir Singh Sagar provided exceptional representation during my criminal case. His thorough understanding of the law and strategic approach resulted in a favorable outcome. I am extremely grateful for his dedication and professionalism.",
  },
  {
    name: "Priya Malhotra",
    caseType: "Family Law",
    quote:
      "Going through a divorce is never easy, but Advocate Sagar handled my case with incredible compassion and sensitivity. He ensured my rights and my children's interests were protected throughout the entire process.",
  },
  {
    name: "Suresh Kumar",
    caseType: "Bail Matter",
    quote:
      "When my brother was wrongfully detained, Advocate Sagar acted swiftly and secured bail within hours. His knowledge of bail procedures and his connections in the legal community made all the difference. Highly recommended.",
  },
  {
    name: "Anjali Verma",
    caseType: "Civil Dispute",
    quote:
      "I had a long-standing property dispute that seemed impossible to resolve. Advocate Sagar's meticulous approach and deep understanding of civil law helped us reach a settlement that exceeded our expectations.",
  },
  {
    name: "Rahul Gupta",
    caseType: "Criminal Appeal",
    quote:
      "After an unfavorable verdict in our case, Advocate Sagar took over the appeal and completely turned things around. His legal acumen and persuasive arguments in court were truly impressive.",
  },
  {
    name: "Meena Devi",
    caseType: "Domestic Violence",
    quote:
      "Advocate Sagar gave me the courage to fight for my rights. He handled my domestic violence case with utmost sensitivity and ensured I received the protection and justice I deserved. I owe him my safety.",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Client Testimonials
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Clients Say
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="testimonial-card bg-white rounded-2xl p-8 h-full shadow-md border border-gray-100">
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-10 text-[var(--gold)] opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>

                  {/* Quote */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg
                        key={s}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy)] text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--gold)]">{t.caseType}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[var(--gold)] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
