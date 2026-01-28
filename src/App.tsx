import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronRight, ChevronLeft, Menu, Settings, Music, Layers, X, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieDuration, setMovieDuration] = useState(90);
  const [volume, setVolume] = useState(75);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thatsAllFolksRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (currentPage === 1 && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      // PAGE 1: LANDING
      case 1:
        return (
          <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
            <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="background__2_.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-6xl md:text-9xl font-black mb-4 text-black italic tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>MANDASTRONG'S STUDIO</h1>
              <p className="text-2xl md:text-4xl mb-24 text-black font-bold italic tracking-tight">An All In One Make A Movie App! 2 ~ 2.5 Hours Duration</p>
              <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
                <button onClick={() => setCurrentPage(2)} className="bg-black text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl">Next</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl">Login</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl">Register</button>
              </div>
            </div>
          </div>
        );

      // PAGE 3: PRICING & LOGIN
      case 3:
        return (
          <div className="min-h-screen bg-black text-white p-8 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center italic">Login</h2>
                <input placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4 mb-4" />
                <input type="password" placeholder="••••••••" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4 mb-4" />
                <button className="w-full bg-purple-600 py-4 rounded-xl font-bold">Login</button>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center italic">Register</h2>
                <input placeholder="Your Name" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4 mb-4" />
                <button className="w-full bg-purple-600 py-4 rounded-xl font-bold">Create Account</button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto border-t border-purple-900/50 pt-10">
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-5xl font-black mb-6">$20<span className="text-lg text-gray-500">/mo</span></p>
                <ul className="text-left space-y-3 mb-8 text-gray-400">
                  <li><Check className="inline mr-2 text-purple-400" /> HD Export</li>
                  <li><Check className="inline mr-2 text-purple-400" /> 100 AI Tools</li>
                </ul>
                <button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select Plan</button>
              </div>
              <div className="bg-purple-900/20 border-2 border-yellow-400 rounded-3xl p-8 text-center relative shadow-lg">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1 rounded-full text-xs font-bold uppercase">Popular</div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-5xl font-black mb-6">$30<span className="text-lg text-gray-400">/mo</span></p>
                <ul className="text-left space-y-3 mb-8 text-gray-400">
                  <li><Check className="inline mr-2 text-purple-400" /> 4K Export</li>
                  <li><Check className="inline mr-2 text-purple-400" /> 300 AI Tools</li>
                </ul>
                <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">✓ SELECTED</button>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Studio</h3>
                <p className="text-5xl font-black mb-6">$50<span className="text-lg text-gray-400">/mo</span></p>
                <ul className="text-left space-y-3 mb-8 text-gray-400">
                  <li><Check className="inline mr-2 text-purple-400" /> 8K Export</li>
                  <li><Check className="inline mr-2 text-purple-400" /> All 600 AI Tools</li>
                </ul>
                <button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select Plan</button>
              </div>
            </div>
            <p className="text-center mt-12 text-gray-500 text-sm">MandaStrong1 2026 ~ Author Of Doxy The School Bully ~ MandaStrong1.Etsy.com</p>
          </div>
        );

      // PAGE 12: MEDIA LIBRARY + ENHANCEMENT BUTTON
      case 12:
        return (
          <div className="min-h-screen bg-black text-white p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-purple-500 italic uppercase">Media Library</h1>
              <button onClick={() => setCurrentPage(13)} className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-xl font-bold shadow-lg">Open Enhancement Studio</button>
            </div>
            <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-900 border-2 border-dashed border-purple-900 rounded-3xl">
              <Film size={64} className="opacity-20 mb-4" />
              <p className="text-gray-500">No Movies Yet</p>
            </div>
            <div className="flex justify-between mt-10">
              <button onClick={() => setCurrentPage(11)} className="bg-purple-700 px-10 py-3 rounded-xl">Back</button>
              <button onClick={() => setCurrentPage(14)} className="bg-purple-600 px-10 py-3 rounded-xl">Next</button>
            </div>
          </div>
        );

      // PAGE 13: ENHANCEMENT STUDIO (PROFESSIONAL BUILD)
      case 13:
        return (
          <div className="min-h-screen bg-black text-white p-8 flex flex-col">
            <h1 className="text-4xl font-bold mb-6 text-purple-500 italic uppercase">Enhancement Studio</h1>
            <div className="flex-1 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-2 border-purple-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <Play size={100} className="text-purple-600 opacity-50" />
                <div className="absolute top-4 left-4 text-xs font-mono bg-purple-600 px-3 py-1">REAL-TIME VIEWER</div>
              </div>
              <div className="space-y-10 bg-gray-950 p-8 rounded-3xl border border-purple-900/40">
                <div>
                  <label className="text-xl font-bold block mb-4">Set Movie Duration</label>
                  <input type="range" min="0" max="180" value={movieDuration} onChange={(e) => setMovieDuration(parseInt(e.target.value))} className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                  <div className="flex justify-between mt-4 text-3xl font-black text-purple-400">
                    <span>{movieDuration} MINUTES</span>
                    <span className="text-gray-600 text-sm">MAX 180</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gray-800 p-4 rounded-xl border border-purple-900/30">Color Grading</button>
                  <button className="bg-gray-800 p-4 rounded-xl border border-purple-900/30">Audio Mixer</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12 gap-6">
              <button onClick={() => setCurrentPage(12)} className="bg-gray-800 px-12 py-4 rounded-xl font-bold border border-gray-600">Close Studio</button>
              <button onClick={() => setCurrentPage(21)} className="bg-purple-600 px-16 py-4 rounded-xl font-bold text-xl">Final Render</button>
            </div>
          </div>
        );

      // PAGE 21: FINALE
      case 21:
        return (
          <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-12 text-purple-500 italic uppercase tracking-tighter">THAT'S ALL FOLKS!</h1>
            <div className="bg-purple-900/40 border-2 border-purple-600 rounded-2xl p-10 max-w-4xl">
              <h2 className="text-4xl font-bold mb-6 italic">A Special Thank You</h2>
              <p className="text-xl text-gray-300">Supporting Veterans Mental Health & School Safety Initiatives.</p>
              <button onClick={() => window.open('https://MandaStrong1.Etsy.com')} className="mt-8 bg-purple-600 px-10 py-4 rounded-xl font-bold text-white">Visit MandaStrong1.Etsy.com</button>
            </div>
            <button onClick={() => setCurrentPage(1)} className="mt-12 bg-green-600 px-20 py-6 rounded-2xl font-bold text-xl border-2 border-green-400">🏠 Home</button>
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-purple-500 uppercase italic">Studio Page {currentPage}</h1>
            <div className="flex gap-6 mt-10">
              <button onClick={() => setCurrentPage(currentPage - 1)} className="bg-purple-700 px-12 py-4 rounded-xl font-bold">Back</button>
              <button onClick={() => setCurrentPage(currentPage + 1)} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">Next</button>
            </div>
          </div>
        );
    }
  };

  return <div className="app bg-black min-h-screen">{renderPage()}</div>;
}