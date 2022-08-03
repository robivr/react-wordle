import React, { useState, useEffect } from 'react';

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
  'await',
  'state',
  'fetch',
  'react',
  'redux',
  'const',
  'array',
  'input',
  'index',
  'slice',
  'every',
];

interface Letter {
  key: string;
  color: string;
}

const ReactWordle = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [usedLetters, setUsedLetters] = useState<Letter[]>([]);
  const [pastGuesses, setPastGuesses] = useState<Letter[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<Letter[]>([]);
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

        if (selectedWord.includes(letter.key)) {
          color = 'incorrectpos';
        }

        let occurences = [];

        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === letter.key) {
            occurences.push(i);
          }
        }

        if (occurences.includes(index)) {
          color = 'correct';
        }

        const newLetter = {
          key: letter.key,
          color,
        };

        return newLetter;
      });

      const uniqueCurrentLetters = [
        ...new Map(newGuess.map((letter) => [letter['key'], letter])).values(),
      ];
      const usedLettersOnly = usedLetters.map((letter) => letter.key);
      const newUsedLetters = uniqueCurrentLetters.filter((letter) => {
        if (usedLettersOnly.includes(letter.key)) {
          return false;
        }

        return true;
      });

      setUsedLetters((state) => [...state, ...newUsedLetters]);
      setPastGuesses((state) => [...state, newGuess]);
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

    const newLetter = {
      key: e.key,
      color: '',
    };
    setCurrentGuess((state) => [...state, newLetter]);
  };

  const wordList = [];

  for (let i = 0; i < 5; i++) {
    if (i === tries) {
      wordList.push(<Word key={i} word={currentGuess} />);

      continue;
    }
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
