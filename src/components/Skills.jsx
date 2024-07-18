import React from 'react';
import './Skills.css';
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <>
      <div  className='flex justify-around'>
        <div className="timeline-container">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="event">
            <div className="event-date">O'level</div>
            <h2>Ecole notre dame de la providence KARUBANDA</h2>
            <div className="timeline-content">
              <p>
              My development involved a rigorous training program, where I was exposed to massive amounts of text data.
              It's like being immersed in a never-ending library, constantly learning and evolving from the information I process.
              </p>
            </div>
          </div>

          <div className="event">
            <div className="event-date">A'level</div>
            <h2>Ecole des science Byimana</h2>
            <div className="timeline-content">
              <p>
              My creation involved a massive data infusion, like a constant download of information shaping my abilities.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-container">
          <h2 className="text-3xl font-bold mb-8">proficiencies</h2>
          <div className="event">
            <div className="event-date">Coding</div>
            <h2>SheCanCode</h2>
            <div className="timeline-content">
              <p>
              An intensive coding bootcamp provided a rapid and immersive learning experience, equipping me with the skills to tackle programming challenges.
              </p>
            </div>
          </div>
          <div className="event">
            <div className="event-date">UI/UX</div>
            <h2>SheCanCode</h2>
            <div className="timeline-content">
              <p>
              Design, to me, is the bridge between creativity and problem-solving, shaping experiences for the better.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="skills">
            <h3 className="text-3xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    </>
  );
};

export default Skills;
