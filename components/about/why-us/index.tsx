import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Why Choose Us
        </h1>
        <div className="space-y-8">
          {/* Quality Focused */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-500">🎓</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              Quality Focused
            </h2>
            <p className="text-gray-600">
              Our tutors are highly qualified and experienced, with a deep
              understanding of the National 5 curriculum. They are dedicated to
              helping students succeed and reach their full potential.
            </p>
          </div>
        </div>

        {/* Personalised Tutoring Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-green-500">📚</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-700">
              Personalised Tutoring Plan
            </h2>
            <p className="text-gray-600">
              We recognise that every student is unique. Our tutoring sessions
              are tailored to the individual needs of each student, ensuring
              targeted support in areas where they need it the most.
            </p>
          </div>
        </div>

        {/* Enhanced Support */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-yellow-500">🌟</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-yellow-700">
              Enhanced Support
            </h2>
            <p className="text-gray-600">
              National 5 exams can be challenging, but with our expert guidance,
              students can approach exams with confidence. We focus on honing
              exam skills, providing practice papers, and offering valuable tips
              for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
