import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { motion } from "framer-motion";

const NavbarBtn = () => {
  return (
    <motion.button
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border border-[#ab47bc] flex items-center gap-1 bg-gradient-to-r from-[#8e24aa] to-[#f06292] transition-all duration-500 cursor-pointer shadow-lg"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 20px 0px rgba(171,71,188,0.4)", // soft purple glow
        borderColor: "#f06292", // light pink border on hover
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="hidden sm:block">
        <LuArrowDownRight />
      </div>
    </motion.button>
  );
};

export default NavbarBtn;
