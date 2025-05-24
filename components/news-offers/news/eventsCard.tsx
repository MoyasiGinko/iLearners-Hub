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
import { CardDataType } from "./cardData"; // Assuming cardData is imported from a separate file\
import Link from "next/link";

// Event Card Component matching the YouTube cover design
const EventCard: React.FC<{ card: CardDataType }> = ({ card }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl max-w-7xl mx-auto">
    {/* Main container with split layout */}
    <div className="flex flex-col md:flex-row min-h-[400px]">
      {/* Left Section - Green background with content */}
      <div className="relative bg-gradient-to-br from-green-500 to-green-600 md:w-3/5 p-8 flex flex-col justify-between overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute top-16 right-8 w-4 h-4 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-8 left-16 w-6 h-6 bg-blue-400 rounded-full opacity-70"></div>

        {/* School bus icon */}
        <div className="absolute top-6 left-16 bg-yellow-400 p-2 rounded-lg shadow-lg">
          <Bus className="w-6 h-6 text-green-700" />
        </div>

        {/* Location pin with flag */}
        <div className="absolute top-4 right-16 bg-white p-2 rounded-full shadow-lg">
          <MapPin className="w-5 h-5 text-red-500" />
        </div>

        {/* Top content */}
        <div className="relative z-10">
          {card.subtitle && (
            <p className="text-white text-lg font-medium mb-2 opacity-90">
              {card.subtitle}
            </p>
          )}

          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-lg">
            {card.title}
          </h1>
        </div>

        {/* Info card section */}
        <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl border-4 border-dashed border-yellow-400">
          <h3 className="text-blue-600 font-bold text-xl mb-3 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-purple-600" />
            LET'S HAVE FUN TOGETHER!
          </h3>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {card.description}
          </p>

          {/* Event details with playful icons */}
          <div className="space-y-3 mb-4 bg-blue-50 p-3 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar className="w-5 h-5 text-pink-500" />
              <span className="font-medium">{card.date}</span>
              <Clock className="w-5 h-5 text-orange-500 ml-2" />
              <span className="font-medium">{card.time}</span>
            </div>

            {card.location && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-medium">{card.location}</span>
              </div>
            )}

            {card.capacity && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Users className="w-5 h-5 text-indigo-500" />
                <span className="font-medium">{card.capacity}</span>
              </div>
            )}
          </div>

          {/* Registration info */}
          {card.registrationUrl && (
            <div className="bg-yellow-50 p-3 rounded-xl border-2 border-yellow-200 mb-4">
              <p className="text-purple-700 text-sm font-medium">
                Sign up here! 📝
              </p>
              <p className="text-purple-800 font-bold">
                {card.registrationUrl}
              </p>
            </div>
          )}

          {/* Action button */}
          <Link href="/gallery" className="inline-block mb-2">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300
              shadow-[0_6px_0_rgb(147,51,234)] hover:shadow-[0_3px_0_rgb(147,51,234)]
              hover:translate-y-1 active:translate-y-2 active:shadow-none
              border-2 border-purple-400 flex items-center gap-2 text-lg"
            >
              {card.actionButton.text}
              <span className="text-xl">✨</span>
            </button>
          </Link>
        </div>

        {/* Decorative pencil icon */}
        <div className="absolute bottom-16 right-4 bg-yellow-400 p-2 rounded-lg shadow-lg rotate-12">
          <BookOpen className="w-5 h-5 text-green-700" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative md:w-2/5 min-h-[300px] md:min-h-full">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/5 bg-opacity-20 flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold drop-shadow-lg">
              IT'S TIME TO LEARN
            </h2>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {card.category}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;
