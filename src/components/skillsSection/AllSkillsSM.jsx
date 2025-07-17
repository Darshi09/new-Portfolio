import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 px-4">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center group"
        >
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white h-[100px] w-[100px] flex items-center justify-center rounded-full group-hover:scale-110 transition duration-500 shadow-md text-5xl">
            <item.icon />
          </div>
          <p className="mt-4 text-purple-800 font-semibold group-hover:text-pink-600 transition duration-300 text-center">
            {item.skill}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
