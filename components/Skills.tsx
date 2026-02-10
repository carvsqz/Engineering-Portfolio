import React from 'react';
import { Theme } from '../types';

interface SkillsProps {
  theme: Theme;
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const categories = [
    {
      title: "Software",
      items: ["SolidWorks", "Femap", "Fusion 360", "C++", "FreeRTOS"]
    },
    {
      title: "Manufacturing",
      items: ["Carbon Fiber Layup", "Forged Carbon", "CNC Milling", "Structural Welding"]
    },
    {
      title: "Tools",
      items: ["Calipers", "Micrometers", "Lathe", "Mill"]
    }
  ];

  return (
    <div className="mt-24 pt-24 border-t border-[#BF5700]/20">
      <div className="text-center mb-16">
        <h2 className={`text-3xl font-black uppercase tracking-[0.2em] mb-4 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#BF5700] text-xs font-bold uppercase tracking-[0.3em] mb-6">{cat.title}</h3>
            <div className="flex flex-col gap-3">
              {cat.items.map((skill, j) => (
                <span 
                  key={j} 
                  className={`text-sm tracking-wide transition-colors ${theme === Theme.Dark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;