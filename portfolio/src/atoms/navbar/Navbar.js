import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for navbar height
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={active === link.name ? "active" : ""}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
