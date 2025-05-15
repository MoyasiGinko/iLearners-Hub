import React from "react";

const OurMission = () => {
  return (
    <div className="bg-transparent py-20">
      {/* Our Mission Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-orange-500 font-bold text-4xl mb-5">
              🌟 Our Mission 🌟
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 font-medium mb-4">
              At{" "}
              <span className="text-orange-500 font-bold">iLearners Hub</span>,
              we want every child to shine bright like a star! 🌟 Our goal is to
              help kids learn, grow, and be the best they can be. We're not just
              a place for learning; we're a place where dreams come true!
            </p>
            <p className="text-lg leading-relaxed text-gray-800 font-medium">
              We love{" "}
              <span className="text-orange-500 font-bold">Aberdeen</span> and
              want to make it an even better place. That's why we're here to
              help kids in our community learn in a fun and exciting way.
              Together, we can make learning awesome! 🎉
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/about/mission.png"
                alt="Happy children learning together"
                className="w-full h-full object-fit cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-orange-500 font-bold text-4xl mb-5">
              ✨ Our Commitment ✨
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 font-medium mb-4">
              We promise to create a safe, nurturing environment where curiosity
              is encouraged and creativity flourishes. Each child's unique
              journey matters to us.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 font-medium">
              Our dedicated team is committed to fostering a love for learning
              that lasts a lifetime. We believe in building strong foundations
              through play, exploration, and guided discovery.
            </p>
            <div className="mt-5 flex gap-4">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl" role="img" aria-label="Quality">
                  🏆
                </span>
              </div>
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl" role="img" aria-label="Creativity">
                  🎨
                </span>
              </div>
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl" role="img" aria-label="Growth">
                  🌱
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/about/vision.png"
                alt="Our learning environment"
                className="w-full h-full object-fit cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
