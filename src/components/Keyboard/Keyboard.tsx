import React from 'react';

interface Letter {
  key: string;
  color: string;
}

interface KeyboardProps {
  usedLetters: Map<string, string>;
  onKeyPress(letter: string): void;
}

const Keyboard = (props: KeyboardProps) => {
  const handleKeyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    props.onKeyPress(button.value);
  };

  const buttonClass = `rounded uppercase m-1 p-1 bg-gray-600/40 h-8 w-6 min-w-fit text-white`;

  const row1Keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2Keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3Keys = ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<'];

  const createKey = (key: string) => {
    const color = props.usedLetters.get(key);
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
    <div className="keyboard flex flex-col items-center">
      <div className="row1">{row1Keys.map(createKey)}</div>
      <div className="row2">{row2Keys.map(createKey)}</div>
      <div className="row3">{row3Keys.map(createKey)}</div>
    </div>
  );
};

export default Keyboard;
