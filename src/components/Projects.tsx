import Heading from "./Heading";
import projects from "../content/projects";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Heading firstWord="My" secondWord="Projects" />

      <motion.div
        className="project-map"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={projectVariants}>
            <ProjectCard
              name={project.name}
              img={project.img}
              description={project.description}
              source={project.sourceCode}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
