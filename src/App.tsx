import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  ChevronRight, ChevronLeft, Scissors, Play,
  ShieldCheck, HelpCircle, Users
} from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const App = () => {
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState(90);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('active', true)
      .order('price', { ascending: true });

    if (data && !error) {
      setPlans(data);
    }
    setLoading(false);
  };

  const handleNext = () => setPage((p) => Math.min(p + 1, 21));
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      
      {/* HEADER */}
      <header className="p-4 border-b border-purple-900 flex justify-between items-center bg-zinc-950">
        <h1 className="text-2xl font-black italic tracking-tighter text-white">
          MANDASTRONG STUDIO
        </h1>
        <div className="text-[10px] text-purple-500 font-mono">PAGE {page} / 21</div>
      </header>

      {/* DYNAMIC CONTENT */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        
        {/* PAGES 1-2: WELCOME */}
        {page <= 2 && (
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-black leading-tight">
              MAKE AMAZING <br/> <span className="text-purple-600">FAMILY MOVIES</span>
            </h2>
            <p className="text-xl opacity-60 italic">The All-In-One Make-A-Movie App</p>
            <button onClick={handleNext} className="mt-8 px-10 py-4 bg-purple-600 rounded-full font-bold hover:bg-purple-500 transition-all">
              ENTER STUDIO
            </button>
          </div>
        )}

        {/* PAGE 3: PRICING TIERS */}
        {page === 3 && (
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl font-black mb-8 text-center">CHOOSE YOUR PLAN</h2>
            {loading ? (
              <div className="text-center text-purple-500">Loading plans...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div key={plan.id} className="p-8 border border-purple-900 rounded-3xl bg-zinc-900/50 text-center hover:border-purple-500 transition-all">
                    <h3 className="text-xl font-bold mb-4">{plan.name.toUpperCase()}</h3>
                    <div className="text-5xl font-black mb-6 text-purple-500">${(plan.price / 100).toFixed(0)}</div>
                    <div className="space-y-2 mb-6 text-sm opacity-70">
                      <p>Max Projects: {plan.max_projects}</p>
                      <p>Storage: {plan.max_storage_gb}GB</p>
                    </div>
                    <button className="w-full py-3 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition-colors">
                      SELECT PLAN
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PAGE 13: TOOL BOARD (CHRONOLOGICAL) */}
        {page === 13 && (
          <div className="w-full max-w-6xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Scissors className="text-purple-500" /> AI ENHANCEMENT TOOLS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Auto Color Grade', 'Scene Detection', 'Audio Enhance', 'Noise Reduction',
                'Smart Crop', 'Face Tracking', 'Motion Blur', 'Stabilization',
                'Text Overlay', 'Transition FX', 'Speed Ramp', 'Green Screen',
                'Audio Ducking', 'Beat Sync', 'Voice Isolate', 'Echo Removal',
                'Background Blur', 'HDR Enhance', 'Film Grain', 'Vintage Look',
                'Auto Captions', 'Scene Match', 'Color Pop', 'Lens Flare',
                'Zoom Effect', 'Slow Motion', 'Time Lapse', 'Reverse Play'
              ].map((tool, i) => (
                <button key={i} className="p-4 border border-purple-900 bg-zinc-900 rounded-xl text-xs text-left hover:bg-purple-600 transition-all hover:scale-105 font-semibold">
                  {tool}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 16: DURATION CONTROL */}
        {page === 16 && (
          <div className="w-full max-w-2xl p-10 bg-zinc-900 rounded-3xl border border-purple-900 text-center">
            <h3 className="text-xl opacity-50 mb-4">SET MOVIE DURATION</h3>
            <div className="text-9xl font-black text-purple-600 mb-4">{duration}</div>
            <p className="text-sm tracking-[0.5em] mb-10">MINUTES</p>
            <input 
              type="range" min="0" max="180" value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>
        )}

        {/* PAGE 21: MISSION & LEGAL */}
        {page === 21 && (
          <div className="text-center max-w-2xl space-y-8">
            <h2 className="text-6xl font-black italic text-purple-500">THAT'S ALL FOLKS!</h2>
            <div className="p-8 border border-purple-900 bg-zinc-950 rounded-3xl">
              <p className="italic opacity-70">Supporting Our Heroes: 100% of Etsy Store proceeds benefit Veteran Mental Health Services.</p>
            </div>
          </div>
        )}

      </main>

      {/* NAVIGATION FOOTER */}
      <footer className="p-8 border-t border-purple-900 bg-black flex flex-col items-center gap-4">
        <div className="flex gap-4 w-full max-w-sm">
          <button onClick={handleBack} className="flex-1 py-4 border border-zinc-800 rounded-2xl font-bold flex items-center justify-center gap-2">
            <ChevronLeft size={18} /> BACK
          </button>
          <button onClick={handleNext} className="flex-1 py-4 bg-purple-600 rounded-2xl font-bold flex items-center justify-center gap-2">
            NEXT <ChevronRight size={18} />
          </button>
        </div>
        <p className="text-[9px] opacity-30 tracking-[0.3em] text-center">
          MandaStrong1 2025 ~ Author of Doxy The School Bully ~ MandaStrong1.Etsy.com
        </p>
      </footer>
    </div>
  );
};

export default App;