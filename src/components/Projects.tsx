import Heading from "./Heading";
import projects from "../content/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <Heading firstWord="My" secondWord="Projects" />

      <div className="project-map">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              name={project.name}
              img={project.img}
              description={project.description}
              source={project.sourceCode}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
