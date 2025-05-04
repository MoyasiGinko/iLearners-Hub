"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { newsItems } from "./newsData";

const NewsDetail: React.FC = () => {
  const pathname = usePathname();
  // Extract the ID from the URL path and parse it to a number
  const id = pathname ? parseInt(pathname.split("/").pop() || "0", 10) : 0;

  // Find the news item by ID (now comparing number to number)
  const item = newsItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
          <p className="text-lg mb-6">
            We couldn't find the news item you're looking for. (ID: {id})
          </p>
          <Link href="/news-offers">
            <span className="inline-block bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-6 py-3 rounded-full transition-colors duration-200">
              ← Back to News & Events
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/news-offers">
          <span className="inline-block mb-6 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-4 py-2 rounded-full transition-colors duration-200">
            ← Back to News & Events
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Header image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
            <div
              className={`absolute top-6 right-6 rounded-full px-4 py-2 text-sm font-bold ${
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

          {/* Content */}
          <div className="p-6 md:p-10">
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
              {item.title}
            </h1>

            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{
                __html: item.content || item.description,
              }}
            />

            {/* Additional fun elements for kids */}
            <div className="mt-12 bg-blue-50 p-6 rounded-xl border-2 border-dashed border-purple-300">
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                Tell a Friend!
              </h3>
              <p className="mb-4">
                Did you enjoy reading this? Share it with your friends!
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300"
                  onClick={() => {
                    const button = document.activeElement as HTMLElement;
                    navigator.clipboard.writeText(window.location.href);
                    if (button) {
                      const originalText = button.innerText;
                      button.innerText = "Link Copied!";
                      setTimeout(() => {
                        button.innerText = originalText;
                      }, 2000);
                    }
                  }}
                >
                  Share with Friends
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print This Page
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related items section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">
            You might also like...
          </h2>
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
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-32">
                    <Image
                      src={relatedItem.imageUrl}
                      alt={relatedItem.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div
                      className={`absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-bold ${
                        relatedItem.category === "news"
                          ? "bg-blue-500 text-white"
                          : relatedItem.category === "event"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-purple-900"
                      }`}
                    >
                      {relatedItem.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-purple-700 mb-1 line-clamp-1">
                      {relatedItem.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {relatedItem.date}
                    </p>
                    <Link href={`/news-offers/${relatedItem.id}`}>
                      <span className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Fun footer - kids section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 mb-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
          <p className="mb-6">
            The iLearners Hub has more than 50 fun activities every month!
          </p>
          <Link href="/calendar">
            <span className="inline-block bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-8 py-3 rounded-full transition-colors">
              See Our Calendar
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
