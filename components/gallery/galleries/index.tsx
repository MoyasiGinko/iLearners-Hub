"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: "classroom" | "activities" | "events" | "outdoor";
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/gp1.jpg",
    alt: "Bright classroom with colorful learning materials",
    category: "classroom",
  },
  {
    id: 2,
    src: "/images/gallery/gp2.jpg",
    alt: "Children engaged in art activities",
    category: "activities",
  },
  {
    id: 3,
    src: "/images/gallery/gp3.jpg",
    alt: "Annual science fair",
    category: "events",
  },
  {
    id: 4,
    src: "/images/gallery/gp4.jpg",
    alt: "Children playing in outdoor playground",
    category: "outdoor",
  },
  {
    id: 5,
    src: "/images/gallery/gp5.jpg",
    alt: "Reading corner with bean bags",
    category: "classroom",
  },
  {
    id: 6,
    src: "/images/gallery/gp6.jpg",
    alt: "Group music lesson",
    category: "activities",
  },
  {
    id: 7,
    src: "/images/gallery/gp7.jpg",
    alt: "Parent-teacher conference",
    category: "events",
  },
  {
    id: 8,
    src: "/images/gallery/gp8.jpg",
    alt: "Garden learning area",
    category: "outdoor",
  },
  // Add more images as needed
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (currentImageIndex === null) return;

    if (direction === "next") {
      setCurrentImageIndex((currentImageIndex + 1) % filteredImages.length);
    } else {
      setCurrentImageIndex(
        (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <div className="h-auto bg-transparent pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 leading-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl drop-shadow-lg">
            Our Learning Center Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a peek at our colorful classrooms, exciting activities, and
            happy learning moments!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <CategoryButton
            active={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            All Photos
          </CategoryButton>
          <CategoryButton
            active={selectedCategory === "classroom"}
            onClick={() => setSelectedCategory("classroom")}
          >
            Classrooms
          </CategoryButton>
          <CategoryButton
            active={selectedCategory === "activities"}
            onClick={() => setSelectedCategory("activities")}
          >
            Activities
          </CategoryButton>
          <CategoryButton
            active={selectedCategory === "events"}
            onClick={() => setSelectedCategory("events")}
          >
            Events
          </CategoryButton>
          <CategoryButton
            active={selectedCategory === "outdoor"}
            onClick={() => setSelectedCategory("outdoor")}
          >
            Outdoor Learning
          </CategoryButton>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 relative h-56">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {currentImageIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl z-10"
            >
              ×
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
            >
              <FaArrowLeft />
            </button>

            <div className="relative w-full max-w-4xl max-h-[80vh] h-[70vh]">
              <Image
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
            >
              <FaArrowRight />
            </button>

            <div className="absolute bottom-6 text-white text-center w-full">
              <p>{filteredImages[currentImageIndex].alt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

type CategoryButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  active,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 inline-block py-3 rounded-full
      font-medium
       shadow-lg hover:shadow-xl
       border-b-4
       active:border-b-0 active:border-t-0 active:shadow-inner
       active:translate-y-1 hover:-translate-y-1
       transform transition-all duration-200
       focus:outline-none text-indigo-600 border-blue-200 ${
         active
           ? "bg-indigo-600 border-indigo-700 text-white"
           : "bg-blue-100 border-blue-300 text-indigo-600 "
       }`}
    >
      {children}
    </button>
  );
};

export default GalleryPage;
