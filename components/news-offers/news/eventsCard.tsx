import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  GraduationCap,
  Bus,
} from "lucide-react";

import React from "react";
import { CardDataType } from "./cardData";
import Link from "next/link";

const EventCard: React.FC<{ card: CardDataType }> = ({ card }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl max-w-7xl mx-auto">
    {/* Main container with split layout */}
    <div className="flex flex-col md:flex-row min-h-[400px]">
      {/* Left Section - Green background with content */}
      <div className="relative bg-gradient-to-br from-green-500 to-green-600 md:w-3/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute top-16 right-8 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-8 left-16 w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full opacity-70"></div>

        {/* School bus icon */}
        <div className="absolute top-6 left-12 md:left-16 bg-yellow-400 p-1.5 md:p-2 rounded-lg shadow-lg">
          <Bus className="w-4 h-4 md:w-6 md:h-6 text-green-700" />
        </div>

        {/* Location pin with flag */}
        <div className="absolute top-4 right-12 md:right-16 bg-white p-1.5 md:p-2 rounded-full shadow-lg">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
        </div>

        {/* Top content */}
        <div className="relative z-10">
          {card.subtitle && (
            <p className="text-white text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2 opacity-90">
              {card.subtitle}
            </p>
          )}

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-3 md:mb-6 drop-shadow-lg">
            {card.title}
          </h1>
        </div>

        {/* Info card section */}
        <div className="relative z-10 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-xl border-2 md:border-4 border-dashed border-yellow-400">
          <h3 className="text-blue-600 font-bold text-base sm:text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
            <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-purple-600" />
            LET'S HAVE FUN TOGETHER!
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
            {card.description}
          </p>

          {/* Event details with playful icons */}
          <div className="space-y-2 md:space-y-3 mb-3 md:mb-4 bg-blue-50 p-2 md:p-3 rounded-lg md:rounded-xl">
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
              <span className="font-medium">{card.date}</span>
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500 ml-1 md:ml-2" />
            </div>

            {card.location && (
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                <span className="font-medium">{card.location}</span>
              </div>
            )}

            {card.capacity && (
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                <span className="font-medium">{card.capacity}</span>
              </div>
            )}
          </div>

          {/* Action button */}
          <Link
            href={card.actionButton.url || "#"}
            className="inline-block mb-1 md:mb-2"
          >
            <button
              className="bg-gradient-to-r from-green-500 to-green-400 text-white font-bold py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-full transition-all duration-300
              shadow-[0_4px_0_rgb(16,185,129)] md:shadow-[0_6px_0_rgb(16,185,129)] hover:shadow-[0_2px_0_rgb(16,185,129)]
              hover:translate-y-1 active:translate-y-2 active:shadow-none
              border border-green-400 md:border-2 flex items-center gap-1 md:gap-2 text-sm sm:text-base md:text-lg"
            >
              {card.actionButton.text}
              <span className="text-base md:text-xl">✨</span>
            </button>
          </Link>
        </div>

        {/* Decorative pencil icon */}
        <div className="absolute bottom-12 md:bottom-16 right-4 bg-yellow-400 p-1.5 md:p-2 rounded-lg shadow-lg rotate-12">
          <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative md:w-2/5 min-h-[250px] sm:min-h-[300px] md:min-h-full">
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4 md:p-6">
          <div className="self-end">
            {/* Category badge */}
            <div className="bg-white bg-opacity-90 text-gray-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              {card.category}
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
              IT'S TIME TO LEARN
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;
