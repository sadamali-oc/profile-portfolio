import React, { useState, useEffect } from "react";
import "./ProjectSection.css";

const fullStackProjects = [
  {
    title: "University Event Management System",
    description:
      "A web application to manage university events, built with Angular and Node.js.",
    image: require("../../assets/image1.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_ui-activity-7381586819068567552-qgGL",
    githubFrontend:
      "https://github.com/sadamali-oc/Individual-Project---Frontend",
    githubBackend: "https://github.com/sadamali-oc/Individual-Project--Backend",
  },
  {
    title: "Company Demo Website",
    description:
      "Built using React and Material-UI, ensuring a fast, responsive, and user-friendly experience.",
    image: require("../../assets/image2.jpeg"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_webdesign-uiux-react-activity-7305249093918830593-2P_Z",
    githubFrontend: "https://github.com/sadamali-oc/TechNova-Solutions",
  },
  {
    title: "Cloud Stack",
    description: "Built a mobile app using React Native.",
    image: require("../../assets/image3.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_reactnative-cloudstackapp-firebase-activity-7273952387776573440-etKZ",
    githubFrontend:
      "https://github.com/sadamali-oc/Cloud-Stack-Transportation-App",
  },
  {
    title: "E-commerce Website",
    description:
      "Built a multipage e-commerce website using HTML, CSS, and JavaScript.",
    image: require("../../assets/image4.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_webdevelopment-html-css-activity-7237490297641820160-JL7a",
    githubFrontend:
      "https://github.com/sadamali-oc/Build-and-Deploy-Ecommerce-Website",
  },
  {
    title: "Plazer Web Portal",
    description: "Built with ReactJS, NestJS, PostgreSQL.",
    image: require("../../assets/image5.jpg"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_webdevelopment-teamleadership-techinnovation-activity-7235561702346366977-Oytf",
  },
  {
    title: "Food Ordering Website",
    description:
      "Built with React JS, leveraging the power of React to create dynamic and interactive user interfaces.",
    image: require("../../assets/image9.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_exciting-food-ordering-website-react-activity-7203511394309206016-8w-1",
  },
];

const uiuxProjects = [
  {
    title: "A Plant Shop Portfolio",
    description:
      "A modern, user-friendly plant shop website design focusing on intuitive shopping and vibrant visuals.",
    image: require("../../assets/image6.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_uidesign-uxdesign-figma-activity-7233532140766814208-LJJq",
  },
  {
    title: "Food Landing Page",
    description:
      "UI/UX creation with a food landing page and a 3D carousel slider in Figma.",
    image: require("../../assets/image7.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_webdesignmagi-webdesignmagic-fruitlandingpage-activity-7221941724380635136-dp5r",
  },
  {
    title: "Food App Login Page",
    description:
      "Figma-based food app login UI with interactive prototypes and clean visual design.",
    image: require("../../assets/image8.png"),
    demo: "https://www.linkedin.com/posts/chamalkaobadage_uiuxdesigner-figmafan-activity-7221612390616862723-hgHM",
  },
];

const logos = [
  {
    image: require("../../assets/logo2.jpg"),

  },
  {
    image: require("../../assets/logo3.jpg"),
  }
];

// Reusable Carousel Component
const Carousel = ({ projects, title, isLogoSection = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setVisibleProjects(1);
      else if (window.innerWidth < 1024) setVisibleProjects(2);
      else setVisibleProjects(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ If it's the logo section, display differently
  if (isLogoSection) {
    return (
      <div className="logo-section">
        <h2>{title}</h2>
        <div className="logo-container">
          {projects.map((logo, i) => (
            <img
              key={i}
              src={logo.image}
              alt={`Logo ${i + 1}`}
              className="logos"
            />
          ))}
        </div>
      </div>
    );
  }

  // Regular project carousel
  const totalSlides = Math.ceil(projects.length / visibleProjects);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="carousel-container">
        <button className="arrow left" onClick={handlePrev}>
          ❮
        </button>

        <div className="projects-wrapper">
          <div
            className="projects-container"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * visibleProjects;
              const group = projects.slice(start, start + visibleProjects);
              return (
                <div className="slide" key={slideIndex}>
                  {group.map((project, i) => (
                    <div key={i} className="project-card">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                      <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                          {project.githubFrontend && (
                            <a
                              href={project.githubFrontend}
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub Frontend
                            </a>
                          )}
                          {project.githubBackend && (
                            <a
                              href={project.githubBackend}
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub Backend
                            </a>
                          )}
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.demo.includes("figma")
                              ? "View Design"
                              : "LinkedIn"}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <button className="arrow right" onClick={handleNext}>
          ❯
        </button>
      </div>

      <div className="dots-container">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          ></span>
        ))}
      </div>
    </>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section">
      <Carousel projects={fullStackProjects} title="Full Stack Projects" />
      <Carousel projects={uiuxProjects} title="UI/UX Design Projects" />
      <Carousel projects={logos} title="Logo Designs" isLogoSection />
    </section>
  );
};

export default ProjectSection;
