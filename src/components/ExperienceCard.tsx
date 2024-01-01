import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Props {
  title: string;
  company_name: string;
  icon: string;
  date: string;
  iconBg: string;
  points: string[];
}

const ExperienceCard = ({
  title,
  company_name,
  icon,
  date,
  points,
  iconBg,
}: Props) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#0500004d",
          color: "#fff",
          border: "1px 0 solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 8px 32px 0 rgba(135, 47, 31, 0.37)",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={date}
        icon={
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <img
              src={icon}
              alt={company_name}
              className="w-60 h-60 img-fluid"
            />
          </div>
        }
        iconStyle={{ background: iconBg }}
      >
        <div>
          <h3
            className="text-white font-weight-bold"
            style={{ fontSize: "24px", margin: 0 }}
          >
            {title}
          </h3>
          <p
            className="text-secondary font-weight-semibold"
            style={{ margin: 0, fontSize: "16px" }}
          >
            {company_name}
          </p>
        </div>

        <ul className="mt-4 custom-list">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100"
              style={{
                fontSize: "14px",
                paddingLeft: "1em",
                letterSpacing: "0.1em",
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </>
  );
};

export default ExperienceCard;
