"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import content from "@/data/content.json";

export default function NFTPage() {
  const {
    name,
    creator,
    verified,
    image,
    price,
    dollarValue,
    blockchain,
    tokenId,
    contractAddress,
    history,
    endsIn,
  } = content.nft;

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <main className="flex-1">
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Artwork */}
            <div className="space-y-6">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Blockchain</span>
                    <span className="font-medium text-white">{blockchain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Token ID</span>
                    <span className="font-medium text-white">{tokenId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Contract</span>
                    <span className="font-medium text-blue-400 truncate w-32 text-right">
                      {contractAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {name}
                </h1>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>Created by</span>
                  <span className="text-blue-400 font-bold hover:underline cursor-pointer">
                    @{creator}
                  </span>
                  {verified && (
                    <span
                      className="bg-blue-500 text-white rounded-full p-0.5"
                      title="Verified Creator"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 space-y-8">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-slate-500 uppercase tracking-wide font-bold">
                    Current Price
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-white">
                      {price}
                    </span>
                    <span className="text-slate-400">{dollarValue}</span>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-4">
                    Auction Ends In
                  </span>
                  <CountdownTimer />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    fullWidth
                    className="h-14 font-bold text-lg bg-blue-600 hover:bg-blue-700 border-transparent"
                  >
                    Place Bid
                  </Button>
                </div>
              </div>

              {/* History Table */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Price History
                </h3>
                <div className="w-full overflow-hidden rounded-xl border border-slate-800">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-900 text-slate-400 uppercase font-bold text-xs">
                      <tr>
                        <th className="px-6 py-3">Event</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {history.map((event, i) => (
                        <tr key={i} className="hover:bg-slate-900/50">
                          <td className="px-6 py-4 font-medium text-white">
                            {event.event}
                          </td>
                          <td className="px-6 py-4">{event.price}</td>
                          <td className="px-6 py-4 text-slate-400">
                            {event.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
