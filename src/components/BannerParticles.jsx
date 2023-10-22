/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bannerparticles from "../config/particles";
import Navabar from "./Navabar";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const BannerParticles = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  function handleClick(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="home" className="relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={bannerparticles}
      />

      <div className="banner center h-full ">
        <div className="flex sm:flex-row flex-col  md:justify-around  h-[100%]">
          <div className="lg:flex-0.7 sm:w-[60%] w-[100%] sm:p-10 p-10  ">
            <h1 className="sm:text-3xl  text-lg font-bold ">Hi There,</h1>
            <h1 className="md:text-4xl text-2xl ">
              I'm{" "}
              <span className="text-[#e3662c] font-extrabold">
                Shubham Kumar Singh
              </span>
            </h1>

            <div className="flex items-center w-full gap-2">
              <h1 className="sm:text-2xl text-xl ">I am into </h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Development",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Frontend Development ",
                  1000,
                  "Problem Solving",
                  1000,
                  "Web Desigining",
                  1000,
                ]}
                wrapper="span"
                speed={200}
                style={{
                  display: "inline-block",
                  color: "#bea6ff",
                  fontweight: "bold",
                }}
                repeat={Infinity}
                className="typing-text-large"
              />
            </div>

            <div className="flex gap-4 my-4 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/shubham-kumar-singh-02b22a233/"
                target="_blank"
              >
                <AiOutlineLinkedin className="text-[#0072b1]  text-2xl" />
              </a>
              <a href="https://leetcode.com/Coding_InProgress/" target="_blank">
                <SiLeetcode className="text-[#d87607]  text-2xl" />
              </a>
              <a href="https://github.com/shubhambhumihar/" target="_blank">
                <AiOutlineGithub className="text-[#4078c0]  text-2xl" />
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/shubhamkumarsingh4957199/"
                target="_blank"
              >
                <SiGeeksforgeeks className="text-[#3deb59]  text-2xl" />
              </a>
            </div>

            <button
              onClick={() => handleClick("about")}
              className="animate__animated animate__bounce animate__delay-1s animate__repeat-1 bg-purple-700 px-[20px] py-[6px] text-white mt-5 flex items-center gap-1 border-none outline-none "
            >
              About me
              <span>
                <BsArrowUpRight />
              </span>
            </button>
          </div>

          <div className="animate__animated animate__backInUp animate__delay-2s flex-0.3 flex sm:items-end justify-end">
            <div>
              <dotlottie-player
                src="https://lottie.host/8afe6dea-5d76-4c3e-bd1f-302117bb24e6/JXW18dYXKa.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                className="lottie-player"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerParticles;
