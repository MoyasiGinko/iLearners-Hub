"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4a6bcc] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
          Excellence in Education, Rooted in Aberdeen
        </h1>
        <h2 className="text-xl text-gray-600 font-['Comic_Sans_MS',cursive,sans-serif]">
          Welcome to our Aberdeen-based private tuition centre, where excellence
          meets local expertise.
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/images/aberdeen-education.jpg"
            alt="Aberdeen education"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#ff9800] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed">
            Our management team is proud to call Aberdeen home, and our
            collective experience is the driving force behind our commitment to
            providing top-tier education support to our primary and secondary
            school students.
          </p>
          <p className="text-lg leading-relaxed">
            We strive to empower students with the tools they need to excel
            academically while fostering a love for learning. Join us in
            creating a brighter future for the next generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
