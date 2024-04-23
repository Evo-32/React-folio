import React, { useState } from "react";

const Menu = ({ isOpen }) => {
  return (
    <ul
      id="mobileNav"
      className={`absolute bg-pink-600 w-full text-white top-16 left-0 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <li>
        <a href="home" className="block py-2 px-4">
          <i className="fas fa-home mr-2"></i>Home
        </a>
      </li>
      <li>
        <a href="about" className="block py-2 px-4">
          <i className="fas fa-user mr-2"></i>About and skills
        </a>
      </li>
      <li>
        <a href="skills" className="block py-2 px-4">
          <i className="fas fa-list mr-2"></i>Edu.Background
        </a>
      </li>
      <li>
        <a href="project" className="block py-2 px-4">
          <i className="fas fa-briefcase mr-2"></i>Projects
        </a>
      </li>
      <li>
        <a href="contact" className="block py-2 px-4">
          <i className="fas fa-comments mr-2"></i>Contacts
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-content relative">
      <div
        id="bar"
        className="aside bg-pink-600 text-white flex items-center justify-between p-4 fixed top-0 left-0 w-full z-10"
      >
        <div className="logo text-2xl font-semibold">
          <a href="/">
            <span>E</span>vodie
          </a>
        </div>
        <ul className="nav hidden md:flex">
          <li>
            <a href="home" className="active flex items-center py-2 px-4">
              <i className="fas fa-home mr-2"></i>Home
            </a>
          </li>
          <li>
            <a href="about" className="active flex items-center py-2 px-4">
              <i className="fas fa-user mr-2"></i>About 
            </a>
          </li>
          <li>
            <a href="skills" className="active flex items-center py-2 px-4">
              <i className="fas fa-list mr-2"></i>Skills & Edu.Background
            </a>
          </li>
          <li>
            <a href="project" className="active flex items-center py-2 px-4">
              <i className="fas fa-briefcase mr-2"></i>Projects
            </a>
          </li>
          <li>
            <a href="contact" className="active flex items-center py-2 px-4">
              <i className="fas fa-comments mr-2"></i>Contacts
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            id="menuToggle"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} />
    </div>
  );
};

export default Navbar;
