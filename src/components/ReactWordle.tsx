import React, { useState, useEffect, useRef } from 'react';

import Word from './Word';

const words = [
  'world',
  'teach',
  'pilot',
  'plane',
  'avoid',
  'alive',
  'bread',
  'class',
];

interface Letter {
  key: string;
  color: string;
}

const ReactWordle = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [pastGuesses, setPastGuesses] = useState<Letter[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [tries, setTries] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    console.log(randomIndex);
    setSelectedWord(words[randomIndex]);
  }, []);

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyInput);

    return () => {
      document.body.removeEventListener('keyup', handleKeyInput);
    };
  }, [currentGuess]);

  const handleKeyInput = (e: any) => {
    if (e.key === 'Enter' && currentGuess.length === 5) {
      const newGuess = [...currentGuess].map((letter, index) => {
        let color = 'wrongletter';

        if (selectedWord.includes(letter)) {
          color = 'incorrectpos';
        }

        let occurences = [];

        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === letter) {
            occurences.push(i);
          }
        }

        if (occurences.includes(index)) {
          color = 'correct';
        }

        const newLetter = {
          key: letter,
          color,
        };

        return newLetter;
      });
      setPastGuesses((state) => [...state, [...newGuess]]);
      setCurrentGuess([]);
      setTries((state) => state + 1);

      return;
    }

    if (e.key === 'Backspace') {
      setCurrentGuess((state) => [...state.slice(0, currentGuess.length - 1)]);
      return;
    }

    if (e.key < 'a' || e.key > 'z') return;

    if (currentGuess.length >= 5) return;

    setCurrentGuess((state) => [...state, e.key]);
  };

  const wordList = [];

  for (let i = 0; i < 5; i++) {
    if (i < pastGuesses.length) {
      wordList.push(<Word key={i} word={pastGuesses[i]} />);
    } else {
      wordList.push(<Word key={i} word={[]} />);
    }
  }

  return (
    <div className="flex flex-col items-center h-full">
      <p>{selectedWord}</p>
      {wordList}
    </div>
  );
};

export default ReactWordle;
