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
    { name: "Business Management", icon: <GraduateIcon /> },
    { name: "Arts and Design", icon: <DesignIcon /> },
    { name: "Computer Science", icon: <ComputerIcon /> },
    { name: "Personal Development", icon: <DevelopmentIcon /> },
    { name: "Business and Finance", icon: <FinanceIcon /> },
    { name: "Video and Photography", icon: <VideoIcon /> },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-4 border-gray-300 rounded"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-300 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-pink-300"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-500 uppercase tracking-wider font-medium mb-2">
            CHECKOUT OUR CATEGORIES
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Top categories for popular courses to show
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center border-2 border-dashed ${
                  index === 0
                    ? "border-teal-400"
                    : index === 1
                    ? "border-pink-400"
                    : index === 2
                    ? "border-yellow-400"
                    : index === 3
                    ? "border-green-400"
                    : index === 4
                    ? "border-purple-400"
                    : "border-blue-400"
                }`}
              >
                {category.icon}
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
