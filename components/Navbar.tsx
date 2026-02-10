import React from 'react';
import { Tab, Theme } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const isDark = theme === Theme.Dark;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="group flex items-center gap-4 cursor-pointer"
          onClick={() => setActiveTab(Tab.Projects)}
        >
          {/* UT Logo */}
          <img 
            src="https://images.seeklogo.com/logo-png/18/2/university-of-texas-at-austin-longhorns-logo-png_seeklogo-181207.png" 
            alt="UT Logo" 
            className="h-7 md:h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className={`flex flex-col leading-none transition-colors duration-500 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase group-hover:text-[#BF5700] transition-colors">CARLOS VASQUEZ</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4 border-r border-zinc-500/20 pr-8">
            <button 
              onClick={() => setActiveTab(Tab.Projects)}
              className={`text-sm uppercase tracking-widest transition-colors ${activeTab === Tab.Projects ? (isDark ? 'text-white' : 'text-black font-bold') : 'text-zinc-500 hover:text-white'} nav-underline`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveTab(Tab.About)}
              className={`text-sm uppercase tracking-widest transition-colors ${activeTab === Tab.About ? (isDark ? 'text-white' : 'text-black font-bold') : 'text-zinc-500 hover:text-white'} nav-underline`}
            >
              About
            </button>
            
            <a 
              href="/resume.pdf" 
              download="Carlos_Vasquez_Resume.pdf"
              className={`text-sm uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-black'} nav-underline`}
            >
              Resume
            </a>

            <button 
              onClick={() => setActiveTab(Tab.Contact)}
              className={`text-sm uppercase tracking-widest transition-colors ${activeTab === Tab.Contact ? (isDark ? 'text-white' : 'text-black font-bold') : 'text-zinc-500 hover:text-white'} border border-[#BF5700]/30 px-6 py-2 rounded-full hover:bg-[#BF5700] hover:text-white transition-all`}
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-6">
            {/* LinkedIn Icon Button */}
            <a 
              href="https://www.linkedin.com/in/carlos-vqz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-12 h-12 flex items-center justify-center rounded-full glass-panel hover:bg-[#0077B5] transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg 
                className={`w-5 h-5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900 group-hover:text-white'}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Custom Day/Night Toggle Switch - Refined for no clipping */}
            <button 
              onClick={toggleTheme}
              className={`relative flex items-center w-48 h-12 rounded-full p-1.5 transition-all duration-500 ease-in-out border-2 overflow-hidden shadow-inner ${
                isDark 
                ? 'bg-black border-zinc-800' 
                : 'bg-zinc-100 border-zinc-200'
              }`}
              aria-label="Toggle Theme"
            >
              {/* Text Labels Layer - Stacked as requested */}
              <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none select-none">
                <div className={`flex flex-col items-start leading-[1.1] transition-all duration-500 ease-in-out ${
                  isDark ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
                }`}>
                  <span className="text-[11px] font-black tracking-widest text-black">LIGHT</span>
                  <span className="text-[11px] font-black tracking-widest text-black">MODE</span>
                </div>
                <div className={`flex flex-col items-end leading-[1.1] transition-all duration-500 ease-in-out ${
                  isDark ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <span className="text-[11px] font-black tracking-widest text-white">DARK</span>
                  <span className="text-[11px] font-black tracking-widest text-white">MODE</span>
                </div>
              </div>

              {/* Slider / Handle Layer */}
              <div 
                className={`absolute w-9 h-9 bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-zinc-200 shadow-md z-10 ${
                  isDark ? 'left-1.5' : 'left-[calc(100%-2.25rem-0.375rem)]'
                }`}
              >
                {/* Icons inside the handle */}
                {isDark ? (
                  /* Moon/Night Icon */
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    <circle cx="18" cy="8" r="0.5" fill="currentColor" className="animate-pulse" />
                  </svg>
                ) : (
                  /* Sun/Day Icon - Sized to prevent clipping */
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="3.5" strokeWidth={1.8} />
                    <path strokeLinecap="round" strokeWidth={1.8} d="M12 5V3m0 18v-2M5 12H3m18 0h-2m-2.5-6.5l-1.5 1.5M7 17l-1.5 1.5m11.5 0l-1.5-1.5M7 7L5.5 5.5" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;