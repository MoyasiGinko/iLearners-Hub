import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const PrimarySection: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden py-16">
      {/* Dotted world map background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[url('/images/dotted-world-map.png')] bg-no-repeat bg-contain bg-center"></div>
      </div>

      {/* Paper airplane decoration */}
      <div className="absolute bottom-20 left-40 z-0">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 50L80 20L60 80L20 50Z"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 50L60 80"
            stroke="#FF6B6B"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      {/* Circular path decoration */}
      <div className="absolute -bottom-10 left-1/4 z-0">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0Z"
            stroke="#FF6B6B"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with images */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            {/* First image (woman with glasses) */}
            <div className="relative z-20 ml-4 md:ml-12 mb-8 lg:mb-0">
              <div
                className="rounded-3xl overflow-hidden shadow-lg"
                style={{ maxWidth: "350px" }}
              >
                <Image
                  src="/images/student-smiling.jpg"
                  alt="Smiling student with glasses"
                  width={350}
                  height={420}
                  className="object-cover"
                />
              </div>

              {/* Curved dotted line */}
              <svg
                className="absolute -right-4 -bottom-8 z-10"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 75C10 40 50 10 120 30"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Second image (online class) */}
            <div className="absolute top-1/3 right-0 z-10">
              <div
                className="rounded-3xl overflow-hidden shadow-lg"
                style={{ maxWidth: "280px" }}
              >
                <Image
                  src="/images/online-class.jpg"
                  alt="Online class session"
                  width={280}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-2 left-1/3 z-30">
              <div
                className="bg-indigo-600 text-white p-4 rounded-lg shadow-lg"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%)",
                }}
              >
                <div className="font-bold text-5xl">16</div>
                <div className="text-sm font-medium leading-tight">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right side with text and features */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="text-teal-500 font-medium mb-2">GET TO KNOW US</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Grow your skills learn with us from anywhere
            </h2>

            <p className="text-gray-600 mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-red-400 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Expert trainers</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-purple-500 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Online learning</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-orange-400 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Lifetime access</span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-teal-400 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Great results</span>
              </div>
            </div>

            <Link href="/about">
              <span className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300">
                DISCOVER MORE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
