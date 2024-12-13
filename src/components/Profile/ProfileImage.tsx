import React from 'react';

interface ProfileImageProps {
  name: string;
}

export const ProfileImage = ({ name }: ProfileImageProps) => {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
      <img
        src="puplic/assets/pic3.jpg"
        alt={`${name}'s profile`}
        className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-2 border-white/10"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6b46c1&color=fff`;
        }}
      />
    </div>
  );
};