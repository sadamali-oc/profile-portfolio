import React from "react";
import Navbar from "./atoms/navbar/Navbar";
import ProfileImage from "./assets/ProfileImage.png";
import "./Home.css";
import ContactSection from "./atoms/contact/ContactSection";
import AboutSection from "./atoms/AboutSection/AboutSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="content">
        <section id="home" className="home-section">
          <div className="home-container">
            <div className="text">
              <h1>Hi, I'm Chamalka Obadage</h1>
    
              <p>Welcome to my portfolio!</p>
            </div>
            <div className="image">
              <img src={ProfileImage} alt="Chamalka" />
            </div>
          </div>
        </section>

        <section id="about" >
          <AboutSection />
        </section>

        <section id="projects" style={{ height: "100vh" }}>
          <h2>Projects</h2>
        </section>

        <section id="contact" style={{ height: "100vh" }}>
          <h2>Contact</h2>
          <ContactSection />
        </section>
      </main>
    </div>
  );
};


export default Home;
