import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronRight, ChevronLeft, Menu, Settings, Music, Layers, X, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [movieDuration, setMovieDuration] = useState(90);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thatsAllFolksRef = useRef<HTMLVideoElement>(null);

  // Video Autoplay Logic
  useEffect(() => {
    if (currentPage === 1 && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
    if (currentPage === 21 && thatsAllFolksRef.current) {
      thatsAllFolksRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, [currentPage]);

  const navigateTo = (page: number) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      
      // PAGE 1: LANDING PAGE
      case 1:
        return (
          <div className="min-h-screen relative overflow-hidden">
            <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="background__2_.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-6xl md:text-9xl font-black mb-4 text-black italic tracking-tighter" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                MANDASTRONG'S STUDIO
              </h1>
              <p className="text-2xl md:text-4xl mb-24 text-black font-bold italic">
                Welcome To The All-In-One Make-A-Movie App!
              </p>
              <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex gap-6">
                <button onClick={() => setCurrentPage(2)} className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all">Next</button>
                <button onClick={() => navigateTo(3)} className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all">Login</button>
                <button onClick={() => navigateTo(3)} className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all">Register</button>
              </div>
            </div>
          </div>
        );

      // PAGE 2: BRANDING
      case 2:
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 text-white flex flex-col items-center justify-center text-center px-4">
            <Sparkles size={80} className="text-purple-400 mb-8" />
            <h1 className="text-7xl md:text-8xl font-bold mb-12">MANDASTRONG'S STUDIO</h1>
            <div className="space-y-4 mb-16">
              <p className="text-4xl md:text-5xl font-semibold text-purple-200">Make Amazing Family Movies</p>
              <p className="text-4xl md:text-5xl font-semibold text-purple-200">& Bring Dreams To Life!</p>
            </div>
            <div className="flex gap-6">
              <button onClick={() => setCurrentPage(1)} className="bg-purple-700 px-12 py-5 rounded-xl text-xl font-bold border-2 border-purple-400">← Back</button>
              <button onClick={() => setCurrentPage(3)} className="bg-purple-600 px-12 py-5 rounded-xl text-xl font-bold">Next →</button>
            </div>
          </div>
        );

      // PAGE 3: LOGIN, REGISTER & PLANS
      case 3:
        return (
          <div className="min-h-screen bg-black text-white p-8 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                <div className="space-y-4">
                  <input placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4" />
                  <input type="password" placeholder="••••••••" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4" />
                  <button className="w-full bg-purple-600 py-4 rounded-xl font-bold">Login</button>
                </div>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>
                <div className="space-y-4">
                  <input placeholder="Your Name" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4" />
                  <input placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4" />
                  <button className="w-full bg-purple-600 py-4 rounded-xl font-bold">Create Account</button>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto border-t border-purple-900/50 pt-10">
              {/* Plan $10 */}
              <div className="bg-purple-950/30 border-2 border-purple-600 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-5xl font-black mb-6">$10<span className="text-xl text-gray-500">/mo</span></p>
                <button className="w-full bg-gray-700 py-4 rounded-xl font-bold">Select Plan</button>
              </div>
              {/* Plan $20 */}
              <div className="bg-purple-950/30 border-2 border-yellow-400 rounded-3xl p-8 text-center relative shadow-lg shadow-yellow-500/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1 rounded-full text-xs font-bold uppercase">Popular</div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-5xl font-black mb-6">$20<span className="text-xl text-gray-500">/mo</span></p>
                <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold">✓ SELECTED</button>
              </div>
              {/* Plan $30 */}
              <div className="bg-purple-950/30 border-2 border-purple-600 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Studio</h3>
                <p className="text-5xl font-black mb-6">$30<span className="text-xl text-gray-500">/mo</span></p>
                <button className="w-full bg-gray-700 py-4 rounded-xl font-bold">Select Plan</button>
              </div>
            </div>

            <div className="text-center mt-12 space-y-4">
              <button onClick={() => setCurrentPage(11)} className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-2xl font-bold text-lg shadow-lg">
                Open Enhancement Studio
              </button>
              <div className="mt-8">
                <button onClick={() => setCurrentPage(4)} className="bg-purple-600 hover:bg-purple-500 px-16 py-5 rounded-2xl font-bold text-2xl">
                  Continue to Payment
                </button>
              </div>
            </div>
            
            <p className="text-center mt-12 text-gray-500 text-sm">
              MandaStrong1 2026 ~ Author Of Doxy The School Bully ~ MandaStrong1.Etsy.com
            </p>
          </div>
        );

      // PAGE 11: EDITOR SUITE
      case 11:
        return (
          <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-7xl font-black text-center mb-16 text-purple-500 uppercase italic">EDITOR SUITE</h1>
            <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-10 max-w-5xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-8">Ready to Create?</h3>
              <div className="flex gap-6 justify-center">
                <button className="bg-blue-600 px-12 py-5 rounded-xl font-bold text-xl flex items-center gap-3"><Upload size={24} /> Media Library</button>
                <button onClick={() => setCurrentPage(13)} className="bg-purple-600 px-12 py-5 rounded-xl font-bold text-xl flex items-center gap-3"><Film size={24} /> Open Enhancement Studio</button>
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <button onClick={() => setCurrentPage(3)} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">← Back</button>
              <button onClick={() => setCurrentPage(12)} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">Next →</button>
            </div>
          </div>
        );

      // PAGE 21: FINALE
      case 21:
        return (
          <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-12 text-purple-500 tracking-tighter uppercase italic animate-pulse">
              THAT'S ALL FOLKS!
            </h1>
            <div className="bg-purple-900/40 border-2 border-purple-600 rounded-3xl p-10 max-w-4xl mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white italic">A Special Thank You</h2>
              <p className="text-xl text-gray-300">Supporting Veterans Mental Health & School Safety Initiatives.</p>
              <button onClick={() => window.open('https://MandaStrong1.Etsy.com')} className="mt-8 bg-purple-600 px-10 py-4 rounded-xl font-bold text-white">Visit Etsy Store</button>
            </div>
            <button onClick={() => setCurrentPage(1)} className="bg-green-600 hover:bg-green-500 px-20 py-6 rounded-2xl font-bold text-xl border-2 border-green-400 transition-all">🏠 Home</button>
            <p className="mt-10 text-gray-600 text-sm">MandaStrong1 2026 ~ Author Of Doxy The School Bully</p>
          </div>
        );

      // DEFAULT FALLBACK
      default:
        return (
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-purple-500 uppercase italic">Studio Page {currentPage}</h1>
            <div className="flex gap-6 mt-10">
              <button onClick={() => setCurrentPage(currentPage - 1)} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">← Back</button>
              <button onClick={() => setCurrentPage(currentPage + 1)} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">Next →</button>
            </div>
          </div>
        );
    }
  };

  return <div className="app bg-black min-h-screen">{renderPage()}</div>;
}