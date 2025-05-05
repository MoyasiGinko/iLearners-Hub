"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { newsItems } from "./newsData";

const NewsDetail: React.FC = () => {
  const pathname = usePathname();
  const id = pathname ? parseInt(pathname.split("/").pop() || "0", 10) : 0;
  const item = newsItems.find((item) => item.id === id);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  if (!item) {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg border-4 border-indigo-100">
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-4">😕</div>
            <h1 className="text-3xl font-bold text-indigo-700">
              Adventure Not Found
            </h1>
          </div>
          <p className="text-lg mb-6 text-indigo-600">
            Oops! We couldn't find the adventure story you're looking for.
          </p>
          <Link href="/news-offers">
            <span className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-700 font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-md">
              ← Back to Adventure Stories
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsSuccessVisible(true);
    setTimeout(() => {
      setIsSuccessVisible(false);
    }, 2000);
  };

  // Set emoji based on category
  const getCategoryEmoji = () => {
    switch (item.category) {
      case "news":
        return "📰";
      case "event":
        return "🎉";
      case "offer":
        return "🎁";
      default:
        return "✨";
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-6">
          <Link href="/news-offers">
            <span className="flex bg-yellow-400 hover:bg-yellow-500 text-indigo-700 font-medium px-5 py-2 rounded-full transition-all transform hover:scale-105 shadow-md items-center">
              <span className="mr-2">←</span>
              Back to Adventure Stories
            </span>
          </Link>

          <div className="flex gap-2">
            <button
              onClick={handleShare}
              className="bg-white hover:bg-gray-100 text-indigo-700 px-3 py-2 rounded-full shadow-md border-2 border-indigo-100 flex items-center transform hover:scale-105 transition-all"
              aria-label="Share page"
            >
              <span className="text-lg mr-1">🔗</span>
              <span className="hidden sm:inline">Share</span>
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-gray-100 text-indigo-700 px-3 py-2 rounded-full shadow-md border-2 border-indigo-100 flex items-center transform hover:scale-105 transition-all"
              aria-label="Print page"
            >
              <span className="text-lg mr-1">🖨️</span>
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </nav>

        {isSuccessVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border-2 border-green-300 text-green-700 px-4 py-2 rounded-xl shadow-md z-50 flex items-center"
          >
            <span className="mr-2">🎉</span> Link copied to clipboard!
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-100"
        >
          {/* Header image */}
          <div className="relative h-64 md:h-96">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/70 to-transparent" />

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`absolute top-6 right-6 rounded-full px-4 py-2 text-sm font-bold flex items-center ${
                item.category === "news"
                  ? "bg-blue-500 text-white"
                  : item.category === "event"
                  ? "bg-green-500 text-white"
                  : "bg-yellow-400 text-indigo-700"
              }`}
            >
              <span className="mr-1">{getCategoryEmoji()}</span>
              {item.category}
            </motion.div>

            <div className="absolute bottom-6 left-6 right-6 md:w-3/4">
              <p className="text-white/80 mb-2 font-medium">{item.date}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {item.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div
              className="prose max-w-none text-indigo-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: item.content || item.description,
              }}
            />

            {/* Informational box for parents & kids */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-md border-4 border-indigo-100">
              <div className="bg-indigo-600 px-6 py-3">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">💡</span> Parent & Child Adventure
                  Corner
                </h3>
              </div>
              <div className="bg-blue-50 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* For parents section */}
                  <div className="bg-white p-5 rounded-2xl border-2 border-green-100">
                    <h4 className="font-bold text-indigo-700 mb-3 text-lg flex items-center">
                      <span className="mr-2">👨‍👩‍👧‍👦</span> For Parents
                    </h4>
                    <p className="text-indigo-600 mb-4 text-sm">
                      This adventure provides valuable learning for your child's
                      development. Consider discussing these key points
                      together!
                    </p>
                    <ul className="list-disc list-inside text-sm text-indigo-600 space-y-1">
                      <li>How does this relate to your child's interests?</li>
                      <li>What skills could your child develop from this?</li>
                      <li>
                        Use this as a fun conversation starter at dinner time
                      </li>
                    </ul>
                  </div>

                  {/* For kids section */}
                  <div className="bg-white p-5 rounded-2xl border-2 border-yellow-100">
                    <h4 className="font-bold text-indigo-700 mb-3 text-lg flex items-center">
                      <span className="mr-2">🧒</span> For Young Explorers
                    </h4>
                    <p className="text-indigo-600 mb-4 text-sm">
                      Did you enjoy this adventure? Here are some fun things you
                      can do next:
                    </p>
                    <ul className="list-disc list-inside text-sm text-indigo-600 space-y-1">
                      <li>Draw a picture about what you just learned</li>
                      <li>Tell your friends about this cool adventure</li>
                      <li>Ask your parents if you can join our next event!</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-indigo-100">
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md flex items-center"
                      onClick={handleShare}
                    >
                      <span className="mr-2">🔗</span>
                      Share with Friends
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow-400 hover:bg-yellow-500 text-indigo-700 px-5 py-2 rounded-full transition-all duration-300 shadow-md flex items-center"
                      onClick={() => window.print()}
                    >
                      <span className="mr-2">🖨️</span>
                      Print This Adventure
                    </motion.button>
                    <Link href={`/activities/${item.id}`}>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md items-center"
                      >
                        <span className="mr-2">✏️</span>
                        Fun Activities
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related items section */}
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 flex items-center">
              <span className="mr-2">✨</span> More Fun Adventures
            </h2>
            <div className="ml-4 h-1 flex-grow bg-indigo-200 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsItems
              .filter((relatedItem) => relatedItem.id !== item.id)
              .slice(0, 3)
              .map((relatedItem, index) => (
                <motion.div
                  key={relatedItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-4 border-indigo-100"
                >
                  <div className="relative h-40">
                    <Image
                      src={relatedItem.imageUrl}
                      alt={relatedItem.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/60 to-transparent" />
                    <div
                      className={`absolute top-3 right-3 rounded-full px-2 py-1 text-xs font-bold flex items-center ${
                        relatedItem.category === "news"
                          ? "bg-blue-500 text-white"
                          : relatedItem.category === "event"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-indigo-700"
                      }`}
                    >
                      <span className="mr-1">
                        {relatedItem.category === "news"
                          ? "📰"
                          : relatedItem.category === "event"
                          ? "🎉"
                          : "🎁"}
                      </span>
                      {relatedItem.category}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-bold text-white text-lg mb-1 line-clamp-2">
                        {relatedItem.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-indigo-500 mb-3">
                      {relatedItem.date}
                    </p>
                    <p className="text-indigo-600 text-sm mb-4 line-clamp-2">
                      {relatedItem.description?.substring(0, 100)}...
                    </p>
                    <Link href={`/news-offers/${relatedItem.id}`}>
                      <span className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Footer with more professional styling but still fun */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 mb-8 bg-white rounded-3xl p-8 shadow-md border-4 border-indigo-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold text-indigo-700 mb-2 flex items-center">
                <span className="mr-2">📅</span> Join Our Adventures
              </h3>
              <p className="text-indigo-600">
                The iLearners Hub offers more than 50 fun learning adventures
                every month!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/register">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all transform hover:scale-105"
                >
                  Join the Fun
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
