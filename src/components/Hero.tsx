import Heading from "./Heading";

interface Props {
  img: string;
}

const Hero = ({ img }: Props) => {
  return (
    <>
      <div className="pfp">
        <img src={img} alt="" />
      </div>

      <Heading firstWord="Who" secondWord="AmI?"></Heading>
    </>
  );
};

export default Hero;
