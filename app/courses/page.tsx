"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/SectionWrapper";

import content from "@/data/content.json";
import Image from "next/image";

export default function CoursesPage() {
  const { title, instructor, thumbnail, badges, price, curriculum } =
    content.courses;

  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeStart = 50;
      const fadeEnd = 400;
      const newOpacity = Math.max(
        0,
        1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart),
      );
      setVideoOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans relative">
      {/* Hero Background Layer */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[#f5f7f8] border-b border-gray-200 z-0" />

      {/* Main Content Grid */}
      <SectionWrapper className="relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Hero Content + Details) */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* HER0 CONTENT */}
            <div>
              {/* Mobile Video Thumbnail (Visible only on mobile) */}
              <div className="block lg:hidden mb-8">
                <div className="relative aspect-video w-full bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-800 group cursor-pointer">
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/50">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-[#0056D2] ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    Preview Course
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">
                <span className="text-[#0056D2]">Browse</span>
                <span>/</span>
                <span className="text-[#0056D2]">
                  Professional Certificates
                </span>
                <span>/</span>
                <span>AngryTale Engineering</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                {title}
              </h1>

              <p className="text-lg text-black mb-6 max-w-2xl">
                Launch your career in software engineering. Master the
                fundamental skills required for a career in this high-demand
                field.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm">
                    <span className="font-bold block text-black">
                      Instructor: {instructor.name}
                    </span>
                    <span className="text-gray-600">Top Rated</span>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-gray-300"></div>
                <div className="flex items-center gap-1 text-sm font-bold text-[#F2D049]">
                  <span>★★★★★</span>
                  <span className="text-black ml-1">4.8 (3.2k reviews)</span>
                </div>
              </div>

              {/* Premium Card (Desktop) */}
              <div className="hidden lg:flex bg-white border border-gray-200 rounded-lg p-0 shadow-sm overflow-hidden max-w-2xl flex-col md:flex-row">
                <div className="bg-gradient-to-br from-[#0056D2] to-[#00419e] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                  <svg
                    className="w-8 h-8 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-bold text-sm tracking-wide">
                    PREMIUM
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold text-lg leading-snug mb-1">
                      Personal Plan
                    </p>
                    <p className="text-gray-600 text-sm">
                      Access 26,000+ top-rated courses.
                    </p>
                  </div>
                  <div className="flex items-center gap-6 shrink-0 border-l border-gray-100 pl-6 md:border-l-2">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-black">
                        4.5
                      </span>
                      <div className="text-[#F2D049] text-xs">★★★★★</div>
                      <span className="text-xs text-gray-500 underline">
                        491 ratings
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-black">
                        5,092
                      </span>
                      <span className="text-xs text-gray-500">learners</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Card (Mobile) - Matching provided design */}
              <div className="lg:hidden w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between text-center overflow-hidden h-[100px]">
                {/* Rating Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-black leading-none mb-1">
                    4.5
                  </span>
                  <div className="text-[#b4690e] text-xs mb-1 tracking-tighter">
                    ★★★★☆
                  </div>
                  <span className="text-xs text-[#0056D2] underline decoration-[#0056D2] underline-offset-2">
                    491 ratings
                  </span>
                </div>

                {/* Divider 1 */}
                <div className="w-[1px] h-12 bg-gray-200 mx-2"></div>

                {/* Premium Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="mb-2 text-[#6b21d8]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4 4"
                        className="animate-spin-slow"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-black">Premium</span>
                </div>

                {/* Divider 2 */}
                <div className="w-[1px] h-12 bg-gray-200 mx-2"></div>

                {/* Learners Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="mb-1 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-black leading-tight">
                    5,092
                  </span>
                  <span className="text-xs text-gray-500">learners</span>
                </div>
              </div>

              {/* Mobile Buy Card (Visible only on mobile) */}
              <div className="block lg:hidden mt-8">
                <div className="bg-white border border-gray-200 shadow-2xl rounded-lg p-6">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full mb-2">
                      LIMITED TIME OFFER
                    </span>
                    <div className="flex items-end gap-2 text-black">
                      <span className="text-3xl font-bold">
                        {content.courses.originalPrice}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <button className="w-full bg-[#0056D2] hover:bg-[#00419e] text-white font-bold py-3 px-4 rounded-md transition-colors shadow-sm">
                      Add to Cart
                    </button>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-4 rounded-md transition-colors shadow-sm">
                      Buy Now
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500 mb-6">
                    30-Day Money-Back Guarantee
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-black">
                      This course includes:
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>32 hours on-demand video</span>
                      </li>
                      <li className="flex gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>12 Articles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN DETAILS CONTENT */}
            <div className="flex flex-col gap-12 pt-8">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">
                  About this Course
                </h2>
                <p className="text-base text-black leading-relaxed mb-4">
                  This course is designed to take you from a complete beginner
                  to a job-ready developer. You will learn by doing, building
                  real-world projects that you can add to your portfolio. We
                  define the standard for software engineering education,
                  ensuring you have the latest skills.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border-t border-gray-200 pt-6 mt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">
                        Flexible deadlines
                      </h4>
                      <p className="text-gray-600">
                        Reset deadlines in accordance to your schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">
                        Shareable Certificate
                      </h4>
                      <p className="text-gray-600">
                        Earn a certificate upon completion.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">100% Online</h4>
                      <p className="text-gray-600">
                        Start instantly and learn at your own schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Beginner Level</h4>
                      <p className="text-gray-600">
                        No prior experience required.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What You'll Learn (Curriculum) */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curriculum.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <svg
                        className="w-6 h-6 text-green-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Syllabus Section */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Syllabus - What you will learn from this course
                </h2>
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  {[
                    {
                      week: "Week 1",
                      title: "Introduction to Engineering",
                      hours: "3 hours",
                    },
                    {
                      week: "Week 2",
                      title: "Core Concepts & Architecture",
                      hours: "5 hours",
                    },
                    {
                      week: "Week 3",
                      title: "Building Your First Project",
                      hours: "10 hours",
                    },
                    {
                      week: "Week 4",
                      title: "Advanced Patterns & Deployment",
                      hours: "6 hours",
                    },
                  ].map((module, i) => (
                    <div
                      key={i}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          {module.week}
                        </span>
                        <span className="text-sm text-gray-500">
                          {module.hours} to complete
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {module.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Instructor
                </h2>
                <div className="bg-[#f5f7f8] p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0056D2] underline">
                        {instructor.name}
                      </h3>
                      <p className="text-black font-medium">
                        {instructor.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        AngryTale Engineering School
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {instructor.name} is a Lead Software Engineer with over 10
                    years of experience building scalable applications. They
                    have taught over 50,000 students and are rated as one of the
                    top instructors on the platform.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Right Sidebar (Sticky) - Hidden on Mobile */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Content */}
              <div className="space-y-4">
                {/* Video Preview (FadesOut) */}
                <div
                  className="relative aspect-video w-full bg-black rounded-lg shadow-xl overflow-hidden border border-gray-800 group cursor-pointer transition-opacity duration-300 ease-out"
                  style={{
                    opacity: videoOpacity,
                    display: videoOpacity <= 0 ? "none" : "block",
                  }}
                >
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/50">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-[#0056D2] ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    Preview Course
                  </div>
                </div>

                {/* Buy Card */}
                <div className="bg-white border border-gray-200 shadow-2xl rounded-lg p-6">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full mb-2">
                      LIMITED TIME OFFER
                    </span>
                    <div className="flex items-end gap-2 text-black">
                      <span className="text-3xl font-bold">
                        {content.courses.originalPrice}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <button className="w-full bg-[#0056D2] hover:bg-[#00419e] text-white font-bold py-3 px-4 rounded-md transition-colors shadow-sm">
                      Add to Cart
                    </button>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-4 rounded-md transition-colors shadow-sm">
                      Buy Now
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500 mb-6">
                    30-Day Money-Back Guarantee
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-black">
                      This course includes:
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>32 hours on-demand video</span>
                      </li>
                      <li className="flex gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>12 Articles</span>
                      </li>
                      <li className="flex gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>8 Downloadable resources</span>
                      </li>
                      <li className="flex gap-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Access on mobile and TV</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Business Upsell */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="font-bold text-black mb-2">
                    Training 5 or more people?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get your team access to 27,000+ top AngryTale courses
                    anytime, anywhere.
                  </p>
                  <button className="w-full bg-white border border-black hover:bg-gray-50 text-black font-bold py-2 px-4 rounded-md transition-colors">
                    Get AngryTale Business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
