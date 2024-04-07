import projects from "../content/projects";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SectionHeading from "./SectionHeading";

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
      <SectionHeading firsPhrase="My work" SecondPhrase="Projects." />
      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="postcard dark red"
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              img={project.img}
              technologies={project.tecnologies}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
