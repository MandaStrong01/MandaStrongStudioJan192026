import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  Play, Mic, Image, Video, Move, Scissors, HelpCircle, 
  Users, Heart, CreditCard, ChevronRight, ChevronLeft 
} from 'lucide-react';

// --- INITIALIZATION ---
const supabase = createClient('https://your-project.supabase.co', 'your-anon-key');

const MANDASTRONG_THEME = {
  bg: 'bg-black',
  primary: 'text-purple-500',
  accent: 'bg-purple-600',
  border: 'border-purple-900',
  card: 'bg-zinc-950',
  text: 'text-white'
};

const MandaStrongStudio = () => {
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState(90);
  const [loading, setLoading] = useState(false);

  // --- CORE LOGIC ---
  const handleNext = () => setPage((p) => Math.min(p + 1, 21));
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));

  const handleCheckout = async (planName, price) => {
    setLoading(true);
    // Logic for Stripe Checkout Session via your Flask backend
    console.log(`Redirecting to Stripe for ${planName} at $${price}`);
    setLoading(false);
  };

  return (
    <div className={`min-h-screen ${MANDASTRONG_THEME.bg} ${MANDASTRONG_THEME.text} flex flex-col`}>
      
      {/* HEADER & NAVIGATION */}
      <header className={`p-4 border-b ${MANDASTRONG_THEME.border} flex justify-between items-center`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold italic">M</div>
          <h1 className="text-2xl font-black italic tracking-tighter">MANDASTRONG STUDIO</h1>
        </div>
        <div className="text-xs font-mono opacity-50">STAGING // PAGE {page}.0_v25</div>
      </header>

      {/* DYNAMIC PAGE RENDERER */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 overflow-y-auto">
        
        {/* PAGES 1-2: ONBOARDING */}
        {page <= 2 && (
          <div className="text-center max-w-4xl animate-in fade-in duration-700">
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">MAKE AMAZING FAMILY MOVIES</h2>
            <p className="text-xl opacity-70 mb-8 italic">Bring your dreams to life with the ultimate AI movie-making suite.</p>
            <button onClick={handleNext} className={`px-12 py-4 ${MANDASTRONG_THEME.accent} rounded-full font-bold text-lg hover:scale-105 transition-transform`}>
              GET STARTED
            </button>
          </div>
        )}

        {/* PAGE 3: SUBSCRIPTIONS */}
        {page === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              { name: 'Basic', price: 20, tools: '100 Tools' },
              { name: 'Pro', price: 30, tools: '300 Tools' },
              { name: 'Studio', price: 50, tools: '720 Tools' }
            ].map((plan) => (
              <div key={plan.name} className={`p-8 border-2 ${MANDASTRONG_THEME.border} rounded-3xl ${MANDASTRONG_THEME.card} relative overflow-hidden group`}>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-5xl font-black mb-6">${plan.price}<span className="text-base opacity-40 italic">/mo</span></div>
                <ul className="space-y-4 mb-8 text-sm opacity-80">
                  <li className="flex items-center gap-2">✓ {plan.tools}</li>
                  <li className="flex items-center gap-2">✓ 4K/8K Export</li>
                  <li className="flex items-center gap-2">✓ Full Commercial Rights</li>
                </ul>
                <button 
                  disabled={loading}
                  onClick={() => handleCheckout(plan.name, plan.price)}
                  className={`w-full py-4 rounded-xl font-bold ${MANDASTRONG_THEME.accent} group-hover:bg-purple-500 transition-colors`}
                >
                  {loading ? 'PROCESSING...' : 'SELECT PLAN'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* PAGES 4-9: CHRONOLOGICAL TOOLBOARD */}
        {(page >= 4 && page <= 9) && (
          <div className="w-full max-w-6xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-sm">{page - 3}</span>
              AI TOOLBOARD: PHASE {page - 3}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Array.from({ length: 120 }).map((_, i) => (
                <button key={i} className={`p-3 rounded-lg border ${MANDASTRONG_THEME.border} bg-zinc-900/50 text-[10px] text-left hover:bg-purple-900/40 transition-all uppercase truncate`}>
                  AI Tool #{((page-4) * 120) + (i + 1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PAGES 12-16: EDITOR SUITE */}
        {page === 16 && (
          <div className="w-full max-w-5xl space-y-8">
            <div className={`p-10 border-2 ${MANDASTRONG_THEME.border} rounded-3xl ${MANDASTRONG_THEME.card} text-center`}>
              <h3 className="text-2xl font-bold mb-10 opacity-60">SET MOVIE DURATION</h3>
              <div className="text-9xl font-black text-purple-500 mb-2">{duration}</div>
              <p className="text-xl font-mono tracking-widest opacity-40 mb-12">MINUTES</p>
              <input 
                type="range" min="0" max="180" value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-4 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-purple-500"
              />
            </div>
          </div>
        )}

        {/* PAGE 19: AGENT GROK HELP DESK */}
        {page === 19 && (
          <div className={`w-full max-w-2xl h-[500px] border ${MANDASTRONG_THEME.border} rounded-3xl ${MANDASTRONG_THEME.card} flex flex-col`}>
            <div className="p-4 border-b border-purple-900/50 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold">AGENT GROK 24/7</span>
            </div>
            <div className="flex-grow p-6 flex flex-col justify-end">
              <div className="bg-purple-900/20 p-4 rounded-2xl rounded-bl-none max-w-[80%] text-sm italic">
                "Hello! I'm Agent Grok, your 24/7 AI assistant for MandaStrong Studio. How can I help you today?"
              </div>
            </div>
            <div className="p-4 bg-zinc-900/30 flex gap-2">
              <input type="text" placeholder="Type a message..." className="flex-grow bg-black border border-purple-900/50 rounded-xl p-3 text-sm focus:outline-none" />
              <button className={`p-3 ${MANDASTRONG_THEME.accent} rounded-xl`}><ChevronRight /></button>
            </div>
          </div>
        )}

        {/* PAGE 21: MISSION FINALE */}
        {page === 21 && (
          <div className="text-center max-w-3xl space-y-8">
            <h2 className="text-7xl font-black italic">THAT'S ALL FOLKS!</h2>
            <div className={`p-8 border ${MANDASTRONG_THEME.border} rounded-3xl ${MANDASTRONG_THEME.card}`}>
              <p className="text-lg italic opacity-80 leading-relaxed">
                MandaStrong Studio is part of a comprehensive educational initiative designed to bring awareness to bullying prevention and social skills development.
              </p>
              <div className="mt-8 pt-8 border-t border-purple-900/30">
                <p className="text-purple-400 font-bold uppercase tracking-tighter">Supporting Our Heroes</p>
                <p className="text-sm mt-2">100% of Etsy Store proceeds benefit Veteran Mental Health Services.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* GLOBAL FOOTER NAVIGATION */}
      <footer className={`p-8 border-t ${MANDASTRONG_THEME.border} flex flex-col items-center`}>
        <div className="flex gap-4 w-full max-w-md mb-6">
          <button onClick={handleBack} className="flex-1 py-4 border border-zinc-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-900"><ChevronLeft size={20} /> BACK</button>
          <button onClick={handleNext} className={`flex-1 py-4 ${MANDASTRONG_THEME.accent} rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-500`}>NEXT <ChevronRight size={20} /></button>
        </div>
        <p className="text-[10px] opacity-30 text-center uppercase tracking-[0.2em]">
          MandaStrong1 2025 ~ Author of Doxy The School Bully ~ Visit MandaStrong1.Etsy.com
        </p>
      </footer>
    </div>
  );
};

export default MandaStrongStudio;