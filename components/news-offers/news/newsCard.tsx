"use client";
import React, { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { CardDataType } from "./cardData";
import Link from "next/link";

const NewsCard: React.FC<{ card: CardDataType }> = ({ card }) => {
  const [expanded, setExpanded] = useState(false);
  const descriptionPreviewLength = 120;
  const shouldTruncate = card.description.length > descriptionPreviewLength;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="rounded-2xl shadow-xl overflow-hidden border-4 border-blue-300 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative ">
        {/* Main Content Area with improved layout */}
        <div className="flex flex-col lg:flex-row p-5">
          {/* Left Section - Image */}
          <div className="lg:w-2/5 p-3 relative">
            <div className="h-72 lg:h-full rounded-xl overflow-hidden border-4 border-blue-200 shadow-lg relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {card.category}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="lg:w-3/5 p-6 flex flex-col justify-between">
            {/* Title with 3D effect */}
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-lg">
              {card.title}
            </h1>

            {/* Description with expand/collapse functionality */}
            <div className="bg-blue-50 rounded-2xl p-5 border-dashed shadow-md mb-5 border-4 border-blue-300 transform">
              <p className="text-blue-800 leading-relaxed">
                {expanded || !shouldTruncate
                  ? card.description
                  : `${card.description.substring(
                      0,
                      descriptionPreviewLength
                    )}...`}
              </p>

              {shouldTruncate && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-blue-600 font-bold mt-3 hover:text-blue-800 focus:outline-none"
                >
                  {expanded ? "See Less" : "See More"}
                </button>
              )}
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 mb-5 text-blue-100 font-medium">
              <Clock className="w-5 h-5" />
              <span>{card.date}</span>
            </div>

            {/* Action Button */}
            <Link href="/gallery" className="inline-block">
              <button
                className="bg-gradient-to-r from-blue-500 to-sky-400 text-white font-bold py-3 px-6 rounded-full transition-all duration-300
              shadow-[0_5px_0_rgb(37,99,235)] hover:shadow-[0_2px_0_rgb(37,99,235)]
              hover:translate-y-1 active:translate-y-2 active:shadow-none
              border-2 border-blue-600/50 flex items-center gap-2"
              >
                {card.actionButton.text}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
