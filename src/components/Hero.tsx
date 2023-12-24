import socials from "../content/socials";
import Heading from "./Heading";
import Typewriter from "typewriter-effect";

interface Props {
  img: string;
  description: string;
}

const Hero = ({ img, description }: Props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="pfp">
          <img src={img} alt="" />
        </div>

        <Heading firstWord="Who" secondWord="AmI?" />

        <div className="hero-typewriter">
          <p>I am</p>
          <Typewriter
            options={{
              strings: [
                "A Web Developer",
                "A Programmer",
                "A Gamer",
                "A Tech Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="hero-desc">
          <p>{description}</p>
        </div>

        <div className="hero-socials">
          <p>Find me on: </p>
          <div className="social-links">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
