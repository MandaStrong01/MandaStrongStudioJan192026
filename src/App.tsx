import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Play, Bot, Zap, Upload, Menu, Check, ChevronRight, Search, X, Music, Settings, Layers } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [movieDuration, setMovieDuration] = useState(90);
  const [searchQuery, setSearchQuery] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const thatsAllFolksRef = useRef<HTMLVideoElement>(null);

  // OWNER/ADMIN BYPASS LOGIC
  const handleLogin = () => {
    if (email.toLowerCase() === 'woolleya129@gmail.com') {
      setCurrentPage(11); // Immediate access to Editor Suite
    } else {
      setCurrentPage(4);
    }
  };

  useEffect(() => {
    if (currentPage === 1 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [currentPage]);

  // NAVIGATION COMPONENTS
  const NavButtons = ({ prev, next }: { prev: number; next: number }) => (
    <div className="flex justify-center gap-6 mt-12 mb-20">
      <button onClick={() => setCurrentPage(prev)} className="bg-purple-800 hover:bg-purple-700 text-white px-12 py-4 rounded-2xl font-bold border-2 border-purple-500 transition-all">← Back</button>
      <button onClick={() => setCurrentPage(next)} className="bg-purple-600 hover:bg-purple-500 text-white px-16 py-4 rounded-2xl font-bold transition-all">Next →</button>
    </div>
  );

  const QuickAccess = () => (
    <div className="fixed top-6 right-6 z-50 group">
      <button className="bg-purple-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2">
        <Menu size={24} /> <span className="font-bold hidden group-hover:block">Quick Access</span>
      </button>
    </div>
  );

  const GrokBubble = () => (
    <button onClick={() => setCurrentPage(19)} className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-all border-2 border-purple-400">
      <Bot size={32} className="text-white" />
    </button>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 1: // LANDING
        return (
          <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
            <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="background__2_.mp4" type="video/mp4" />
            </video>
            <QuickAccess />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-6xl md:text-9xl font-black mb-4 text-black italic tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>MANDASTRONG'S STUDIO</h1>
              <p className="text-2xl md:text-4xl mb-32 text-black font-bold italic">Welcome To The All-In-One Make-A-Movie App!</p>
              <div className="flex gap-6 justify-center">
                <button onClick={() => setCurrentPage(2)} className="bg-black text-white px-16 py-5 rounded-2xl font-bold text-xl shadow-2xl">Next</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl font-bold text-xl shadow-2xl">Login</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl font-bold text-xl shadow-2xl">Register</button>
              </div>
            </div>
            <GrokBubble />
          </div>
        );

      case 3: // LOGIN & UPDATED PLANS
        return (
          <div className="min-h-screen bg-black text-white p-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-10">
                <h2 className="text-3xl font-bold mb-8 italic uppercase">Login</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="woolleya129@gmail.com" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4 mb-4 text-white" />
                <button onClick={handleLogin} className="w-full bg-purple-600 py-4 rounded-xl font-bold text-xl">Login</button>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-10"><h2 className="text-3xl font-bold mb-8 italic uppercase text-center">Register</h2><button className="w-full bg-purple-600 py-4 rounded-xl font-bold text-xl">Create Account</button></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto pt-10 border-t border-purple-900/40">
              <div className="border-2 border-purple-600 p-8 rounded-3xl text-center"><h3 className="text-2xl font-bold mb-4">Basic</h3><p className="text-5xl font-black mb-6">$20<span className="text-lg text-gray-500">/mo</span></p><button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select</button></div>
              <div className="border-2 border-yellow-400 p-8 rounded-3xl text-center relative bg-purple-950/30 shadow-2xl shadow-yellow-500/10"><div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1 rounded-full text-xs font-bold uppercase">Popular</div><h3 className="text-2xl font-bold mb-4">Pro</h3><p className="text-5xl font-black mb-6">$30<span className="text-lg text-gray-400">/mo</span></p><button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">✓ SELECTED</button></div>
              <div className="border-2 border-purple-600 p-8 rounded-3xl text-center"><h3 className="text-2xl font-bold mb-4">Studio</h3><p className="text-5xl font-black mb-6">$50<span className="text-lg text-gray-400">/mo</span></p><button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select</button></div>
            </div>
            <NavButtons prev={2} next={4} />
          </div>
        );

      case 4: // TOOL BOARD WITH SEARCH
        return (
          <div className="min-h-screen bg-black text-white p-8">
            <div className="flex justify-between items-center mb-10">
              <div className="relative w-96">
                <Search className="absolute left-4 top-4 text-gray-500" size={20} />
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Tools..." className="w-full bg-gray-900 border-2 border-purple-600 rounded-xl py-3 pl-12 pr-4 focus:border-purple-400" />
              </div>
              <h1 className="text-4xl font-bold text-purple-500 italic uppercase">AI Tool Board</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {['Dialogue Writer', 'Plot Generator', 'Scene Writer', 'Story Outliner', 'Voice Maker', 'Image Creator'].map((t, i) => (
                <button key={i} className="bg-gray-900 border-2 border-purple-600 p-6 rounded-2xl flex items-center gap-4 hover:border-purple-400 transition-all">
                  <Sparkles size={24} className="text-purple-400" /> <span className="font-bold">{t}</span>
                </button>
              ))}
            </div>
            <NavButtons prev={3} next={5} />
          </div>
        );

      case 12: // MEDIA LIBRARY + OPEN BUTTON
        return (
          <div className="min-h-screen bg-black text-white p-10">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-bold text-purple-500 italic uppercase">Media Library</h1>
              <button onClick={() => setCurrentPage(13)} className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 border-2 border-blue-400">
                <Play size={20} fill="white" /> Open Enhancement Studio
              </button>
            </div>
            <div className="h-[50vh] bg-gray-900 border-2 border-dashed border-purple-900/50 rounded-3xl flex flex-col items-center justify-center opacity-50 italic text-gray-500">
              Professional Assets Loading...
            </div>
            <NavButtons prev={11} next={14} />
          </div>
        );

      case 13: // ENHANCEMENT STUDIO (3-HOUR CAPACITY)
        return (
          <div className="min-h-screen bg-black text-white p-10 flex flex-col">
            <h1 className="text-4xl font-black mb-8 text-purple-500 italic uppercase tracking-widest underline decoration-purple-600 underline-offset-8">Enhancement Studio</h1>
            <div className="flex-1 grid md:grid-cols-2 gap-12">
              <div className="bg-gray-900 border-2 border-purple-600 rounded-3xl flex items-center justify-center relative shadow-2xl">
                <Play size={100} className="text-purple-600 opacity-30" />
                <div className="absolute top-4 left-4 bg-purple-600 px-4 py-1 rounded-lg text-xs font-black uppercase">Real-Time Viewer Active</div>
              </div>
              <div className="bg-gray-950 p-12 rounded-3xl border border-purple-900/40">
                <label className="text-2xl font-black block mb-10 italic text-purple-400 uppercase">Adjust Film Duration</label>
                <input type="range" min="0" max="180" value={movieDuration} onChange={(e) => setMovieDuration(parseInt(e.target.value))} className="w-full h-4 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                <div className="flex justify-between mt-10 text-5xl font-black text-white">
                  <span>{movieDuration} MIN</span>
                  <span className="text-gray-600 text-lg uppercase">180 MIN Limit</span>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-16">
                  <button className="bg-gray-900 border border-purple-900 p-6 rounded-2xl font-bold hover:bg-purple-900/20">Color Grading</button>
                  <button className="bg-gray-900 border border-purple-900 p-6 rounded-2xl font-bold hover:bg-purple-900/20">Audio Mixer</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12 gap-8">
              <button onClick={() => setCurrentPage(12)} className="bg-gray-800 px-16 py-4 rounded-xl font-bold border border-gray-600">Close Studio</button>
              <button onClick={() => setCurrentPage(21)} className="bg-purple-600 px-24 py-5 rounded-xl font-bold text-2xl shadow-xl hover:scale-105 transition-all">RENDER MASTERPIECE</button>
            </div>
          </div>
        );

      case 21: // FINALE
        return (
          <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-12 text-purple-500 italic uppercase tracking-tighter">THAT'S ALL FOLKS!</h1>
            <div className="bg-purple-900/40 border-2 border-purple-600 rounded-3xl p-16 max-w-4xl shadow-2xl backdrop-blur-xl">
              <p className="text-2xl text-gray-300 italic mb-10">Supporting Veterans Mental Health & School Safety Initiatives through Cinematic Expression.</p>
              <button onClick={() => window.open('https://MandaStrong1.Etsy.com')} className="bg-purple-600 px-16 py-5 rounded-2xl font-bold text-xl uppercase tracking-tighter shadow-lg hover:bg-purple-500">Visit Etsy Store</button>
            </div>
            <button onClick={() => setCurrentPage(1)} className="mt-16 bg-green-600 px-24 py-6 rounded-2xl font-bold text-2xl border-2 border-green-400 hover:bg-green-500 transition-all uppercase italic">🏠 Home</button>
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-purple-500 uppercase italic">Module {currentPage}</h1>
            <NavButtons prev={currentPage - 1} next={currentPage + 1} />
          </div>
        );
    }
  };

  return <div className="app bg-black min-h-screen font-sans selection:bg-purple-500">{renderPage()}</div>;
}
