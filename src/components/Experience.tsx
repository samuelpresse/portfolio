import {
  VerticalTimeline
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "../content/experience";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <>
      <SectionHeading
        firsPhrase="What I have done so far"
        SecondPhrase="Work experience."
      />
      <VerticalTimeline>
        {experiences.map((experience) => (
          <ExperienceCard
            title={experience.title}
            company_name={experience.company_name}
            icon={experience.icon}
            iconBg={experience.iconBg}
            date={experience.date}
            points={experience.points}
          />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Experience;
