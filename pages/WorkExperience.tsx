import React from 'react';
import { EXPERIENCES } from '../constants';
import { Theme } from '../types';
import Skills from '../components/Skills';

interface WorkExperienceProps {
  theme: Theme;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ theme }) => {
  return (
    <div className="pt-32 pb-40 px-6 max-w-4xl mx-auto">
      <h2 className={`text-6xl font-bold tracking-tighter mb-16 transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>PROFESSIONAL JOURNEY</h2>
      
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className={`relative pl-12 border-l transition-colors duration-500 ${theme === Theme.Dark ? 'border-zinc-800' : 'border-zinc-300'}`}>
            {/* Timeline Dot */}
            <div className={`absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full transition-colors duration-500 ${theme === Theme.Dark ? 'bg-white' : 'bg-[#BF5700]'}`} />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className={`text-2xl font-bold transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-[#BF5700]'}`}>{exp.company}</h3>
                <p className={`font-medium italic transition-colors duration-500 ${theme === Theme.Dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.role}</p>
              </div>
              <span className="text-zinc-500 text-sm uppercase tracking-widest mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>
            
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className={`list-disc list-inside transition-colors duration-500 ${theme === Theme.Dark ? 'text-zinc-500' : 'text-zinc-700'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Skills theme={theme} />
    </div>
  );
};

export default WorkExperience;