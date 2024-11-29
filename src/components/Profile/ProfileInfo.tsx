import React from 'react';

interface ProfileInfoProps {
  name: string;
  title: string;
}

export const ProfileInfo = ({ name, title }: ProfileInfoProps) => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6 animate-fade-in">
        {name}
      </h1>
      <p className="text-gray-300 text-xl md:text-2xl mb-8 animate-fade-in-delayed">
        {title}
      </p>
    </>
  );
};