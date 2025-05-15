import Image from "next/image";

const teachers = [
  {
    name: "Marcus Montgomery",
    experience: "10+ years of experience",
    image: "teacher-1.jpg",
  },
  {
    name: "Dr Ghazi Droubi",
    experience: "15+ years of experience",
    image: "teacher-2.jpg",
  },
  {
    name: "Zara",
    experience: "2+ years of experience",
    image: "teacher-3.jpg",
  },
];

const OurTeachers = () => {
  return (
    <div className="bg-[#fdf6e4] py-12 px-4">
      <h2 className="text-3xl font-bold text-[#ff6f61] mb-8 text-center font-['Comic_Sans_MS',cursive,sans-serif]">
        Our Teachers
      </h2>

      <p className="text-center text-lg text-[#4caf50] mb-12 font-['Comic_Sans_MS',cursive,sans-serif]">
        Our teachers, who have themselves navigated the Scottish curriculum,
        bring a deep understanding of the local academic landscape.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="p-6 text-center rounded-xl shadow-lg bg-[#fff3e0] hover:bg-[#ffe0b2] transition-all duration-300"
          >
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative mx-auto mb-4 border-[5px] border-[#ffcc80]">
              <Image
                src={`/images/${teacher.image}`}
                alt={teacher.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#ff7043] font-['Comic_Sans_MS',cursive,sans-serif]">
              {teacher.name}
            </h3>
            <p className="text-sm text-[#6d4c41] font-['Comic_Sans_MS',cursive,sans-serif]">
              {teacher.experience}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-[#ff5722] mt-12 font-['Comic_Sans_MS',cursive,sans-serif]">
        More Teachers Coming Soon...
      </p>
    </div>
  );
};

export default OurTeachers;
