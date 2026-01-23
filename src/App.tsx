import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Search, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronRight, ChevronLeft, Menu, Settings, Music, Package, Plane, Diamond, GamepadIcon, Mic, Image as ImageIcon, Video, Wand2, PenTool, Layers, X, Check } from 'lucide-react';

// ============================================================================
// PAGE 1 - OCEAN VIDEO BACKGROUND + AUDIO, BLACK TEXT, WHITE PLAY OVAL
// ============================================================================
const Page1 = ({ onNext, onNavigate }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={false}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="background__2_.mp4" type="video/mp4" />
      </video>
      
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('page1-background.png')"
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 
          className="text-6xl md:text-8xl font-black mb-4 text-black tracking-tight" 
          style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.02em' }}
        >
          MANDASTRONG'S STUDIO
        </h1>
        <p className="text-2xl md:text-4xl mb-20 text-black font-bold">
          An All In One Make A Movie App! 2 ~ 2.5 Hours Duration
        </p>
        
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
          <button 
            onClick={onNext} 
            className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl"
          >
            Next
          </button>
          <button 
            onClick={() => onNavigate(20)} 
            className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl"
          >
            Login
          </button>
          <button 
            onClick={() => onNavigate(20)} 
            className="bg-black hover:bg-gray-900 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl"
          >
            Register
          </button>
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

// ============================================================================
// PAGE 2 - PURPLE GRADIENT WELCOME
// ============================================================================
const Page2 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 text-white flex flex-col items-center justify-center relative px-4">
    <div className="text-center max-w-5xl mb-12">
      <div className="flex justify-center mb-8">
        <Sparkles size={80} className="text-purple-300" />
      </div>
      <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-transparent">
        MANDASTRONG'S STUDIO
      </h1>
      <p className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">
        Make Amazing Family Movies
      </p>
      <p className="text-3xl md:text-4xl font-bold text-purple-200">
        & Bring Dreams To Life!
      </p>
    </div>
    
    <div className="flex gap-6">
      <button onClick={onBack} className="bg-purple-700 hover:bg-purple-600 px-12 py-5 rounded-2xl text-xl font-bold transition-all border-2 border-purple-500">
        ← Back
      </button>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-500 px-16 py-5 rounded-2xl text-xl font-bold transition-all border-2 border-purple-400">
        Next →
      </button>
    </div>
    
    <button className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50">
      💬
    </button>
  </div>
);

// ============================================================================
// PAGE 3 - LOGIN/REGISTER & PRICING
// ============================================================================
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
            <div>
              <label className="block mb-2 text-sm text-gray-400">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-400">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" />
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-lg">Login</button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8">Register</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm text-gray-400">Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-400">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-400">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-black border-2 border-purple-600 rounded-xl px-4 py-3 text-white" />
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-lg">Create Account</button>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-gray-400 mb-4">or</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-xl font-bold text-lg flex items-center gap-2 mx-auto">
          <span>👁️</span> Browse as Guest (View Only)
        </button>
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
          <button onClick={() => setSelectedPlan('basic')} className={`w-full py-4 rounded-xl font-bold ${selectedPlan === 'basic' ? 'bg-purple-600' : 'bg-gray-700'}`}>
            {selectedPlan === 'basic' ? 'Selected' : 'Select Plan'}
          </button>
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
          <button onClick={() => setSelectedPlan('pro')} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-xl font-bold">
            ✓ SELECTED
          </button>
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
          <button onClick={() => setSelectedPlan('studio')} className={`w-full py-4 rounded-xl font-bold ${selectedPlan === 'studio' ? 'bg-purple-600' : 'bg-gray-700'}`}>
            {selectedPlan === 'studio' ? 'Selected' : 'Select Plan'}
          </button>
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

