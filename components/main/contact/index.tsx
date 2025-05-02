"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
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
    { name: "Business Management" },
    { name: "Arts and Design" },
    { name: "Computer Science" },
    { name: "Personal Development" },
    { name: "Business and Finance" },
    { name: "Video and Photography" },
  ];

  return (
    <div className="max-w-6xl  mx-auto relative z-10">
      <div className="bg-gradient-to-r  from-gray-900 to-teal-600 rounded-xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="p-8 max-h-full h-[440px] md:w-1/2 relative flex items-center">
            <div className="mb-6">
              <h2 className="text-5xl font-bold text-white mb-4">
                Sign up for a free trial lesson by zoom
              </h2>
              <p className="text-gray-300 mb-6">
                Quisque commodo, magna nec accu mani euismod tellus mi ornare
                enim, quis congue elit.
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-8 md:w-1/2 flex items-center">
            <div className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 rounded-md"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full p-3 rounded-md"
                />
              </div>

              <div className="mb-6">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md appearance-none"
                >
                  <option value="" disabled>
                    Select course
                  </option>
                  {categories.map((category, index) => (
                    <option
                      key={index}
                      value={category.name.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-gray-900 text-white uppercase tracking-wider font-medium py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300"
              >
                SEND REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
