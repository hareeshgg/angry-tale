"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureGrid from "@/components/FeatureGrid";
import Button from "@/components/Button";
import RatingStars from "@/components/RatingStars";
import Image from "next/image";
import content from "@/data/content.json";

export default function DigitalPage() {
  const {
    name,
    author,
    rating,
    reviewCount,
    badge,
    tagline,
    image,
    features,
    specs,
    licenses,
  } = content.digital;

  const [selectedLicense, setSelectedLicense] = useState(licenses[0]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0F1111]">
      <main className="flex-1">
        {/* Breadcrumb / Top Bar */}
        <div className="border-b border-gray-200 bg-[#fafafa] py-2 text-xs text-[#565959]">
          <SectionWrapper className="py-0">
            <span>Software</span>
            <span className="mx-2">›</span>
            <span>Productivity</span>
            <span className="mx-2">›</span>
            <span className="font-bold text-[#c45500]">{name}</span>
          </SectionWrapper>
        </div>

        <SectionWrapper className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Product Image (resembling a book/box cover) */}
            <div className="lg:col-span-3">
              <div className="sticky top-4">
                <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto border border-gray-200 shadow-xl rounded-l-sm bg-white p-2">
                  <div className="relative h-full w-full overflow-hidden border border-gray-100">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute top-4 left-0 bg-[#c45500] text-white text-xs font-bold px-3 py-1 shadow-md rounded-r-md uppercase tracking-wider">
                    {badge}
                  </div>
                </div>
                <p className="text-center text-xs text-[#007185] mt-4 hover:underline cursor-pointer hover:text-[#c7511f]">
                  See all formats and editions
                </p>
              </div>
            </div>

            {/* Middle Column: Product Info */}
            <div className="lg:col-span-6 space-y-4">
              <h1 className="text-2xl md:text-3xl font-medium text-[#0F1111] leading-tight">
                {name} - {tagline}
              </h1>

              <div className="flex items-center gap-1 text-sm">
                <span className="text-[#007185] hover:underline cursor-pointer hover:text-[#c7511f]">
                  {author}
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-[#565959]">Platform: </span>
                <span className="font-bold">Windows, macOS</span>
              </div>

              <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <RatingStars rating={rating} />
                  <span className="ml-2 text-[#007185] text-sm hover:underline cursor-pointer hover:text-[#c7511f]">
                    {reviewCount} ratings
                  </span>
                </div>
              </div>

              <div className="bg-[#fcfbfb] border border-gray-200 rounded p-4 mb-4">
                <span className="font-bold text-sm block mb-2">
                  Editor's Pick
                </span>
                <p className="text-sm text-[#0F1111] leading-relaxed">
                  "Streamlines workflow like no other tool we've tested. A
                  must-have for creative professionals."
                  <span className="text-[#565959] italic">
                    {" "}
                    — TechWorld Daily
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-[#c45500]">About this item</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#0F1111]">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Buy Box */}
            <div className="lg:col-span-3">
              <div className="border border-gray-300 rounded-lg p-5 space-y-4 bg-white shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="text-sm text-[#565959]">Buy New:</span>
                  <div className="text-right">
                    <span className="text-xl font-medium text-[#B12704]">
                      {selectedLicense.price}
                    </span>
                  </div>
                </div>

                {/* License Selection */}
                <div className="space-y-2">
                  <span className="text-sm font-bold text-[#0F1111]">
                    Select License:
                  </span>
                  {licenses.map((license) => (
                    <div
                      key={license.type}
                      onClick={() => setSelectedLicense(license)}
                      className={`
                        cursor-pointer border rounded p-2 flex justify-between items-center transition-colors
                        ${
                          selectedLicense.type === license.type
                            ? "border-[#e77600] bg-[#fef8f2]"
                            : "border-gray-200 hover:bg-gray-50"
                        }
                      `}
                    >
                      <span className="text-sm font-medium">
                        {license.type}
                      </span>
                      <span
                        className={`text-sm ${selectedLicense.type === license.type ? "text-[#B12704] font-bold" : "text-[#565959]"}`}
                      >
                        {license.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-[#007185] font-medium mt-2">
                  {selectedLicense.type === "Team"
                    ? "Includes 5 Users"
                    : "Single User License"}
                </div>

                <Button
                  fullWidth
                  className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] border border-[#FCD200] shadow-sm font-normal rounded-full h-9 text-sm"
                >
                  Download Now
                </Button>

                <div className="text-xs text-[#565959] space-y-1 pt-2">
                  <div className="flex gap-2">
                    <span className="w-16 text-gray-400">Sold by</span>
                    <span className="text-[#007185]">FocusFlow Systems</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-16 text-gray-400">Sold by</span>
                    <span className="text-[#007185]">
                      Amazon Digital Services LLC
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="outline" fullWidth className="text-xs h-8">
                  Add to List
                </Button>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />

        {/* Product Details Section */}
        <SectionWrapper className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#c45500] mb-4">
                From the Publisher
              </h2>
              <div className="prose max-w-none text-sm text-[#0F1111]">
                <p>
                  Elevate your productivity with FocusFlow. Designed for modern
                  teams and individuals who need to stay organized without the
                  clutter.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#c45500] rounded-full" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#c45500] mb-4">
                Product Details
              </h2>
              <div className="text-sm">
                <dl className="grid grid-cols-[1fr_2fr] gap-y-2">
                  <dt className="font-bold text-[#333]">ASIN:</dt>
                  <dd className="text-[#333]">B084729102</dd>

                  <dt className="font-bold text-[#333]">Release Date:</dt>
                  <dd className="text-[#333]">October 24, 2025</dd>

                  <dt className="font-bold text-[#333]">Language:</dt>
                  <dd className="text-[#333]">English</dd>

                  <dt className="font-bold text-[#333]">File Size:</dt>
                  <dd className="text-[#333]">455 MB</dd>

                  <dt className="font-bold text-[#333]">
                    Minimum Requirements:
                  </dt>
                  <dd className="text-[#333]">
                    <ul className="list-disc pl-4">
                      {specs.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
