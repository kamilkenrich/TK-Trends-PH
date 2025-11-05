
import React from 'react';
import { TrendItem } from '../types';
import TrendCard from './TrendCard';

type IconType = 'hashtag' | 'challenge' | 'sound';

interface TrendSectionProps {
  title: string;
  items: TrendItem[];
  iconType: IconType;
}

const SectionIcon: React.FC<{ type: IconType }> = ({ type }) => {
  const iconClasses = "w-6 h-6 mr-3";
  switch (type) {
    case 'hashtag':
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>;
    case 'challenge':
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'sound':
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" /></svg>;
    default:
      return null;
  }
};


const TrendSection: React.FC<TrendSectionProps> = ({ title, items, iconType }) => {
  const accentColors = {
    hashtag: 'from-sky-400 to-cyan-300',
    challenge: 'from-red-500 to-orange-400',
    sound: 'from-purple-500 to-indigo-400',
  };

  return (
    <section>
      <div className={`flex items-center mb-4 p-2 rounded-md bg-gradient-to-r ${accentColors[iconType]}`}>
        <SectionIcon type={iconType} />
        <h2 className="text-xl font-bold tracking-wide text-white drop-shadow-sm">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <TrendCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TrendSection;
