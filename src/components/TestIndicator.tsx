import React from 'react';
import { BeakerIcon } from 'lucide-react';

export const TestIndicator = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full 
                    border border-purple-500/20 text-purple-400 text-sm animate-pulse-slow">
        <BeakerIcon className="w-4 h-4" />
        <span>Portfolio</span>
      </div>
    </div>
  );
};