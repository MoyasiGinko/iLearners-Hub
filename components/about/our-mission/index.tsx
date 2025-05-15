import React from "react";

const OurMission: React.FC = () => {
  return (
    <section className="p-8 bg-yellow-100 rounded-lg shadow-md text-center">
      <h2 className="text-orange-500 font-bold text-4xl mb-5">
        🌟 Our Mission 🌟
      </h2>
      <p className="text-lg leading-relaxed text-gray-800 font-medium mb-4">
        At <span className="text-orange-500 font-bold">iLearners Hub</span>, we
        want every child to shine bright like a star! 🌟 Our goal is to help
        kids learn, grow, and be the best they can be. We’re not just a place
        for learning; we’re a place where dreams come true!
      </p>
      <p className="text-lg leading-relaxed text-gray-800 font-medium">
        We love <span className="text-orange-500 font-bold">Aberdeen</span> and
        want to make it an even better place. That’s why we’re here to help kids
        in our community learn in a fun and exciting way. Together, we can make
        learning awesome! 🎉
      </p>
      <div className="mt-5 flex justify-center gap-4">
        <img
          src="/path-to-star-icon.png"
          alt="Star Icon"
          className="w-12 h-12"
        />
        <img
          src="/path-to-book-icon.png"
          alt="Book Icon"
          className="w-12 h-12"
        />
        <img
          src="/path-to-smile-icon.png"
          alt="Smile Icon"
          className="w-12 h-12"
        />
      </div>
    </section>
  );
};

export default OurMission;
