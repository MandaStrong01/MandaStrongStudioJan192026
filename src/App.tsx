import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Search, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronRight, ChevronLeft, Menu, Settings, Music, Package, Plane, Diamond, GamepadIcon, Mic, Image as ImageIcon, Video, Wand2, PenTool, Layers, X, Check } from 'lucide-react';

const Page1 = ({ onNext, onNavigate }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="background__2_.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('page1-background.png')" }} />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-black tracking-tight" style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.02em' }}>MANDASTRONG'S STUDIO</h1>
        <p className="text-2xl md:text-4xl mb-20 text-black font-bold">An All In One Make A Movie App! 2 ~ 2.5 Hours Duration</p>
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
          <button onClick={onNext} className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl">Next</button>
          <button onClick={() => onNavigate(20)} className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl">Login</button>
          <button onClick={() => onNavigate(20)} className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl">Register</button>
        </div>
      </div>
      <button className="fixed bottom-8 right-8 bg-white hover:bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl z-50 overflow-hidden">
        <Play size={50} className="text-black ml-1" fill="black" />
      </button>
      <button className="fixed top-8 right-8 bg-purple-600 hover:bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50">
        <Menu size={32} className="text-white" />
      </button>
      <div className="fixed bottom-8 left-8 flex gap-2 z-40">
        <div className="bg-blue-600 px-4 py-2 rounded-lg text-white text-sm font-bold">Pre-Production</div>
        <div className="bg-blue-500 px-4 py-2 rounded-lg text-white text-sm font-bold">Production</div>
        <div className="bg-gray-700 px-4 py-2 rounded-lg text-white text-sm font-bold">Post-Production</div>
      </div>
      <div className="fixed bottom-4 left-8 text-white text-xs font-bold">Pre-Production 1/10</div>
    </div>
  );
};

const Page2 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 text-white flex flex-col items-center justify-center relative px-4">
    <div className="text-center max-w-5xl mb-12">
      <div className="flex justify-center mb-8"><Sparkles size={80} className="text-purple-300" /></div>
      <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-transparent">MANDASTRONG'S STUDIO</h1>
      <p className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">Make Amazing Family Movies</p>
      <p className="text-3xl md:text-4xl font-bold text-purple-200">& Bring Dreams To Life!</p>
    </div>
    <div className="flex gap-6">
      <button onClick={onBack} className="bg-purple-700 hover:bg-purple-600 px-12 py-5 rounded-2xl text-xl font-bold transition-all border-2 border-purple-500">← Back</button>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-500 px-16 py-5 rounded-2xl text-xl font-bold transition-all border-2 border-purple-400">Next →</button>
    </div>
    <button className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50">💬</button>
  </div>
);

