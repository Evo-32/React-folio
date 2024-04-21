import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto flex items-center justify-center h-screen bg-cover bg-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="skills mt-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="skill-item">
                <div className="skillbox text-blue-500 text-6xl md:text-8xl transform transition duration-300 hover:scale-110 hover:-translate-y-1">
                  <IoLogoJavascript />
                </div>
              </div>
              <div className="skill-item">
                <div className="skillbox text-green-500 text-6xl md:text-8xl transform transition duration-300 hover:scale-110 hover:-translate-y-1">
                  <IoLogoReact />
                </div>
              </div>
              <div className="skill-item">
                <div className="skillbox text-red-500 text-6xl md:text-8xl transform transition duration-300 hover:scale-110 hover:-translate-y-1">
                  <MdOutlineCss />
                </div>
              </div>
              <div className="skill-item">
                <div className="skillbox text-yellow-500 text-6xl md:text-8xl transform transition duration-300 hover:scale-110 hover:-translate-y-1">
                  <BiLogoTailwindCss />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="edu-item bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">SheCan Camp</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, doloribus.
              </p>
              <p className="text-gray-500 text-sm">2023 - 2024</p>
            </div>
            <div className="edu-item bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">A'level</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, doloribus.
              </p>
              <p className="text-gray-500 text-sm">2020 - 2023</p>
            </div>
            <div className="edu-item bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">O'level</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, doloribus.
              </p>
              <p className="text-gray-500 text-sm">2017 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
