"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Star rating component - updated to use stars with rounded edges
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${
            i < rating ? "text-yellow-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ))}
    </div>
  );
};

// Quote icon updated to be more playful
const QuoteIcon: React.FC = () => {
  return (
    <div className="w-14 h-14 flex items-center justify-center bg-blue-500 rounded-full border-4 border-yellow-300 shadow-md">
      <svg
        width="22"
        height="20"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 8H2.5C2.1 8 1.75 7.85 1.45 7.55C1.15 7.25 1 6.9 1 6.5V1.5C1 1.1 1.15 0.75 1.45 0.45C1.75 0.15 2.1 0 2.5 0H7.5C7.9 0 8.25 0.15 8.55 0.45C8.85 0.75 9 1.1 9 1.5V6.5C9 6.9 8.85 7.25 8.55 7.55C8.25 7.85 7.9 8 7.5 8ZM16.5 8H11.5C11.1 8 10.75 7.85 10.45 7.55C10.15 7.25 10 6.9 10 6.5V1.5C10 1.1 10.15 0.75 10.45 0.45C10.75 0.15 11.1 0 11.5 0H16.5C16.9 0 17.25 0.15 17.55 0.45C17.85 0.75 18 1.1 18 1.5V6.5C18 6.9 17.85 7.25 17.55 7.55C17.25 7.85 16.9 8 16.5 8ZM7.5 16H2.5C2.1 16 1.75 15.85 1.45 15.55C1.15 15.25 1 14.9 1 14.5V9.5C1 9.1 1.15 8.75 1.45 8.45C1.75 8.15 2.1 8 2.5 8H7.5C7.9 8 8.25 8.15 8.55 8.45C8.85 8.75 9 9.1 9 9.5V14.5C9 14.9 8.85 15.25 8.55 15.55C8.25 15.85 7.9 16 7.5 16ZM16.5 16H11.5C11.1 16 10.75 15.85 10.45 15.55C10.15 15.25 10 14.9 10 14.5V9.5C10 9.1 10.15 8.75 10.45 8.45C10.75 8.15 11.1 8 11.5 8H16.5C16.9 8 17.25 8.15 17.55 8.45C17.85 8.75 18 9.1 18 9.5V14.5C18 14.9 17.85 15.25 17.55 15.55C17.25 15.85 16.9 16 16.5 16Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

// New Fun SVG Background Elements
const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Floating Clouds */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cloud 1 - Top Left */}
        <g className="animate-float-slow">
          <path
            d="M120,100 C120,65 150,40 185,40 C200,15 240,15 260,40 C280,15 340,15 360,40 C380,20 420,20 440,40 C475,20 525,30 540,70 C560,60 580,70 585,85 C605,75 635,85 640,105 C660,90 690,100 690,130 C690,160 660,180 630,180 C630,195 610,210 585,210 C570,230 540,240 510,230 C495,250 455,260 420,240 C400,255 370,255 350,240 C315,265 265,265 230,240 C210,250 185,250 170,235 C135,255 95,240 80,215 C50,215 30,195 30,170 C30,145 50,125 75,125 C75,110 90,100 120,100 Z"
            fill="#E6F7FF"
            stroke="#B3E0FF"
            strokeWidth="2"
          />
        </g>

        {/* Cloud 2 - Top Right */}
        <g
          className="animate-float-slower"
          style={{ transformOrigin: "center" }}
        >
          <path
            d="M950,150 C950,115 980,90 1015,90 C1030,65 1070,65 1090,90 C1110,65 1170,65 1190,90 C1210,70 1250,70 1270,90 C1305,70 1355,80 1370,120 C1390,110 1410,120 1415,135 C1435,125 1465,135 1470,155 C1490,140 1520,150 1520,180 C1520,210 1490,230 1460,230 C1460,245 1440,260 1415,260 C1400,280 1370,290 1340,280 C1325,300 1285,310 1250,290 C1230,305 1200,305 1180,290 C1145,315 1095,315 1060,290 C1040,300 1015,300 1000,285 C965,305 925,290 910,265 C880,265 860,245 860,220 C860,195 880,175 905,175 C905,160 920,150 950,150 Z"
            fill="#E6F7FF"
            stroke="#B3E0FF"
            strokeWidth="2"
          />
        </g>

        {/* Stars */}
        <g className="animate-twinkle">
          <circle cx="200" cy="250" r="5" fill="#FFD700" />
          <circle cx="350" cy="150" r="4" fill="#FFD700" />
          <circle cx="500" cy="80" r="6" fill="#FFD700" />
          <circle cx="650" cy="280" r="5" fill="#FFD700" />
          <circle cx="800" cy="120" r="4" fill="#FFD700" />
          <circle cx="950" cy="320" r="6" fill="#FFD700" />
          <circle cx="1100" cy="200" r="5" fill="#FFD700" />
        </g>

        {/* Colorful Balloons */}
        <g className="animate-float-medium">
          <circle cx="150" cy="400" r="20" fill="#FF6B6B" />
          <path d="M150,420 L150,480" stroke="#FF6B6B" strokeWidth="2" />
        </g>
        <g className="animate-float-slow">
          <circle cx="1050" cy="350" r="25" fill="#5E72E4" />
          <path d="M1050,375 L1050,445" stroke="#5E72E4" strokeWidth="2" />
        </g>
        <g className="animate-float">
          <circle cx="600" cy="450" r="22" fill="#FFD166" />
          <path d="M600,472 L600,535" stroke="#FFD166" strokeWidth="2" />
        </g>

        {/* Rainbow Arc */}
        <path
          d="M600,500 C750,400 900,400 1050,500"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,515 C750,415 900,415 1050,515"
          fill="none"
          stroke="#FFD166"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,530 C750,430 900,430 1050,530"
          fill="none"
          stroke="#06D6A0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,545 C750,445 900,445 1050,545"
          fill="none"
          stroke="#118AB2"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M600,560 C750,460 900,460 1050,560"
          fill="none"
          stroke="#5E72E4"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

// Testimonial Card Component - updated with kid-friendly styling
interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  content,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 relative h-full border-4 border-blue-400">
      {/* Testimonial Content */}
      <p className="text-gray-700 mb-6 text-lg font-medium rounded-xl bg-blue-50 p-4 border-2 border-blue-100">
        {content}
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        <QuoteIcon />
        <div className="ml-4">
          <h4 className="font-bold text-xl text-blue-600">{name}</h4>
          <p className="text-purple-500 text-md">{position}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonials Section Component
const ClientReview: React.FC = () => {
  // Extended testimonial data for carousel
  const testimonials = [
    {
      id: 1,
      name: "James Ickres",
      position: "Happy Student",
      content:
        "I love the fun activities in my classes! The teachers are super nice and I learned so many cool things!",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Aleesha Brown",
      position: "Awesome Learner",
      content:
        "The games we play while learning are my favorite part. I made new friends and can't wait for class every day!",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Creative Kid",
      content:
        "I used to think school was boring, but these classes are super fun! I get to create cool projects and play while learning!",
      rating: 4,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Young Explorer",
      content:
        "My mom says I'm always talking about what I learned in class. I love all the colorful books and fun games we play!",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
  ];

  // Duplicate the testimonials to create an infinite effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideWidth = 100 / (duplicatedTestimonials.length / 2);

    let animationId: number;
    const moveCarousel = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          let newPosition = prevPosition + 0.05 * direction;

          if (newPosition >= slideWidth * testimonials.length) {
            setDirection(-1);
            return prevPosition;
          } else if (newPosition <= 0) {
            setDirection(1);
            return prevPosition;
          }

          return newPosition;
        });
      }

      animationId = requestAnimationFrame(moveCarousel);
    };

    animationId = requestAnimationFrame(moveCarousel);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, testimonials.length, duplicatedTestimonials.length, direction]);

  return (
    <div className="bg-transparent py-16 relative overflow-hidden">
      {/* Add custom background elements */}
      <BackgroundElements />

      {/* Paper-cut style decorative shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200 rounded-br-full z-0 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200 rounded-tl-full z-0 opacity-50"></div>
      <div className="absolute top-1/4 right-20 w-24 h-24 bg-green-200 rounded-full z-0 opacity-50"></div>
      <div className="absolute bottom-1/4 left-20 w-20 h-20 bg-purple-200 rounded-full z-0 opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left side with heading */}
          <div className="w-full lg:w-1/2">
            <h3
              className="text-pink-500 font-bold mb-4 text-xl"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              WHAT KIDS ARE SAYING
            </h3>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight mb-6"
              style={{ textShadow: "2px 2px 4px rgba(0,105,255,0.2)" }}
            >
              Our Friends Love Learning With Us!
            </h2>
            <p
              className="text-purple-700 mb-8 text-lg"
              style={{ textShadow: "0 1px 1px rgba(128,0,128,0.1)" }}
            >
              Hear from our happy students about their exciting adventures in
              learning!
            </p>

            {/* Fun animated pencil icon */}
            <div className="relative w-20 h-20 animate-bounce">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="30,10 70,10 90,30 50,95 10,30"
                  fill="#FFD166"
                  stroke="#FF9F1C"
                  strokeWidth="3"
                />
                <polygon points="30,10 70,10 50,50" fill="#FF9F1C" />
                <rect x="40" y="75" width="20" height="25" fill="#6A4C93" />
                <polygon points="40,75 60,75 50,95" fill="#000" />
              </svg>
            </div>
          </div>

          {/* Right side with testimonials carousel */}
          <div
            className="w-full lg:w-2/3 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={carouselRef}
          >
            <div className="relative overflow-hidden">
              {/* Left fade effect */}
              <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-blue-50 to-transparent z-10"></div>

              <div
                className="flex transition-transform duration-300 ease-linear"
                style={{ transform: `translateX(-${position}%)` }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="min-w-full md:min-w-[420px] px-4"
                  >
                    <div className="h-full">
                      <TestimonialCard
                        name={testimonial.name}
                        position={testimonial.position}
                        content={testimonial.content}
                        rating={testimonial.rating}
                        image={testimonial.image}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right fade effect */}
              <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations to global styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
