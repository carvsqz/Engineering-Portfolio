import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Theme } from '../types';

interface ProjectsProps {
  theme: Theme;
  onSelectProject: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ theme, onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-40 px-6 max-w-[1400px] mx-auto">
      <div className="mb-24 flex flex-col items-start">
        <div className="overflow-hidden mb-4">
            <h1 className={`text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] animate-in slide-in-from-bottom duration-1000 ${theme === Theme.Dark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            ENGINEERING<br/><span className={`outline-text ${theme === Theme.Dark ? 'text-zinc-800' : 'text-zinc-300'}`}>PORTFOLIO</span>
            </h1>
        </div>
        <div className="w-24 h-1 bg-[#BF5700] mb-8"></div>
        <p className={`text-xl max-w-2xl font-light leading-relaxed animate-in fade-in duration-1000 delay-300 ${theme === Theme.Dark ? 'text-zinc-400' : 'text-zinc-700'}`}>
          Some cool projects I have worked on from my Co-Op at Emerson, clubs on campus, and personal projects! :)
        </p>
      </div>
      
      {/* 2-column Grid Layout with Spotlight functionality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="w-full"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <ProjectCard 
              project={project} 
              theme={theme} 
              onClick={onSelectProject}
              isDimmed={hoveredId !== null && hoveredId !== project.id}
              isFocused={hoveredId === project.id}
            />
          </div>
        ))}
      </div>

      <div className="mt-40 text-center">
        <p className={`uppercase tracking-[1em] text-[10px] ${theme === Theme.Dark ? 'text-zinc-700' : 'text-zinc-500'}`}>End of featured projects</p>
      </div>
    </div>
  );
};

export default Projects;