import React from 'react';
import Letter from './Letter';

interface WordProps {
  word: string[];
}

const Word = (props: WordProps) => {
  if (props.word.length !== 5) {
    return (
      <div className="flex space-x-1 mb-2">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
    );
  }

  return (
    <div className="flex space-x-1 mb-2">
      {props.word.map((letter, i) => (
        <Letter key={letter + i} letter={letter} />
      ))}
    </div>
  );
};

export default Word;
