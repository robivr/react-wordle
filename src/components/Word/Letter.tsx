import React from 'react';

interface LetterProps {
  letter?: string;
  color?: string;
}

const Letter = (props: LetterProps) => {
  return (
    <div
      className={`border flex items-center justify-center w-8 h-8 cursor-default bg-${props.color} text-white`}
    >
      {props.letter}
    </div>
  );
};

export default Letter;
