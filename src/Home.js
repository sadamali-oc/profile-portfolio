import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./atoms/navbar/Navbar";
import ProfileImage from "./assets/ProfileImage.png";
import "./Home.css";
import ContactSection from "./atoms/contact/ContactSection";
import AboutSection from "./atoms/AboutSection/AboutSection";
import ProjectSection from "./atoms/projects/ProjectSection";
import ServicesSection from "./atoms/services/Services";

const useScrollAnimation = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector]);
};

const Home = () => {
  useScrollAnimation(".scroll-animate");

  return (
    <div>
      <Helmet>
        <title>Chamalka Obadage | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Chamalka Obadage, Undergraduate at the University of Moratuwa, Faculty of Information Technology."
        />
        <meta
          name="keywords"
          content="Chamalka Obadage, Portfolio, React Developer, Software Developer, University of Moratuwa, IT Faculty"
        />
        <meta name="author" content="Chamalka Obadage" />
        <meta property="og:title" content="Chamalka Obadage | Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my professional portfolio website."
        />
        <meta property="og:image" content="/ProfileImage.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="content">
        <section id="home" className="home-section scroll-animate">
          <div className="home-container">
            <div className="text">
              <h1>
                Hi, I'm Chamalka <span className="highlight-name">Obadage</span>
              </h1>
              <p>Undergraduate of University of Moratuwa</p>
              <p>Faculty of Information Technology</p>
              <p>Welcome to my portfolio 👋</p>
            </div>

            <div className="image">
              <img src={ProfileImage} alt="Profile of Chamalka Obadage" />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-animate">
          <AboutSection />
        </section>

        <section id="projects" className="projects-section scroll-animate">
          <ProjectSection />
        </section>

        <section id="services" className="services-section scroll-animate">
          <ServicesSection />
        </section>

        <section id="contact" className="contact-section scroll-animate">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Home;
