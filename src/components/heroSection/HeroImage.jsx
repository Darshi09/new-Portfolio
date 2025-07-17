import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className="h-full w-full">
        <img
          src="me.png"
          alt="Darshi Shah"
          className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-0 z-10 left-1/2 -translate-x-1/2"
        />

        {/* Spinning Purple Hexagon */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#f8bbd0] opacity-60 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Blurred Purple Hexagon */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#ba68c8] opacity-40 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Spinning Pink Hexagon */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#ec407a] opacity-60 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Blurred Pink Hexagon */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#f48fb1] opacity-40 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
