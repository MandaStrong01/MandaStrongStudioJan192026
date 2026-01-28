import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronRight, ChevronLeft, Menu, Settings, Music, Layers, X, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [movieDuration, setMovieDuration] = useState(90);
  const videoRef = useRef<HTMLVideoElement>(null);

  // OWNER AUTOMATIC ACCESS LOGIC
  const handleLogin = () => {
    if (email.toLowerCase() === 'woolleya129@gmail.com') {
      setCurrentPage(11); // Professional Suite Access for Owner
    } else {
      setCurrentPage(4);
    }
  };

  useEffect(() => {
    if (currentPage === 1 && videoRef.current) {
      videoRef.current.play().catch(e => console.log(e));
    }
  }, [currentPage]);

  const ToolBoard = ({ title, tools, onNext, onBack }: any) => (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500 uppercase tracking-tighter">AI TOOL BOARD</h1>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2"><Menu size={24} /> Quick Access</button>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
        {tools.map((tool: string, i: number) => (
          <button key={i} className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-600 rounded-xl p-6 text-left flex items-center gap-4 group">
            <Sparkles size={32} className="text-purple-400 group-hover:scale-110" />
            <span className="text-xl font-bold">{tool}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-6 pb-20">
        <button onClick={onBack} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 px-16 py-4 rounded-xl font-bold">Next →</button>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 1: // LANDING
        return (
          <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
            <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="background__2_.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center">
              <h1 className="text-6xl md:text-9xl font-black mb-4 text-black italic" style={{ fontFamily: 'Impact, sans-serif' }}>MANDASTRONG'S STUDIO</h1>
              <p className="text-2xl md:text-4xl mb-24 text-black font-bold italic">An All In One Make A Movie App! 2 ~ 2.5 Hours Duration</p>
              <div className="flex gap-6 justify-center">
                <button onClick={() => setCurrentPage(2)} className="bg-black text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl">Next</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl">Login</button>
                <button onClick={() => setCurrentPage(3)} className="bg-black text-white px-16 py-5 rounded-2xl text-xl font-bold shadow-2xl">Register</button>
              </div>
            </div>
          </div>
        );

      case 3: // PRICING & ADMIN LOGIN
        return (
          <div className="min-h-screen bg-black text-white p-8 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center italic">Login</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="woolleya129@gmail.com" className="w-full bg-black border-2 border-purple-600 rounded-xl p-4 mb-4" />
                <button onClick={handleLogin} className="w-full bg-purple-600 py-4 rounded-xl font-bold">Login</button>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-600 rounded-3xl p-8"><h2 className="text-3xl font-bold mb-6 text-center italic">Register</h2><button className="w-full bg-purple-600 py-4 rounded-xl font-bold">Create Account</button></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto border-t border-purple-900/50 pt-10">
              <div className="bg-purple-950/30 border-2 border-purple-600 p-8 rounded-3xl text-center"><h3 className="text-2xl font-bold mb-4">Basic</h3><p className="text-5xl font-black mb-6">$20<span className="text-lg text-gray-500">/mo</span></p><button className="w-full bg-gray-700 py-3 rounded-xl">Select</button></div>
              <div className="bg-purple-950/30 border-2 border-yellow-400 p-8 rounded-3xl text-center relative shadow-lg"><div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1 rounded-full text-xs font-bold uppercase">Popular</div><h3 className="text-2xl font-bold mb-4">Pro</h3><p className="text-5xl font-black mb-6">$30<span className="text-lg text-gray-500">/mo</span></p><button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">✓ SELECTED</button></div>
              <div className="bg-purple-950/30 border-2 border-purple-600 p-8 rounded-3xl text-center"><h3 className="text-2xl font-bold mb-4">Studio</h3><p className="text-5xl font-black mb-6">$50<span className="text-lg text-gray-400">/mo</span></p><ul className="mb-6"><li><Check className="inline mr-2 text-purple-400" /> All 600 AI Tools</li></ul><button className="w-full bg-gray-700 py-3 rounded-xl font-bold">Select</button></div>
            </div>
          </div>
        );

      case 4: return <ToolBoard title="AI TOOL BOARD" onNext={() => setCurrentPage(5)} onBack={() => setCurrentPage(3)} tools={['Dialogue Writer', 'Plot Generator', 'Scene Writer', 'Story Outliner', 'Character Developer', 'Dialogue Editor', 'Plot Designer', 'Story Planner', 'Treatment Writer', 'Script Formatter']} />;
      case 5: return <ToolBoard title="AI TOOL BOARD" onNext={() => setCurrentPage(6)} onBack={() => setCurrentPage(4)} tools={['Voice Maker', 'Voice Cloner', 'Voice Creator Tool', 'Voice Recorder', 'Speech Converter', 'Voice Builder', 'Advanced Voice Generator', 'Voice Studio Tool', 'Premium Voice Generator', 'Voice Audio Tool']} />;
      case 6: return <ToolBoard title="AI TOOL BOARD" onNext={() => setCurrentPage(7)} onBack={() => setCurrentPage(5)} tools={['Image Creator', 'Advanced Image Generator', 'Design Generator', 'Image Tool', 'Art Maker', 'Art Mixer', 'Image Stream Tool', 'Art Library Tool', 'Workflow Tool', 'Auto Image Generator']} />;
      case 7: return <ToolBoard title="AI TOOL BOARD" onNext={() => setCurrentPage(8)} onBack={() => setCurrentPage(6)} tools={['Motion Video Maker', 'Video Creator', 'Avatar Generator', 'Video Synthesizer', 'Video Studio', 'Video Flow Generator', 'Video Creator Studio', 'Video Crafter', 'Image to Motion Tool', 'Video Style Tool']} />;
      case 8: return <ToolBoard title="AI TOOL BOARD" onNext={() => setCurrentPage(9)} onBack={() => setCurrentPage(7)} tools={['Motion Animator', 'Motion Studio', 'Auto Animator', 'Motion Flow Tool', 'Motion Capture Pro', 'Webcam Motion Tool', 'Skeleton Tracker', 'Joint Tracker', 'Character Rigger', '3D Character Studio']} />;
      case 9: return <ToolBoard title="AI TOOL BOARD" onNext={() => setCurrentPage(10)} onBack={() => setCurrentPage(8)} tools={['Smart Video Editor', 'Auto Editor', 'Video Tools Suite', 'Edit Master', 'Scene Detector', 'Beat Syncer', 'Auto Assembly Tool', 'Smart Timeline', 'Highlight Finder', 'Key Moment Finder']} />;

      case 12: // MEDIA LIBRARY + ENHANCEMENT BUTTON
        return (
          <div className="min-h-screen bg-black text-white p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-purple-500 italic uppercase">Media Library</h1>
              <button onClick={() => setCurrentPage(13)} className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-xl font-bold shadow-lg">Open Enhancement Studio</button>
            </div>
            <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-900 border-2 border-purple-900 rounded-3xl italic text-gray-500">Professional Assets Active...</div>
          </div>
        );

      case 13: // ENHANCEMENT STUDIO
        return (
          <div className="min-h-screen bg-black text-white p-8 flex flex-col">
            <h1 className="text-4xl font-bold mb-6 text-purple-500 italic uppercase">Enhancement Studio</h1>
            <div className="flex-1 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-2 border-purple-600 rounded-3xl flex items-center justify-center relative"><Play size={100} className="text-purple-600 opacity-50" /><div className="absolute top-4 left-4 text-xs font-mono bg-purple-600 px-3 py-1">LIVE VIEWER</div></div>
              <div className="space-y-10 bg-gray-950 p-8 rounded-3xl border border-purple-900/40">
                <div>
                  <label className="text-xl font-bold block mb-4 italic">Movie Duration Control</label>
                  <input type="range" min="0" max="180" value={movieDuration} onChange={(e) => setMovieDuration(parseInt(e.target.value))} className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                  <div className="flex justify-between mt-4 text-3xl font-black text-purple-400"><span>{movieDuration} MINUTES</span><span className="text-gray-600 text-sm">180 MIN MAX</span></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12 gap-6"><button onClick={() => setCurrentPage(12)} className="bg-gray-800 px-12 py-4 rounded-xl font-bold">Close Studio</button><button onClick={() => setCurrentPage(21)} className="bg-purple-600 px-16 py-4 rounded-xl font-bold text-xl">RENDER MASTERPIECE</button></div>
          </div>
        );

      case 21: // FINALE
        return (
          <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-12 text-purple-500 italic uppercase">THAT'S ALL FOLKS!</h1>
            <div className="bg-purple-900/40 border-2 border-purple-600 rounded-2xl p-10 max-w-4xl"><p className="text-xl text-gray-300 italic mb-6">Supporting Veterans Mental Health & School Safety Initiatives.</p><button onClick={() => window.open('https://MandaStrong1.Etsy.com')} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">Visit MandaStrong1.Etsy.com</button></div>
            <button onClick={() => setCurrentPage(1)} className="mt-12 bg-green-600 px-20 py-6 rounded-2xl font-bold text-xl">🏠 Home</button>
          </div>
        );

      default: return <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center"><h1 className="text-5xl font-bold text-purple-500 italic">Module {currentPage}</h1><div className="flex gap-6 mt-10"><button onClick={() => setCurrentPage(currentPage - 1)} className="bg-purple-700 px-12 py-4 rounded-xl font-bold">Back</button><button onClick={() => setCurrentPage(currentPage + 1)} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">Next</button></div></div>;
    }
  };

  return <div className="app bg-black min-h-screen">{renderPage()}</div>;
}