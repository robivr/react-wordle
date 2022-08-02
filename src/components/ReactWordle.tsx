import React, { useState, useEffect, useRef } from 'react';

import Word from './Word';

const words = ['world', 'teach', 'pilot', 'plane', 'avoid', 'alive', 'bread'];

interface Letter {
  letter: string;
  color: string;
}

const ReactWordle = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [pastGuesses, setPastGuesses] = useState<string[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [tries, setTries] = useState(0);

  useEffect(() => {
    setSelectedWord(words[Math.floor(Math.random() * (words.length + 1))]);
  }, []);

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyInput);

    return () => {
      document.body.removeEventListener('keyup', handleKeyInput);
    };
  }, [currentGuess]);

  const handleKeyInput = (e: any) => {
    if (e.key === 'Enter' && currentGuess.length === 5) {
      setPastGuesses((state) => [...state, [...currentGuess]]);
      setCurrentGuess([]);

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
      <p>
        {currentGuess}, {currentGuess.length}
      </p>
      {wordList}
    </div>
  );
};

export default ReactWordle;
