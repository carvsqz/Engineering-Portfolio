
import React from 'react';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className={`text-6xl font-bold tracking-tighter mb-8 transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>CONNECT</h2>
          <p className={`text-lg mb-12 transition-colors duration-500 ${theme === Theme.Dark ? 'text-zinc-500' : 'text-zinc-700'}`}>
            If you have any questions about my technical background or want to discuss engineering opportunities, please feel free to reach out through any of the contact information below.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-1">Email</p>
              <a href="mailto:carlosarmandovasquez04@gmail.com" className={`text-xl hover:underline transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-[#BF5700]'}`}>carlosarmandovasquez04@gmail.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-1">Phone</p>
              <p className={`text-xl ${theme === Theme.Dark ? 'text-white' : 'text-zinc-900'}`}>(956) 479-6315</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-1">LinkedIn</p>
              <a href="https://www.linkedin.com/in/carlos-vqz/" target="_blank" className={`text-xl hover:underline transition-colors duration-500 ${theme === Theme.Dark ? 'text-white' : 'text-[#BF5700]'}`}>linkedin.com/in/carlos-vqz</a>
            </div>
          </div>
        </div>

        <form className={`glass-panel p-8 rounded-2xl flex flex-col gap-6 transition-all duration-500 ${theme === Theme.Dark ? 'bg-zinc-950/80 border border-zinc-800' : 'bg-white/80 border border-zinc-200 shadow-xl'}`} onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-400">Name</label>
              <input 
                type="text" 
                className={`bg-transparent border-b py-2 outline-none focus:border-[#BF5700] transition-colors ${theme === Theme.Dark ? 'border-zinc-800 text-white' : 'border-zinc-300 text-zinc-900'}`}
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-400">Email</label>
              <input 
                type="email" 
                className={`bg-transparent border-b py-2 outline-none focus:border-[#BF5700] transition-colors ${theme === Theme.Dark ? 'border-zinc-800 text-white' : 'border-zinc-300 text-zinc-900'}`}
                placeholder="email@example.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-zinc-400">Message</label>
            <textarea 
              rows={5}
              className={`bg-transparent border-b py-2 outline-none focus:border-[#BF5700] transition-colors resize-none ${theme === Theme.Dark ? 'border-zinc-800 text-white' : 'border-zinc-300 text-zinc-900'}`}
              placeholder="Inquiry or feedback..."
            ></textarea>
          </div>

          <button className={`font-bold uppercase tracking-widest py-4 rounded-full mt-4 transition-all duration-300 ${theme === Theme.Dark ? 'bg-white text-black hover:bg-[#BF5700] hover:text-white' : 'bg-[#BF5700] text-white hover:bg-zinc-900'}`}>
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
