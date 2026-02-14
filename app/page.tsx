"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";
import { useState } from "react";

export default function Home() {
  const { cards } = content.home;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#f1f3f6]">
      <main className="flex-1 py-4">
        <SectionWrapper>
          <div className="bg-white p-4 shadow-sm mb-4 rounded-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full bg-[#f0f5ff] text-slate-700 placeholder-slate-400 border border-transparent focus:border-blue-500 rounded-md py-2.5 pl-10 pr-4 text-sm focus:outline-none transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCards.map((card) => (
                <Link
                  key={card.id}
                  href={card.link}
                  className="group relative flex flex-col bg-white overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="relative aspect-4/3 w-full p-4 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 text-center">
                    <h2 className="text-sm md:text-base font-medium text-slate-900 mb-1 group-hover:text-blue-600">
                      {card.title}
                    </h2>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <div className="max-w-xs mx-auto">
                <p className="text-lg font-medium text-slate-700 mb-2">
                  No results found
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  We couldn't find any industries matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </SectionWrapper>
      </main>
    </div>
  );
}
