/* eslint-disable no-unused-vars */
import React from "react";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";
import java from "../images/java.png";
import github from "../images/github.png";
import ts from "../images/ts.png";
import react from "../assets/react.svg";
import express from "../images/ex.png";
import mg from "../images/mongodb.png";
import node from "../images/node.png";
import sql from "../images/sql.png";
import antd from "../images/antd.svg";
import bs from "../images/bs.png";
import c from "../images/c.png";
import redux from "../images/redux.png";
import { FaDesktop } from "react-icons/fa";

const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="flip-left"
      className="lg:h-[100vh] h-full w-[100%] p-10"
    >
      <h1 className="font-bold text-gray-200 text-4xl text-center flex justify-center items-center gap-3">
        <span>
          <FaDesktop className="text-3xl text-[#817ffa]" />{" "}
        </span>{" "}
        Skiils
      </h1>
      <div className="flex justify-center mt-7 sm:w-[70%] w-full mx-auto  gap-4 flex-wrap cursor-pointer bg-[rgba(0,0,0,0.9)] p-10 rounded-2xl">
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={html} alt="" />
          <h1 className="text-white font-bold mt-2">HTML</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={css} alt="" />
          <h1 className="text-white font-bold mt-2">CSS</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={js} alt="" />
          <h1 className="text-white font-bold mt-2">JAVASCRIPT</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={react} alt="" />
          <h1 className="text-white font-bold mt-2">REACT</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={node} alt="" />
          <h1 className="text-white font-bold mt-2">NODE JS</h1>
        </div>
        <div className="border customShadow px-4  flex flex-col items-center justify-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={express} alt="" />
          <h1 className="text-white font-bold mt-2">EXPRESS JS</h1>
        </div>
        <div className="border customShadow px-4  flex flex-col items-center justify-center rounded-xl">
          <img className="w-[100px] h-[40px]" src={mg} alt="" />
          <h1 className="text-white font-bold mt-2">MONGO DB</h1>
        </div>
        <div className="border customShadow px-4  flex flex-col items-center justify-center rounded-xl">
          <img className="w-[50px] h-[50px]" src={redux} alt="" />
          <h1 className="text-white font-bold mt-2">REDUX</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={java} alt="" />
          <h1 className="text-white font-bold mt-2">JAVA</h1>
        </div>
        <div className="border customShadow px-4 py-2 pb-1 flex flex-col justify-center items-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={c} alt="" />
          <h1 className="text-white font-bold mt-2">C</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={github} alt="" />
          <h1 className="text-white font-bold mt-2">GITHUB</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={sql} alt="" />
          <h1 className="text-white font-bold mt-2">SQL</h1>
        </div>

        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={ts} alt="" />
          <h1 className="text-white font-bold mt-2">Tailwind CSS</h1>
        </div>
        <div className="border customShadow px-4 pb-1 py-2 flex flex-col justify-center items-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={antd} alt="" />
          <h1 className="text-white font-bold mt-2">ANT DESIGN</h1>
        </div>
        <div className="border customShadow px-4 py-2 pb-1 flex flex-col justify-center items-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={bs} alt="" />
          <h1 className="text-white font-bold mt-2">BOOTSTRAP</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
