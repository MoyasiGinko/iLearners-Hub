import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Star,
  Percent,
  Gift,
  Zap,
  Timer,
  TrendingUp,
} from "lucide-react";
import React from "react";
import { CardDataType } from "./cardData"; // Assuming cardData is imported from a separate file

// Offer Card Component with split design
const OfferCard: React.FC<{ card: CardDataType }> = ({ card }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl max-w-7xl mx-auto">
    {/* Main container with split layout */}
    <div className="flex flex-col md:flex-row min-h-[400px]">
      {/* Left Section - Orange/Red gradient background with content */}
      <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 md:w-3/5 p-8 flex flex-col justify-between overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
        <div className="absolute top-20 right-8 w-6 h-6 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-12 left-20 w-8 h-8 bg-yellow-300 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-1/2 right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-ping"></div>

        {/* Discount badge - prominent */}
        <div className="absolute top-6 right-6 bg-yellow-400 text-red-700 p-4 rounded-2xl shadow-xl transform rotate-12 animate-pulse">
          <div className="text-3xl font-black flex items-center gap-1">
            <Percent className="w-8 h-8" />
            {card.discount}
          </div>
        </div>

        {/* Gift icon */}
        <div className="absolute top-6 left-20 bg-yellow-400 p-3 rounded-lg shadow-lg animate-bounce">
          <Gift className="w-6 h-6 text-red-600" />
        </div>

        {/* Lightning icon for flash sale */}
        <div className="absolute bottom-20 right-8 bg-yellow-300 p-2 rounded-full shadow-lg">
          <Zap className="w-5 h-5 text-orange-600" />
        </div>

        {/* Top content */}
        <div className="relative z-10">
          {card.subtitle && (
            <div className="flex items-center gap-2 mb-3">
              <Timer className="w-5 h-5 text-yellow-300 animate-spin" />
              <p className="text-yellow-300 text-lg font-bold uppercase tracking-wide">
                {card.subtitle}
              </p>
            </div>
          )}

          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-lg animate-pulse">
            {card.title}
          </h1>

          {card.offerType && (
            <div className="inline-block bg-yellow-400 text-red-700 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
              🔥 {card.offerType}
            </div>
          )}
        </div>

        {/* Offer details card */}
        <div className="relative z-10 bg-white rounded-2xl p-6 shadow-xl border-4 border-yellow-400">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <h3 className="text-gray-800 font-bold text-xl">EXCLUSIVE DEAL</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {card.description}
          </p>

          {/* Price comparison */}
          {card.originalPrice && card.salePrice && (
            <div className="flex items-center gap-4 mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-center">
                <p className="text-gray-500 text-sm line-through">
                  {card.originalPrice}
                </p>
                <p className="text-xs text-gray-400">Original</p>
              </div>
              <ArrowRight className="w-5 h-5 text-green-600" />
              <div className="text-center">
                <p className="text-2xl font-black text-green-600">
                  {card.salePrice}
                </p>
                <p className="text-xs text-green-500 font-medium">Sale Price</p>
              </div>
              <div className="ml-auto bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                SAVE {card.discount}
              </div>
            </div>
          )}

          {/* Validity */}
          {card.validUntil && (
            <div className="bg-red-50 p-3 rounded-lg border border-red-200 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600 animate-pulse" />
                <p className="text-red-800 text-sm font-bold">
                  Offer Valid Until:
                </p>
              </div>
              <p className="text-red-700 font-bold text-lg">
                {card.validUntil}
              </p>
            </div>
          )}

          {/* Action button */}
          <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn">
            <Gift className="w-5 h-5 group-hover/btn:animate-bounce" />
            {card.actionButton.text}
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-2 mt-3 text-xs text-gray-500">
            <span>🔒 Secure Payment</span>
            <span>•</span>
            <span>✅ Money Back Guarantee</span>
            <span>•</span>
            <span>⚡ Instant Access</span>
          </div>
        </div>

        {/* Floating offer badge */}
        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-lg shadow-lg rotate-12 animate-pulse">
          <Tag className="w-5 h-5 text-red-600" />
        </div>
      </div>

      {/* Right Section - Image with overlay */}
      <div className="relative md:w-2/5 min-h-[300px] md:min-h-full">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Category badge */}
          <div className="self-end">
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              {card.category}
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-white">
            <h2 className="text-2xl font-black drop-shadow-lg mb-2">
              DON'T MISS OUT!
            </h2>
            <p className="text-sm opacity-90 drop-shadow-md">
              Limited quantities available
            </p>
          </div>
        </div>

        {/* Urgency indicator */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white px-3 py-6 rounded-lg shadow-xl">
          <div className="text-center">
            <Timer className="w-6 h-6 mx-auto mb-2 animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-wide transform -rotate-90 whitespace-nowrap">
              Hurry Up
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default OfferCard;
