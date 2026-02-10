import { Project, Theme } from '../types';
import React, { useEffect, useState } from 'react';

interface ProjectDetailProps {
  project: Project;
  theme: Theme;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, theme, onBack }) => {
  const [hoveredImageUrl, setHoveredImageUrl] = useState<string | null>(null);
  const [hoveredCaption, setHoveredCaption] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleImageError = (url: string) => {
    setBrokenImages(prev => new Set(prev).add(url));
  };

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Centered Zoom Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 pointer-events-none ${hoveredImageUrl ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        {hoveredImageUrl && (
          <div className="relative w-[85vw] h-[80vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
            <img 
              src={hoveredImageUrl} 
              alt="Zoomed Detail" 
              className="max-w-full max-h-[90%] object-contain rounded-xl shadow-[0_0_80px_-10px_rgba(191,87,0,0.8)] border border-white/10"
            />
            {hoveredCaption && (
              <p className="mt-6 text-white text-lg font-bold tracking-[0.2em] uppercase bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm">
                {hoveredCaption}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className={`group flex items-center gap-3 mb-12 uppercase tracking-widest text-xs font-bold transition-colors ${theme === Theme.Dark ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-black'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Gallery
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
          <div>
            <span className={`text-[10px] uppercase tracking-[0.5em] font-bold block mb-4 ${theme === Theme.Dark ? 'text-zinc-600' : 'text-[#BF5700]'}`}>
              {project.category}
            </span>
            <h1 className={`text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>
              {project.title}
            </h1>
            <div className={`w-16 h-1 bg-[#BF5700] mb-8`}></div>
            <p className={`text-xl font-light leading-relaxed ${theme === Theme.Dark ? 'text-zinc-400' : 'text-zinc-700'}`}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technical Documentation Download Button */}
          {project.pdfUrl && (
            <div className={`p-8 rounded-3xl border transition-all duration-500 ${theme === Theme.Dark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-[#BF5700]/5 border-[#BF5700]/20 shadow-lg'}`}>
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border ${theme === Theme.Dark ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-white border-[#BF5700]/20 text-[#BF5700]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-sm font-black uppercase tracking-widest mb-1 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>Full Technical Report</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Complete Engineering Design Cycle (PDF • 4.2 MB)</p>
                  <a 
                    href={project.pdfUrl}
                    download
                    className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${theme === Theme.Dark ? 'bg-white text-black hover:bg-[#BF5700] hover:text-white' : 'bg-[#BF5700] text-white hover:bg-zinc-900'}`}
                  >
                    Download Publication
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Social / External Links Section */}
          {project.socialLinks && project.socialLinks.length > 0 && (
            <div>
              <h4 className={`text-sm uppercase tracking-widest font-black mb-6 ${theme === Theme.Dark ? 'text-zinc-500' : 'text-zinc-900'}`}>External Resources</h4>
              <div className="flex flex-col gap-3">
                {project.socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl border group/link transition-all ${theme === Theme.Dark ? 'border-zinc-800 bg-zinc-900/30 hover:border-[#BF5700]/50 text-zinc-400 hover:text-white' : 'border-zinc-100 bg-white shadow-sm hover:border-[#BF5700]/30 text-zinc-600 hover:text-[#BF5700]'}`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">{link.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Metrics Section */}
          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{metric.label}</p>
                  <p className={`text-2xl font-bold ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>{metric.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technical Stack */}
          <div>
            <h4 className={`text-sm uppercase tracking-widest font-black mb-6 ${theme === Theme.Dark ? 'text-zinc-500' : 'text-zinc-900'}`}>Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, i) => (
                <span 
                  key={i} 
                  className={`text-[11px] px-4 py-1.5 rounded-full border transition-all ${theme === Theme.Dark ? 'border-zinc-800 text-zinc-400 bg-zinc-900/50' : 'border-zinc-200 text-zinc-700 bg-white'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div>
              <h4 className={`text-sm uppercase tracking-widest font-black mb-6 ${theme === Theme.Dark ? 'text-zinc-500' : 'text-zinc-900'}`}>Engineering Highlights</h4>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className={`flex gap-4 items-start ${theme === Theme.Dark ? 'text-zinc-400' : 'text-zinc-700'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BF5700] mt-2 shrink-0"></div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Media */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          {/* External Video Showcase Card */}
          {project.videoUrl && (
            <div className="mb-12">
               <a 
                href={project.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group/vid relative block rounded-[2rem] overflow-hidden border transition-all duration-500 ${theme === Theme.Dark ? 'border-[#BF5700]/40 bg-zinc-900 hover:border-[#BF5700]' : 'border-zinc-200 bg-white shadow-2xl hover:border-[#BF5700]'}`}
               >
                  <div className="aspect-video relative flex flex-col items-center justify-center p-12 text-center overflow-hidden">
                    {/* Video Background Image */}
                    {project.videoThumbnail && (
                      <img 
                        src={project.videoThumbnail} 
                        alt="Video Preview" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/vid:scale-105"
                      />
                    )}
                    
                    {/* Dark Overlay for content clarity */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${project.videoThumbnail ? 'bg-black/60 group-hover/vid:bg-black/40' : 'bg-black opacity-20 group-hover/vid:opacity-40'}`} />
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-full border-2 border-[#BF5700] flex items-center justify-center mb-6 mx-auto bg-black/40 backdrop-blur-xl transition-transform duration-500 group-hover/vid:scale-110">
                        <svg className="w-8 h-8 text-[#BF5700] fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white drop-shadow-md">Race Day</h3>
                      <p className="text-orange-200 text-sm font-medium uppercase tracking-widest drop-shadow-md">Click to view on external gallery</p>
                    </div>
                  </div>
               </a>
            </div>
          )}

          {/* Main Hero Photo */}
          {!brokenImages.has(project.imageUrl) && (
            <div 
              className={`group/hero relative rounded-3xl overflow-hidden border transition-all duration-1000 aspect-video md:aspect-[4/3] mb-8 cursor-zoom-in ${theme === Theme.Dark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white shadow-2xl'}`}
              onMouseEnter={() => {
                setHoveredImageUrl(project.imageUrl);
                setHoveredCaption(project.imageCaption || null);
              }}
              onMouseLeave={() => {
                setHoveredImageUrl(null);
                setHoveredCaption(null);
              }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                onError={() => handleImageError(project.imageUrl)}
                style={{ objectPosition: project.objectPosition || 'center' }}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105 ${theme === Theme.Light ? 'contrast-110 brightness-95' : ''}`}
              />
              <div className="absolute inset-0 bg-[#BF5700]/10 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          )}
          
          {/* Gallery Grid */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-8">
              {project.galleryImages.map((img, idx) => (
                !brokenImages.has(img) && (
                  <div 
                    key={idx} 
                    className={`group relative aspect-video rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-[1.02] cursor-zoom-in ${theme === Theme.Dark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 shadow-lg'}`}
                    onMouseEnter={() => {
                      setHoveredImageUrl(img);
                      setHoveredCaption(project.galleryCaptions?.[idx] || null);
                    }}
                    onMouseLeave={() => {
                      setHoveredImageUrl(null);
                      setHoveredCaption(null);
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${idx + 1}`} 
                      onError={() => handleImageError(img)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-[#BF5700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                )
              ))}
            </div>
          )}

          <p className="mt-8 text-[10px] uppercase tracking-widest text-zinc-500 text-center animate-pulse">
            Scroll or hover to inspect technical details
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;