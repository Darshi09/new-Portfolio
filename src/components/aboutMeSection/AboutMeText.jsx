import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-pink mb-10">About Me</h2>
      <p className="text-white max-w-xl">
        I’m Darshi Shah, a dedicated MERN stack developer and MCA student at Indus University with a passion for building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. With a solid academic foundation and hands-on internship experience, I’ve developed strong technical, communication, and teamwork skills. I enjoy turning complex ideas into fast, responsive, and scalable solutions, and I’m now seeking a full-time opportunity where I can apply my skills, contribute to impactful projects, and continue growing as a developer.
      </p>

      <button className="border border-pink rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-pink hover:text-white transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-lightPurple hover:text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
