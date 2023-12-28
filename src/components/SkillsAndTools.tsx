import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import skills from "../content/skills";
import { useEffect } from "react";
import SkillCard from "./SkillCard";

const SkillsAndTools = () => {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Heading firstWord="Skills" secondWord="&Tools" />
      <motion.div
        className="skill-map"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={skillVariants}>
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
export default SkillsAndTools;
