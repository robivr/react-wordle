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
  const letterList = [];

  for (let i = 0; i < 5; i++) {
    const letter = props.word[i];
    const key = letter?.key ? letter.key : '';
    const color = letter?.color ? letter.color : '';
    letterList.push(<Letter key={key + i} letter={key} color={color} />);
  }

  return (
    <div className="flex space-x-1 mb-2 lg:space-x-4 lg:mb-4">{letterList}</div>
  );
};

export default Word;
