import React from 'react';
import { MdLeaderboard } from 'react-icons/md';

interface HeaderProps {
  openModal(): void;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="w-full grid grid-cols-header border-b-2 mb-4 p-2 font-extrabold text-white text-3xl lg:text-6xl lg:p-4">
      <h1 className="col-start-2 text-center">React Wordle</h1>
      <MdLeaderboard
        className="text-white mt-1 justify-self-end"
        onClick={props.openModal}
      />
    </header>
  );
};

export default Header;
