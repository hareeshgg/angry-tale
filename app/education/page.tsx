"use client";

import SectionWrapper from "@/components/SectionWrapper";
import RatingStars from "@/components/RatingStars";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";
import { useState, useRef, useEffect } from "react";

export default function EducationPage() {
  const {
    title,
    price,
    images,
    specializations,
    durations,
    description,
    accreditation,
    nextIntake,
  } = content.education.psychologyDegree;

  const [selectedSpec, setSelectedSpec] = useState(specializations[0]);
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);
  const [showStickyApply, setShowStickyApply] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the placeholder is visible (or about to be), hide the sticky button
        // We use a small threshold to trigger slightly before it's fully in view for smoothness
        setShowStickyApply(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black font-sans pb-24 lg:pb-0">
      {/* Sticky Mobile Apply Button */}
      {showStickyApply && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <Button
            fullWidth
            className="rounded-full bg-[#0056D2] hover:bg-[#00419e] text-white font-bold py-3 shadow-md"
          >
            Apply Now
          </Button>
        </div>
      )}

      {/* Breadcrumb / Nav */}
      <div className="bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 text-xs text-gray-500 font-medium max-w-7xl">
          <span className="hover:underline cursor-pointer hover:text-[#0056D2]">
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer hover:text-[#0056D2]">
            Education
          </span>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer hover:text-[#0056D2]">
            Degrees
          </span>
          <span className="mx-2">/</span>
          <span className="text-black font-bold">Psychology</span>
        </div>
      </div>

      <SectionWrapper className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Gallery (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-gray-100 shadow-md">
              <Image
                src={images[0]}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Column 2: Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-2">
              <span className="text-[#0056D2] font-bold text-xs uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                Degree Program
              </span>
            </div>
            <h1 className="text-3xl font-bold text-black mb-2 leading-tight">
              {title}
            </h1>
            <p className="text-sm text-gray-500 mb-4">{accreditation}</p>

            <hr className="border-gray-200 mb-6" />

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-black">{price}</span>
              </div>
              <p className="text-xs text-green-700 mt-1 font-medium">
                Scholarships Available • Flexible Payment Plans
              </p>
            </div>

            {/* Specialization Selection */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Specialization:{" "}
                <span className="font-normal text-black">{selectedSpec}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec: string) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpec(spec)}
                    className={`px-3 py-2 rounded-md border text-sm font-medium transition-all ${
                      selectedSpec === spec
                        ? "border-[#0056D2] bg-blue-50 text-[#0056D2] ring-1 ring-[#0056D2]"
                        : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Duration:{" "}
                <span className="font-normal text-black">
                  {selectedDuration}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {durations.map((duration: string) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`px-3 py-2 rounded-md border text-sm font-medium transition-all ${
                      selectedDuration === duration
                        ? "border-[#0056D2] bg-blue-50 text-[#0056D2] ring-1 ring-[#0056D2]"
                        : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-black">Program Overview</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {description}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Access to state-of-the-art research labs.</li>
                <li>Internship opportunities with partner clinics.</li>
                <li>Pathway to professional licensure.</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Action Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg bg-white">
              <h3 className="text-lg font-bold text-black mb-4">Admissions</h3>

              <div className="flex items-center gap-2 mb-4 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-green-700 font-medium">
                  Applications Open
                </span>
              </div>

              <div className="mb-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Next Intake</span>
                  <span className="font-medium text-black">{nextIntake}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Campus</span>
                  <span className="font-medium text-black">Cambridge, MA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Mode</span>
                  <span className="font-medium text-black">
                    Full-time / Part-time
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Placeholder/Target for Sticky Logic */}
                <div ref={observerRef} className="min-h-[48px] w-full">
                  {!showStickyApply && (
                    <Button
                      fullWidth
                      className="rounded-full bg-[#0056D2] hover:bg-[#00419e] text-white font-bold py-3 shadow-md border border-transparent"
                    >
                      Apply Now
                    </Button>
                  )}
                </div>

                <Button
                  fullWidth
                  variant="outline"
                  className="rounded-full border-[#0056D2] text-[#0056D2] hover:bg-blue-50 font-bold py-3"
                >
                  Download Brochure
                </Button>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                      alt="Advisor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Questions?</p>
                    <p className="text-sm font-bold text-[#0056D2] cursor-pointer hover:underline">
                      Chat with an Advisor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
