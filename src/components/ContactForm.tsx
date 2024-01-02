import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-info">
          <h2>Let&apos;s get in touch!</h2>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:samuelpresse@gmail.com">email</a>. 👋
          <br />
          <br />
          <h5>Or find me on: </h5>
          <div className="hero-socials">
            <div className="social-links">
              {socials.map((social, index) => (
                <a key={index} href={social.url}>
                  <img src={`/socials/${social.icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="contact-links m-0">
              <MdEmail />
              samuelpresse@gmail.com
            </p>
            <br />
            <p className="contact-links m-0">
              <FaPhoneAlt />
              438 373 6694
            </p>
            <br />
            <p className="contact-links m-0">
              <IoLocation />
              Québec
            </p>
            <br />
          </div>
        </div>
        <div className="contact-form">
          <form name="contact">
            <input
              type="text"
              name="senderName"
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              name="senderEmail"
              placeholder="Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
