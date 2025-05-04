"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { newsItems } from "./newsData";

const NewsAndEvents: React.FC = () => {
  const [filter, setFilter] = React.useState<
    "all" | "news" | "event" | "offer"
  >("all");

  const filteredItems =
    filter === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === filter);

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          >
            News, Events & Offers
          </motion.h1>
          <p className="text-lg text-gray-600">
            Stay updated with all the exciting things happening at iLearners
            Hub!
          </p>

          {/* Category filters - styled as fun buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["all", "news", "event", "offer"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category as any)}
                className={`px-6 py-3 rounded-full font-medium text-lg capitalize ${
                  filter === category
                    ? "bg-yellow-400 text-purple-800 shadow-lg"
                    : "bg-white text-purple-600 hover:bg-purple-100"
                }`}
              >
                {category === "all" ? "All" : `${category}`}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Cards section with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div
                  className={`absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold ${
                    item.category === "news"
                      ? "bg-blue-500 text-white"
                      : item.category === "event"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-400 text-purple-900"
                  }`}
                >
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={`/news-offers/${item.id}`}>
                  <span className="inline-block bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-4 py-2 rounded-full transition-colors duration-200">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6">
              Subscribe to our newsletter for the latest news, events, and
              special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
