import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaInstagram,
  FaFileAlt,
  FaPenFancy,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Building responsive and interactive websites with modern technologies like React, Angular, and Node.js.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend & Database",
      description:
        "Creating scalable backend systems, REST APIs, and managing databases using PostgreSQL and Firebase.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile & Full-Stack Solutions",
      description:
        "Developing cross-platform applications and full-stack solutions that deliver seamless user experiences.",
    },
    {
      icon: <FaInstagram />,
      title: "Social Media Post Design",
      description:
        "Designing visually appealing and engaging social media posts and banners for platforms like Instagram, Facebook, and LinkedIn.",
    },
    {
      icon: <FaFileAlt />,
      title: "CV / Resume Design",
      description:
        "Creating professional, modern CVs and resumes that highlight skills, experience, and projects to stand out to recruiters.",
    },
    {
      icon: <FaPenFancy />,
      title: "Logo Design",
      description:
        "Designing unique and memorable logos that represent your brand identity effectively.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h1>My Services</h1>
        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
