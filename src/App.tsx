import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Search, Film, Play, Bot, Upload, Menu, Home, Settings, User, LogOut, FileText, Volume2, Sliders, Palette, Type, Video as VideoIcon, Download, Mic, Image as ImageIcon, Clapperboard, Heart, ThumbsUp, MessageCircle } from 'lucide-react';

// ============================================================================
// PAGE 1 - OCEAN VIDEO LANDING (BLACK & PURPLE)
// ============================================================================
const Page1 = ({ onNext, onNavigate }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="background.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 text-black tracking-tight" style={{ fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}>
          MANDASTRONG'S STUDIO
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl mb-32 text-black font-bold italic">
          An All In One Make A Movie App! 2 ~ 2.5 Hours Duration
        </p>
      </div>
      
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-4 sm:gap-6 z-20 justify-center px-4">
        <button onClick={onNext} className="bg-black hover:bg-gray-900 text-white px-16 sm:px-20 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl font-bold transition-all shadow-2xl border-2 border-white">Next</button>
        <button onClick={() => onNavigate(3)} className="bg-black hover:bg-gray-900 text-white px-16 sm:px-20 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl font-bold transition-all shadow-2xl border-2 border-white">Login</button>
        <button onClick={() => onNavigate(3)} className="bg-black hover:bg-gray-900 text-white px-16 sm:px-20 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl font-bold transition-all shadow-2xl border-2 border-white">Register</button>
      </div>
      
      <button className="fixed top-8 right-8 bg-purple-600 hover:bg-purple-700 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl z-30 transition-all">
        <Menu size={32} className="text-white" />
      </button>
      
      <div className="fixed bottom-8 left-8 z-20">
        <div className="bg-purple-900/90 border-2 border-purple-500 rounded-2xl px-6 py-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-white font-bold text-sm">Pre-Production</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <span className="text-gray-400 font-bold text-sm">Production</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <span className="text-gray-400 font-bold text-sm">Post-Production</span>
          </div>
          <div className="mt-3 text-white font-bold text-lg">1/10</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// PAGE 2 - CONTINUES VIDEO/AUDIO
// ============================================================================
const Page2 = ({ onNext, onBack }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="background.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black mb-8 text-black" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          WELCOME
        </h1>
        <p className="text-4xl md:text-5xl mb-16 text-black font-bold italic">
          Let's Make Your Movie Dreams Come True!
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <button onClick={onBack} className="bg-black hover:bg-gray-900 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all border-2 border-white">← Back</button>
          <button onClick={onNext} className="bg-black hover:bg-gray-900 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all border-2 border-white">Next →</button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// PAGE 3 - LOGIN/REGISTER AT TOP + 3 PLANS BELOW
// ============================================================================
const Page3 = ({ onNext, onBack }: any) => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="bg-black border-2 border-purple-600 text-white hover:bg-purple-900 px-8 py-4 rounded-xl font-bold">← Back</button>
      </div>

      {/* LOGIN & REGISTER - SIDE BY SIDE AT TOP */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        <div className="bg-black border-2 border-purple-600 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Login</h2>
          <input type="email" placeholder="Email" className="w-full bg-black border-2 border-purple-600 rounded-xl px-6 py-4 mb-4 text-white focus:outline-none focus:border-purple-400" />
          <input type="password" placeholder="Password (min 8 chars, 1 number)" className="w-full bg-black border-2 border-purple-600 rounded-xl px-6 py-4 mb-6 text-white focus:outline-none focus:border-purple-400" />
          <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-xl">Login</button>
        </div>
        <div className="bg-black border-2 border-purple-600 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Register</h2>
          <input type="text" placeholder="Name" className="w-full bg-black border-2 border-purple-600 rounded-xl px-6 py-4 mb-4 text-white focus:outline-none focus:border-purple-400" />
          <input type="email" placeholder="Email" className="w-full bg-black border-2 border-purple-600 rounded-xl px-6 py-4 mb-4 text-white focus:outline-none focus:border-purple-400" />
          <input type="password" placeholder="Password (min 8 chars, 1 number)" className="w-full bg-black border-2 border-purple-600 rounded-xl px-6 py-4 mb-6 text-white focus:outline-none focus:border-purple-400" />
          <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-xl">Create Account</button>
        </div>
      </div>

      {/* 3 PRICING PLANS BELOW */}
      <h2 className="text-5xl font-bold text-center mb-12 text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Choose Your Plan</h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        <div onClick={() => setSelectedPlan('basic')} className={`bg-black border-2 ${selectedPlan === 'basic' ? 'border-yellow-400 shadow-2xl shadow-purple-500/50' : 'border-purple-600'} rounded-3xl p-10 cursor-pointer hover:border-purple-400 transition-all`}>
          <h3 className="text-3xl font-bold mb-6 text-purple-400">Basic</h3>
          <p className="text-6xl font-bold mb-6 text-purple-400">$20<span className="text-2xl text-gray-400">/mo</span></p>
          <ul className="space-y-3 text-lg mb-6">
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>100 AI Tools</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>720p Export</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>5GB Storage</span></li>
          </ul>
          <a href="https://buy.stripe.com/basic20" target="_blank" rel="noopener noreferrer" className="block w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-xl text-center">Subscribe</a>
          {selectedPlan === 'basic' && <div className="mt-6 text-center text-yellow-400 font-bold text-lg">✓ SELECTED</div>}
        </div>

        <div onClick={() => setSelectedPlan('pro')} className={`bg-black border-2 ${selectedPlan === 'pro' ? 'border-yellow-400 shadow-2xl shadow-purple-500/50' : 'border-purple-600'} rounded-3xl p-10 cursor-pointer hover:border-purple-400 transition-all relative`}>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 px-6 py-2 rounded-full text-sm font-bold">POPULAR</div>
          <h3 className="text-3xl font-bold mb-6 mt-2 text-purple-400">Pro</h3>
          <p className="text-6xl font-bold mb-6 text-purple-400">$25<span className="text-2xl text-gray-400">/mo</span></p>
          <ul className="space-y-3 text-lg mb-6">
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>400 AI Tools</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>4K Export</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>50GB Storage</span></li>
          </ul>
          <a href="https://buy.stripe.com/pro25" target="_blank" rel="noopener noreferrer" className="block w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-xl text-center">Subscribe</a>
          {selectedPlan === 'pro' && <div className="mt-6 text-center text-yellow-400 font-bold text-lg">✓ SELECTED</div>}
        </div>

        <div onClick={() => setSelectedPlan('studio')} className={`bg-black border-2 ${selectedPlan === 'studio' ? 'border-yellow-400 shadow-2xl shadow-purple-500/50' : 'border-purple-600'} rounded-3xl p-10 cursor-pointer hover:border-purple-400 transition-all`}>
          <h3 className="text-3xl font-bold mb-6 text-purple-400">Studio</h3>
          <p className="text-6xl font-bold mb-6 text-purple-400">$50<span className="text-2xl text-gray-400">/mo</span></p>
          <ul className="space-y-3 text-lg mb-6">
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>600 AI Tools</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>8K Export</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span><span>Unlimited Storage</span></li>
          </ul>
          <a href="https://buy.stripe.com/studio50" target="_blank" rel="noopener noreferrer" className="block w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-xl text-center">Subscribe</a>
          {selectedPlan === 'studio' && <div className="mt-6 text-center text-yellow-400 font-bold text-lg">✓ SELECTED</div>}
        </div>
      </div>

      {/* PURPLE FOOTER STARTS HERE */}
      <div className="text-center text-sm mt-16 pb-8 font-bold text-purple-400">
        MandaStrong Studio 2025 © All Rights Reserved
      </div>
    </div>
  );
};

// AI TOOLS (120 each)
const tools120 = Array.from({length: 120}, (_, i) => `Tool ${i + 1}`);

const AIToolBoard = ({ category, onNext, onBack }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTools = tools120.filter((tool: string) => tool.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>{category} Tools</h1>
        <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
      </div>
      <div className="mb-8 relative max-w-3xl">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
        <input type="text" placeholder="🔍 Search Tools..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-black border-2 border-purple-600 rounded-2xl pl-16 pr-6 py-5 text-white text-lg focus:outline-none focus:border-purple-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 max-h-[60vh] overflow-y-auto">
        {filteredTools.map((tool: string, index: number) => (
          <button key={index} className="bg-black border-2 border-purple-600 hover:border-purple-400 hover:bg-purple-900/20 rounded-xl p-4 flex items-center gap-3 transition-all text-left">
            <Sparkles size={20} className="text-purple-400 flex-shrink-0" />
            <span className="font-semibold text-sm">{tool}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
      </div>
      <div className="text-center text-sm mt-16 pb-8 font-bold text-purple-400">
        MandaStrong Studio 2025 © All Rights Reserved
      </div>
    </div>
  );
};

const Page4 = (props: any) => <AIToolBoard category="Writing" {...props} />;
const Page5 = (props: any) => <AIToolBoard category="Voice" {...props} />;
const Page6 = (props: any) => <AIToolBoard category="Image" {...props} />;
const Page7 = (props: any) => <AIToolBoard category="Video" {...props} />;
const Page8 = (props: any) => <AIToolBoard category="Animation" {...props} />;
const Page9 = (props: any) => <AIToolBoard category="Editing" {...props} />;

// PAGE 10: EDITOR'S CHOICE
const Page10 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
    <h1 className="text-7xl font-bold mb-8 text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Editor's Choice</h1>
    <p className="text-2xl mb-8 text-gray-300">Upload your selection (Amanda only)</p>
    <button className="bg-purple-600 hover:bg-purple-700 px-16 py-6 rounded-xl font-bold text-2xl border-2 border-purple-400 mb-8">
      <Upload size={32} className="inline mr-3" />
      Upload
    </button>
    <div className="flex gap-6 mt-16">
      <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
    </div>
  </div>
);

// PAGE 11: EDITOR SUITE
const Page11 = ({ onNext, onBack, onNavigate }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <div className="flex justify-between mb-10">
      <h1 className="text-4xl font-bold text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Editor Suite</h1>
      <div className="flex gap-4">
        <button onClick={() => onNavigate(12)} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">Media Library</button>
        <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">Next →</button>
      </div>
    </div>
    <div className="aspect-video bg-gray-900 border-2 border-purple-600 rounded-2xl mb-10 flex items-center justify-center">
      <span className="text-8xl">🎬</span>
    </div>
  </div>
);

// PAGE 12: MEDIA LIBRARY
const Page12 = ({ onNext, onBack }: any) => {
  const [showEnhancements, setShowEnhancements] = useState(false);
  const [duration, setDuration] = useState(60);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between mb-10">
        <h1 className="text-4xl font-bold text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Media Library</h1>
        <div className="flex gap-4">
          <button onClick={() => setShowEnhancements(!showEnhancements)} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">Open Enhancement Studio</button>
          <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">← Back</button>
          <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">Next →</button>
        </div>
      </div>

      {showEnhancements && (
        <div className="bg-purple-900/30 border-2 border-purple-600 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Enhancement Studio</h2>
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <label className="text-lg font-semibold text-purple-400">Duration (0-180 min)</label>
              <span className="text-purple-400 font-bold">{duration} min</span>
            </div>
            <input type="range" min="0" max="180" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-3 bg-gray-700 rounded-lg" style={{accentColor: '#9333ea'}} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Color Grade', 'Audio Enhance', 'Upscale', 'Stabilize', 'Denoise', 'Sharpen', 'Speed Adjust', 'Transitions'].map((enhancement) => (
              <button key={enhancement} className="bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-xl font-bold">{enhancement}</button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div key={item} className="aspect-video bg-gray-900 border-2 border-purple-600 rounded-2xl flex items-center justify-center hover:border-purple-400 transition-all cursor-pointer">
            <Film size={60} className="text-purple-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

// PAGES 13-15: EDITING PAGES
const EditingPage = ({ title, onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <div className="flex justify-between mb-10">
      <h1 className="text-4xl font-bold text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>{title}</h1>
      <div className="flex gap-4">
        <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">Next →</button>
      </div>
    </div>
    <div className="aspect-video bg-gray-900 border-2 border-purple-600 rounded-2xl mb-10 flex items-center justify-center">
      <span className="text-8xl">✂️</span>
    </div>
  </div>
);

const Page13 = (props: any) => <EditingPage title="Editing Page 1" {...props} />;
const Page14 = (props: any) => <EditingPage title="Editing Page 2" {...props} />;
const Page15 = (props: any) => <EditingPage title="Editing Page 3" {...props} />;

// PAGE 16: EXPORT/RENDER/SAVE
const Page16 = ({ onNext, onBack }: any) => {
  const [showExportOptions, setShowExportOptions] = useState(false);

  const handleExport = () => {
    setShowExportOptions(true);
    setTimeout(() => onNext(), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-10 text-center text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Export / Render / Save</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-8">
          <button onClick={handleExport} className="bg-purple-600 hover:bg-purple-700 px-12 py-8 rounded-xl font-bold text-2xl">Export</button>
          <button className="bg-purple-600 hover:bg-purple-700 px-12 py-8 rounded-xl font-bold text-2xl">Render</button>
          <button className="bg-purple-600 hover:bg-purple-700 px-12 py-8 rounded-xl font-bold text-2xl">Save</button>
          <button className="bg-purple-600 hover:bg-purple-700 px-12 py-8 rounded-xl font-bold text-2xl">
            <Download size={32} className="inline mr-3" />
            Download
          </button>
        </div>

        {showExportOptions && (
          <div className="bg-purple-900/30 border-2 border-purple-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Save To:</h2>
            <div className="grid grid-cols-2 gap-4">
              {['YouTube', 'Google Drive', 'X (Twitter)', 'Instagram', 'TikTok', 'Facebook', 'Vimeo', 'MP4 Download'].map((platform) => (
                <button key={platform} className="bg-black border-2 border-purple-600 hover:bg-purple-900 px-6 py-4 rounded-xl font-bold">{platform}</button>
              ))}
            </div>
            <p className="text-center text-purple-400 mt-6 font-bold">Preparing full screen preview...</p>
          </div>
        )}
      </div>
      <div className="flex gap-6 justify-center mt-16">
        <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
      </div>
    </div>
  );
};

// PAGE 17: FULL SCREEN PLAYER
const Page17 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-7xl aspect-video bg-gray-900 border-4 border-purple-600 rounded-2xl flex items-center justify-center">
        <Play size={150} className="text-purple-400 cursor-pointer" />
      </div>
    </div>
    <div className="flex gap-6 justify-center p-8">
      <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
    </div>
  </div>
);

// PAGE 18: TOS & DISCLAIMER
const Page18 = ({ onNext, onBack }: any) => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-10 text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Terms of Service & Disclaimer</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 border-2 border-purple-600 rounded-xl p-8 mb-8 max-h-96 overflow-y-auto">
          <p className="text-lg mb-4">By using MandaStrong Studio, you agree to our terms of service and disclaimer.</p>
          <p className="text-lg mb-4">This software is provided "as is" without warranty of any kind.</p>
        </div>
        <div className="flex items-start gap-4 mb-10">
          <input type="checkbox" id="agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-6 h-6 mt-1" style={{accentColor: '#9333ea'}} />
          <label htmlFor="agree" className="text-xl">I agree to the Terms of Service and Disclaimer</label>
        </div>
        <button disabled={!agreed} className={`w-full py-6 rounded-xl font-bold text-2xl ${agreed ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 cursor-not-allowed'}`}>Accept & Continue</button>
      </div>
      <div className="flex gap-6 justify-center mt-16">
        <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
      </div>
    </div>
  );
};

// PAGE 19: AGENT GROK HELP DESK
const Page19 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <h1 className="text-5xl font-bold mb-10 text-center text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>24/7 Agent Grok Help Desk</h1>
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Bot size={120} className="mx-auto mb-6 text-purple-400" />
        <p className="text-2xl mb-4">Live Online Support</p>
        <p className="text-xl text-gray-400">Get instant help anytime, anywhere</p>
      </div>
      <div className="bg-gray-900 border-2 border-purple-600 rounded-2xl p-8 min-h-96">
        <div className="flex flex-col gap-4">
          <div className="bg-purple-900/30 border border-purple-600 rounded-xl p-4">
            <p className="text-purple-400 font-bold mb-2">Agent Grok:</p>
            <p>Hello! How can I help you today?</p>
          </div>
        </div>
        <div className="mt-8">
          <input type="text" placeholder="Type your message..." className="w-full bg-black border-2 border-purple-600 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-400" />
        </div>
      </div>
    </div>
    <div className="flex gap-6 justify-center mt-16">
      <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
    </div>
  </div>
);

// PAGE 20: COMMUNITY HUB
const Page20 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <h1 className="text-5xl font-bold mb-10 text-center text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Community Hub</h1>
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <button className="bg-purple-600 hover:bg-purple-700 px-12 py-5 rounded-xl font-bold text-xl">
          <Upload size={24} className="inline mr-3" />
          Upload Your Movie
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="bg-gray-900 border-2 border-purple-600 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black flex items-center justify-center">
              <Film size={80} className="text-purple-400" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-3">Movie Title {item}</h3>
              <div className="flex gap-4 mb-3">
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                  <Heart size={20} />
                  <span>24</span>
                </button>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                  <ThumbsUp size={20} />
                  <span>18</span>
                </button>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                  <MessageCircle size={20} />
                  <span>12</span>
                </button>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-bold">View Comments</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex gap-6 justify-center mt-16">
      <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">← Back</button>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold">Next →</button>
    </div>
  </div>
);

// PAGE 21: THANK YOU
const Page21 = ({ onBack, onHome }: any) => (
  <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
    <h1 className="text-7xl md:text-9xl font-bold mb-8 text-purple-400" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>THANK YOU!</h1>
    <p className="text-3xl mb-16 text-gray-300">For choosing MandaStrong Studio</p>
    <div className="flex gap-6">
      <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-16 py-5 rounded-2xl font-bold text-xl">← Back</button>
      <button onClick={onHome} className="bg-purple-600 hover:bg-purple-700 px-16 py-5 rounded-2xl font-bold text-xl">🏠 Home</button>
    </div>
    <div className="text-center text-sm mt-16 pb-8 font-bold text-purple-400">
      MandaStrong Studio 2025 © All Rights Reserved
    </div>
  </div>
);

// MAIN APP
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigateTo = (page: number) => setCurrentPage(page);
  const renderPage = () => {
    const props = { onNext: () => setCurrentPage(currentPage + 1), onBack: () => setCurrentPage(currentPage - 1), onNavigate: navigateTo, onHome: () => setCurrentPage(1) };
    switch (currentPage) {
      case 1: return <Page1 {...props} />;
      case 2: return <Page2 {...props} />;
      case 3: return <Page3 {...props} />;
      case 4: return <Page4 {...props} />;
      case 5: return <Page5 {...props} />;
      case 6: return <Page6 {...props} />;
      case 7: return <Page7 {...props} />;
      case 8: return <Page8 {...props} />;
      case 9: return <Page9 {...props} />;
      case 10: return <Page10 {...props} />;
      case 11: return <Page11 {...props} />;
      case 12: return <Page12 {...props} />;
      case 13: return <Page13 {...props} />;
      case 14: return <Page14 {...props} />;
      case 15: return <Page15 {...props} />;
      case 16: return <Page16 {...props} />;
      case 17: return <Page17 {...props} />;
      case 18: return <Page18 {...props} />;
      case 19: return <Page19 {...props} />;
      case 20: return <Page20 {...props} />;
      case 21: return <Page21 {...props} />;
      default: return <Page1 {...props} />;
    }
  };
  return <div className="app min-h-screen bg-black">{renderPage()}</div>;
}