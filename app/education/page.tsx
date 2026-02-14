"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import content from "@/data/content.json";

export default function EducationPage() {
  const {
    name,
    established,
    students,
    location,
    accreditation,
    banner,
    facilities,
    description,
  } = content.education;

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#002147] font-serif">
      {/* Oxford-style Top Bar */}
      <div className="bg-[#002147] text-white py-2 text-sm font-sans">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>Staff</span>
            <span>Students</span>
            <span>Alumni</span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:underline">Search</span>
            <span className="cursor-pointer hover:underline">Contact</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Heritage Hero Section */}
        <div className="relative h-[600px] w-full bg-[#002147]">
          <Image
            src={banner}
            alt={name}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#002147]/90 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl border-l-4 border-white pl-8 py-4">
                <span className="block text-white/80 font-sans uppercase tracking-[0.2em] mb-4 text-sm">
                  Est. {established} • {accreditation}
                </span>
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-none">
                  {name}
                </h1>
                <p className="text-xl text-white/90 font-light leading-relaxed font-sans max-w-lg">
                  Where centuries of tradition meet the forefront of innovation.
                  Discover a world-class education in {location}.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction & Quick Stats */}
        <div className="border-b border-gray-200">
          <SectionWrapper className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-normal text-[#002147] mb-6 border-b border-[#002147] pb-4 inline-block">
                  Welcome to {name}
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed text-justify mb-8">
                  {description}
                  <br />
                  <br />
                  As one of the world's leading universities, we are committed
                  to maintaining the highest standards of academic excellence.
                  Our collegiate system fosters a sense of community and
                  interdisciplinary collaboration that is unique in higher
                  education.
                </p>
                <button className="text-[#002147] font-bold font-sans border border-[#002147] px-6 py-3 hover:bg-[#002147] hover:text-white transition-colors">
                  Read the Vice-Chancellor's Oration →
                </button>
              </div>
              <div className="lg:col-span-4 bg-[#F5F5F5] p-8 border-t-4 border-[#002147]">
                <h3 className="font-bold font-sans uppercase tracking-widest text-[#002147] mb-6 text-sm">
                  Key Statistics
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-light text-[#002147] mb-1">
                      {students}
                    </div>
                    <div className="text-sm text-gray-600 font-sans">
                      Total Students
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#002147] mb-1">
                      38
                    </div>
                    <div className="text-sm text-gray-600 font-sans">
                      Colleges
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#002147] mb-1">
                      #1
                    </div>
                    <div className="text-sm text-gray-600 font-sans">
                      Times Higher Education Ranking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Academic Divisions / Facilities Grid */}
        <SectionWrapper className="bg-[#F8F9FA] py-16">
          <h2 className="text-3xl font-normal text-[#002147] mb-12 text-center">
            Academic Excellence & Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {/* Placeholder for facility image - using a generic academic pattern or color */}
                  <div className="absolute inset-0 bg-[#002147] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/90 px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider text-[#002147]">
                      Facility
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#002147] mb-3 group-hover:underline decoration-1 underline-offset-4">
                    {facility}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    State-of-the-art resources dedicated to fostering research
                    and innovation across all disciplines.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#002147] text-white font-sans px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#003366] transition-colors">
              View All Departments
            </button>
          </div>
        </SectionWrapper>

        {/* Admissions Section */}
        <div className="bg-[#002147] text-white py-20">
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Study at {name}
                </h2>
                <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
                  We welcome applications from students with the potential to
                  succeed at the highest academic level. Explore our
                  undergraduate and graduate courses to find your path.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 font-sans text-sm font-bold">
                  <button className="bg-white text-[#002147] px-8 py-4 hover:bg-gray-100 transition-colors uppercase tracking-wider">
                    Undergraduate Admissions
                  </button>
                  <button className="border border-white text-white px-8 py-4 hover:bg-white/10 transition-colors uppercase tracking-wider">
                    Graduate Admissions
                  </button>
                </div>
              </div>
              <div className="border border-white/20 p-8 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-light mb-4 border-b border-white/20 pb-4">
                  Latest Updates
                </h3>
                <ul className="space-y-4 font-sans text-sm">
                  <li className="flex gap-4">
                    <span className="text-white/60 shrink-0">14 FEB</span>
                    <span className="hover:underline cursor-pointer">
                      Applications open for 2026 entry
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white/60 shrink-0">12 FEB</span>
                    <span className="hover:underline cursor-pointer">
                      New scholarship opportunities announced
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white/60 shrink-0">10 FEB</span>
                    <span className="hover:underline cursor-pointer">
                      Campus open days: Register your interest
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </main>
    </div>
  );
}