// ============================================================================
// AI TOOL BOARD COMPONENT
// ============================================================================
const AIToolBoard = ({ title, tools, onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">AI TOOL BOARD</h1>
      <button className="bg-purple-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2"><Menu size={24} /> Quick Access</button>
    </div>
    
    <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
      {tools.map((tool: string, index: number) => (
        <button key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-600 hover:border-purple-400 rounded-xl p-6 text-left group">
          <div className="flex items-center gap-4">
            <Sparkles size={32} className="text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold">{tool}</span>
          </div>
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

// ============================================================================
// PAGE 10 - FULL SCREEN MOVIE PLAYER
// ============================================================================
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

// PAGE 11 - EDITOR SUITE HOME
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
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl p-8 cursor-pointer group">
        <Film size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-2">Video Editor</h3>
        <p className="text-gray-400">Multi-track timeline with professional editing tools</p>
      </div>
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl p-8 cursor-pointer group">
        <Music size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-2">Audio Mixer</h3>
        <p className="text-gray-400">Professional audio mixing and effects suite</p>
      </div>
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl p-8 cursor-pointer group">
        <Settings size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-2">Color Grading</h3>
        <p className="text-gray-400">Advanced color correction and grading workspace</p>
      </div>
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl p-8 cursor-pointer group">
        <Layers size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-2">Effects Library</h3>
        <p className="text-gray-400">Thousands of transitions, effects, and filters</p>
      </div>
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl p-8 cursor-pointer group">
        <Zap size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-2">Precision Tools</h3>
        <p className="text-gray-400">Frame-accurate cutting and trimming</p>
      </div>
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl p-8 cursor-pointer group">
        <Sparkles size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-2">AI Enhancement</h3>
        <p className="text-gray-400">AI-powered upscaling and enhancement</p>
      </div>
    </div>
    
    <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/40 to-purple-800/40 border-2 border-purple-600 rounded-2xl p-10 mb-8">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3"><Clock size={40} className="text-purple-400" /> Set Movie Duration</h2>
      <div className="text-center mb-8">
        <p className="text-6xl font-black text-purple-400">90</p>
        <p className="text-2xl text-gray-400 uppercase">MINUTES</p>
        <p className="text-sm text-gray-500 mt-2">(1h 30m)</p>
      </div>
      <div className="flex gap-4 justify-center">
        {['30 min', '60 min', '90 min', '120 min'].map((t, i) => (
          <button key={i} className={`${i === 2 ? 'bg-purple-600 border-2 border-purple-400' : 'bg-gray-800'} px-8 py-4 rounded-xl font-bold`}>{t}</button>
        ))}
      </div>
    </div>
    
    <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-10 max-w-5xl mx-auto mb-8">
      <h3 className="text-3xl font-bold mb-6 text-center">Ready to Create?</h3>
      <p className="text-center text-gray-400 mb-8">Upload your media files and jump into our complete suite of professional editing tools!</p>
      <div className="flex gap-6 justify-center">
        <button className="bg-blue-600 px-12 py-5 rounded-xl font-bold text-xl flex items-center gap-3"><Upload size={24} /> Media Library</button>
        <button className="bg-purple-600 px-12 py-5 rounded-xl font-bold text-xl flex items-center gap-3"><Film size={24} /> Timeline Editor</button>
      </div>
    </div>
    
    <div className="flex justify-between">
      <button onClick={onBack} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">← Back</button>
      <button onClick={onNext} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">Next →</button>
    </div>
    
    <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
  </div>
);

// PAGE 12 - MY PROJECTS
const Page12 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-4xl font-bold">MY PROJECTS</h1>
      <div className="flex gap-4">
        <button onClick={onBack} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Next →</button>
      </div>
    </div>
    
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Film size={120} className="text-gray-600 mb-8 opacity-50" />
      <h2 className="text-5xl font-bold mb-4">No Movies Yet</h2>
      <p className="text-2xl text-gray-400 mb-12">Start creating your first masterpiece!</p>
      <button className="bg-purple-600 px-16 py-6 rounded-2xl font-bold text-xl flex items-center gap-3"><Upload size={28} /> Go to Upload Page</button>
    </div>
    
    <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
  </div>
);

// EDITOR PAGES 13-17
const EditorPage = ({ title, icon: Icon, onNext, onBack }: any) => {
  const [volume, setVolume] = useState(75);
  const [duration, setDuration] = useState(90);
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-6">
          <button className="text-purple-400"><Film size={24} /> Editor Home</button>
          <button className="text-gray-400"><Upload size={24} /> Media Library</button>
          <button className="bg-purple-600 px-6 py-3 rounded-xl font-bold"><Film size={24} className="inline mr-2" /> Timeline</button>
          <button className="text-gray-400"><Music size={24} /> Audio Mixer</button>
          <button className="text-gray-400"><Settings size={24} /> Settings</button>
        </div>
        <div className="flex gap-4">
          <button onClick={onBack} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">← Back</button>
          <button onClick={onNext} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Next →</button>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-3"><Icon size={40} className="text-purple-400" />{title}</h1>
        
        <div className="flex-1 bg-gradient-to-br from-gray-900 to-black border-2 border-purple-600 rounded-2xl flex items-center justify-center mb-6 min-h-[400px]">
          <div className="text-center">
            <Icon size={100} className="text-purple-600 mx-auto mb-4 opacity-50" />
            <p className="text-2xl text-gray-400">Preview Window</p>
          </div>
        </div>
        
        <div className="bg-gray-900 border-2 border-purple-600 rounded-2xl p-6 space-y-6">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-lg font-semibold">Volume</label>
              <span className="text-purple-400 font-bold">{volume}%</span>
            </div>
            <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full h-3 bg-gray-700 rounded-lg" />
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-lg font-semibold">Movie Duration</label>
              <span className="text-purple-400 font-bold">{duration} minutes</span>
            </div>
            <input type="range" min="0" max="180" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-3 bg-gray-700 rounded-lg" />
          </div>
        </div>
      </div>
      
      <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
    </div>
  );
};

const Page13 = (props: any) => <EditorPage title="Timeline Editor" icon={Film} {...props} />;
const Page14 = (props: any) => <EditorPage title="Audio Mixer" icon={Music} {...props} />;
const Page15 = (props: any) => <EditorPage title="Settings & Configuration" icon={Settings} {...props} />;
const Page16 = (props: any) => <EditorPage title="Tutorials & Learning Center" icon={Book} {...props} />;
const Page17 = (props: any) => <EditorPage title="Export Center" icon={Upload} {...props} />;

// PAGE 18 - TERMS
const Page18 = ({ onNext, onBack }: any) => {
  const [agreed, setAgreed] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">TERMS OF SERVICE & DISCLAIMER</h1>
        <div className="flex gap-4">
          <button onClick={onBack} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">← Back</button>
          <button onClick={onNext} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Next →</button>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-10 mb-8">
          <div className="flex justify-center mb-8"><FileText size={80} className="text-purple-400" /></div>
          <h2 className="text-4xl font-bold mb-4 text-center">Legal Agreement</h2>
          <p className="text-xl text-center text-gray-400 mb-8">Please read carefully before using MandaStrong Studio</p>
          
          <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-4">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">⚖️ Terms of Use</h3>
              <p className="text-gray-300 mb-4">Welcome to MandaStrong Studio. By accessing and using this application, you agree to be bound by these Terms of Service.</p>
              <ul className="space-y-2 text-gray-400">
                <li><strong>1. Acceptance of Terms:</strong> By creating an account or using MandaStrong Studio, you acknowledge that you have read, understood, and agree to be bound by these Terms.</li>
                <li><strong>2. License Grant:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to use MandaStrong Studio.</li>
                <li><strong>3. User Responsibilities:</strong> You are responsible for maintaining the security of your account.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">🔒 Privacy Policy</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Data Collection:</strong> We collect information you provide directly to us.</li>
                <li><strong>Data Security:</strong> We implement appropriate security measures.</li>
                <li><strong>Data Sharing:</strong> We do not sell your personal information.</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-black/50 border-2 border-purple-600 rounded-xl mb-6">
            <input type="checkbox" id="agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-6 h-6 mt-1" />
            <label htmlFor="agree" className="text-xl">I have read and agree to the Terms of Service and Privacy Policy</label>
          </div>
          
          <button disabled={!agreed} className={`w-full py-6 rounded-xl font-bold text-2xl ${agreed ? 'bg-purple-600' : 'bg-gray-600 opacity-50'}`}>
            {agreed ? 'Accept & Continue' : 'Please Accept Terms to Continue'}
          </button>
          
          <button className="w-full mt-4 py-4 bg-gray-800 rounded-xl font-bold">Decline</button>
        </div>
      </div>
      
      <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
    </div>
  );
};

// PAGE 19 - AGENT GROK
const Page19 = ({ onNext, onBack }: any) => (
  <div className="min-h-screen bg-black text-white p-8">
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-5xl font-bold flex items-center gap-4"><Bot size={60} className="text-purple-400" /> AGENT GROK - 24/7 HELP DESK</h1>
      <div className="flex gap-4">
        <button onClick={onBack} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">← Back</button>
        <button onClick={onNext} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Next →</button>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-purple-600">
          <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center"><Bot size={32} /></div>
          <div>
            <h2 className="text-2xl font-bold">Agent Grok</h2>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-green-400 font-semibold">Online & Ready to Help</span>
            </div>
          </div>
          <div className="ml-auto bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><Zap size={16} /> Instant Responses</div>
        </div>
        
        <div className="space-y-4 mb-6 h-96 overflow-y-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2"><Bot size={20} className="text-purple-400" /><span className="text-sm text-gray-400">Just now</span></div>
            <p className="text-white">Hello! I'm Agent Grok, your 24/7 AI assistant for MandaStrong Studio. How can I help you today?</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <input type="text" placeholder="Ask me anything about MandaStrong Studio..." className="flex-1 bg-black border-2 border-purple-600 rounded-xl px-6 py-4 text-white" />
          <button className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Send</button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><span>❓</span> Frequently Asked Questions</h3>
          <div className="space-y-3">
            {['How do I export my video?', 'What video formats are supported?', 'How do I add text to my video?', 'Can I use custom fonts?', 'How do I adjust audio levels?', 'What are the render quality options?'].map((q, i) => (
              <button key={i} className="w-full text-left bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">{q}</button>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4">Common Topics</h3>
          <div className="space-y-2">
            {['Video Editing Basics', 'Audio & Music', 'Effects & Transitions', 'Export & Rendering', 'Troubleshooting'].map((t, i) => (
              <button key={i} className={`w-full ${i === 0 ? 'bg-purple-600' : 'bg-gray-800'} py-3 rounded-xl font-bold`}>{t}</button>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4"><MessageCircle size={48} className="text-purple-400" /></div>
          <h3 className="text-2xl font-bold mb-2 text-center">Need Human Support?</h3>
          <p className="text-gray-400 mb-6 text-center">Our support team is available 24/7 for complex issues</p>
          <button className="w-full bg-white text-black py-4 rounded-xl font-bold">Contact Support Team</button>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-3">Service Status</h3>
          <div className="space-y-2">
            {['API Services', 'Render Queue', 'File Storage'].map((s, i) => (
              <div key={i} className="flex justify-between items-center">
                <span>{s}</span>
                <span className="flex items-center gap-2 text-green-400"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Operational</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
  </div>
);

// PAGE 20 - COMMUNITY HUB
const Page20 = ({ onNext, onBack }: any) => {
  const videos = [
    { id: 1, title: 'Epic Action Montage', creator: 'Sarah Johnson', likes: 1247, comments: 156, icon: '🎬' },
    { id: 2, title: 'Cinematic Travel Vlog', creator: 'Mike Chen', likes: 892, comments: 89, icon: '✈️' },
    { id: 3, title: 'Product Showcase Video', creator: 'Emily Rodriguez', likes: 2156, comments: 267, icon: '📦' },
    { id: 4, title: 'Music Video Edit', creator: 'Alex Thompson', likes: 3421, comments: 445, icon: '🎵' },
    { id: 5, title: 'Wedding Highlights', creator: 'Jessica Kim', likes: 567, comments: 78, icon: '💍' },
    { id: 6, title: 'Gaming Montage', creator: 'David Brown', likes: 1823, comments: 234, icon: '🎮' },
  ];
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">COMMUNITY HUB</h1>
        <div className="flex gap-4">
          <button onClick={onBack} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">← Back</button>
          <button onClick={onNext} className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Next →</button>
        </div>
      </div>
      
      <div className="flex gap-4 mb-8">
        <button className="bg-purple-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2"><Clock size={20} /> Recent</button>
        <button className="bg-gray-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2"><TrendingUp size={20} /> Popular</button>
        <button className="bg-gray-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2"><Flame size={20} /> Trending</button>
        <button className="ml-auto bg-purple-600 px-8 py-3 rounded-xl font-bold flex items-center gap-2"><Upload size={20} /> Upload Your Creation</button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 hover:border-purple-400 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
              <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full"><Flame size={16} className="inline text-orange-400 mr-1" /><span className="text-xs font-bold">Trending</span></div>
              <span className="text-7xl group-hover:scale-110 transition-transform">{video.icon}</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">{video.creator[0]}</div>
                <div>
                  <p className="text-sm font-semibold">{video.creator}</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Heart size={16} className="text-red-400" />{video.likes}</span>
                <span className="flex items-center gap-1"><MessageCircle size={16} />{video.comments}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 mb-2">Recent comments:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                    <p className="text-xs text-gray-400"><strong>User123:</strong> Amazing work!</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                    <p className="text-xs text-gray-400"><strong>Creator456:</strong> Love the editing style!</p>
                  </div>
                </div>
                <button className="w-full mt-3 bg-purple-600 py-2 rounded-lg text-sm font-bold">View All Comments</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
    </div>
  );
};

// PAGE 21 - FINAL
const Page21 = ({ onBack, onHome }: any) => (
  <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
    <div className="text-center mb-16">
      <h1 className="text-7xl md:text-9xl font-black mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
        THAT'S ALL FOLKS!
      </h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-purple-900/60 to-black border-2 border-purple-600 rounded-2xl p-10 mb-8">
          <h2 className="text-4xl font-bold mb-6">A Special Thank You</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">To all current and future creators, dreamers, and storytellers...</p>
          <p className="text-lg text-gray-400 leading-relaxed mb-4">Your creativity and passion inspire positive change in the world. Through your films and stories, you have the power to educate, inspire, and bring awareness to critical issues like bullying prevention, social skills development, and humanity's collective growth.</p>
          <p className="text-lg text-gray-400 leading-relaxed mb-4">Every piece of content you create has the potential to touch hearts, change minds, and make our world a better place. Thank you for being part of this mission to combine creative expression with meaningful impact.</p>
          <p className="text-lg text-gray-400 leading-relaxed">Together, we are building a community of creators who use their talents to spread kindness, understanding, and hope. Your impact matters more than you know.</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-600 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4"><Book size={32} className="text-purple-400" /><FileText size={32} className="text-purple-400" /></div>
          <h3 className="text-2xl font-bold mb-4">📖 Full User Guide To MandaStrong Studio</h3>
          <p className="text-gray-400 mb-4">Click to access the complete guide</p>
          <button className="bg-purple-600 px-8 py-4 rounded-xl font-bold">Open User Guide</button>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-600 rounded-2xl p-8 mb-8">
          <h3 className="text-3xl font-bold mb-4">About Our Mission</h3>
          <p className="text-gray-300 mb-6"><strong>MandaStrong Studio</strong> is more than a filmmaking platform. It's part of a comprehensive educational initiative designed to bring awareness and action to schools regarding bullying prevention, social skills development, and the cultivation of humanity in our communities.</p>
          <div className="bg-purple-900/30 border border-purple-600 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold mb-3">Fundraiser: Educational Program on Bullying Prevention & Social Skills</h4>
            <p className="text-gray-400 mb-4">Through this comprehensive program, we provide educational resources and movie-based content to help schools address these critical issues. Our goal is to create safe, supportive environments where every student can thrive.</p>
          </div>
          <div className="bg-purple-900/30 border border-purple-600 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">Supporting Our Heroes</h4>
            <p className="text-gray-400 mb-2"><strong>All Etsy Store Proceeds Benefit Veterans Mental Health Services</strong> ~ 100% of all proceeds from our Etsy Store fundraiser are donated directly to <strong>Veterans Mental Health Services</strong>, supporting those who have sacrificed so much for our freedom.</p>
            <p className="text-sm text-gray-500 mt-4">Visit our fundraiser and learn more at <a href="https://MandaStrong1.Etsy.com" className="text-purple-400 underline">MandaStrong1.Etsy.com</a></p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold mb-6">📖 Full User Guide To MandaStrong Studio</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h4 className="text-xl font-bold mb-3 text-purple-400">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Use Back and Next buttons to navigate between pages</li>
                <li>• Pages 1-3: Welcome, Story & Concept, Login/Register</li>
                <li>• Pages 4-9: AI Tool Board with 720 creative tools</li>
                <li>• Page 10: Upload your existing movie</li>
                <li>• Page 11: Media Box with all generated assets</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold mb-3 text-purple-400">Editing & Export</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Pages 12-16: Professional editing tools with timeline</li>
                <li>• Page 17: Full screen preview of your finished film</li>
                <li>• Page 18: Terms of Service and Disclaimer</li>
                <li>• Page 19: Agent Grok 24/7 Help desk</li>
                <li>• Page 20: Community Hub to share your work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex gap-8 mb-16">
      <button onClick={onBack} className="bg-purple-700 px-16 py-6 rounded-2xl font-bold text-xl border-2 border-purple-500">← Back</button>
      <button onClick={onHome} className="bg-green-600 px-20 py-6 rounded-2xl font-bold text-xl border-2 border-green-400 flex items-center gap-3">🏠 Home</button>
    </div>
    
    <div className="text-center text-gray-500 text-sm">
      <p>MandaStrong1 2025 ~ Author Of Doxy The School Bully ~ Also Find Me On MandaStrong1.Etsy.com</p>
    </div>
    
    <button className="fixed bottom-8 right-8 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl z-50">💬</button>
  </div>
);

// MAIN APP
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigateTo = (page: number) => setCurrentPage(page);
  
  const renderPage = () => {
    switch (currentPage) {
      case 1: return <Page1 onNext={() => setCurrentPage(2)} onNavigate={navigateTo} />;
      case 2: return <Page2 onNext={() => setCurrentPage(3)} onBack={() => setCurrentPage(1)} />;
      case 3: return <Page3 onNext={() => setCurrentPage(4)} onBack={() => setCurrentPage(2)} />;
      case 4: return <Page4 onNext={() => setCurrentPage(5)} onBack={() => setCurrentPage(3)} />;
      case 5: return <Page5 onNext={() => setCurrentPage(6)} onBack={() => setCurrentPage(4)} />;
      case 6: return <Page6 onNext={() => setCurrentPage(7)} onBack={() => setCurrentPage(5)} />;
      case 7: return <Page7 onNext={() => setCurrentPage(8)} onBack={() => setCurrentPage(6)} />;
      case 8: return <Page8 onNext={() => setCurrentPage(9)} onBack={() => setCurrentPage(7)} />;
      case 9: return <Page9 onNext={() => setCurrentPage(10)} onBack={() => setCurrentPage(8)} />;
      case 10: return <Page10 onNext={() => setCurrentPage(11)} onBack={() => setCurrentPage(9)} />;
      case 11: return <Page11 onNext={() => setCurrentPage(12)} onBack={() => setCurrentPage(10)} />;
      case 12: return <Page12 onNext={() => setCurrentPage(13)} onBack={() => setCurrentPage(11)} />;
      case 13: return <Page13 onNext={() => setCurrentPage(14)} onBack={() => setCurrentPage(12)} />;
      case 14: return <Page14 onNext={() => setCurrentPage(15)} onBack={() => setCurrentPage(13)} />;
      case 15: return <Page15 onNext={() => setCurrentPage(16)} onBack={() => setCurrentPage(14)} />;
      case 16: return <Page16 onNext={() => setCurrentPage(17)} onBack={() => setCurrentPage(15)} />;
      case 17: return <Page17 onNext={() => setCurrentPage(18)} onBack={() => setCurrentPage(16)} />;
      case 18: return <Page18 onNext={() => setCurrentPage(19)} onBack={() => setCurrentPage(17)} />;
      case 19: return <Page19 onNext={() => setCurrentPage(20)} onBack={() => setCurrentPage(18)} />;
      case 20: return <Page20 onNext={() => setCurrentPage(21)} onBack={() => setCurrentPage(19)} />;
      case 21: return <Page21 onBack={() => setCurrentPage(20)} onHome={() => setCurrentPage(1)} />;
      default: return <Page1 onNext={() => setCurrentPage(2)} onNavigate={navigateTo} />;
    }
  };
  
  return <div className="app min-h-screen">{renderPage()}</div>;
}
