"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { newsItems } from "./newsData";

const NewsAndEvents: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      <div className="max-w-6xl px-6 mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10"
        >
          <h2 className="mb-4 leading-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl drop-shadow-lg">
            Exciting News & Events!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with all the exciting things happening at iLearners
            Hub!
          </p>
        </motion.div>

        {/* Cards section with consistent sizing and kid-friendly styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-blue-200 h-full flex flex-col"
            >
              <div className="relative h-48 w-full">
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
                      : "bg-yellow-400 text-blue-700"
                  }`}
                >
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>
                <Link href={`/news-offers/${item.id}`}>
                  <span className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium px-4 py-2 rounded-full transition-colors duration-200 text-center">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
