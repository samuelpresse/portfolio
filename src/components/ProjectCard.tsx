import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  technologies: string[];
  sourceCode: string;
  img: string;
  liveDemo: string;
}

const ProjectCard = ({
  name,
  description,
  technologies,
  sourceCode,
  img,
  liveDemo,
}: Props) => {
  return (
    <>
      <a className="postcard__img_link" href={liveDemo}>
        <img className="postcard__img" src={img} alt="Image Title" />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title red">
          <a href={liveDemo}>{name}</a>
        </h1>
        <div className="postcard__subtitle small">
          <div className="project-links">
            <a href={sourceCode}>
              <FaGithub />
            </a>
            <a href={liveDemo}>
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="postcard__bar"></div>
        <div className="postcard__preview-txt">{description}</div>
        <ul className="postcard__tagbox">
          {technologies.map((technologie) => (
            <li className="tag__item">
              <i className="fas fa-tag mr-2"></i>
              {technologie}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProjectCard;
