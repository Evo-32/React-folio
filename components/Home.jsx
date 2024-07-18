import React, { useState, useEffect } from "react";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { FiPhoneOutgoing } from "react-icons/fi";

const TypingAnimation = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(type, 200);
    return () => clearTimeout(timeout);
  }, [letterIndex, currentWord, isDeleting]);

  function type() {
    const word = words[currentWordIndex];
    if (!isDeleting && letterIndex <= word.length) {
      setCurrentWord(word.substring(0, letterIndex + 1));
      setLetterIndex(letterIndex + 1);
    } else if (isDeleting && letterIndex >= 0) {
      setCurrentWord(word.substring(0, letterIndex - 1));
      setLetterIndex(letterIndex - 1);
    } else {
      setIsDeleting(!isDeleting);
      if (!isDeleting) {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }
  }

  return <span className="text-[#adbc9f]">{currentWord}</span>;
};

const Home = () => {
  const words = ["Web Designer", "FrontEnd Developer", " Web Architect", "UX/UI Designer"];

  return (
    <section id="home" className="home section bg-white py-16">
      <div className="container mx-auto flex items-center justify-center h-screen px-4">
        <div className="relative max-w-screen-lg mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="home-info text-center md:text-left">
            <div className=" flex items-center justify-around w-full">
              <h3 className="hello text-4xl text-[#adbc9f] font-bold mb-4">
                Hey There,
                I'm
                <span className="name text-skin-color"> Evodie UMUHUZA</span>
              </h3>
            </div>
            <h3 className="hello text-2xl font-bold mb-4">
              A <TypingAnimation words={words} /> <br />
              <i>with passion to design beautiful and simple websites</i>
            </h3>
            <p className="text-gray-500 text-xl flex justify-center align-center">
              Unravel the mysteries that lie within, where every click unveils a
              new chapter of intrigue and adventure. Dare to explore, for the
              unknown holds the keys to unlock your wildest dreams.
            </p>
            <div className="flex mt-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/umuhuzaevodie/" className="text-gray-500 mr-4  transition hover:text-pink-600/75">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="mailto:vodospearl@gmail.com" className="text-gray-500 mr-4  transition hover:text-blue-900/75">
                <i className="far fa-envelope fa-lg"></i>
              </a>

              <FiPhoneOutgoing className="text-gray-500 mr-1 text-xl transition" /> +250 788 494 997

            </div>
            <button className="rounded-full text-white bg-[#ff6c1f] p-2 mt-7">
              <a href="https://drive.google.com/file/d/1gD3ihBigsDQbtqVttP1P2M1_U4yMVeg_/view?usp=gmail">Download CV</a>
            </button>
          </div>
        </div>
        <img
          className="rounded-lg shadow-lg border h-100 lg:h-120 w-auto max-w-full object-cover"
          src="evo.png"
          alt="image"
        />
      </div>
      <About />
      <Skills />
      <Project />
      <Contact />
    </section>
  );
};

export default Home;
