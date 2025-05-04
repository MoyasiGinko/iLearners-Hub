"use client";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4a6bcc] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
          Welcome to iLearnersHub!
        </h1>
        <h2 className="text-xl text-gray-600 font-['Comic_Sans_MS',cursive,sans-serif]">
          Where Learning is Fun and Exciting!
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/images/kids-learning.jpg"
            alt="Happy kids learning"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#ff9800] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            iLearnersHub was founded in 2015 with a big dream - to create a
            magical place where children can learn, grow, and have fun at the
            same time! We believe every child is special and has their own super
            powers of learning.
          </p>
          <p className="text-lg leading-relaxed">
            Our team of friendly teachers uses colorful books, exciting games,
            and cool technology to make learning an adventure every day. We help
            children aged 3-12 discover their talents and grow their
            imagination!
          </p>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#4caf50] mb-8 text-center font-['Comic_Sans_MS',cursive,sans-serif]">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Fun Classes",
              description: "Interactive lessons that feel like play time!",
              icon: "🎮",
              color: "#ffeb3b",
            },
            {
              title: "Creative Projects",
              description:
                "Arts, crafts, and hands-on activities to spark imagination.",
              icon: "🎨",
              color: "#ff5722",
            },
            {
              title: "Science Adventures",
              description:
                "Explore the wonders of the world through cool experiments.",
              icon: "🔬",
              color: "#2196f3",
            },
            {
              title: "Friendly Community",
              description: "Make new friends and learn together as a team.",
              icon: "👨‍👩‍👧‍👦",
              color: "#e91e63",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md h-full transition-transform duration-300 hover:-translate-y-2"
              style={{ backgroundColor: `${item.color}10` }}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center font-['Comic_Sans_MS',cursive,sans-serif]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Teachers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#9c27b0] mb-8 text-center font-['Comic_Sans_MS',cursive,sans-serif]">
          Meet Our Super Teachers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-6 text-center rounded-xl shadow-md overflow-hidden"
            >
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative mx-auto mb-4 border-[5px] border-gray-100">
                <Image
                  src={`/images/teacher-${item}.jpg`}
                  alt={`Teacher ${item}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-lg font-bold mb-2 font-['Comic_Sans_MS',cursive,sans-serif]">
                Teacher {["Sarah", "Mike", "Emma"][item - 1]}
              </h3>
              <p className="text-sm text-gray-600">
                Helping kids discover their potential with patience and
                creativity.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Call to Action */}
      <div className="bg-[#e3f2fd] p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-[#1565c0] mb-4 font-['Comic_Sans_MS',cursive,sans-serif]">
          Come Join Our Learning Adventure!
        </h2>
        <p className="mb-6">
          We'd love to welcome your child to our colorful world of learning and
          discovery!
        </p>
        <button className="bg-[#ff9800] hover:bg-[#f57c00] text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 font-['Comic_Sans_MS',cursive,sans-serif]">
          Schedule a Visit
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
