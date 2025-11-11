import React from "react";
import "./ProjectSection.css";

// Example project data
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and CSS animations.",
    image: require("../../assets/logo.png"),
    demo: "https://yourdemo.com",
    github: "https://github.com/username/portfolio",
  },
  {
    title: "E-commerce App",
    description:
      "Full-stack e-commerce application with React, Node.js, and PostgreSQL.",
    image: require("../../assets/logo.png"),
    demo: "https://yourdemo.com",
    github: "https://github.com/u",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using React and Firebase.",
    image: require("../../assets/logo.png"),
    demo: "https://yourdemo.com",
    github: "https://github.com/username/chatapp",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
