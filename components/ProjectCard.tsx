import React, { useState, useEffect } from 'react';
import { Project, Theme } from '../types';

interface ProjectCardProps {
  project: Project;
  theme: Theme;
  onClick: (id: string) => void;
  isDimmed?: boolean;
  isFocused?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme, onClick, isDimmed, isFocused }) => {
  const [imgSrc, setImgSrc] = useState(project.imageUrl);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(project.imageUrl);
    setHasError(false);
  }, [project.imageUrl]);

  const handleImageError = () => {
    setHasError(true);
  };

  if (hasError) return null;

  return (
    <div 
      onClick={() => onClick(project.id)}
      className={`
        group relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl border cursor-pointer 
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isFocused ? 'scale-[1.25] z-50 border-[#BF5700] shadow-[0_0_120px_-20px_rgba(191,87,0,0.8)]' : 'z-10'}
        ${isDimmed ? 'opacity-30 blur-[2px] scale-[0.9] grayscale-[0.5]' : 'opacity-100 blur-0 grayscale-0'}
        ${theme === Theme.Dark ? 'bg-zinc-950 border-zinc-800/50' : 'bg-white/40 border-zinc-200/50'}
      `}
    >
      <img 
        src={imgSrc} 
        alt={project.title}
        onError={handleImageError}
        style={{ objectPosition: project.objectPosition || 'center' }}
        className={`
          w-full h-full object-cover transition-all duration-1000 
          ${isFocused ? 'scale-110 opacity-90' : (theme === Theme.Dark ? 'opacity-40 contrast-100' : 'opacity-100 contrast-125')}
        `}
      />
      
      {/* Overlay Gradient */}
      <div className={`
        absolute inset-0 bg-gradient-to-t transition-opacity duration-700 
        ${isFocused ? 'opacity-60' : 'opacity-80'} 
        ${theme === Theme.Dark ? 'from-black/95 via-black/40' : 'from-black/80 via-black/20 to-transparent'}
      `} />
      
      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <span className={`text-[10px] md:text-xs uppercase tracking-[0.5em] mb-3 transition-all duration-500 font-bold ${isFocused ? 'opacity-100 translate-y-0 text-[#BF5700]' : 'opacity-0 translate-y-6'} ${theme === Theme.Dark ? 'text-zinc-500' : 'text-orange-200'}`}>
          {project.category}
        </span>
        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4 transition-all duration-700 text-white ${isFocused ? 'scale-110 drop-shadow-lg' : 'scale-100'}`}>
          {project.title}
        </h3>
        <p className={`max-w-md text-sm transition-all duration-700 delay-100 leading-relaxed font-light line-clamp-3 text-zinc-100 ${isFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          {project.description}
        </p>
        
        <div className={`mt-6 transition-opacity duration-500 delay-200 ${isFocused ? 'opacity-100' : 'opacity-0'}`}>
           <span className="text-[10px] uppercase tracking-widest border border-[#BF5700] px-6 py-2 rounded-full text-[#BF5700] bg-white/10 backdrop-blur-sm font-bold">Explore Project</span>
        </div>
      </div>

      {/* Subtle Scanline / Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Highlight Corner Decoration */}
      <div className={`absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#BF5700] transition-all duration-700 ${isFocused ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-8 -translate-y-8 opacity-0'}`} />
      <div className={`absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#BF5700] transition-all duration-700 ${isFocused ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-8 translate-y-8 opacity-0'}`} />
    </div>
  );
};

export default ProjectCard;