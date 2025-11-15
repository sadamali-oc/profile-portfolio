import React from "react";
import "./ContactSection.css";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-text">
          I’d love to hear from you! Whether you have a project idea, want to
          collaborate, or just say hello, feel free to reach out.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> chamalkasandamali@gmail.com
          </p>
          {/* <p>
            <strong>Phone:</strong> +94 76 005 9483
          </p> */}
        </div>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/chamalkaobadage/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sadamali-oc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
