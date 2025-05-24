import React from "react";
import { cardData, CardDataType } from "./cardData";
import EventCard from "./eventsCard";
import OfferCard from "./offersCard";
import NewsCard from "./newsCard";

// Function to render the appropriate card based on category
const renderCard = (card: CardDataType) => {
  switch (card.category) {
    case "events":
      return <EventCard key={card.id} card={card} />;
    case "offers":
      return <OfferCard key={card.id} card={card} />;
    case "news":
      return <NewsCard key={card.id} card={card} />;
    default:
      return null;
  }
};

// Main Component
const NewsAndEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Latest Updates
          </h1>
          <p className="text-gray-600 text-lg">
            Stay informed with our latest news, upcoming events, and exclusive
            offers
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {cardData.map((card) => renderCard(card))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
