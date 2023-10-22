/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img from "../images/jyoti.jfif";
import avatar from "../images/avatar.png";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { SiLeetcode, SiGeeksforgeeks, SiSemanticscholar } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillHome, AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { MdBroadcastOnHome } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex md:flex-row flex-col mt-5 justify-around lg:p-10  py-30   items-center lg:h-[100vh]"
      >
        <div data-aos="fade-up">
          <img
            className="sm:w-[300px] sm:h-[400px] h-[200px] w-[200px] rounded-3xl"
            src={avatar}
            alt=""
          />
        </div>

        <div data-aos="fade-left" className="flex flex-col items-center">
          <h1 className="text-bold sm:text-left text-center text-white sm:text-4xl text-3xl mb-6 flex gap-1 md:items-center">
            <BsFillPersonFill />
            Shubham Kumar
          </h1>

          <List className="" spacing={3}>
            <ListItem className="text-white sm:text-lg text-sm">
              <ListIcon className="text-2xl" as={BiCodeAlt} color="red.500" />
              Passionate Web Developer
            </ListItem>
            <ListItem className="text-white sm:text-lg text-sm">
              <ListIcon className="text-2xl" as={BiCodeAlt} color="red.500" />
              MERN Stack Developer
            </ListItem>
            <ListItem className="text-white sm:text-lg text-sm">
              <ListIcon
                className="text-2xl"
                as={SiSemanticscholar}
                color="yellow.500"
              />
              LeetCode Enthusiast
            </ListItem>
            <ListItem className="text-white sm:text-lg text-sm">
              <ListIcon
                className="text-2xl "
                as={AiFillHome}
                color="green.500"
              />
              Data Structures and Algorithms (DSA) Enthusiast
            </ListItem>
          </List>

          <div className="mt-10 sm:px-0 px-10">
            <h2 className="text-white text-xl border-b-2 sm:w-[50%] w-[80%] sm:text-left text-center ml-auto mr-auto border-blue-800 pb-1">
              My Coding Profile
            </h2>
            <div className="flex  sm:gap-6 gap-2 my-6 w-full">
              <div>
                <a
                  href="https://leetcode.com/Coding_InProgress/"
                  target="_blank"
                  className="border w-[100px] flex items-center rounded-xl px-2 gap-1 cursor-pointer text-white"
                >
                  <SiLeetcode />
                  <p>Leetcode</p>
                </a>
              </div>
              <div>
                <a
                  href="https://auth.geeksforgeeks.org/user/shubhamkumarsingh4957199/"
                  target="_blank"
                  className="border w-[100%] flex items-center rounded-xl px-2 gap-1 cursor-pointer text-white"
                >
                  <SiGeeksforgeeks />
                  <p>GeeksForGeeks</p>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/shubhambhumihar"
                  target="_blank"
                  className="border w-[100px] flex items-center rounded-xl px-2 gap-1 cursor-pointer text-white"
                >
                  <AiFillGithub />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex sm:justify-start justify-center mb-7">
            <a
              href="https://drive.google.com/file/d/15rd-nb3hGxwpv-Pzd6SC6LGN0ymXpnxM/view?usp=share_link"
              target="_blank"
            >
              <button className="px-[20px] py-2 shadow-2xl text-white bg-green-700 flex items-center gap-2  outline-none border-none">
                Download Resume
                <AiOutlineArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
