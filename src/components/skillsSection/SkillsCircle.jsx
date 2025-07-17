import React from "react";

const SkillsCircle = () => {
  return (
    <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-pink-500 bg-gradient-to-br from-pink-400 to-purple-500 overflow-hidden shadow-lg">
      <img
        src="skills.avif"
        alt="My Skills"
        className="object-cover h-full w-full rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default SkillsCircle;
