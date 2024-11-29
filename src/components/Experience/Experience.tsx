import React from 'react';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          <ExperienceCard
            title="Incident Analyst"
            company="Bardiner Hotel"
            period="01/2023 - 06/2024"
            location="Armenia"
            description={[
              "Database administration and managing requirements",
              "Hospitality industry focused on customer service and operations"
            ]}
          />
          
          <ExperienceCard
            title="Executive TOC Engineer"
            company="Indus Towers Pvt Ltd"
            period="01/2020 - 12/2022"
            location="India"
            description={[
              "Real-Time Monitoring of network systems",
              "Troubleshooting and resolving network issues",
              "Conducting system health checks",
              "Documenting all incidents and actions taken"
            ]}
          />
          
          <ExperienceCard
            title="Compliance Audit"
            company="Smile Groups"
            period="01/2022 - 06/2022"
            location="India"
            description={[
              "Analyzing USA citizen files and identity cards for projects",
              "Maintaining up-to-date database"
            ]}
          />
        </div>
      </div>
    </div>
  );
};