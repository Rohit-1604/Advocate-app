// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/court.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full text-white text-center backdrop-brightness-20">
          <h2 className="text-sm uppercase tracking-widest">Welcome to</h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">RS Sagar AND Associates</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Justice Delayed is Justice Denied
          </p>
          <p className="mt-4 text-lg max-w-2xl">
            With years of experience in Criminal, Bail, Civil, and Family Law, we are committed to providing expert legal services with unwavering integrity and compassion.
          </p>
          <Link href="/contact">
            <span className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition cursor-pointer">
              Contact Now →
            </span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center shadow-lg p-8 rounded-lg">
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              Advocate Rajbir Singh Sagar has successfully represented clients across various courts in New Delhi and has provided expert consultation to clients throughout India.
              With extensive experience in Criminal, Bail, Civil, and Family Law matters, he is committed to delivering personalized legal solutions with professionalism, integrity, and compassion.
              As a proud member of the Bar Council of India, Advocate Rajbir Singh Sagar sees the pursuit of justice as more than a profession—it&apos;s a personal mission.
              His unwavering dedication to protecting the rights of his clients has earned him the lasting trust and respect of those he serves.
              Known for his integrity, compassion, and relentless advocacy, he stands proudly for justice and excellence in every case.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/images/ADV. Rajbir.jpeg"
              alt="Advocate Rajbir Singh Sagar - Delhi Lawyer"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-[#1a237e] mb-10 font-playfair">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Civil Law */}
          <PracticeAreaCard
            imgSrc="/images/civil.jpg"
            imgAlt="Civil Law - Property and Contract Disputes"
            title="Civil Law"
            description="Resolving property disputes, contract issues, and civil litigation with a meticulous and client-focused approach."
          />
          {/* Family Law */}
          <PracticeAreaCard
            imgSrc="/images/family.jpg"
            imgAlt="Family Law - Divorce and Child Custody"
            title="Family Law"
            description="Guiding families through sensitive matters like divorce, child custody, maintenance, and domestic violence with compassion and expertise."
          />
          {/* Criminal Law */}
          <PracticeAreaCard
            imgSrc="/images/criminal.jpg"
            imgAlt="Criminal Law - Defense and Bail"
            title="Criminal Law"
            description="Defending your rights in criminal proceedings, bail matters, and ensuring fair representation at every stage of the process."
          />
          {/* Bail Matters */}
          <PracticeAreaCard
            imgSrc="/images/bail.jpg"
            imgAlt="Bail Matters - Legal Support"
            title="Bail Matters"
            description="Swift and strategic legal support for securing bail and navigating complex judicial procedures."
          />
        </div>
      </div>
    </>
  );
}

// PracticeAreaCard component (put above or in a separate file)
function PracticeAreaCard({
  imgSrc,
  imgAlt,
  title,
  description,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500 flex flex-col items-center p-6 group h-full">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover rounded-full border-4 border-yellow-100 group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="text-xl font-bold text-[#1a237e] mb-2 font-playfair">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
}
