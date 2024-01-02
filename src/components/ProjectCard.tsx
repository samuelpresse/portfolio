interface Props {
  name: string;
  img: string;
  description: string;
}

const ProjectCard = ({ name, img, description }: Props) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={img} alt={name} />
      </div>
      <div className="project-title">
        <h2>{name}</h2>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>

      <div className="project-links"></div>
    </div>
  );
};
export default ProjectCard;
