"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import RatingStars from "@/components/RatingStars";
import Image from "next/image";
import content from "@/data/content.json";

export default function FoodPage() {
  const {
    name,
    description,
    price,
    image,
    badges,
    rating,
    reviewCount,
    reviews,
  } = content.food;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F7F5] font-sans">
      {/* KFC Style Sub-Header */}
      <div className="bg-black text-white py-3 overflow-hidden">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <span className="hover:text-red-500 cursor-pointer transition-colors">
              Menu
            </span>
            <span className="hover:text-red-500 cursor-pointer transition-colors">
              Careers
            </span>
            <span className="hover:text-red-500 cursor-pointer transition-colors">
              About
            </span>
            <span className="hover:text-red-500 cursor-pointer transition-colors">
              Find Us
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-red-500">⚠</span>
            <span>Start an Order for Pickup or Delivery</span>
          </div>
        </div>
      </div>

      <main className="flex-1 pb-24">
        {/* Striped Background Banner */}
        <div className="h-4 bg-[repeating-linear-gradient(45deg,#E4002B,#E4002B_20px,white_20px,white_40px)] border-b-4 border-black"></div>

        <SectionWrapper className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Menu (Desktop) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#E4002B] text-white font-black uppercase tracking-widest p-4 text-xl">
                  Menu
                </div>
                <nav className="flex flex-col">
                  {[
                    "Featured",
                    "Buckets",
                    "Tenders",
                    "Sandwiches",
                    "Fried Chicken",
                    "Pot Pies & Bowls",
                    "Sides",
                    "Sauces",
                    "Beverages",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`px-6 py-4 border-b border-gray-100 font-bold uppercase transition-colors hover:bg-gray-50 flex justify-between items-center ${i === 3 ? "text-[#E4002B] border-l-4 border-l-[#E4002B]" : "text-black"}`}
                    >
                      {item}
                      <span className="text-gray-300">›</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Product Hero */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-12">
                <div className="h-2 bg-[#E4002B]"></div>
                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-500"
                      priority
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-0 right-0 bg-[#E4002B] text-white font-black text-xs uppercase px-3 py-1 rounded-bl-lg shadow-md">
                      Best Seller
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {badges.map((badge, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wide rounded-sm"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-black uppercase leading-none mb-4 italic tracking-tight">
                      {name}
                    </h1>

                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {description}
                    </p>

                    <div className="flex items-end gap-2 mb-8">
                      <span className="text-5xl font-black text-[#E4002B] tracking-tighter">
                        {price}
                      </span>
                      <span className="text-gray-400 font-bold text-sm mb-2">
                        / combo
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button className="w-full bg-[#E4002B] hover:bg-[#c40024] text-white font-black uppercase text-xl py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                        Start Order
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                      <p className="text-center text-xs text-gray-400 font-bold uppercase">
                        <span className="text-black">2000 calories</span> a day
                        is used for general nutrition advice...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews Section styled as "Customer Favorites" */}
              <div className="mb-12">
                <h2 className="text-3xl font-black text-black uppercase italic mb-6 border-l-8 border-[#E4002B] pl-4">
                  What The Colonel Says
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <RatingStars rating={5} />
                        <span className="font-bold text-[#E4002B]">
                          Verified Fan
                        </span>
                      </div>
                      <p className="text-lg font-bold text-black italic mb-4">
                        "{review.comment}"
                      </p>
                      <p className="text-sm font-black text-gray-400 uppercase tracking-widest">
                        — {review.user}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* "You Might Also Like" Grid */}
              <div>
                <h2 className="text-3xl font-black text-black uppercase italic mb-6 border-l-8 border-[#E4002B] pl-4">
                  Recommended For You
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer border border-gray-100"
                    >
                      <div className="relative aspect-[4/3] bg-gray-50">
                        <Image
                          src={image}
                          alt="Food Item"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {item === 1 && (
                          <div className="absolute top-2 left-2 bg-[#E4002B] text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                            New
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-black text-black uppercase text-lg leading-tight mb-2">
                          Crispy Meal Deal #{item}
                        </h3>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-500">
                            $12.{99 * item}
                          </span>
                          <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#E4002B] transition-colors">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40 md:hidden pb-safe">
        <button className="w-full bg-[#E4002B] text-white font-black uppercase py-4 rounded-full shadow-lg">
          Start Order • {price}
        </button>
      </div>
    </div>
  );
}
