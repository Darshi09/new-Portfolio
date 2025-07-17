import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills" className="bg-gradient-to-b from-pink-100 via-purple-100 to-white py-16">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        {/* Animated Heading */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Skills for Large Devices */}
        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 hidden lg:block">
          <AllSkills />
        </div>

        {/* Skills for Small Devices */}
        <div className="block lg:hidden mt-8">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
