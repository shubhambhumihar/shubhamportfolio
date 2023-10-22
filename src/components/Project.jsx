/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import img from "../images/hotel.jfif";
import admin from "../images/admin.jfif";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="project" className="text-white mt-10">
      <h1
        data-aos="fade-up-right"
        className="lg:text-4xl text-3xl flex justify-center items-center gap-6 font-bold my-10"
      >
        {" "}
        <span className="text-5xl text-[#817ffa]">
          <AiOutlineFundProjectionScreen />
        </span>{" "}
        My Projects
      </h1>
      <div className="flex  bg-[rgba(0,0,0,0.9)] sm:p-10 p-5 gap-7 flex-wrap justify-center rounded-xl">
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px] sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[100%] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            <img
              className="w-[100%] sm:h-[200px] h-[150px] rounded-2xl"
              src={img}
              alt=""
            />

            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3">
                {" "}
                Hostel Management System (HMS) - MERN Stack
              </h1>
              <p className="text-white text-sm mb-3">5jun - 10Apr</p>
              <div className="flex gap-2 project-description  justify-between flex-wrap">
                <div className="justify-between self-start">
                  <a href="https://mckviehostel.netlify.app/" target="_blank">
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      View Project
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/shubhambhumihar/mckvhms"
                    target="_blank"
                  >
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      Github Url
                    </button>
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="Designed and developed a Hostel Management Web
Application which contains features such as user
authentication, resident management, room allocation, and
complaint tracking, resulting in streamlined operations and
enhanced communication between administrators and
students."
                    tech="Technologies Used:- React JS, Node JS, Mongo DB, Express,
Redux, Redux Toolkit, JWT, Tailwind CSS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px]  sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[350px] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            <img
              className="w-[100%] sm:h-[200px]  h-[150px] rounded-2xl"
              src={admin}
              alt=""
            />

            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3">Admin Panel (HMS)</h1>
              <p className="text-white text-sm">15Apr - 3Jun</p>
              <div className="flex gap-2 project-description justify-between flex-wrap">
                <div className="justify-between self-start">
                  <a
                    href="https://mckvadminhostel.netlify.app/"
                    target="_blank"
                  >
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      View Project
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/shubhambhumihar/mckvhms"
                    target="_blank"
                  >
                    <button className="px-1 py-[4px] mt-4 bg-green-600 text-white outline-none ">
                      Github Url
                    </button>
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="The Admin Panel of the Hostel Management System provides
a centralized hub for administrators to efficiently manage
resident details, room allocations, and simplifying
administrative tasks and improving overall efficiency. "
                    tech="Technologies Used:- React js, Express js, Node js, MongoDB,
Redux, Redux Toolkit, JWT, Tailwind CSS, Ant Design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
