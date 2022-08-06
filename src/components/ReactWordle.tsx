import React, { useState, useEffect } from 'react';
import Header from './Header/Header';

import Keyboard from './Keyboard/Keyboard';
import Word from './Word/Word';
import ModalBase from './Modal/ModalBase';

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
  const [usedLetters, setUsedLetters] = useState<Map<string, string>>(
    new Map()
  );
  const [pastGuesses, setPastGuesses] = useState<Letter[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<Letter[]>([]);
  const [tries, setTries] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);
  }, []);

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyInput);

    return () => {
      document.body.removeEventListener('keyup', handleKeyInput);
    };
  }, [currentGuess]);

  const handleGuess = (key: string) => {
    if (key === 'Enter' && currentGuess.length === 5) {
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

        const newLetter: Letter = {
          key: letter.key,
          color,
        };

        return newLetter;
      });

      const uniqueCurrentLetters = [
        ...new Map(newGuess.map((letter) => [letter['key'], letter])).values(),
      ];

      const newUsedLetters = new Map(usedLetters);

      uniqueCurrentLetters.forEach((letter) => {
        if (!newUsedLetters?.get(letter.key)) {
          newUsedLetters?.set(letter.key, letter.color);
          return;
        }

        const usedLetterColor = newUsedLetters.get(letter.key);

        if (letter.color === 'correct') {
          newUsedLetters.set(letter.key, letter.color);
          return;
        }

        if (letter.color === 'incorrectpos' && usedLetterColor === 'wrong') {
          newUsedLetters.set(letter.key, letter.color);
        }
      });

      setUsedLetters(newUsedLetters);
      setPastGuesses((state) => [...state, newGuess]);
      setCurrentGuess([]);
      setTries((state) => state + 1);

      return;
    }

    if (key === 'Backspace') {
      setCurrentGuess((state) => [...state.slice(0, currentGuess.length - 1)]);
      return;
    }

    if (key < 'a' || key > 'z') return;

    if (currentGuess.length >= 5) return;

    const newLetter = {
      key: key,
      color: '',
    };
    setCurrentGuess((state) => [...state, newLetter]);
  };

  const handleKeyInput = (e: KeyboardEvent) => {
    handleGuess(e.key);
  };

  const handleKeyboardPress = (letter: string) => {
    handleGuess(letter);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const wordList = [];

  for (let i = 0; i < 6; i++) {
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
      <Header />
      {wordList}

      <Keyboard usedLetters={usedLetters} onKeyPress={handleKeyboardPress} />
      <ModalBase isOpen={showModal} onClose={handleModalClose}>
        <h1>yo im a modal</h1>
      </ModalBase>
    </div>
  );
};

export default ReactWordle;
