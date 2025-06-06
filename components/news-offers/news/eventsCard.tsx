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
  <div
    className="relative overflow-hidden rounded-2xl bg-white shadow-2xl max-w-7xl mx-auto hover:shadow-3xl transition-all duration-700 animate-glow"
    style={{ animationDelay: "0.2s", animationDuration: "4s" }}
  >
    {/* Main container with split layout */}
    <div className="flex flex-col md:flex-row min-h-[400px]">
      {" "}
      {/* Left Section - Green background with content and animated gradient */}
      <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-500 animate-gradient md:w-3/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden">
        {/* Animated decorative background elements */}
        <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
        <div
          className="absolute top-16 right-8 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute bottom-8 left-16 w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full opacity-70 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>{" "}
        {/* Additional floating animations */}
        <div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        {/* Extra twinkling elements */}
        <div
          className="absolute top-20 left-8 w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-32 right-20 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-twinkle"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-6 w-1 h-1 bg-blue-300 rounded-full animate-twinkle"
          style={{ animationDelay: "2.5s" }}
        ></div>
        {/* Drifting geometric shapes */}
        <div
          className="absolute top-12 right-6 w-4 h-4 border-2 border-white/30 rotate-45 animate-drift"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-24 left-20 w-3 h-3 border-2 border-yellow-300/40 rounded-full animate-drift"
          style={{ animationDelay: "3s" }}
        ></div>
        {/* Floating diagonal elements */}
        <div
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float-diagonal"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50 animate-float-diagonal"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Bubble-like floating elements */}
        <div
          className="absolute top-1/2 left-8 w-3 h-3 bg-white/20 rounded-full animate-bubble"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-3/4 right-12 w-2 h-2 bg-yellow-200/30 rounded-full animate-bubble"
          style={{ animationDelay: "3.5s" }}
        ></div>
        {/* School bus icon with hover animation */}
        <div
          className="absolute top-6 left-12 md:left-16 bg-yellow-400 p-1.5 md:p-2 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          <Bus className="w-4 h-4 md:w-6 md:h-6 text-green-700" />
        </div>{" "}
        {/* Location pin with flag and gentle sway animation */}
        <div className="absolute top-4 right-12 md:right-16 bg-white p-1.5 md:p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-gentle-sway">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
        </div>
        {/* Top content with subtle float animation */}
        <div
          className="relative z-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          {card.subtitle && (
            <p className="text-white text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2 opacity-90">
              {card.subtitle}
            </p>
          )}{" "}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-3 md:mb-6 drop-shadow-lg animate-text-glow">
            {card.title}
          </h1>
        </div>{" "}
        {/* Info card section with subtle hover animation */}
        <div className="relative z-10 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-xl border-2 md:border-4 border-dashed border-yellow-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
          <h3 className="text-blue-600 font-bold text-base sm:text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
            <GraduationCap
              className="w-5 h-5 md:w-7 md:h-7 text-purple-600 animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "2s" }}
            />
            LET'S HAVE FUN TOGETHER!
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
            {card.description}
          </p>
          {/* Event details with playful icons and subtle animations */}
          <div className="space-y-2 md:space-y-3 mb-3 md:mb-4 bg-blue-50 p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-blue-100 transition-colors duration-300">
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-pink-500 hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{card.date}</span>
              <Clock
                className="w-4 h-4 md:w-5 md:h-5 text-orange-500 ml-1 md:ml-2 animate-pulse"
                style={{ animationDuration: "3s" }}
              />
            </div>

            {card.location && (
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500 hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{card.location}</span>
              </div>
            )}

            {card.capacity && (
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{card.capacity}</span>
              </div>
            )}
          </div>{" "}
          {/* Action button with enhanced animations */}
          <Link
            href={card.actionButton.url || "#"}
            className="inline-block mb-1 md:mb-2"
          >
            <button
              className="bg-gradient-to-r from-green-500 to-green-400 text-white font-bold py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-full transition-all duration-300
              shadow-[0_4px_0_rgb(16,185,129)] md:shadow-[0_6px_0_rgb(16,185,129)] hover:shadow-[0_2px_0_rgb(16,185,129)]
              hover:translate-y-1 active:translate-y-2 active:shadow-none hover:scale-105
              border border-green-400 md:border-2 flex items-center gap-1 md:gap-2 text-sm sm:text-base md:text-lg
              group"
            >
              {card.actionButton.text}
              <span className="text-base md:text-xl animate-bounce group-hover:animate-spin transition-all duration-300">
                ✨
              </span>
            </button>
          </Link>
        </div>{" "}
        {/* Decorative pencil icon with rotation animation */}
        <div className="absolute bottom-12 md:bottom-16 right-4 bg-yellow-400 p-1.5 md:p-2 rounded-lg shadow-lg rotate-12 hover:rotate-45 transition-transform duration-500 animate-gentle-rotate">
          <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
        </div>
      </div>
      {/* Right Section - Image with subtle animations */}
      <div className="relative md:w-2/5 min-h-[250px] sm:min-h-[300px] md:min-h-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-fit cover hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay text with animations */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 transition-all duration-500 group">
          {/* Shining effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

          <div
            className="self-end animate-float hover:animate-bounce transform group-hover:translate-y-1 transition-transform duration-300 relative z-10"
            style={{ animationDelay: "1s" }}
          >
            {/* Category badge */}
            <div className="bg-white bg-opacity-90 text-gray-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg hover:bg-opacity-100 hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse">
              {card.category}
            </div>
          </div>

          {/* <div
            className="text-white animate-fade-in-up opacity-0 hover:opacity-100 transition-opacity duration-700"
            style={{ animationDelay: "2s", animationFillMode: "forwards" }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg animate-glow hover:animate-pulse transition-all duration-500">
              JOIN US NOW
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;
