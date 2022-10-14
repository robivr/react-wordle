import React from 'react';

interface LetterProps {
  letter: string;
  color: string;
  flip?: boolean;
  animationDelay?: number;
}

const Letter = (props: LetterProps) => {
  return (
    <div
      className={
        `border flex items-center justify-center w-14 h-14 cursor-default text-white text-3xl lg:w-[min(10%, 5rem)] lg:h-[min(10%, 5rem)] lg:text-4xl lg:border-2 uppercase` +
        (props.flip
          ? ` delay-animation-${props.animationDelay} flip-bg-${props.color}`
          : '')
      }
    >
      {props.letter}
    </div>
  );
};

export default Letter;
