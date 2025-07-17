const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative overflow-hidden">
      {/* Gradient overlay updated to match theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 opacity-50 z-10 pointer-events-none"></div>

      {/* Image placed below the gradient */}
      <img
        src="subSkills.jpg"
        alt="subSkills image"
        className="w-full h-auto object-cover z-0"
      />
    </div>
  );
};

export default SubSkills;
