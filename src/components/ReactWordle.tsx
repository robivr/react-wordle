import React, { useState, useEffect } from 'react';
import Header from './Header/Header';

import Keyboard from './Keyboard/Keyboard';
import Word from './Word/Word';
import ModalBase from './Modal/ModalBase';
import WonGameModal from './Modal/WonGameModal';
import ToastModal from './Modal/ToastModal';

import words from '../words';

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
  const [gameOver, setGameOver] = useState(0);
  const [toast, setToast] = useState('');
  const [gameStats, setGameStats] = useState({
    played: 0,
    won: 0,
    streak: 0,
    maxStreak: 0,
    last: 'won',
    usedWordsStats: [0, 0, 0, 0, 0, 0],
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);

    getGameStats();
  }, []);

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyInput);

    return () => {
      document.body.removeEventListener('keyup', handleKeyInput);
    };
  }, [currentGuess]);

  const guessToString = (guess: Letter[]) => {
    let word = '';

    for (let i = 0; i < guess.length; i++) {
      word += guess[i].key;
    }

    return word;
  };

  const updateGameStats = (won: boolean) => {
    setGameStats((state) => {
      const newState = { ...state, played: state.played + 1 };

      if (!newState.usedWordsStats) {
        newState.usedWordsStats = [0, 0, 0, 0, 0, 0];
      }

      if (won) {
        newState.won = newState.won + 1;
        newState.last = 'won';
        newState.streak = newState.streak + 1;
        newState.usedWordsStats = [...newState.usedWordsStats];
        newState.usedWordsStats[tries] = newState.usedWordsStats[tries] + 1;

        if (newState.streak > newState.maxStreak) {
          newState.maxStreak = newState.streak;
        }
      } else {
        newState.streak = 0;
        newState.last = 'lost';
      }

      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;
    });
  };

  const getGameStats = () => {
    const unparsedStats = localStorage.getItem('stats');

    if (unparsedStats === null) return;
    const stats = JSON.parse(unparsedStats);

    if (!stats.usedWordsStats) {
      stats.usedWordsStats = [0, 0, 0, 0, 0, 0];
    }

    setGameStats(stats);
  };

  const refreshUsedLetters = (uniqueCurrentLetters: Letter[]) => {
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
    return newUsedLetters;
  };

  const showToast = (text: string, delay: number) => {
    setToast(text);
    setTimeout(() => setToast(''), delay);
  };

  const checkWord = () => {
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

    if (!words.includes(guessToString(newGuess))) {
      showToast('Word not in word list', 2000);
      return;
    }

    const uniqueCurrentLetters = [
      ...new Map(newGuess.map((letter) => [letter['key'], letter])).values(),
    ];

    const newUsedLetters = refreshUsedLetters(uniqueCurrentLetters);

    if (guessToString(newGuess) === selectedWord) {
      setTimeout(() => {
        setGameOver(1);
        setShowModal(true);
        updateGameStats(true);
        showToast('Congrats, you did it!', 2000);
      }, 2400);
    } else if (pastGuesses.length >= 5 || tries >= 5) {
      setTimeout(() => {
        setGameOver(2);
        setShowModal(true);
        updateGameStats(false);
        showToast('Better luck next time!', 2000);
      }, 2400);
    }

    setUsedLetters(newUsedLetters);
    setPastGuesses((state) => [...state, newGuess]);
    setCurrentGuess([]);
    setTries((state) => state + 1);

    return;
  };

  const handleGuess = (key: string) => {
    if (gameOver !== 0) return;

    if (key === 'Enter' && currentGuess.length === 5) {
      return checkWord();
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

  const handleModalOpen = () => {
    setShowModal(true);
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
    <div className="flex flex-col items-center h-full min-h-screen">
      <Header openModal={handleModalOpen} />
      {toast !== '' && <ToastModal toast={toast} />}
      {gameOver === 1 && <h2 className="text-white text-3xl mb-4">You won</h2>}
      {gameOver === 2 && <h2 className="text-white text-3xl mb-4">You lost</h2>}

      <div className="mt-4">{wordList}</div>

      <Keyboard usedLetters={usedLetters} onKeyPress={handleKeyboardPress} />
      <ModalBase isOpen={showModal} onClose={handleModalClose}>
        <WonGameModal word={selectedWord} stats={gameStats} />
      </ModalBase>
    </div>
  );
};

export default ReactWordle;
