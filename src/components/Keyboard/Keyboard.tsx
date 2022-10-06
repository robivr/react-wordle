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

  const buttonClass = `rounded uppercase bg-gray-600/40 h-12 w-8 mr-1 mb-2 min-w-fit text-white text-xl lg:h-20 lg:w-16 lg:text-3xl lg:p-4 lg:mr-2 flex-1`;

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
    <div className="keyboard flex flex-col items-center mt-auto mb-4 lg:my-auto">
      <div className="row1 flex">{row1Keys.map(createKey)}</div>
      <div className="row2 flex">{row2Keys.map(createKey)}</div>
      <div className="row3 w-full flex">{row3Keys.map(createKey)}</div>
    </div>
  );
};

export default Keyboard;
