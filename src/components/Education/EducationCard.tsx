import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItemProps {
  type: 'education' | 'certification';
  title: string;
  institution: string;
  period?: string;
  location?: string;
}

export const EducationCard = ({ type, title, institution, period, location }: EducationItemProps) => {
  const Icon = type === 'education' ? GraduationCap : Award;
  
  return (
    <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300
                    hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-1">{institution}</p>
          {(period || location) && (
            <p className="text-sm text-gray-500">
              {period && <span>{period}</span>}
              {period && location && <span className="mx-2">•</span>}
              {location && <span>{location}</span>}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};