const Page3 = ({ onNext, onBack }: any) => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">MandaStrong Studio</h1>
        <div className="flex gap-4">
          <button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">← Back</button>
          <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold">Next →</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <button onClick={onBack} className="text-purple-400 mb-6 flex items-center gap-2"><ChevronLeft size={20} /> Back</button>
          <div className="space-y-4">
            <div><label className="block mb-2 text-sm text-gray-400">Email</label><input type="email" placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" /></div>
            <div><label className="block mb-2 text-sm text-gray-400">Password</label><input type="password" placeholder="••••••••" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" /></div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-lg">Login</button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8">Register</h2>
          <div className="space-y-4">
            <div><label className="block mb-2 text-sm text-gray-400">Name</label><input type="text" placeholder="Your Name" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" /></div>
            <div><label className="block mb-2 text-sm text-gray-400">Email</label><input type="email" placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" /></div>
            <div><label className="block mb-2 text-sm text-gray-400">Password</label><input type="password" placeholder="••••••••" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" /></div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-lg">Create Account</button>
          </div>
        </div>
      </div>
      <div className="text-center mb-8">
        <p className="text-gray-400 mb-4">or</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-xl font-bold text-lg flex items-center gap-2 mx-auto"><span>👁️</span> Browse as Guest (View Only)</button>
      </div>
      <h2 className="text-5xl font-bold text-center mb-12 mt-20">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className={`bg-gradient-to-br from-purple-900/40 to-black border-2 rounded-2xl p-8 ${selectedPlan === 'basic' ? 'border-purple-400 scale-105' : 'border-purple-600'}`}>
          <h3 className="text-3xl font-bold mb-4">Basic</h3>
          <p className="text-5xl font-black mb-6">$20<span className="text-2xl text-gray-400">/mo</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>HD Export</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>100 AI Tools</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Basic Templates</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>10GB Storage</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Email Support</span></li>
          </ul>
          <button onClick={() => setSelectedPlan('basic')} className={`w-full py-4 rounded-xl font-bold ${selectedPlan === 'basic' ? 'bg-purple-600' : 'bg-gray-700'}`}>{selectedPlan === 'basic' ? 'Selected' : 'Select Plan'}</button>
        </div>
        <div className={`bg-gradient-to-br from-purple-900/40 to-black border-2 rounded-2xl p-8 relative ${selectedPlan === 'pro' ? 'border-yellow-400 scale-105' : 'border-purple-600'}`}>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 px-6 py-2 rounded-full text-sm font-bold">POPULAR</div>
          <h3 className="text-3xl font-bold mb-4">Pro</h3>
          <p className="text-5xl font-black mb-6">$30<span className="text-2xl text-gray-400">/mo</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>4K Export</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>300 AI Tools</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Premium Templates</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>100GB Storage</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Priority Support</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Commercial License</span></li>
          </ul>
          <button onClick={() => setSelectedPlan('pro')} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-xl font-bold">✓ SELECTED</button>
        </div>
        <div className={`bg-gradient-to-br from-purple-900/40 to-black border-2 rounded-2xl p-8 ${selectedPlan === 'studio' ? 'border-purple-400 scale-105' : 'border-purple-600'}`}>
          <h3 className="text-3xl font-bold mb-4">Studio</h3>
          <p className="text-5xl font-black mb-6">$50<span className="text-2xl text-gray-400">/mo</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>8K Export</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>All 600 AI Tools</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Unlimited Templates</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>1TB Storage</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>24/7 Live Support</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Full Commercial Rights</span></li>
            <li className="flex items-start gap-2"><Check size={20} className="text-green-400 mt-1" /><span>Team Collaboration</span></li>
          </ul>
          <button onClick={() => setSelectedPlan('studio')} className={`w-full py-4 rounded-xl font-bold ${selectedPlan === 'studio' ? 'bg-purple-600' : 'bg-gray-700'}`}>{selectedPlan === 'studio' ? 'Selected' : 'Select Plan'}</button>
        </div>
      </div>
      <div className="text-center mt-12">
        <button onClick={onNext} className="bg-purple-600 hover:bg-purple-700 px-16 py-5 rounded-xl font-bold text-xl">Continue to Payment</button>
        <p className="text-gray-400 text-sm mt-4">Secure payment powered by Stripe</p>
      </div>
      <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
    </div>
  );
};

