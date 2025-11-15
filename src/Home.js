import React, { useEffect } from "react";
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
      <Navbar />

      <main className="content">
        {/* ================= HOME ================= */}
        <section id="home" className="home-section scroll-animate">
          <div className="home-container">
            {/* LEFT TEXT */}
            <div className="text">
              <h1>
                Hi, I'm Chamalka <span className="highlight-name">Obadage</span>
              </h1>
              <p>Undergraduate of University of Moratuwa</p>
              <p>Faculty of Information Technology</p>
              <p>Welcome to my portfolio 👋</p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="image">
              <img src={ProfileImage} alt="Profile of Chamalka Obadage" />
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="scroll-animate">
          <AboutSection />
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="projects-section scroll-animate">
          <ProjectSection />
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="services-section scroll-animate">
          <ServicesSection />
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section scroll-animate">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Home;
