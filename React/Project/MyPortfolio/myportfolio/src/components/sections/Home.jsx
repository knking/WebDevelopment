import RevealOnScroll from "./RevealOnScroll";
import { FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa6";
export  const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent leading-right">
          Hi, I am Krishna
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        Crafting user interfaces with purpose, precision, and performance.
        </p>
        <div className="flex justify-center space-x-4 ">
    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> View Projects
    </a>

    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 ">
     Contact Me
    </a>
        </div>
        <div className="flex mx-auto justify-between items-center w-[88%]   mt-6 md:w-[53%] text-blue-500  py-4 px-6 rounded font-medium hover:cursor-pointer">
       <a href="https://www.linkedin.com/in/krishnanand-roy-31abb3185/" target="_blank"> <FaLinkedin   size='2em' className="transition-all duration-200  hover:-translate-y-0.5"/></a>
       <a href="https://github.com/knking" target="_blank"> <FaGithub size='2em' className="transition-all duration-200  hover:-translate-y-0.5 hover:cursor-pointer" /></a>
       <a href="https://www.instagram.com/" target="_blank"> <FaInstagram size='2em' className="transition-all duration-200  hover:-translate-y-0.5 hover:cursor-pointer"/></a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