const AIToolBoard = ({ title, tools, onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">AI TOOL BOARD</h1>
      <button className="bg-purple-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2"><Menu size={24} /> Quick Access</button>
    </div>
    <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
      {tools.map((tool: string, index: number) => (
        <button key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-600 hover:border-purple-400 rounded-xl p-6 text-left group">
          <div className="flex items-center gap-4"><Sparkles size={32} className="text-purple-400 group-hover:scale-110 transition-transform" /><span className="text-xl font-bold">{tool}</span></div>
        </button>
      ))}
    </div>
    <div className="flex justify-center gap-6">
      <button onClick={onBack} className="bg-purple-600 px-12 py-4 rounded-xl font-bold">← Back</button>
      <button onClick={onNext} className="bg-purple-600 px-16 py-4 rounded-xl font-bold">Next →</button>
    </div>
    <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
  </div>
);

const Page4 = (props: any) => <AIToolBoard title="Script Tools" tools={['Dialogue Writer', 'Plot Generator', 'Scene Writer', 'Story Outliner', 'Character Developer', 'Dialogue Editor', 'Plot Designer', 'Story Planner', 'Treatment Writer', 'Script Formatter', 'Plot Creator', 'Three Act Builder', 'Backstory Generator', 'Motivation Builder', 'Theme Generator', 'Advanced Story Outliner', 'Story Consultant', 'Plot Twist Creator', 'Scene Analyzer', 'Conflict Generator']} {...props} />;
const Page5 = (props: any) => <AIToolBoard title="Voice Tools" tools={['Voice Maker', 'Voice Cloner', 'Voice Creator Tool', 'Voice Recorder', 'Speech Converter', 'Voice Builder', 'Advanced Voice Generator', 'Voice Studio Tool', 'Premium Voice Generator', 'Voice Audio Tool', 'Emotional Voice Generator', 'Advanced Speech Creator', 'Natural Voice Generator', 'Voice Reader', 'Speech Generator', 'Narration Creator', 'Voice Imitator', 'Fast Speech Generator', 'Live Voice Tool', 'Streaming Voice Generator']} {...props} />;
const Page6 = (props: any) => <AIToolBoard title="Image Tools" tools={['Image Creator', 'Advanced Image Generator', 'Design Generator', 'Image Tool', 'Art Maker', 'Art Mixer', 'Image Stream Tool', 'Art Library Tool', 'Workflow Tool', 'Auto Image Generator', 'Image Studio Pro', 'Easy Image Generator', 'Text Inversion Tool', 'Style Tool', 'Model Trainer', 'Style Transfer Tool', 'Turnaround Generator', 'Expression Grid Tool', 'Depth Controller', 'Edge Guide Tool']} {...props} />;
const Page7 = (props: any) => <AIToolBoard title="Video Tools" tools={['Motion Video Maker', 'Video Creator', 'Avatar Generator', 'Video Synthesizer', 'Video Studio', 'Video Flow Generator', 'Video Creator Studio', 'Video Crafter', 'Image to Motion Tool', 'Video Style Tool', 'Temporal Flow Tool', 'Frame Blender', 'Dynamic Pan Tool', 'Tilt Shot Tool', 'Tracking Shot Tool', 'Crane Movement Tool', 'Steadycam Tool', 'Handheld Effect Tool', 'Shot Transition Tool', 'Establishing Shot Tool']} {...props} />;
const Page8 = (props: any) => <AIToolBoard title="Motion Tools" tools={['Motion Animator', 'Motion Studio', 'Auto Animator', 'Motion Flow Tool', 'Motion Capture Pro', 'Webcam Motion Tool', 'Skeleton Tracker', 'Joint Tracker', 'Character Rigger', '3D Character Studio', 'Player Avatar Creator', 'Avatar Generator', 'Face Tracker', 'Facial Motion Tool', 'Audio to Face Tool', 'Face Audio Syncer', '3D Shape Generator', '3D Model Tool', 'Gaussian Splat Render', '3D From Image Tool']} {...props} />;
const Page9 = (props: any) => <AIToolBoard title="Edit Tools" tools={['Smart Video Editor', 'Auto Editor', 'Video Tools Suite', 'Edit Master', 'Scene Detector', 'Beat Syncer', 'Auto Assembly Tool', 'Smart Timeline', 'Highlight Finder', 'Key Moment Finder', 'Context Editor', 'Intelligent Cutter', 'Word Remover', 'Filler Word Remover', 'Gap Closer', 'Smart Trimmer', 'Smart Fade Tool', 'Transition Matcher', 'Flow Transition Tool', 'Smooth Cut Tool']} {...props} />;

const Page10 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    <div className="flex justify-between items-center p-6 border-b border-purple-600/30">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="bg-purple-600 px-6 py-3 rounded-xl font-bold">← Back</button>
        <h1 className="text-3xl font-bold">EDITOR'S CHOICE</h1>
      </div>
      <button onClick={onNext} className="bg-purple-600 px-8 py-3 rounded-xl font-bold">Next →</button>
    </div>
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="aspect-video bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-purple-600 rounded-2xl flex flex-col items-center justify-center relative">
          <div className="text-center">
            <Film size={120} className="text-purple-600 mx-auto mb-6 opacity-50" />
            <h2 className="text-4xl font-bold mb-4">Featured Content</h2>
            <p className="text-xl text-gray-400">Curated by our editors</p>
          </div>
          <button className="relative z-10 bg-purple-600 w-32 h-32 rounded-full flex items-center justify-center mt-8 group">
            <Play size={60} className="text-white ml-2 group-hover:scale-110 transition-transform" fill="white" />
          </button>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <button className="bg-purple-600 p-4 rounded-xl"><Play size={24} /></button>
            <div className="flex-1 bg-gray-800 h-2 rounded-full"><div className="bg-purple-600 h-full w-1/3 rounded-full"></div></div>
            <span className="text-sm font-mono">1:23 / 4:56</span>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="bg-gray-800 px-6 py-3 rounded-xl font-bold">Add to Library</button>
            <button className="bg-gray-800 px-6 py-3 rounded-xl font-bold">Share</button>
            <button className="bg-purple-600 px-6 py-3 rounded-xl font-bold">Open Enhancement Studio</button>
          </div>
        </div>
      </div>
    </div>
    <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
  </div>
);

const Page11 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <div className="flex justify-between items-center mb-12">
      <button className="text-purple-400 flex items-center gap-2"><ChevronLeft size={24} /> My Projects</button>
      <button className="bg-purple-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2"><Upload size={24} /> Upload Media</button>
    </div>
    <div className="text-center mb-16">
      <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EDITOR SUITE</h1>
      <p className="text-2xl text-gray-400">Professional-Grade Video Editing Platform</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
      {[
        { icon: Film, title: 'Video Editor', desc: 'Multi-track timeline with professional editing tools' },
        { icon: Music, title: 'Audio Mixer', desc: 'Professional audio mixing and effects suite' },
        { icon: Settings, title: 'Color Grading', desc: 'Advanced color correction and grading workspace' },
        { icon: Layers, title: 'Effects Library', desc: 'Thousands of transitions, effects, and filters' },
        { icon: Zap, title: 'Precision Tools', desc: 'Frame-accurate cutting and trimming' },
        { icon: Sparkles