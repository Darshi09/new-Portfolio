import { motion } from "framer-motion";

const SubHeroMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full border-y border-pink-300 bg-gradient-to-r from-purple-950 via-purple-900 to-pink-900 text-white flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-3xl py-8 md:flex-row sm:flex-col items-center gap-4"
    >
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="md:block sm:hidden bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text font-extrabold"
      >
        Fast Learner
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="md:block sm:hidden bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text font-extrabold"
      >
        Team Work
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-extrabold"
      >
        Details Master
      </motion.p>
    </motion.div>
  );
};

export default SubHeroMain;
