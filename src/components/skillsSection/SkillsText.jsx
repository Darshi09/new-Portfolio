import { motion } from "framer-motion";

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] text-center px-4">
      {/* Animated gradient heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-pink bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 mb-8 drop-shadow-lg"
      >
        My Skills
      </motion.h2>

      {/* Descriptive paragraph */}
      <p className="text-lg max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
        I not only work with these technologies but excel at using them with best practices to deliver high-quality results.
        These skills have been the core tools in building my portfolio projects.
      </p>
    </div>
  );
};

export default SkillsText;
