import React from 'react';
import { Theme } from '../types';

interface AboutProps {
  theme: Theme;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const philosophy = [
    {
      title: "Precision",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Hands-on",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Iterative",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Continuous Improvement",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const hobbies = [
    {
      name: "Weight Lifting",
      icon: "🏋️‍♂️"
    },
    {
      name: "Hiking",
      icon: "🥾"
    },
    {
      name: "Gaming",
      icon: "🎮"
    },
    {
      name: "Cars",
      icon: "🏎️"
    },
    {
      name: "Reading",
      icon: "📖"
    },
    {
      name: "Movies & TV",
      icon: "🎬"
    }
  ];

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Bio Section with Vertical Photo Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-24 mb-32 items-start">
        
        {/* Image Column - Vertical Stack of Uncropped Full-Color Photos */}
        <div className="order-1 flex flex-col gap-8 relative">
          {/* Photo 1 */}
          <div className={`relative aspect-[3/4] rounded-3xl overflow-hidden border transition-all duration-500 group ${theme === Theme.Dark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-2xl'}`}>
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczNG913sAMzIKUSAQ2TsTNjEYnHVv6O0_7Xliyt52e7Is4RVQNEzD_gB8ZpdrMWEua7Rnz_OcDRETb5FEovB--5CDg9KNPblLDkaGWpTfNggEWYBPExQ8CgduEhuRmAYlWeRVa0xUrY2m_0e3xjJZNRp=w1014-h1352-s-no-gm?authuser=0" 
              alt="Carlos Vasquez - Technical Work 1" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Photo 2 */}
          <div className={`relative aspect-[3/4] rounded-3xl overflow-hidden border transition-all duration-500 group ${theme === Theme.Dark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-2xl'}`}>
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczM-eocU8K7A3oKyFnBDL_X7LcNBtFS1SyfBibjS2wCO9MmjHHImP5PTxVQszyugQm25HVkA-hEDT1imPs56jEGbUE0CS9Po7ESQD2i2VQmdBK4xdDoIb2ejSaVjA6qr13HqICzes761dtmBpVmWbxLs=w1251-h1352-s-no-gm?authuser=0" 
              alt="Carlos Vasquez - Technical Work 2" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Subtle Decorative Accent Background */}
          <div className="absolute -z-10 top-0 -left-20 w-64 h-full bg-[#BF5700]/5 blur-[100px] rounded-full" />
        </div>

        {/* Text Column - Sticky for Desktop to balance the long image stack */}
        <div className="order-2 lg:sticky lg:top-32">
          <div className="mb-4">
            <span className={`text-xs uppercase tracking-[0.4em] font-black ${theme === Theme.Dark ? 'text-[#BF5700]' : 'text-zinc-500'}`}>Mechanical Engineer</span>
          </div>
          <h2 className={`text-5xl lg:text-7xl font-bold mb-10 tracking-tight transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>
            CARLOS VASQUEZ
          </h2>
          <div className={`space-y-6 text-lg lg:text-xl leading-relaxed transition-colors duration-500 ${theme === Theme.Dark ? 'text-zinc-400' : 'text-zinc-700'}`}>
            <p>
              I like to tell people I have known I wanted to be an engineer since I was 12 years old. Growing up around my parents’ muscle cars and watching the Fast and Furious movies sparked my early interest in cars and performance.
            </p>
            <p>
              As I got older, that interest turned into curiosity about how these machines worked, which is what first drew me to engineering. I joined my middle school robotics team, and from that point on engineering became a constant in my life. I have been actively involved in engineering-related clubs for the past 10 years, which is still crazy to think about.
            </p>
            <p>
              I am genuinely passionate about engineering, and over the past few years of college I have learned an incredible amount that has only strengthened that passion. These experiences have made me extremely excited to begin working full time.
            </p>
            <p>
              I also took an unconventional path and decided to take a year off from school to gain real-world experience. Looking back, this was one of the best decisions I could have made. I learned a great deal about how the industry works, and I am now ready to take my lifelong passion for engineering and apply it in a full-time role.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-zinc-500/10">
            <div>
              <h4 className={`font-black text-xs uppercase tracking-widest mb-2 transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-[#BF5700]'}`}>UNIVERSITY</h4>
              <p className="text-zinc-500 text-sm">The University of Texas at Austin<br/>Cockrell School of Engineering</p>
            </div>
            <div>
              <h4 className={`font-black text-xs uppercase tracking-widest mb-2 transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-[#BF5700]'}`}>CORE FOCUS</h4>
              <p className="text-zinc-500 text-sm">Composites, EV Systems, Topology Optimization, Additive Manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>Hobbies</h2>
          <div className="w-16 h-1 bg-[#BF5700] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hobbies.map((hobby, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-2xl border flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 ${theme === Theme.Dark ? 'bg-zinc-950 border-zinc-900 hover:border-zinc-700' : 'bg-white border-zinc-100 shadow-sm hover:border-[#BF5700]/20'}`}
            >
              <span className="text-4xl mb-4 grayscale hover:grayscale-0 transition-all duration-300">{hobby.icon}</span>
              <h4 className={`text-sm font-bold ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>{hobby.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="mt-20">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>DESIGN PHILOSOPHY</h2>
          <div className="w-16 h-1 bg-[#BF5700] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophy.map((item, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-2xl border transition-all duration-500 group hover:-translate-y-2 flex flex-col items-center text-center ${theme === Theme.Dark ? 'bg-zinc-950 border-zinc-900 hover:border-[#BF5700]/50' : 'bg-white border-zinc-100 shadow-xl hover:border-[#BF5700]/50'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#BF5700]/10 flex items-center justify-center text-[#BF5700] mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className={`text-xl font-black uppercase tracking-tight transition-colors ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
