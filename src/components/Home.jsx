import React, { useState, useEffect } from "react";

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

  return (
    <span className="text-pink-500">{currentWord}</span>
  );
};

const Home = () => {
  const words = ["Web Designer", "FrontEnd Developer", " Web Architect", "UX/UI Designer"];

  return (
    <section id="home" className="home section bg-white py-16">
      <div className="container mx-auto flex items-center justify-center h-screen bg-cover bg-center bg-[url(evo.png) blur]  bg-no-repeat">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="home-info text-center md:text-left">
            <h3 className="hello text-3xl font-bold mb-4">
              Hello, my name is
              <span className="name text-skin-color"> Evodie UMUHUZA</span>
            </h3>
            <h3 className="my-profession text-3xl font-bold mb-4">
              I'm a <TypingAnimation words={words} />
            </h3>
            <p className="text-gray-700">
              Unravel the mysteries that lie within, where every click unveils a
              new chapter of intrigue and adventure. Dare to explore, for the
              unknown holds the keys to unlock your wildest dreams.
            </p>
            <div className="flex mt-4">
              <a href="https://www.instagram.com/umuhuzaevodie/" className="text-blue-500 mr-4">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="mailto:vodospearl@gmail.com" className="text-blue-500">
                <i className="far fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
