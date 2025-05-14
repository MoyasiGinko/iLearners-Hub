import React from "react";

interface CustomButtonProps {
  text: string;
  href: string; // Add href as a prop
  className?: string; // Optional className prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  href,
  className,
}) => {
  return (
    <div className="text-center">
      <a
        href={href} // Use the href prop here
        className={`px-8 inline-block py-3 rounded-full
       bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium
       shadow-lg hover:shadow-xl
       border-b-4 border-teal-600
       active:border-b-0 active:border-t-0 active:shadow-inner
       active:translate-y-1 hover:-translate-y-1
       transform transition-all duration-200
       focus:outline-none ${className || ""}`}
      >
        {text}
      </a>
    </div>
  );
};

export default CustomButton;
