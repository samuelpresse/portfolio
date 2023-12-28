interface Props {
  skill: string;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <>
      <div className="skill">
        <img src={`/skills/${skill}`} alt="" className="skill-img" />
      </div>
    </>
  );
};
export default SkillCard;
