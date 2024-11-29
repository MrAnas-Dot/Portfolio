import React from 'react';
import { Code2, Palette, Database, Cpu } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "BootStrap","ReactJS"]
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Python", "MySql"]
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Canva"]
  },
  {
    icon: Cpu,
    title: "Other Skills",
    skills: ["Git", "GitHub", "MS-Office"]
  }
];

export const Skills = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900 rounded-xl hover:bg-gray-800/50 transition-all duration-300
                         hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 
                            group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-purple-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              
              <div className="space-y-2">
                {skill.skills.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="px-3 py-1.5 bg-black/20 rounded-lg text-gray-300 text-sm
                             hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};