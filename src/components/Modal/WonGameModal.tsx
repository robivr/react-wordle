import React from 'react';

interface WonGameModalProps {
  word: string;
  stats: {
    played: number;
    won: number;
    streak: number;
    maxStreak: number;
    last: string;
  };
}

const WonGameModal = (props: WonGameModalProps) => {
  return (
    <div className="bg-gray-800 text-white min-w-[200px] min-h-[100px] text-xs rounded pt-2 px-2 pb-4">
      <h2 className="uppercase text-center text-[0.5rem]">statistics</h2>
      <div className="flex text-xs space-x-4 justify-center mb-4">
        <span className="text-center max-w-[35px]">
          <p className="mb-0 pb-0">{props.stats.played}</p>
          <p className="text-tiny mt-0 pt-0">Played</p>
        </span>
        <span className="text-center max-w-[35px]">
          <p>{Math.round((props.stats.won / props.stats.played) * 100)}</p>
          <p className="text-tiny">Win %</p>
        </span>
        <span className="text-center max-w-[35px]">
          <p>{props.stats.streak}</p>
          <p className="text-tiny">Current streak</p>
        </span>
        <span className="text-center max-w-[35px]">
          <p>{props.stats.maxStreak}</p>
          <p className="text-tiny">Max streak</p>
        </span>
      </div>
      <div className="border-t flex flex-col justify-center items-center">
        <h2 className="text-center uppercase text-[0.5rem] mt-2">
          Next wordle
        </h2>
        <button
          className="uppercase border rounded max-w-fit px-5 mt-4"
          onClick={() => location.reload()}
        >
          new game
        </button>
      </div>
    </div>
  );
};

export default WonGameModal;
