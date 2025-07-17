const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="relative group transition-transform duration-500 hover:-translate-y-6">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white h-[100px] w-[100px] flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-500 text-5xl shadow-lg border-4 border-white">
          {imgSvg}
        </div>
        <p className="text-purple-800 font-semibold mt-2">{text}</p>
      </div>

      {/* Accent background shape */}
      <div className="w-[100px] h-[200px] bg-purple-200 rounded-b-full absolute top-[50px] left-1/2 -translate-x-1/2 -z-10 opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
    </div>
  );
};

export default SingleSkill;
