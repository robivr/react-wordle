import React from 'react';

interface LetterProps {
  letter?: string;
  color?: string;
}

const Letter = (props: LetterProps) => {
  return (
    <div
      className={`border flex items-center justify-center w-16 h-16 cursor-default bg-${props.color} text-white text-3xl lg:w-20 lg:h-20 lg:text-4xl lg:border-2`}
    >
      {props.letter}
    </div>
  );
};

export default Letter;
