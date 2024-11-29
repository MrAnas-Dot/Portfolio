import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "MindowsAi",
    description: "A Portfolio Generator is a web application or software tool that allows users to create personalized portfolio websites effortlessly, without needing advanced coding skills.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    tags: ["ReacJS", "HTML", "CSS","JavaScript","AI"]
  },
  {
    title: "Digital Banking",
    description: "Modern banking platform with elegant interactions",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    tags: ["TypeScript", "React", "Firebase"]
  },
  {
    title: "AI Dashboard",
    description: "Sophisticated analytics platform with real-time data",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "D3.js", "TailwindCSS"]
  }
];

export const Projects = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Featured Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 hover:shadow-2xl hover:shadow-purple-500/20 
                                    transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                {project.title}
                <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};