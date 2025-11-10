import React from "react";
import Navbar from "./atoms/Navbar";
import ProfileImage from "./assets/ProfileImage.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="content">
        <section id="home" className="home-section">
          <div className="home-container">
            <div className="text">
              <h1>Hi, I'm Chamalka Obadage</h1>
            <h2>UOM Undergraduate</h2>
              <h2>Former Intern Software Engineer</h2>
              <p>Welcome to my portfolio!</p>
            </div>
            <div className="image">
              <img src={ProfileImage} alt="Chamalka" />
            </div>
          </div>
        </section>

        <section id="about" style={{ height: "100vh" }}>
          <h2>About Me</h2>
        </section>

        <section id="projects" style={{ height: "100vh" }}>
          <h2>Projects</h2>
        </section>

        <section id="contact" style={{ height: "100vh" }}>
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  );
};


export default Home;
