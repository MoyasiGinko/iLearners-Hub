import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { CardDataType } from "./cardData";
import Link from "next/link";

const OfferCard: React.FC<{ card: CardDataType }> = ({ card }) => (
  <div className="relative transform transition-transform duration-300 perspective-500">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 shadow-[0_15px_25px_rgba(0,0,0,0.15)] max-w-7xl mx-auto border-[6px] border-purple-400 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-indigo-600/40 before:to-fuchsia-600/40 before:z-0">
      {/* Main Card Content */}
      <div className="flex flex-col-reverse md:flex-row relative z-10">
        {/* Left Section - Image (will be top on mobile) */}
        <div className="md:w-1/3 relative overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          {/* Fun Badge */}
          {/* <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-red-400 text-white px-2 py-1 md:px-4 md:py-3 rounded-full shadow-lg font-bold transform -rotate-12 border-2 md:border-4 border-white">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-extrabold">
                {card.discount}%
              </div>
              <div className="text-xs md:text-sm -mt-1">OFF!</div>
            </div>
          </div> */}

          {/* Category badge */}
          <div className="absolute top-2 left-2 md:top-3 md:left-3">
            <div className="bg-white bg-opacity-90 text-gray-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
              {card.category}
            </div>
          </div>
        </div>

        {/* Right Section - Content (will be bottom on mobile) */}
        <div className="md:w-2/3 p-4 md:p-8 rounded-r-3xl text-white">
          {/* Title */}
          <h1 className="text-yellow-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-3 md:mb-6 drop-shadow-lg">
            {card.title}
          </h1>

          {/* Description */}
          <div className="bg-white/90 rounded-2xl p-3 md:p-5 shadow-md mb-3 md:mb-5 border-2 md:border-4 border-blue-300 border-dashed transform ">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Price Section */}
          {/* <div className="bg-green-100 rounded-2xl p-3 md:p-5 mb-3 md:mb-5 border-2 md:border-4 border-green-300 transform rotate-1 shadow-md">
            <div className="flex flex-wrap items-center justify-start gap-2 md:gap-4">
              <div>
                <p className="text-gray-600 line-through text-sm md:text-lg">
                  {card.originalPrice}
                </p>
              </div>
              <div>
                <p className="text-xl md:text-3xl font-bold text-green-600">
                  {card.salePrice}
                </p>
              </div>
              <div className="ml-auto bg-yellow-400 text-red-600 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-bold shadow-sm">
                DISCOUNT {card.discount}% OFF
              </div>
            </div>
          </div> */}

          {/* Action Button */}
          <Link
            href={card.actionButton.url || "#"}
            className="inline-block mb-1 md:mb-2"
          >
            <button
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-300
              shadow-[0_3px_0_rgb(147,51,234)] md:shadow-[0_5px_0_rgb(147,51,234)] hover:shadow-[0_2px_0_rgb(147,51,234)]
              hover:translate-y-1 active:translate-y-2 active:shadow-none
              border-2 border-purple-500 flex items-center gap-1 md:gap-2 text-sm md:text-base"
            >
              {card.actionButton.text}
              <span className="text-lg md:text-xl">🔥</span>
            </button>
          </Link>

          {/* Footer Info */}
          {/* <div className="flex flex-col sm:flex-row justify-between text-xs md:text-md text-yellow-200 font-medium gap-2">
            <div className="flex items-center">
              <span className="text-lg md:text-xl mr-1 md:mr-2">🎉</span> Valid
              until: {card.validUntil}
            </div>
            <div className="flex items-center">
              <span className="text-lg md:text-xl mr-1 md:mr-2">📞</span>{" "}
              {card.phone}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);

export default OfferCard;
