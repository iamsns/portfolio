import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const titles = [
  'FULL STACK ENGINEER',
  'FRONTEND DEVELOPER',
  'BACKEND DEVELOPER'
];

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0); 
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    const delay = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setIndex((index + 1) % titles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <h2 className="typing primary fw-bold">
      I'M A <span>{text}</span><span className="cursor">|</span>
    </h2>
  );
};

export default TypingEffect;
