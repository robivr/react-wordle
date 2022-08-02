import React from 'react';

interface LetterProps {
  letter?: string;
  color?: string;
}

const Letter = (props: LetterProps) => {
  return (
    <div className="border flex items-center justify-center px-4 py-4 cursor-default">
      {props.letter}
    </div>
  );
};

export default Letter;
