import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          Vinit Kumar Singh
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200">
            About Me
          </a>
          <a href="#skills" className="hover:text-gray-200">
            Skills
          </a>
          <a href="#certificate" className="hover:text-gray-200">
            Certificates
          </a>
          <a href="#project" className="hover:text-gray-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </div>
        <a href="mailto:vk3266748@gmail.com">
          <button
            className="bg-gray-600 text-white hidden md:inline
  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Connect Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
