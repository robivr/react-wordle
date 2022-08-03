import React from 'react';

interface Letter {
  key: string;
  color: string;
}

interface KeyboardProps {
  usedLetters: Letter[];
}

const Keyboard = (props: KeyboardProps) => {
  const buttonClass = `border`;
  return (
    <div className="keyboard">
      <div className="row1">
        <button className={buttonClass}>Q</button>
        <button className={buttonClass}>W</button>
        <button className={buttonClass}>E</button>
        <button className={buttonClass}>R</button>
        <button className={buttonClass}>T</button>
        <button className={buttonClass}>Y</button>
        <button className={buttonClass}>U</button>
        <button className={buttonClass}>I</button>
        <button className={buttonClass}>O</button>
        <button className={buttonClass}>P</button>
      </div>
      <div className="row2">
        <button className={buttonClass}>A</button>
        <button className={buttonClass}>S</button>
        <button className={buttonClass}>D</button>
        <button className={buttonClass}>F</button>
        <button className={buttonClass}>G</button>
        <button className={buttonClass}>H</button>
        <button className={buttonClass}>J</button>
        <button className={buttonClass}>K</button>
        <button className={buttonClass}>L</button>
      </div>
      <div className="row3">
        <button className={buttonClass}>Enter</button>
        <button className={buttonClass}>Z</button>
        <button className={buttonClass}>X</button>
        <button className={buttonClass}>C</button>
        <button className={buttonClass}>V</button>
        <button className={buttonClass}>B</button>
        <button className={buttonClass}>N</button>
        <button className={buttonClass}>M</button>
        <button className={buttonClass}>&lt;x</button>
      </div>
    </div>
  );
};

export default Keyboard;
