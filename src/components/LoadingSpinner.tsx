
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-400"></div>
      <p className="ml-4 text-lg text-gray-300">Kinukuha ang pinakabagong trends...</p>
    </div>
  );
};

export default LoadingSpinner;