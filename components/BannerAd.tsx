
import React from 'react';
import { AD_URL } from '../constants';

const BannerAd: React.FC = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl mb-8 group">
      <img 
        src="https://picsum.photos/1200/400?random=1" 
        alt="Promotional Banner" 
        className="w-full h-48 sm:h-56 md:h-64 object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">MAGPA-LEVEL UP NG IYONG SWERTE!</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-md">Sumali sa libu-libong nananalo araw-araw. Ang iyong malaking panalo ay isang click na lang!</p>
        <a
          href={AD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300"
        >
          MAGLARO NGAYON!
        </a>
      </div>
    </div>
  );
};

export default BannerAd;
