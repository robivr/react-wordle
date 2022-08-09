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
    <div className="rounded bg-gray-800 text-white min-w-[300px] min-h-[200px]rounded pt-2 px-2 pb-4 text-3xl lg:min-w-[600px] lg:min-h-[400px]">
      <h2 className="uppercase text-center">statistics</h2>
      <div className="flex space-x-4 justify-center mb-4">
        <span className="text-center max-w-[35px]">
          <p className="mb-0 pb-0">{props.stats.played}</p>
          <p className="mt-0 pt-0 text-xs">Played</p>
        </span>
        <span className="text-center max-w-[35px]">
          <p>{Math.round((props.stats.won / props.stats.played) * 100)}</p>
          <p className="text-xs">Win %</p>
        </span>
        <span className="text-center max-w-[35px]">
          <p>{props.stats.streak}</p>
          <p className="text-xs">Current streak</p>
        </span>
        <span className="text-center max-w-[35px]">
          <p>{props.stats.maxStreak}</p>
          <p className="text-xs">Max streak</p>
        </span>
      </div>
      <div className="border-t flex flex-col justify-center items-center">
        <h2 className="text-center uppercase mt-8 text-base">Next wordle</h2>
        <button
          className="uppercase border rounded max-w-fit p-5 mt-4 text-xl"
          onClick={() => location.reload()}
        >
          new game
        </button>
      </div>
    </div>
  );
};

export default WonGameModal;
