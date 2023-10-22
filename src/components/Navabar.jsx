/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { FaCode } from "react-icons/fa";

const Navabar = () => {
  const [activeLink, setActiveLink] = useState("home");

  function handleLinkClick(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
    }
  }
  return (
    <div className="customShadow z-[1000] sticky top-0 left-0 bg-[#0d0d0d]">
      <div className="flex justify-between items-center p-2 text-white max-w-[1200px] w-[100%] ml-auto mr-auto  ">
        <div className="flex gap-3 items-center">
          <FaCode className="text-[#6769ed]  text-5xl" />
          <h1 className="text-[#6769ed] text-3xl font-bold">
            SHUBHAM <span className="text-[#c9d3fc] ">SINGH</span>
          </h1>
        </div>

        <div className=" lg:flex hidden cursor-pointer">
          <ul className="flex gap-3 list">
            <li className={activeLink == "home" && "bg-purple-700 rounded-xl"}>
              <a href="#home" onClick={() => handleLinkClick("home")}>
                Home
              </a>
            </li>
            <li className={activeLink == "about" && "bg-purple-700 rounded-xl"}>
              <a href="#about" onClick={() => handleLinkClick("about")}>
                About
              </a>
            </li>
            <li
              className={activeLink == "project" && "bg-purple-700 rounded-xl"}
            >
              <a href="#project" onClick={() => handleLinkClick("project")}>
                Projects
              </a>
            </li>
            <li
              className={
                activeLink == "education" && "bg-purple-700 rounded-xl"
              }
            >
              <a href="#education" onClick={() => handleLinkClick("education")}>
                Education
              </a>
            </li>
            <li
              className={activeLink == "skills" && "bg-purple-700 rounded-xl"}
            >
              <a href="#skills" onClick={() => handleLinkClick("skills")}>
                Skills
              </a>
            </li>
            <li
              className={activeLink == "contact" && "bg-purple-700 rounded-xl"}
            >
              <a href="#contact" onClick={() => handleLinkClick("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
