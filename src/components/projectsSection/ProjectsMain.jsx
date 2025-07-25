import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Explore the world",
    year: "Mar2022",
    align: "right",
    image: "website-img-1.jfif",
    link: "https://travelling-wine.vercel.app/",
  },
  {
    name: "ToDo List",
    year: "Sept2022",
    align: "left",
    image: "website-img-2.png",
    link: "https://task-manager-website-five.vercel.app/",
  },
  {
    name: "Quiz Game",
    year: "Jan2023",
    align: "right",
    image: "website-img-3.png",
    link: "https://quiz-web-74lw.vercel.app/",
  },
  {
    name: "Weather App",
    year: "May2024",
    align: "left",
    image: "website-img-4.jfif",
    link: "https://weather-app-pi-eight-39.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
