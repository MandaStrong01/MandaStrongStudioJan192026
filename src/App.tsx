
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Play, Bot, Zap, Upload, Menu, Check, ChevronRight, Music, Settings, Layers, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [movieDuration, setMovieDuration] = useState(90);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ADMIN BYPASS: woolleya129@gmail.com jumps to Editor Suite
  const handleLogin = () => {
    if (email.toLowerCase() === 'woolleya129@gmail.com') {
      setCurrentPage(11);
    } else {
      setCurrentPage(4);
    }
  };

  useEffect(() => {
    if (currentPage === 1 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 1: // LANDING PAGE
        return (
          <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
            <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="background__2_.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center">
              <h1 className="text-6xl md:text-9xl font-black mb-4 text-black italic tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>MANDASTRONG'S STUDIO</h1>
              <p className="text-2xl md:text-4xl mb-24 text-black font-bold italic">Welcome To The All-In-One Make-A-Movie App!</p>
              <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
                <button onClick={() => setCurrentPage(2)} className="bg-black text-white px-16 py-5 rounded-2xl font-bold text-xl shadow-2xl">Next</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl font-bold text-xl shadow-2xl">Login</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl font-bold text-xl shadow-2xl">Register</button>
              </div>
            </div>
          </div>
        );

      case 2: // BRANDING PAGE
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 text-white flex flex-col items-center justify-center text-center p-4">
            <Sparkles size={80} className="text-purple-400 mb-8" />
            <h1 className="text-7xl md:text-8xl font-bold mb-12 uppercase">MANDASTRONG'S STUDIO</h1>
            <p className="text-4xl md:text-5xl font-semibold text-purple-200 mb-4">Make Amazing Family Movies</p>
            <p className="text-4xl md:text-5xl font-semibold text-purple-200 mb-16">& Bring Dreams To Life!</p>
            <div className="flex gap-6">
              <button onClick={() => setCurrentPage(1)} className="bg-purple-700 px-12 py-5 rounded-xl text-xl font-bold border-2 border-purple-400">← Back</button>
              <button onClick={() => setCurrentPage(3)} className="bg-purple-600 px-12 py-5 rounded-xl text-xl font-bold">Next →</button>
            </div>
          </div>
        );

      case 3: // LOGIN & PRICING
        return (
          <div className="min-h-screen bg-black text-white p-8 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center italic uppercase">Login</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4 mb-4 text-white" />
                <button onClick={handleLogin} className="w-full bg-purple-600 py-4 rounded-xl font-bold">Login</button>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8 text-center"><h2 className="text-3xl font-bold mb-6 italic uppercase">Register</h2><button className="w-full bg-purple-600 py-4 rounded-xl font-bold">Create Account</button></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto border-t border-purple-900/50 pt-10">
              <div className="bg-purple-950/30 border-2 border-purple-600 p-8 rounded-3xl text-center">
                <h3 className="text-3xl font-bold mb-4">Basic</h3>
                <p className="text-5xl font-black mb-6">$20<span className="text-lg text-gray-400">/mo</span></p>
                <ul className="text-left space-y-2 mb-8 text-gray-400"><li><Check className="inline mr-2 text-purple-400"/>HD Export</li><li><Check className="inline mr-2 text-purple-400"/>100 AI Tools</li></ul>
                <button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select</button>
              </div>
              <div className="bg-purple-950/30 border-2 border-yellow-400 p-8 rounded-3xl text-center relative shadow-lg shadow-yellow-500/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1 rounded-full text-xs font-bold uppercase">Popular</div>
                <h3 className="text-3xl font-bold mb-4">Pro</h3>
                <p className="text-5xl font-black mb-6">$30<span className="text-lg text-gray-400">/mo</span></p>
                <ul className="text-left space-y-2 mb-8 text-gray-400"><li><Check className="inline mr-2 text-purple-400"/>4K Export</li><li><Check className="inline mr-2 text-purple-400"/>300 AI Tools</li></ul>
                <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">✓ SELECTED</button>
              </div>
              <div className="bg-purple-950/30 border-2 border-purple-600 p-8 rounded-3xl text-center">
                <h3 className="text-3xl font-bold mb-4">Studio</h3>
                <p className="text-5xl font-black mb-6">$50<span className="text-lg text-gray-400">/mo</span></p>
                <ul className="text-left space-y-2 mb-8 text-gray-400"><li><Check className="inline mr-2 text-purple-400"/>8K Export</li><li><Check className="inline mr-2 text-purple-400"/>All 600 AI Tools</li></ul>
                <button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select</button>
              </div>
            </div>
            <p className="text-center mt-12 text-gray-500">MandaStrong1 2026 ~ Author Of Doxy The School Bully ~ MandaStrong1.Etsy.com</p>
          </div>
        );

      case 11: // EDITOR SUITE
        return (
          <div className="min-h-screen bg-black text-white p-10">
            <h1 className="text-7xl font-black text-center mb-16 text-purple-500 uppercase italic">EDITOR SUITE</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
              {['Video Editor', 'Audio Mixer', 'Color Grading', 'Effects Library', 'Precision Tools', 'AI Enhancement'].map((item, i) => (
                <div key={i} className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8 hover:border-purple-400 transition-all">
                  <Film size={40} className="text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item}</h3>
                  <p className="text-gray-400 text-sm">Professional grade cinematic tools.</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              <button onClick={() => setCurrentPage(12)} className="bg-blue-600 px-12 py-5 rounded-xl font-bold text-xl">Media Library</button>
              <button onClick={() => setCurrentPage(13)} className="bg-purple-600 px-12 py-5 rounded-xl font-bold text-xl">Open Enhancement Studio</button>
            </div>
          </div>
        );

      case 13: // ENHANCEMENT STUDIO
        return (
          <div className="min-h-screen bg-black text-white p-8 flex flex-col">
            <h1 className="text-4xl font-bold mb-6 text-purple-500 italic uppercase">Enhancement Studio</h1>
            <div className="flex-1 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-2 border-purple-600 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                <Play size={100} className="text-purple-600 opacity-40" />
                <div className="absolute top-4 left-4 text-xs font-mono bg-purple-600 px-3 py-1 uppercase font-black tracking-widest">Live Viewer</div>
              </div>
              <div className="bg-gray-950 p-8 rounded-3xl border border-purple-900/40">
                <label className="text-2xl font-black block mb-8 italic uppercase text-purple-400 underline decoration-purple-600 underline-offset-8">Movie Duration Control</label>
                <input type="range" min="0" max="180" value={movieDuration} onChange={(e) => setMovieDuration(parseInt(e.target.value))} className="w-full h-4 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                <div className="flex justify-between mt-4 text-4xl font-black text-white"><span>{movieDuration} MIN</span><span className="text-gray-600 text-lg uppercase">3 Hour Max</span></div>
              </div>
            </div>
            <div className="flex justify-center mt-12 gap-8"><button onClick={() => setCurrentPage(11)} className="bg-gray-800 px-12 py-4 rounded-xl font-bold">Close</button><button onClick={() => setCurrentPage(21)} className="bg-purple-600 px-16 py-4 rounded-xl font-bold text-xl">RENDER MASTERPIECE</button></div>
          </div>
        );

      case 21: // FINALE
        return (
          <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-12 text-purple-500 italic uppercase tracking-tighter">THAT'S ALL FOLKS!</h1>
            <div className="bg-purple-900/40 border-2 border-purple-600 rounded-3xl p-10 max-w-4xl shadow-2xl">
              <h2 className="text-4xl font-bold mb-6 italic text-white uppercase tracking-widest">A Special Thank You</h2>
              <p className="text-2xl text-gray-300 italic mb-10">Supporting Veterans Mental Health & School Safety Initiatives.</p>
              <button onClick={() => window.open('https://MandaStrong1.Etsy.com')} className="bg-purple-600 px-16 py-5 rounded-2xl font-bold text-xl shadow-lg">Visit Etsy Store</button>
            </div>
            <button onClick={() => setCurrentPage(1)} className="mt-16 bg-green-600 px-24 py-6 rounded-2xl font-bold text-2xl border-2 border-green-400">🏠 Home</button>
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-purple-500 uppercase italic">Module {currentPage}</h1>
            <div className="flex gap-6 mt-10">
              <button onClick={() => setCurrentPage(currentPage - 1)} className="bg-purple-700 px-12 py-4 rounded-xl font-bold">Back</button>
              <button onClick={() => setCurrentPage(currentPage + 1)} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">Next</button>
            </div>
          </div>
        );
    }
  };

  return <div className="app bg-black min-h-screen font-sans selection:bg-purple-500">{renderPage()}</div>;
}