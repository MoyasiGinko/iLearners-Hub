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
    <div className="w-full max-w-7xl mx-auto ">
      <div className="rounded-2xl shadow-xl overflow-hidden border-2 sm:border-4 border-blue-300 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
        {/* Main Content Area with improved layout */}
        <div className="flex flex-col lg:flex-row p-3 sm:p-5">
          {/* Left Section - Image */}
          <div className="lg:w-2/5 p-2 sm:p-3 relative">
            <div className="h-48 sm:h-60 md:h-72 lg:h-full rounded-xl overflow-hidden border-2 sm:border-4 border-blue-200 shadow-lg relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Category badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <div className="bg-white bg-opacity-90 text-gray-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  {card.category}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="lg:w-3/5 p-3 sm:p-6 flex flex-col justify-between">
            {/* Title with 3D effect */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight mb-3 sm:mb-6 drop-shadow-lg">
              {card.title}
            </h1>

            {/* Description with expand/collapse functionality */}
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 border-dashed shadow-md mb-3 sm:mb-5 border-2 sm:border-4 border-blue-300 transform">
              <p className="text-blue-800 text-sm sm:text-base leading-relaxed">
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
                  className="text-blue-600 font-bold mt-2 sm:mt-3 text-sm sm:text-base hover:text-blue-800 focus:outline-none"
                >
                  {expanded ? "See Less" : "See More"}
                </button>
              )}
            </div>

            {/* Date */}
            {/* <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-5 text-blue-100 font-medium text-sm sm:text-base">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{card.date}</span>
            </div> */}

            {/* Action Button */}
            <Link
              href={card.actionButton.url || "#"}
              className="inline-block mb-1 md:mb-2"
            >
              <button
                className="bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-300
              shadow-[0_3px_0_rgb(37,99,235)] sm:shadow-[0_5px_0_rgb(37,99,235)] hover:shadow-[0_2px_0_rgb(37,99,235)]
              hover:translate-y-1 active:translate-y-2 active:shadow-none
              border-2 border-blue-500 flex items-center gap-1 md:gap-2 text-sm md:text-base"
              >
                {card.actionButton.text}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
