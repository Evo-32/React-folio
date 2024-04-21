import React, { useEffect, useRef } from 'react';

function TypeLoopAnimation({ wordsWithColors }) {
  const typingElementRef = useRef(null);

  useEffect(() => {
    function typeLoopAnimation(element, wordsWithColors, delay = 1000) {
      let index = 0;

      function typeNextWord() {
        const { word, color } = wordsWithColors[index];
        typeAnimation(element, word, color, () => {
          setTimeout(eraseText, delay);
        });
        index = (index + 1) % wordsWithColors.length;
      }

      function eraseText() {
        const text = element.textContent;
        if (text.length === 0) {
          setTimeout(typeNextWord, delay);
        } else {
          setTimeout(() => {
            element.textContent = text.slice(0, -1);
            eraseText();
          }, 50);
        }
      }

      typeNextWord();
    }

    function typeAnimation(element, text, color, callback, delay = 100) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += `<span style="color: ${color};">${text.charAt(index)}</span>`;
          index++;
        } else {
          clearInterval(intervalId);
          if (callback) callback();
        }
      }, delay);
    }

    const typingElement = typingElementRef.current;
    typeLoopAnimation(typingElement, wordsWithColors);
  }, [wordsWithColors]);

  return <span ref={typingElementRef} id="typing"></span>;
}

export default TypeLoopAnimation;
