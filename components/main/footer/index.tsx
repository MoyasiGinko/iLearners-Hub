"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const quickLinks = [
    { label: "Courses", href: "/courses/all-course" },
    { label: "News & Offers", href: "/news-offers" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Register", href: "/register" },
  ];

  const resourceLinks = [
    { label: "Primary", href: "/courses/primary" },
    { label: "Secondary", href: "/courses/secondary" },
    { label: "National 5", href: "/courses/national-5" },
    { label: "Highers", href: "/courses/highers" },
    { label: "Advanced Highers", href: "/courses/advanced-highers" },
  ];

  const currentYear = new Date().getFullYear();

  // Function to handle navigation to course categories with smooth scrolling
  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Navigate to the courses page
    router.push(href);

    // After navigation, scroll to courses-content
    // Using setTimeout to ensure the navigation completes first
    setTimeout(() => {
      const coursesContent = document.getElementById("courses-content");
      if (coursesContent) {
        const offsetPosition =
          coursesContent.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <footer className="relative py-16 bg-gradient-to-b from-sky-100 to-indigo-100 border-t border-blue-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="mb-3">
              <Image
                src="/images/logo.png"
                alt="iLearners Hub Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Boost your exam performance with our expert tutoring. Contact us
              today to discuss your learning goals and book a session with our
              specialist tutors. Your academic success journey starts here!
            </p>
            <div className="flex gap-4 mt-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full"
                  style={{
                    backgroundColor: [
                      "#FDE68A",
                      "#A7F3D0",
                      "#BAE6FD",
                      "#DDD6FE",
                      "#FBCFE8",
                    ][i % 5],
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.includes("/courses")) {
                        handleCategoryClick(e, link.href);
                      }
                    }}
                    className="text-indigo-600 hover:text-purple-700 transition-colors duration-300
                     relative group"
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400
                       group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleCategoryClick(e, link.href)}
                    className="text-indigo-600 hover:text-purple-700 transition-colors duration-300
                           relative group"
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400
                                 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact/Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                <p className="text-gray-600">
                  1-3 Albyn Terrace, Aberdeen AB10 1YP, UK
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-500" />
                <p className="text-gray-600">+44 7448 231096</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <p className="text-gray-600">info@ilearnershub.co.uk</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-blue-200 text-center"
        >
          <div className="text-indigo-500">
            © {currentYear} iLearners Hub. All rights reserved. Where learning
            is fun!
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
