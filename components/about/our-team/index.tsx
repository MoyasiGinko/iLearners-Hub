import React from "react";

const teamMembers = [
  {
    name: "Ma’aruf Razzak",
    title: "Lawyer",
    description: "15 YEARS EXPERIENCE IN LEGAL, PROPERTY & CHARITY SECTORS",
  },
  {
    name: "Dr. M Ahmmad",
    title: "Professional Engineer",
    description: "15 YEARS EXPERIENCE IN ENGINEERING PRACTICE & TEACHING",
  },
  {
    name: "Shabbir Rahman",
    title: "Chartered Accountant",
    description:
      "Managing Director of A2Z Accounting Solutions Limited. Former Accounting Supervisor at Subsea 7",
  },
  {
    name: "Dr. Sheikh Zahidul Islam",
    title: "University Lecturer",
    description: "15+ YEARS EXPERIENCE IN TEACHING IN COLLEGE & UNIVERSITY",
  },
  {
    name: "Shovon Mostofa",
    title: "Aerospace Engineer",
    description: "6+ YEARS EXPERIENCE IN TEACHING NATIONAL 5",
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Our Management Team
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Meet our distinguished Management Team – a group of five highly
          qualified professionals. Our diverse backgrounds bring a wealth of
          knowledge and success to the forefront of our educational approach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-4">
                {member.title}
              </p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
