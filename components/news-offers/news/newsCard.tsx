import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Star,
  User,
  Eye,
  MessageCircle,
  Share2,
  Globe,
  TrendingUp,
  AlertCircle,
  Bookmark,
} from "lucide-react";
import React from "react";
import { CardDataType } from "./cardData"; // Assuming cardData is imported from a separate file

// News Card Component with split design
const NewsCard: React.FC<{ card: CardDataType }> = ({ card }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl max-w-7xl mx-auto border border-gray-200">
    {/* Main container with split layout */}
    <div className="flex flex-col md:flex-row min-h-[400px]">
      {/* Left Section - Professional blue/gray background with content */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 md:w-3/5 p-8 flex flex-col justify-between overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
        <div className="absolute top-16 right-8 w-4 h-4 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-8 left-16 w-6 h-6 bg-blue-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/3 right-6 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>

        {/* Globe icon for global news */}
        <div className="absolute top-6 left-16 bg-white p-3 rounded-lg shadow-lg">
          <Globe className="w-6 h-6 text-blue-600" />
        </div>

        {/* Breaking news indicator */}
        {card.isBreaking && (
          <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
            <div className="flex items-center gap-2 text-sm font-bold">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              LIVE
            </div>
          </div>
        )}

        {/* Top content */}
        <div className="relative z-10">
          {card.subtitle && (
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-300 text-lg font-bold uppercase tracking-wide">
                {card.subtitle}
              </p>
            </div>
          )}

          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-lg">
            {card.title}
          </h1>

          {card.location && (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium text-sm">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              {card.location}
            </div>
          )}
        </div>

        {/* News details card */}
        <div className="relative z-10 bg-white rounded-2xl p-6 shadow-xl">
          {/* Author and timestamp */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800">{card.author}</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {card.publishedAt}
                </div>
                {card.readTime && (
                  <>
                    <span>•</span>
                    <span>{card.readTime}</span>
                  </>
                )}
              </div>
            </div>
            <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {card.description}
          </p>

          {/* Engagement stats */}
          <div className="flex items-center gap-6 mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{card.views}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">{card.comments}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Share2 className="w-4 h-4" />
              <span className="font-medium">Share</span>
            </div>
            <div className="ml-auto flex items-center gap-1 text-sm text-blue-600 font-medium">
              <TrendingUp className="w-4 h-4" />
              Trending
            </div>
          </div>

          {/* Source info */}
          {card.source && (
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <p className="text-blue-800 text-sm font-medium">Source:</p>
              </div>
              <p className="text-blue-700 font-bold">{card.source}</p>
            </div>
          )}

          {/* Action button */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn">
            {card.actionButton.text}
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-2 mt-3 text-xs text-gray-500">
            <span>📰 Verified Source</span>
            <span>•</span>
            <span>🔒 Fact Checked</span>
            <span>•</span>
            <span>⚡ Real-time Updates</span>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg">
          <Tag className="w-5 h-5 text-blue-600" />
        </div>
      </div>

      {/* Right Section - Image with news overlay */}
      <div className="relative md:w-2/5 min-h-[300px] md:min-h-full">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />

        {/* News overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Category badge */}
          <div className="self-end">
            <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {card.category}
            </div>
          </div>

          {/* Bottom content */}
          <div className="text-white">
            <h2 className="text-2xl font-black drop-shadow-lg mb-2">
              STAY INFORMED
            </h2>
            <p className="text-sm opacity-90 drop-shadow-md mb-3">
              Get the latest updates as they happen
            </p>

            {/* Live indicator */}
            {card.isBreaking && (
              <div className="inline-flex items-center gap-2 bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                DEVELOPING STORY
              </div>
            )}
          </div>
        </div>

        {/* Live indicator on side */}
        {card.isBreaking && (
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white px-2 py-6 rounded-lg shadow-xl">
            <div className="text-center">
              <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2 animate-pulse"></div>
              <p className="text-xs font-bold uppercase tracking-wide transform -rotate-90 whitespace-nowrap">
                Breaking
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default NewsCard;
