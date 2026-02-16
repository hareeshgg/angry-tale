"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import content from "@/data/content.json";

export default function OnlineClassesPage() {
  const {
    title,
    instructor,
    date,
    time,
    duration,
    image,
    description,
    spotsLeft,
  } = content.onlineClasses;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Unacademy-style Hero Section */}
        <div className="bg-[#1f2937] text-white pt-16 pb-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#ffffff"
                d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.3C59,43.1,47.1,51.8,35.2,59.3C23.3,66.8,11.4,73.1,-0.3,73.6C-12,74.1,-23.1,68.8,-34,61.8C-45,54.8,-55.8,46.1,-65.1,35.6C-74.4,25.1,-82.2,12.8,-83.4,-0.2C-84.6,-13.2,-79.2,-26.9,-69.6,-37.6C-60,-48.3,-46.2,-56,-32.8,-63.5C-19.4,-71,-6.4,-78.3,5,-87C16.4,-95.7,30.5,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left: Course Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ef4444] text-white text-xs font-bold uppercase tracking-wider rounded">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  LiVE Class
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {title}
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  {description}
                </p>

                <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{duration} Session</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                    <span>English</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-[#1f2937] bg-gray-600"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">
                    Join <span className="text-white font-bold">1,200+</span>{" "}
                    learners
                  </span>
                </div>
              </div>

              {/* Right: Schedule Card */}
              <div className="relative">
                <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl space-y-6 max-w-md ml-auto">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg
                          className="w-5 h-5 text-[#08BD80] ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Starts on
                        </p>
                        <p className="font-bold text-lg">{date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Time
                        </p>
                        <p className="font-bold text-lg">{time}</p>
                      </div>
                    </div>

                    <div>
                      <CountdownTimer />
                      <p className="text-center text-xs text-gray-500 mt-2">
                        Time left until session starts
                      </p>
                    </div>

                    <div className="flex items-end gap-2 my-4">
                      <span className="text-3xl font-bold">
                        {content.onlineClasses.price}
                      </span>
                    </div>

                    <Button
                      fullWidth
                      className="h-12 text-base font-bold bg-[#08BD80] hover:bg-[#06a56e] border-none shadow-lg shadow-[#08BD80]/30"
                    >
                      Book Your Seat Now !
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Secure Payment</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>Money-back Guarantee</span>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-2">
                      Limited spots available. {spotsLeft} remaining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Instructor Section */}
        <SectionWrapper className="py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
            Meet Your Instructor
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={instructor.image}
                alt={instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 max-w-3xl">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  {instructor.name}
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h3>
                <p className="text-[#08BD80] font-medium text-sm mt-1">
                  {instructor.title}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {instructor.bio}
              </p>
              <div className="flex gap-6 text-sm text-gray-500 pt-2">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">15+</span>
                  <span>Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">50k+</span>
                  <span>Students Taught</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">4.9</span>
                  <span>Instructor Rating</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* What You'll Learn */}
        <div className="bg-gray-50 py-16">
          <SectionWrapper>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What you'll learn in this Live Class
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Master the art of character development",
                "Learn 3-act story structure",
                "Write compelling dialogue",
                "Overcome writer's block",
                "Publishing industry secrets",
                "Live Q&A with the author",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200"
                >
                  <svg
                    className="w-5 h-5 text-[#08BD80] shrink-0 mt-0.5"
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
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </main>
    </div>
  );
}
