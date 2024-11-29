import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export const ExperienceCard = ({ title, company, period, location, description }: ExperienceCardProps) => {
  return (
    <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300
                    hover:shadow-xl hover:shadow-purple-500/10">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-400">
          <Building2 className="w-4 h-4 mr-2" />
          <span>{company}</span>
        </div>
        
        <div className="flex items-center text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{period}</span>
        </div>
        
        <div className="flex items-center text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
      </div>
      
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        {description.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};