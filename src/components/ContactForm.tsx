import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

      emailjs
        .sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKey}`)
        .then((result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

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
          <form ref={form} onSubmit={sendEmail} name="contact">
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
            {showSuccess && (
              <div className="alert alert-success email-alert" role="alert">
                Your message has been sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
