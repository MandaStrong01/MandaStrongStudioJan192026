import React, { useState } from 'react';
import { 
  ChevronRight, ChevronLeft, Scissors, Play, 
  ShieldCheck, HelpCircle, Users, Heart, Layout, 
  Music, Palette, Video, Mic, Settings 
} from 'lucide-react';

const App = () => {
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState(90);

  // --- NAVIGATION CONTROLS ---
  const handleNext = () => setPage((p) => Math.min(p + 1, 21));
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans overflow-hidden">
      
      {/* HEADER: AS SEEN IN SCREENSHOTS */}
      <header className="p-4 border-b border-purple-900 bg-zinc-950 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-purple-600 rounded font-black italic">M</span>
          <h1 className="text-xl font-black italic tracking-tighter">MANDASTRONG STUDIO</h1>
        </div>
        <div className="text-[10px] text-purple-500 font-mono bg-purple-500/10 px-2 py-1 rounded">
          LIVE_DEPLOY_V2025 // PAGE {page}
        </div>
      </header>

      {/* 21-PAGE DYNAMIC ENGINE */}
      <main className="flex-grow overflow-y-auto flex flex-col items-center p-6 relative">
        
        {/* PAGE 1: THE LANDING PAGE */}
        {page === 1 && (
          <div className="text-center space-y-6 max-w-5xl mt-20 animate-in fade-in zoom-in duration-500">
            <div className="inline-block px-4 py-1 border border-purple-500 rounded-full text-[10px] uppercase tracking-widest text-purple-400">
              Professional Movie Making
            </div>
            <h2 className="text-7xl md:text-9xl font-black leading-none uppercase italic">
              MANDASTRONG'S <br/> <span className="text-purple-600">STUDIO</span>
            </h2>
            <p className="text-xl opacity-80 font-medium italic">Welcome To The All-In-One Make-A-Movie App!</p>
            <button onClick={handleNext} className="mt-8 px-12 py-4 bg-purple-600 rounded-full font-black text-lg shadow-lg shadow-purple-900/40 hover:scale-105 transition-all">
              NEXT &gt;
            </button>
          </div>
        )}

        {/* PAGE 3: AUTH & UPDATED SUBSCRIPTION TIERS */}
        {page === 3 && (
          <div className="w-full max-w-6xl animate-in slide-in-from-bottom-10 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 border border-purple-900 rounded-3xl bg-zinc-900/30">
                <h3 className="text-2xl font-bold mb-6">Login</h3>
                <input type="email" placeholder="your@email.com" className="w-full p-4 bg-black border border-purple-900 rounded-xl mb-4 focus:outline-none focus:border-purple-500" />
                <input type="password" placeholder="••••••••" className="w-full p-4 bg-black border border-purple-900 rounded-xl mb-6" />
                <button className="w-full py-4 bg-purple-600 rounded-xl font-bold">Login</button>
              </div>
              <div className="p-8 border border-purple-900 rounded-3xl bg-zinc-900/30">
                <h3 className="text-2xl font-bold mb-6">Register</h3>
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-black border border-purple-900 rounded-xl mb-4" />
                <input type="email" placeholder="your@email.com" className="w-full p-4 bg-black border border-purple-900 rounded-xl mb-4" />
                <button className="w-full py-4 bg-purple-600 rounded-xl font-bold">Create Account</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Basic', price: 20, tools: '100 AI Tools' },
                { name: 'Pro', price: 30, tools: '300 AI Tools' },
                { name: 'Studio', price: 50, tools: 'All 720 AI Tools' }
              ].map((p) => (
                <div key={p.name} className="p-8 border-2 border-purple-900 rounded-3xl bg-black text-center group hover:border-purple-500 transition-all">
                  <h4 className="font-bold text-xl mb-2">{p.name}</h4>
                  <div className="text-4xl font-black mb-6">${p.price}<span className="text-sm opacity-40">/mo</span></div>
                  <p className="text-sm opacity-60 mb-8">✓ {p.tools}</p>
                  <button className="w-full py-3 border border-purple-600 rounded-lg font-bold group-hover:bg-purple-600">Select Plan</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGES 4-9: THE 720 TOOLBOARD GRID (CHRONOLOGICAL) */}
        {(page >= 4 && page <= 9) && (
          <div className="w-full max-w-7xl animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-black tracking-tighter italic">TOOL BOARD</h3>
              <button className="px-6 py-2 bg-purple-900/30 border border-purple-700 rounded-lg text-sm flex items-center gap-2">
                <Layout size={16} /> Quick Access
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* These tools are pulled exactly from your screenshots (Pages 6, 7, 8, 9) */}
              {[
                "Dialogue Writer", "Plot Generator", "Scene Writer", "Story Outliner",
                "Character Developer", "Dialogue Editor", "Voice Maker", "Voice Cloner",
                "Image Creator", "Art Maker", "Motion Video Maker", "Avatar Generator",
                "3D Shape Generator", "Gaussian Splat Render", "Smart Video Editor", "Auto Editor"
              ].map((tool, i) => (
                <button key={i} className="p-5 border border-purple-900/50 bg-zinc-900/40 rounded-xl text-left hover:bg-purple-900/40 transition-all flex items-center gap-3 group">
                  <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white">✨</div>
                  <span className="text-xs font-bold uppercase tracking-wide">{tool}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 12: EDITOR SUITE HOME */}
        {page === 12 && (
          <div className="w-full max-w-5xl text-center space-y-12 animate-in zoom-in duration-500">
            <h3 className="text-6xl font-black text-purple-600 italic">EDITOR SUITE</h3>
            <p className="text-lg opacity-60">Professional-Grade Video Editing Platform</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Video Editor', icon: <Video /> },
                { title: 'Audio Mixer', icon: <Music /> },
                { title: 'Color Grading', icon: <Palette /> },
                { title: 'Precision Tools', icon: <Scissors /> },
                { title: 'AI Enhancement', icon: <ShieldCheck /> },
                { title: 'Settings', icon: <Settings /> }
              ].map((item) => (
                <div key={item.title} className="p-10 border border-purple-900 rounded-3xl bg-zinc-950 hover:bg-purple-900/20 transition-all cursor-pointer">
                  <div className="text-purple-500 mb-4 flex justify-center scale-150">{item.icon}</div>
                  <h4 className="font-bold text-xl">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 16: MOVIE DURATION SLIDER */}
        {page === 16 && (
          <div className="w-full max-w-3xl p-12 border border-purple-900 rounded-[3rem] bg-zinc-950 text-center shadow-2xl shadow-purple-900/20 animate-in fade-in duration-500">
            <h3 className="text-xl font-bold opacity-40 mb-10 tracking-[0.4em]">SET MOVIE DURATION</h3>
            <div className="text-[12rem] font-black leading-none text-purple-600 mb-4">{duration}</div>
            <p className="text-2xl font-mono tracking-widest opacity-30 mb-12">MINUTES</p>
            <input 
              type="range" min="0" max="180" value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-4 bg-zinc-900 rounded-full appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between mt-6 text-xs font-mono opacity-40">
              <span>0 MIN</span>
              <span>180 MIN</span>
            </div>
          </div>
        )}

        {/* PAGE 21: MISSION & FINAL DISCLAIMER */}
        {page === 21 && (
          <div className="text-center max-w-4xl space-y-12 animate-in slide-in-from-bottom-20 duration-700">
            <h2 className="text-8xl font-black italic tracking-tighter text-purple-600">THAT'S ALL FOLKS!</h2>
            <div className="p-10 border-2 border-purple-900 rounded-[3rem] bg-zinc-950 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
              <p className="text-xl font-medium leading-relaxed opacity-80 italic">
                MandaStrong Studio is part of a comprehensive educational initiative designed to bring awareness to bullying prevention and social skills development.
              </p>
              <div className="mt-12 pt-12 border-t border-purple-900/50">
                <h4 className="text-purple-400 font-black text-sm uppercase tracking-[0.3em] mb-4">Supporting Our Heroes</h4>
                <p className="text-lg">100% of Etsy store proceeds benefit Veteran Mental Health Services.</p>
                <p className="text-sm mt-4 opacity-40 font-mono italic">Visit our fundraiser at MandaStrong1.Etsy.com</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* GLOBAL FOOTER: CONSISTENT ACROSS ALL PAGES */}
      <footer className="p-8 border-t border-purple-900 bg-black flex flex-col items-center gap-6">
        <div className="flex gap-4 w-full max-w-md">
          <button onClick={handleBack} className="flex-1 py-4 border-2 border-zinc-800 rounded-2xl font-black text-sm hover:bg-zinc-900 flex items-center justify-center gap-2 transition-all">
            <ChevronLeft size={18} /> BACK
          </button>
          <button onClick={handleNext} className="flex-1 py-4 bg-purple-600 rounded-2xl font-black text-sm shadow-lg shadow-purple-900/30 hover:bg-purple-500 flex items-center justify-center gap-2 transition-all">
            NEXT <ChevronRight size={18} />
          </button>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white opacity-40">
            MandaStrong1 2025 ~ Author Of Doxy The School Bully ~ Also Find Me On MandaStrong1.Etsy.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;