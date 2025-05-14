"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const initialItemsToShow = 5;
  const displayedFaqItems = showAllItems
    ? faqItems
    : faqItems.slice(0, initialItemsToShow);
  const showSeeMoreButton = faqItems.length > initialItemsToShow;

  return (
    <div id="faq" className="w-full bg-transparent px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl text-center font-bold mb-8 text-pink-600"
          style={{
            textShadow: "0 4px 6px rgba(255, 105, 180, 0.4)",
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4"></div>
        {displayedFaqItems.map((item, index) => (
          <motion.div
            key={index}
            className="border-b border-yellow-300 pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <button
              className="flex w-full items-center justify-between py-2 text-left focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-medium text-blue-800">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <span role="img" aria-label="minus" className="text-2xl">
                    ➖
                  </span>
                ) : (
                  <span role="img" aria-label="plus" className="text-2xl">
                    ➕
                  </span>
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 text-purple-700">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {showSeeMoreButton && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAllItems(!showAllItems)}
            className="rounded-full bg-gradient-to-t from-pink-400 via-pink-500 to-pink-600 px-4 py-2 text-white transition-colors hover:brightness-110"
            style={{
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
            }}
          >
            {showAllItems
              ? "Show Less"
              : `Show More (${faqItems.length - initialItemsToShow} more)`}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default FAQSection;
