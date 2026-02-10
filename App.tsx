import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Backgrounds from './components/Backgrounds';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import { Tab, Theme } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Projects);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme === Theme.Dark ? 'theme-dark text-zinc-100' : 'theme-light text-zinc-900';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    setActiveTab(Tab.ProjectDetail);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setActiveTab(Tab.Projects);
  };

  const renderContent = () => {
    if (activeTab === Tab.ProjectDetail && selectedProjectId) {
      const project = PROJECTS.find(p => p.id === selectedProjectId);
      if (project) {
        return <ProjectDetail project={project} theme={theme} onBack={handleBackToProjects} />;
      }
    }

    switch (activeTab) {
      case Tab.Projects:
        return <Projects theme={theme} onSelectProject={handleSelectProject} />;
      case Tab.About:
        return <About theme={theme} />;
      case Tab.Contact:
        return <Contact theme={theme} />;
      default:
        return <Projects theme={theme} onSelectProject={handleSelectProject} />;
    }
  };

  if (loading) {
    return (
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-700 ${theme === Theme.Dark ? 'bg-black' : 'bg-white'}`}>
        <div className="flex items-center gap-6 animate-pulse">
           <img 
            src="https://images.seeklogo.com/logo-png/18/2/university-of-texas-at-austin-longhorns-logo-png_seeklogo-181207.png" 
            alt="UT Logo" 
            className="h-12 w-auto"
           />
           <h1 className={`text-4xl md:text-5xl font-black tracking-tighter uppercase ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>CARLOS VASQUEZ</h1>
        </div>
        <p className="mt-6 text-zinc-500 uppercase tracking-[0.5em] text-[10px] animate-pulse">MECHANICAL ENGINEERING PORTFOLIO</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      {/* Dark Mode Specific Retro Visual Enhancements */}
      {theme === Theme.Dark && (
        <>
          <div className="scanline" />
          <div className="scanline-dots" />
        </>
      )}

      <Navbar 
        activeTab={activeTab === Tab.ProjectDetail ? Tab.Projects : activeTab} 
        setActiveTab={(tab) => {
          setSelectedProjectId(null);
          setActiveTab(tab);
        }} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <Backgrounds theme={theme} />

      <main className="relative animate-in fade-in duration-1000">
        {renderContent()}
      </main>

      <footer className={`border-t transition-colors duration-500 ${theme === Theme.Dark ? 'border-zinc-900' : 'border-zinc-300'} mt-20 py-10 px-6 relative`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm gap-4">
          <p>© {new Date().getFullYear()} Carlos Vasquez | Portfolio.</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/carlos-vqz/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BF5700] transition-colors">LinkedIn</a>
            <a href="/resume.pdf" download="Carlos_Vasquez_Resume.pdf" className="hover:text-[#BF5700] transition-colors font-bold">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;