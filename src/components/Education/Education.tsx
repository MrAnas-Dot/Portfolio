import React from 'react';
import { EducationCard } from './EducationCard';

export const Education = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Education & Certifications
        </h2>
        
        <div className="space-y-6">
          <EducationCard
            type="education"
            title="B.Sc. Computer Science"
            institution="Kalaimahal College of Arts and Science"
            CGPA="7.8"
            location="sembanarkoil"
          />
          
          <EducationCard
            type="education"
            title="HSC/SSLC"
            institution="Government Higher Secondary School"
            Score="78%"
            location="Vaitheeswaran Koil"
          />
          
          <EducationCard
            type="certification"
            title="Full Stack Developer"
            institution="BDreams"
            location="Jayanagar, Bangalore"
          />
        </div>
      </div>
    </div>
  );
};