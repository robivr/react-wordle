import React from 'react';
import Letter from './Letter';

interface Letter {
  key: string;
  color: string;
}

interface WordProps {
  word: Letter[];
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
        <Letter key={letter.key + i} letter={letter.key} color={letter.color} />
      ))}
    </div>
  );
};

export default Word;
