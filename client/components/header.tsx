import React from 'react';
import ModeSwitch from './icons/mode-switch';
import Hamburger from './icons/hamburger';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed grid grid-cols-9 grid-rows-2 gap-1 px-5 py-4 w-screen h-20">
      <p className="col-start-1 col-end-8 self-start row-start-1">Winslow Strong</p>
      <p className="col-start-1 col-end-5 md:col-start-4 md:col-end-4 md:col-span-2 self-start opacity-50 md:opacity-100 row-start-2 md:row-start-1">
        Investor, Angel & Philantropist
      </p>
      <div className='absolute top-0 right-4 md:right-6 row-start-1 flex flex-row gap-10 center'>
      <ModeSwitch />
      <Hamburger />
      </div>
    </header>
  );
};

export default Header;