const HeroGradient = () => {
  return (
    <div>
      {/* Purple pulse glow on top-right */}
      <div className="absolute top-0 right-[400px] -z-10 animate-pulse w-[300px] h-[300px] rounded-full blur-3xl bg-[#8e24aa]/30"></div>

      {/* Soft purple glow top-left */}
      <div className="absolute top-[5%] left-0 -z-10 opacity-50 w-[300px] h-[300px] rounded-full blur-3xl bg-[#ba68c8]/40"></div>

      {/* Pink pulse glow top-right */}
      <div className="absolute top-0 right-0 -z-10 animate-pulse w-[300px] h-[300px] rounded-full blur-3xl bg-[#ec407a]/30"></div>

      {/* Soft pink glow lower-left */}
      <div className="absolute top-[10%] left-0 -z-10 opacity-50 w-[300px] h-[300px] rounded-full blur-3xl bg-[#f48fb1]/40"></div>
    </div>
  );
};

export default HeroGradient;
