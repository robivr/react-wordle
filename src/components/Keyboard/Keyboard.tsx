import React from 'react';

interface Letter {
  key: string;
  color: string;
}

interface KeyboardProps {
  usedLetters: Letter[];
  onKeyPress(letter: string): void;
}

const Keyboard = (props: KeyboardProps) => {
  const handleKeyClick = (e: any) => {
    console.log(e.target.value);
    props.onKeyPress(e.target.value);
  };

  const buttonClass = `border uppercase`;

  const row1Keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2Keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3Keys = ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<'];

  const getColorForLetter = (letter: string) => {
    for (let i = 0; i < props.usedLetters.length; i++) {
      if (props.usedLetters[i].key === letter) {
        return props.usedLetters[i].color;
      }
    }
  };

  const createKey = (key: string) => {
    const color = getColorForLetter(key);
    let value = key;

    if (key === '<') {
      value = 'Backspace';
    }

    return (
      <button
        key={key}
        className={`${buttonClass} bg-${color}`}
        onClick={handleKeyClick}
        value={value}
      >
        {key}
      </button>
    );
  };

  return (
    <div className="keyboard">
      <div className="row1">{row1Keys.map(createKey)}</div>
      <div className="row2">{row2Keys.map(createKey)}</div>
      <div className="row3">{row3Keys.map(createKey)}</div>
    </div>
  );
};

export default Keyboard;
