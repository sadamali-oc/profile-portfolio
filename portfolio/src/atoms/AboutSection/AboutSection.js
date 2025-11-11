import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>

          <div className="about-labels">
            <span className="label">💻 Full-Stack Developer</span>
            <span className="label">🎓 UOM Undergraduate</span>
            <span className="label">💼 Former Intern Software Engineer</span>
          </div>

          <h3>Passionate Developer & Creative Thinker</h3>
          <p>
            Hello! I'm <strong>Chamalka</strong> — a software developer who
            loves building clean, efficient, and user-friendly digital
            experiences. I specialize in full-stack web development using modern
            tools like
            <span className="highlight"> React</span>,
            <span className="highlight"> Node.js</span>, and
            <span className="highlight"> PostgreSQL</span>. My goal is to craft
            beautiful and functional applications that make a real impact.
          </p>
          <p>
            When I’m not coding, I enjoy learning new technologies, mentoring
            others, and exploring creative ideas that connect people and
            technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
