
import React from 'react';

const TikTokIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 drop-shadow-[2px_2px_0_#f0f_,-2px_-2px_0_#f0f]"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.15 3.06.22 4.59.56-.02 1.12-.04 1.68-.05.02 1.23.04 2.47.05 3.7.57 0 1.14-.01 1.7-.02-.01 1.22-.02 2.45-.04 3.67-.56.01-1.12.02-1.68.03-.09 1.55-.17 3.1-.26 4.65-1.32.02-2.63.03-3.95.03-2.37 0-4.73-.01-7.1-.02.02-1.22.03-2.45.05-3.67.56-.01 1.12-.02 1.68-.03.08-1.55.17-3.1.25-4.65-1.31.02-2.62.02-3.93.03C2.86 5.99 5.69 3.11 9.53.71c.9- .55 1.8- .83 2.99-.69z" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 shadow-lg shadow-black/20">
      <div className="container mx-auto flex items-center justify-center space-x-3">
        <TikTokIcon />
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          TikTok Trends <span className="text-white">PH</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
