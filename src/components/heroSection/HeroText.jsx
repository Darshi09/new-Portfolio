import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      {/* Subtitle */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-[#f8bbd0] font-semibold tracking-widest"
      >
        MERN Stack Developer
      </motion.h2>

      {/* Name Heading with Gradient */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8e24aa] to-[#ec407a]"
      >
        Darshi <br className="sm:hidden md:block" />
        Shah
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-[#f3e5f5]"
      >
        A Passionate MERN Stack Developer and Instructor <br /> with 1 year of
        experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
