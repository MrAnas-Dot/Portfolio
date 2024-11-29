import React from 'react';
import { ProfileImage } from './Profile/ProfileImage';
import { ProfileInfo } from './Profile/ProfileInfo';

export const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
      <div className="absolute inset-0">
        <div className="animate-pulse-slow absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="animate-pulse-slow absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <ProfileImage name="Mohamed Anas" />
        
        <ProfileInfo 
          name="Mohamed Anas"
          title="Full Stack Developer"
        />

        <div className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
          <p className="mb-4">
            Hello! I'm Mohamed Anas, a highly motivated and skilled Full Stack Developer with a passion for building scalable and dynamic web applications. With a strong foundation in Python, HTML, CSS, and JavaScript, I thrive in crafting both the front-end and back-end of web applications, delivering seamless and user-friendly experiences.
          </p>
          <p>
            I hold a B.Sc in Computer Science and have earned a Full Stack Development certification from BDream Global Solution in Bangalore. Currently, I'm working as an Executive TOC Engineer at Indus Towers Pvt Ltd, where I manage data administration and perform application testing.
          </p>
        </div>
        
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-fade-in-delayed-2">
          Explore My Work
        </button>
      </div>
    </div>
  );
};