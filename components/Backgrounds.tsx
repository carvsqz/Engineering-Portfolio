import React, { useMemo } from 'react';
import { Theme } from '../types';

interface BackgroundsProps {
  theme: Theme;
}

const Backgrounds: React.FC<BackgroundsProps> = ({ theme }) => {
  // Generate random star data for Dark Mode
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      type: Math.random() > 0.92 ? 2 : (Math.random() > 0.7 ? 1 : 0),
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      color: ['#ffffff', '#a5f3fc', '#fda4af', '#cbd5e1'][Math.floor(Math.random() * 4)],
      opacity: 0.4 + Math.random() * 0.6
    }));
  }, []);

  // Generate random "day sparkles" for Light Mode (floating dust/pixels)
  const daySparkles = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() > 0.5 ? 4 : 2, // Bigger pixels
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 4}s`,
    }));
  }, []);

  // Generate Cloud Data - Bigger, Slower, More
  const clouds = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 85}%`, 
      // Scale is significantly larger: 2.5x to 4.5x
      scale: 2.5 + Math.random() * 2.0,
      opacity: 0.8 + Math.random() * 0.2,
      // Duration is much slower: 120s to 240s
      duration: `${120 + Math.random() * 120}s`, 
      delay: `-${Math.random() * 300}s`, // Varied start times
      type: Math.floor(Math.random() * 3)
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dark Mode Background: Custom Pixel Starfield */}
      <div className={`absolute inset-0 bg-black bg-transition duration-1000 ${theme === Theme.Dark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <div 
              key={star.id}
              className="absolute animate-twinkle"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
                animationDuration: star.duration,
                opacity: star.opacity
              }}
            >
              {star.type === 2 ? (
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[5px] h-[1px]" style={{ backgroundColor: star.color, boxShadow: `0 0 4px ${star.color}` }} />
                  <div className="absolute h-[5px] w-[1px]" style={{ backgroundColor: star.color, boxShadow: `0 0 4px ${star.color}` }} />
                  <div className="w-[1px] h-[1px] bg-white" />
                </div>
              ) : star.type === 1 ? (
                <div className="w-[2px] h-[2px]" style={{ backgroundColor: star.color }} />
              ) : (
                <div className="w-[1px] h-[1px]" style={{ backgroundColor: star.color }} />
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </div>
      </div>

      {/* Light Mode Background: Pixel Art Day Sky */}
      <div className={`absolute inset-0 bg-[#3B82F6] bg-transition duration-1000 ${theme === Theme.Light ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sky Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8] to-[#60A5FA]" />

        {/* SIMPLIFIED RETRO PIXEL SUN */}
        <div className="absolute top-10 right-10 md:top-16 md:right-16 w-32 h-32 md:w-56 md:h-56 pointer-events-none animate-[sun-pulse_4s_ease-in-out_infinite]">
            <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-xl" shapeRendering="crispEdges">
                {/* 
                   Refined Pixel Art Sun (24x24)
                   Color Palette:
                   - Outline/Rays: #BF5700 (Burnt Orange)
                   - Fill: #FACC15 (Yellow)
                   - Highlight: #FEF08A (Light Yellow)
                */}
                
                {/* Rays */}
                <g className="text-[#BF5700]">
                     <path d="M11 1h2v3h-2z" fill="currentColor" /> {/* Top */}
                     <path d="M11 20h2v3h-2z" fill="currentColor" /> {/* Bottom */}
                     <path d="M1 11h3v2h-3z" fill="currentColor" /> {/* Left */}
                     <path d="M20 11h3v2h-3z" fill="currentColor" /> {/* Right */}

                     {/* Diagonals - Cleaned up paths */}
                     <path d="M4 4h2v2h-2z" fill="currentColor" /> 
                     <path d="M18 4h2v2h-2z" fill="currentColor" />
                     <path d="M4 18h2v2h-2z" fill="currentColor" />
                     <path d="M18 18h2v2h-2z" fill="currentColor" />
                </g>

                {/* Sun Body Outline (Burnt Orange) */}
                <path d="M9 5h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z" fill="#BF5700" />
                
                {/* Sun Body Fill (Yellow) */}
                <path d="M9 6h6v1h2v2h1v6h-1v2h-2v1h-6v-1h-2v-2h-1v-6h1v-2h2z" fill="#FACC15" />

                {/* Pixel Highlight (Top Left Reflection) */}
                <path d="M9 7h2v1h-1v2h-1z" fill="#FEF08A" />
            </svg>
        </div>

        {/* Pixel Clouds - Dynamically Generated and Moving */}
        <div className="absolute inset-0 pointer-events-none">
           {clouds.map((cloud) => (
             <div 
                key={cloud.id}
                className="absolute left-0 animate-[cloud-travel_linear_infinite]"
                style={{
                  top: cloud.top,
                  transform: `scale(${cloud.scale})`,
                  opacity: cloud.opacity,
                  animationDuration: cloud.duration,
                  animationDelay: cloud.delay,
                  zIndex: Math.floor(cloud.scale * 10) // Larger clouds in front
                }}
             >
                {/* Render different cloud types based on random type ID */}
                {cloud.type === 0 && (
                   <div className="relative">
                      <div className="w-16 h-8 bg-white" />
                      <div className="absolute top-[-8px] left-4 w-12 h-8 bg-white" />
                      <div className="absolute top-4 left-[-8px] w-24 h-6 bg-white" />
                   </div>
                )}
                {cloud.type === 1 && (
                  <div className="relative">
                    <div className="w-24 h-12 bg-white/90" />
                    <div className="absolute top-[-12px] left-6 w-16 h-12 bg-white/90" />
                  </div>
                )}
                {cloud.type === 2 && (
                  <div className="relative">
                    <div className="w-20 h-10 bg-white" />
                    <div className="absolute top-[-10px] left-4 w-12 h-10 bg-white" />
                    <div className="absolute top-[5px] -right-4 w-8 h-8 bg-white" />
                  </div>
                )}
             </div>
           ))}
        </div>

        {/* Sparkles / Dithering Particles */}
        {daySparkles.map((sparkle) => (
          <div 
             key={sparkle.id}
             className="absolute bg-white/40 animate-pulse"
             style={{
               top: sparkle.top,
               left: sparkle.left,
               width: sparkle.size,
               height: sparkle.size,
               animationDelay: sparkle.delay,
               animationDuration: sparkle.duration
             }}
          />
        ))}

        {/* Overlay Gradient for Fade effect at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default Backgrounds;