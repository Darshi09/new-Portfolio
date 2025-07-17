import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Profile Image */}
      <img
        src="me.png"
        alt="Darshi Shah"
        className="max-h-[500px] w-auto z-10"
      />

      {/* Animated Purple-Pink Hexagon */}
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#ba68c8] blur-md opacity-50 animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
