import React from "react";
import "./Navbar.css"; 
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo"> <img src={logo} alt="Logo" className="logo-img"/></div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
