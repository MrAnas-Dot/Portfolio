import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/MrAnas-Dot", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-anas-943594199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:smohamedanas99@gmail.com", label: "Email" }
  ];

  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Let's Connect
        </h2>
        
        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center
                         hover:bg-purple-500/20 transition-all duration-300 group"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
            </a>
          ))}
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 
                         focus:outline-none focus:border-purple-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 
                         focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 
                       focus:outline-none focus:border-purple-500 transition-colors"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};