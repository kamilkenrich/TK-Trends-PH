
import React from 'react';
import { TrendItem } from '../types';

interface TrendCardProps {
  item: TrendItem;
}

const TrendCard: React.FC<TrendCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="font-bold text-lg text-cyan-300 truncate">{item.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{item.description}</p>
    </div>
  );
};

export default TrendCard;