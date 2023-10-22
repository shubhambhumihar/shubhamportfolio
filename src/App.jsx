/* eslint-disable no-unused-vars */
import About from "./components/About";
import Particles from "./components/BannerParticles";
import Contact from "./components/Contact";
import CopyRight from "./components/CopyRight";
import Education from "./components/Education";
import Navabar from "./components/Navabar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";
import "animate.css";
import "animate.css/animate.min.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  function goTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the viewport
    });
  }, []);
  return (
    <>
      <Navabar />
      <div>
        <Particles />
      </div>

      <div className="center">
        <About />
        <Skills />
        <Contact />
        <Project />
        <Education />
        <CopyRight />
      </div>

      <div
        onClick={goTop}
        className="fixed cursor-pointer  w-[50px] h-[50px] rounded-full bottom-10 right-10  bg-[#0fa968] text-white flex justify-center items-center"
      >
        <AiOutlineArrowUp />
      </div>
    </>
  );
}

export default App;
