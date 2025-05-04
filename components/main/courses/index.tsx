"use client";
import { useState } from "react";

// Icon components for categories
const GraduateIcon = () => (
  <svg
    className="w-8 h-8 text-teal-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const DesignIcon = () => (
  <svg
    className="w-8 h-8 text-pink-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
    <path d="M14 2v6h6M9 13h6M9 17h3" />
  </svg>
);

const ComputerIcon = () => (
  <svg
    className="w-8 h-8 text-yellow-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4" />
    <path d="M9 3l3 3 3-3M9 13h6M9 17h6" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg
    className="w-8 h-8 text-green-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 20l4-16M15 5l4 4-4 4M9 19l-4-4 4-4" />
  </svg>
);

const FinanceIcon = () => (
  <svg
    className="w-8 h-8 text-purple-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
  </svg>
);

const VideoIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M10 9l5 3-5 3V9z" />
  </svg>
);

export default function CourseCategories() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const categories = [
    { name: "Business Management", icon: <GraduateIcon />, courses: 42 },
    { name: "Arts and Design", icon: <DesignIcon />, courses: 65 },
    { name: "Computer Science", icon: <ComputerIcon />, courses: 78 },
    { name: "Personal Development", icon: <DevelopmentIcon />, courses: 54 },
    { name: "Business and Finance", icon: <FinanceIcon />, courses: 36 },
    { name: "Video and Photography", icon: <VideoIcon />, courses: 47 },
  ];

  const getCategoryColor = (index: number) => {
    const colors = [
      "teal-400",
      "pink-400",
      "yellow-400",
      "green-400",
      "purple-400",
      "blue-400",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full bg-transparent py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated text */}
        <div className="text-center mb-16">
          <p className="text-teal-500 uppercase tracking-wider font-medium mb-2 transform hover:scale-105 transition-transform cursor-pointer">
            FIND YOUR PERFECT COURSE
          </p>
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              Explore Our Course Categories
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy learners discovering new skills every day!
          </p>
        </div>

        {/* Categories with interactive elements */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-0">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
              onClick={() => setSelectedCategory(index)}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed
                  border-${getCategoryColor(index)}
                  transform transition-all duration-300
                  ${isHovering === index ? "scale-110 shadow-lg" : ""}
                  ${
                    selectedCategory === index
                      ? "bg-gradient-to-br from-white to-gray-100 shadow-md"
                      : ""
                  }
                  hover:shadow-xl cursor-pointer`}
              >
                <div
                  className={`transform transition-transform duration-300 ${
                    isHovering === index ? "scale-125" : ""
                  }`}
                >
                  {category.icon}
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3
                  className={`font-medium text-gray-800 transition-all duration-300
                  ${
                    isHovering === index
                      ? "text-" + getCategoryColor(index).replace("400", "600")
                      : ""
                  }
                  ${selectedCategory === index ? "font-bold" : ""}`}
                >
                  {category.name}
                </h3>
                <p
                  className={`text-sm text-gray-500 mt-1 opacity-0 transform -translate-y-2 transition-all duration-300
                  ${
                    isHovering === index || selectedCategory === index
                      ? "opacity-100 translate-y-0"
                      : ""
                  }`}
                >
                  {category.courses} courses
                </p>
              </div>
              <div
                className={`mt-2 px-4 py-1 rounded-full text-xs font-medium
                bg-${getCategoryColor(index)} text-white
                opacity-0 scale-0 transition-all duration-300
                ${selectedCategory === index ? "opacity-100 scale-100" : ""}`}
              >
                Selected
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href="/courses"
            className="px-8 inline-block py-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium
            shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </div>
  );
}
