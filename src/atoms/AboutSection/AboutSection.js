import React from "react";
import "./AboutSection.css";
import cvFile from "../../assets/CV.pdf";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiAngular,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiPostman,
  SiFirebase,
  SiRender,
  SiVercel,
} from "react-icons/si";

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
            Hello! I'm <strong>Chamalka</strong>, a software developer who loves
            building clean, efficient, and user-friendly digital experiences. I
            specialize in full-stack web development using modern tools like
            <span className="highlight"> React</span>,
            <span className="highlight"> Node.js</span>, and
            <span className="highlight"> PostgreSQL</span>. My goal is to craft
            beautiful and functional applications that make a real impact.
          </p>
          <p>
            When I’m not coding, I enjoy learning new technologies, mentoring
            others, and exploring creative ideas that connect people and
            technology. I also completed my full-stack Software Engineering
            internship at IF Solutions, where I worked with real-world projects
            using modern technologies, improved my problem-solving skills, and
            contributed to building scalable, user-focused applications. This
            experience strengthened my abilities in frontend and backend
            development while helping me grow as a collaborative team member.
          </p>

          <div className="tech-stack">
            <h3>Tech Stack</h3>

            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-items">
                <span className="tech-item">
                  <FaReact /> React
                </span>
                <span className="tech-item">
                  <FaHtml5 /> HTML5
                </span>
                <span className="tech-item">
                  <FaCss3Alt /> CSS3
                </span>
                <span className="tech-item">
                  <SiJavascript /> JavaScript
                </span>
                <span className="tech-item">
                  <SiAngular /> Angular
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Backend / Database</h4>
              <div className="tech-items">
                <span className="tech-item">
                  <FaNodeJs /> Node.js
                </span>
                <span className="tech-item">
                  <SiExpress /> Express.js
                </span>
                <span className="tech-item">
                  <SiFlask /> Flask
                </span>
                <span className="tech-item">
                  <SiPostgresql /> PostgreSQL
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Tools</h4>
              <div className="tech-items">
                <span className="tech-item">
                  <FaFigma /> Figma
                </span>
                <span className="tech-item">
                  <FaGithub /> GitHub
                </span>
                <span className="tech-item">
                  <SiPostman /> Postman
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Deployment</h4>
              <div className="tech-items">
                <span className="tech-item">
                  <SiFirebase /> Firebase
                </span>
                <span className="tech-item">
                  <FaAws /> AWS
                </span>
                <span className="tech-item">
                  <SiRender /> Render
                </span>
                <span className="tech-item">
                  <SiVercel /> Vercel
                </span>
              </div>
            </div>
          </div>

          <div className="cv-section">
            <a href={cvFile} download className="cv-button">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
