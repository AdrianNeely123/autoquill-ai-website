import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDelay = 1000,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pauseDelay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = reverse
      ? deletingSpeed
      : typingSpeed + Math.random() * 50;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseDelay]);

  // Cursor blink
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <span className={className}>
      {words[index]?.substring(0, subIndex)}
      <span
        className={`inline-block w-[3px] h-[0.9em] ml-0.5 align-middle bg-purple-600 ${
          blink ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
        aria-hidden="true"
      />
    </span>
  );
};

export default TypewriterText;
