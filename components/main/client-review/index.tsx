"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-orange-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Quote icon for testimonial
const QuoteIcon: React.FC = () => {
  return (
    <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full">
      <svg
        width="18"
        height="16"
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

// Testimonial Card Component
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
    <div className="bg-white rounded-lg shadow-md p-8 relative h-full">
      {/* Dashed border with image */}
      <div className="absolute -top-12 right-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-teal-400 p-1 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={image}
                alt={name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-4 mt-4">
        <StarRating rating={rating} />
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-600 mb-6">{content}</p>

      {/* Author Info */}
      <div className="flex items-center">
        <QuoteIcon />
        <div className="ml-4">
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-500 uppercase text-sm">{position}</p>
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
      position: "Market Manager",
      content:
        "Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Aleesha Brown",
      position: "Market Manager",
      content:
        "Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Product Designer",
      content:
        "Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "UI/UX Designer",
      content:
        "Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
  ];

  // Duplicate the testimonials to create an infinite effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // Move this outside useEffect
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideWidth = 100 / (duplicatedTestimonials.length / 2); // Width percentage of each slide

    let animationId: number;
    const moveCarousel = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          let newPosition = prevPosition + 0.05 * direction; // Movement based on direction

          // Change direction when reaching end or beginning
          if (newPosition >= slideWidth * testimonials.length) {
            setDirection(-1); // Start moving backward
            return prevPosition;
          } else if (newPosition <= 0) {
            setDirection(1); // Start moving forward
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
    <div className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/dotted-pattern.png')] bg-no-repeat bg-cover opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left side with heading */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-teal-500 font-medium mb-4">OUR TESTIMONIALS</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              What they're saying about our courses
            </h2>
            <p className="text-gray-600 mb-8">
              Quisque commodo, magna nec accu man euismod tellus mi ornare enim.
            </p>
          </div>

          {/* Right side with testimonials carousel */}
          <div
            className="w-full lg:w-2/3 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={carouselRef}
          >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
