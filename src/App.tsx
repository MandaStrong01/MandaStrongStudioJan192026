import React, { useState, useEffect } from 'react';
import {
  Sparkles, Menu, Search, Play, MessageCircle, Film, Music,
  Image as ImageIcon, Video, Mic, Zap, Clock, Upload, Database,
  Sliders, Layers, Palette, Download, Share2, Youtube, Twitter, Instagram,
  Facebook, BookOpen, Shield, Heart, Send, X, ChevronRight, ChevronLeft,
  Home, Settings, User, Check, Headphones, Volume2, Eye, FileVideo,
  TrendingUp, Camera, CheckCircle, Crown, LogOut
} from 'lucide-react';
import MandaStrongStudioPro from './components/MandaStrongStudioPro';
import AIToolInterface from './components/AIToolInterface';

const generateTools = (baseTools: string[]) => {
  const tools = [];
  for (let i = 0; i < 120; i++) {
    const base = baseTools[i % baseTools.length];
    const suffix = i >= baseTools.length ? ` PRO ${Math.floor(i / baseTools.length)}` : "";
    tools.push(`${base}${suffix}`);
  }
  return tools;
};

const TOOL_BOARDS = {
  Writing: generateTools([
    "Dialogue Writer", "Plot Generator", "Scene Writer", "Story Outliner",
    "Character Developer", "Dialogue Editor", "Plot Designer", "Story Planner",
    "Treatment Writer", "Script Formatter", "Plot Creator", "Three Act Builder"
  ]),
  Voice: generateTools([
    "Voice Maker", "Voice Cloner", "Voice Creator Tool", "Voice Recorder",
    "Speech Converter", "Voice Builder", "Advanced Voice Generator", "Voice Studio Tool",
    "Premium Voice Generator", "Voice Audio Tool", "Emotional Voice Generator", "Advanced Speech Creator"
  ]),
  Image: generateTools([
    "Image Creator", "Advanced Image Generator", "Design Generator", "Image Tool",
    "Art Maker", "Art Mixer", "Image Stream Tool", "Art Library Tool",
    "Workflow Tool", "Auto Image Generator", "Image Studio Pro", "Easy Image Generator"
  ]),
  Video: generateTools([
    "Motion Video Maker", "Video Creator", "Avatar Generator", "Video Synthesizer",
    "Video Studio", "Video Flow Generator", "Video Creator Studio", "Video Crafter",
    "Image to Motion Tool", "Video Style Tool", "Temporal Flow Tool", "Frame Blender"
  ]),
  Motion: generateTools([
    "Motion Animator", "Motion Studio", "Auto Animator", "Motion Flow Tool",
    "Motion Capture Pro", "Webcam Motion Tool", "Skeleton Tracker", "Joint Tracker",
    "Character Rigger", "3D Character Studio", "Player Avatar Creator", "Avatar Generator"
  ]),
  Editing: generateTools([
    "Smart Video Editor", "Auto Editor", "Video Tools Suite", "Edit Master",
    "Scene Detector", "Beat Syncer", "Auto Assembly Tool", "Smart Timeline",
    "Highlight Finder", "Key Moment Finder", "Context Editor", "Intelligent Cutter"
  ])
};

const COMMUNITY_POSTS = [
  { title: "Epic Action Montage", author: "Sarah Johnson", time: "2 hours ago", likes: 1247, hearts: 823, comments: 156, emoji: "🎬", trending: true },
  { title: "Cinematic Travel Vlog", author: "Mike Chen", time: "5 hours ago", likes: 892, hearts: 634, comments: 89, emoji: "✈️" },
  { title: "Product Showcase Video", author: "Emily Rodriguez", time: "1 day ago", likes: 2156, hearts: 1423, comments: 267, emoji: "📦", trending: true },
  { title: "Music Video Edit", author: "Alex Thompson", time: "1 day ago", likes: 3421, hearts: 2789, comments: 445, emoji: "🎵", trending: true },
  { title: "Wedding Highlights", author: "Jessica Kim", time: "3 days ago", likes: 1847, hearts: 1234, comments: 203, emoji: "💍" },
  { title: "Gaming Montage", author: "David Brown", time: "4 days ago", likes: 2934, hearts: 1987, comments: 512, emoji: "🎮" }
];

const SplashPage = ({ onContinue }: { onContinue: () => void }) => (
  <div 
    className="w-full h-screen bg-black flex items-center justify-center cursor-pointer" 
    onClick={onContinue}
  >
    <div className="absolute inset-0" style={{background:'radial-gradient(ellipse at center, rgba(107,33,168,0.5) 0%, #000 75%)'}}></div>
    <div className="relative z-10 text-center">
      <div className="w-56 h-56 mx-auto rounded-full border-4 border-purple-700 flex items-center justify-center mb-12" style={{boxShadow:'0 0 80px rgba(107,33,168,0.6)'}}>
        <Film className="w-32 h-32 text-purple-400" strokeWidth={1.5} />
      </div>
      <h1 className="text-9xl font-black text-white mb-4" style={{fontFamily:'Impact,sans-serif',letterSpacing:'0.15em',textShadow:'0 0 60px rgba(107,33,168,0.8)'}}>
        MANDASTRONG
      </h1>
      <h2 className="text-6xl font-bold text-purple-400 mb-16" style={{letterSpacing:'0.4em'}}>STUDIO</h2>
      <div className="w-36 h-1 rounded-full mx-auto mb-14" style={{background:'linear-gradient(to right, transparent, #6B21A8, transparent)'}}></div>
      <p className="text-white text-2xl animate-pulse">Tap anywhere to continue</p>
    </div>
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [duration, setDuration] = useState(90);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [volume, setVolume] = useState(80);
  const [editorTab, setEditorTab] = useState('home');
  const [showProStudio, setShowProStudio] = useState(false);
  const [selectedTool, setSelectedTool] = useState<{name: string, category: string} | null>(null);

  if (showSplash) {
    return <SplashPage onContinue={() => setShowSplash(false)} />;
  }

  if (showProStudio) {
    return <MandaStrongStudioPro />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const goTo = (p: number) => {
    setPage(p);
    setMenuOpen(false);
  };

  const QuickAccessMenu = () => (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-2.5 rounded-lg font-medium text-sm text-white flex items-center gap-2 shadow-lg transition-all backdrop-blur-sm"
      >
        <Menu size={18} /> Menu
      </button>
      {menuOpen && (
        <div className="absolute top-14 right-0 bg-zinc-900 border border-zinc-700 rounded-lg p-2 w-64 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => { setShowProStudio(true); setMenuOpen(false); }}
              className="text-left text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-md transition"
            >
              Pro Studio
            </button>
            <div className="h-px bg-zinc-800 my-1"></div>
            {[
              {page: 1, label: "Home"},
              {page: 4, label: "AI Tools"},
              {page: 12, label: "Editor Suite"},
              {page: 16, label: "Export"},
              {page: 17, label: "Tutorials"},
              {page: 19, label: "Help Desk"},
              {page: 20, label: "Community"},
              {page: 21, label: "About"}
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => goTo(item.page)}
                className="text-left text-sm font-medium text-gray-300 hover:text-white px-4 py-2.5 hover:bg-zinc-800 rounded-md transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // GROK BUTTON - NOW FROM PAGE 1
  const GrokButton = () => page !== 19 ? (
    <button
      onClick={() => setPage(19)}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 p-3.5 rounded-full shadow-lg transition-all"
    >
      <MessageCircle size={24} className="text-white" />
    </button>
  ) : null;

  const Footer = () => page >= 3 ? (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-sm py-3 text-center text-gray-400 text-xs md:text-sm font-medium z-40 border-t border-zinc-800">
      <p>MandaStrong Studio 2025 • Author of Doxy The School Bully • MandaStrong1.Etsy.com</p>
    </div>
  ) : null;

  const Navigation = () => page >= 2 && page <= 21 ? (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex gap-4">
      {page > 1 && page < 21 && (
        <button
          onClick={() => setPage(page - 1)}
          className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-6 py-3 rounded-lg font-medium text-sm text-white shadow-lg transition-all flex items-center gap-2"
        >
          <ChevronLeft size={18} /> Back
        </button>
      )}
      {page < 21 && (
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-sm text-white shadow-lg transition-all flex items-center gap-2"
        >
          Next <ChevronRight size={18} />
        </button>
      )}
      {page === 21 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-sm text-white shadow-lg transition-all"
          >
            Home
          </button>
          <button
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-lg font-medium text-sm text-white shadow-lg transition-all"
          >
            Close
          </button>
        </>
      )}
    </div>
  ) : null;

  const ToolBoard = ({ title, tools }: { title: string; tools: string[] }) => (
    <div className="min-h-screen bg-black text-white p-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-400 mb-2">{title} Tools</h1>
          <p className="text-purple-300">Click any tool to start creating with AI</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tools.map((tool, i) => (
            <button
              key={i}
              onClick={() => setSelectedTool({ name: tool, category: title })}
              className="bg-purple-950/30 border-2 border-purple-700 hover:border-purple-500 rounded-lg p-4 flex items-center gap-3 transition-all cursor-pointer group hover:scale-105"
            >
              <Sparkles size={18} className="text-purple-500 flex-shrink-0" />
              <span className="font-medium text-sm text-purple-200 group-hover:text-white transition text-left">{tool}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* WATERMARK HIDING CSS - ENHANCED */}
      <style>{`
        [data-bolt-badge], .bolt-badge, #bolt-badge,
        a[href*="bolt.new"], a[href*="bolt"],
        div[class*="fixed"][class*="bottom"] iframe,
        [class*="made-in-bolt"], [id*="bolt"],
        footer[class*="bolt"], div[aria-label*="bolt"],
        [data-testid*="bolt"] { 
          display: none !important; 
          visibility: hidden !important;
          opacity: 0 !important;
        }
      `}</style>
      <QuickAccessMenu />
      <GrokButton />
      <Footer />
      <Navigation />

      {/* PAGE 1: BROWSE FIRST - WITH LOGIN/REGISTER BUTTONS */}
      {page === 1 && (
        <div className="relative h-screen overflow-hidden bg-black">
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 py-8">
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
                MandaStrong Studio
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-normal max-w-3xl mx-auto">
                Professional cinema production platform with AI-powered tools for creating feature-length films up to 3 hours
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <button
                onClick={() => setShowProStudio(true)}
                className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-lg text-lg font-semibold text-white transition shadow-lg"
              >
                Launch Pro Studio
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setPage(3)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-lg text-sm font-medium text-white transition"
                >
                  Login
                </button>
                <button
                  onClick={() => setPage(3)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-lg text-sm font-medium text-white transition"
                >
                  Register
                </button>
                <button
                  onClick={() => setPage(2)}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-3 rounded-lg text-sm font-medium text-gray-300 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 2: WELCOME */}
      {page === 2 && (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center text-center px-4">
          <Sparkles size={64} className="text-blue-500 mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            MandaStrong Studio
          </h1>
          <p className="text-xl md:text-2xl font-normal text-gray-400 mb-3 max-w-2xl">Create professional family movies</p>
          <p className="text-xl md:text-2xl font-normal text-gray-400 max-w-2xl">and bring your stories to life</p>
        </div>
      )}

      {/* PAGE 3: LOGIN/REGISTER ABOVE PRICING */}
      {page === 3 && (
        <div className="min-h-screen bg-black p-8 pb-32 overflow-y-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {/* Login */}
            <div className="bg-purple-950/30 border-2 border-purple-500 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-purple-300">Sign In</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-300">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 py-3.5 rounded-lg font-semibold text-base mt-6 transition">
                  Login
                </button>
                <div className="text-center">
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
                </div>
              </form>
            </div>

            {/* Register */}
            <div className="bg-purple-950/30 border-2 border-purple-500 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-purple-300">Create Account</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-300">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-300">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    minLength={6}
                    className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 py-3.5 rounded-lg font-semibold text-base mt-6 transition">
                  Register
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center gap-4 max-w-lg mx-auto mb-8">
            <div className="flex-1 h-px bg-purple-700"></div>
            <span className="text-purple-400 font-medium text-sm">or</span>
            <div className="flex-1 h-px bg-purple-700"></div>
          </div>

          <div className="max-w-lg mx-auto mb-16">
            <button
              onClick={() => setPage(4)}
              className="w-full bg-purple-700 hover:bg-purple-600 border-2 border-purple-500 py-3.5 rounded-lg font-medium text-base flex items-center justify-center gap-2 transition"
            >
              <Eye size={20} /> Continue as Guest
            </button>
            <p className="text-center text-purple-400 text-sm mt-3">Explore features without creating an account</p>
          </div>

          {/* PRICING - BELOW LOGIN/REGISTER */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-white">Choose Your Plan</h2>
            <p className="text-center text-purple-300 mb-10">Start free, upgrade anytime</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Basic', price: '20', features: ['HD Export', '100 AI Tools', 'Basic Templates', '10GB Storage', 'Email Support'], tier: 'basic' },
                { name: 'Pro', price: '30', features: ['4K Export', '300 AI Tools', 'Premium Templates', '100GB Storage', 'Priority Support', 'Commercial License'], popular: true, tier: 'pro' },
                { name: 'Studio', price: '50', features: ['8K Export', 'All 600 AI Tools', 'Unlimited Templates', '1TB Storage', '24/7 Live Support', 'Full Commercial Rights', 'Team Collaboration'], tier: 'studio' }
              ].map((plan, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPlan(plan.tier)}
                  className={`bg-black border-2 rounded-xl p-6 transition-all cursor-pointer ${
                    selectedPlan === plan.tier || plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105' : 'border-purple-700 hover:border-purple-500'
                  } ${plan.popular ? 'relative' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-purple-400 text-lg">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={18} className="text-purple-500 flex-shrink-0" />
                        <span className="text-purple-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {selectedPlan === plan.tier && (
                    <div className="text-purple-400 font-semibold text-sm flex items-center gap-2">
                      <CheckCircle size={18} /> Selected
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => setPage(4)}
                className="bg-purple-600 hover:bg-purple-500 px-12 py-4 rounded-lg font-semibold text-lg transition"
              >
                Continue to Payment
              </button>
              <p className="text-purple-400 text-sm mt-4">Secure payment processing with Stripe</p>
            </div>
          </div>
        </div>
      )}

      {/* PAGES 4-9: AI TOOL BOARDS */}
      {page === 4 && <ToolBoard title="Writing" tools={TOOL_BOARDS.Writing} />}
      {page === 5 && <ToolBoard title="Voice" tools={TOOL_BOARDS.Voice} />}
      {page === 6 && <ToolBoard title="Image" tools={TOOL_BOARDS.Image} />}
      {page === 7 && <ToolBoard title="Video" tools={TOOL_BOARDS.Video} />}
      {page === 8 && <ToolBoard title="Motion" tools={TOOL_BOARDS.Motion} />}
      {page === 9 && <ToolBoard title="Editing" tools={TOOL_BOARDS.Editing} />}

      {/* PAGE 10: UPLOAD */}
      {page === 10 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Upload Media</h1>
            <div className="border-4 border-dashed border-purple-700 rounded-xl p-16 text-center bg-purple-950/20 hover:bg-purple-950/30 transition cursor-pointer">
              <Upload size={64} className="text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Drop files here</h3>
              <p className="text-purple-300 mb-6">or click to browse</p>
              <button className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-lg font-semibold transition">
                Choose Files
              </button>
              <p className="text-purple-400 text-sm mt-6">Supports: MP4, MOV, AVI, MP3, WAV, JPG, PNG</p>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 11: EDITOR DASHBOARD */}
      {page === 11 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Editor Suite</h1>
            <div className="grid md:grid-cols-3 gap-6">
              <div onClick={() => setPage(12)} className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8 hover:border-purple-500 cursor-pointer transition">
                <Database size={48} className="text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Media Library</h3>
                <p className="text-purple-300">Manage your assets</p>
              </div>
              <div onClick={() => setPage(13)} className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8 hover:border-purple-500 cursor-pointer transition">
                <Layers size={48} className="text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Timeline Editor</h3>
                <p className="text-purple-300">Edit your sequence</p>
              </div>
              <div onClick={() => setPage(14)} className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8 hover:border-purple-500 cursor-pointer transition">
                <Headphones size={48} className="text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Audio Mixer</h3>
                <p className="text-purple-300">Perfect your sound</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 12: MEDIA LIBRARY */}
      {page === 12 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Media Library</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="bg-purple-950/30 border-2 border-purple-700 rounded-lg p-4 aspect-video flex items-center justify-center hover:border-purple-500 cursor-pointer transition">
                  <FileVideo size={48} className="text-purple-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PAGE 13: TIMELINE EDITOR */}
      {page === 13 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Timeline Editor</h1>
            <div className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8 mb-6">
              <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center border-2 border-purple-500">
                <Play size={64} className="text-purple-500" />
              </div>
              <div className="h-32 bg-black rounded-lg border-2 border-purple-500"></div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 14: AUDIO MIXER */}
      {page === 14 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Audio Mixer</h1>
            <div className="space-y-6">
              {['Master', 'Music', 'Dialogue', 'SFX'].map((track, i) => (
                <div key={i} className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{track}</h3>
                    <Volume2 size={24} className="text-purple-500" />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-2 bg-purple-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <p className="text-purple-400 text-sm mt-2">{volume}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PAGE 15: SETTINGS */}
      {page === 15 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Settings</h1>
            <div className="space-y-6">
              <div className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Project Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-purple-300">Project Name</label>
                    <input
                      type="text"
                      placeholder="My Amazing Film"
                      className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-purple-300">Resolution</label>
                    <select className="w-full bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white">
                      <option>1080p HD</option>
                      <option>4K UHD</option>
                      <option>8K</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 16: EXPORT */}
      {page === 16 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Export Your Film</h1>
            <div className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Film Duration</h3>
                <div className="text-center mb-6">
                  <span className="text-6xl font-bold text-purple-400">{duration}</span>
                  <span className="text-2xl text-purple-300 ml-2">minutes</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-3 bg-purple-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-purple-400 text-sm mt-2">
                  <span>0 min</span>
                  <span>90 min</span>
                  <span>180 min (3 hrs)</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2">
                <Download size={24} /> Export Film
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 17: TUTORIALS */}
      {page === 17 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Tutorials & Learning</h1>
            <div className="grid md:grid-cols-2 gap-6">
              {['Getting Started', 'Advanced Editing', 'AI Tools Masterclass', 'Color Grading', 'Audio Design', 'Export Settings'].map((title, i) => (
                <div key={i} className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-6 hover:border-purple-500 cursor-pointer transition">
                  <Play size={48} className="text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-purple-300">Learn the essentials</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PAGE 18: TERMS */}
      {page === 18 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Terms of Service</h1>
            <div className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8 text-purple-200 space-y-4">
              <p>Welcome to MandaStrong Studio. By using our platform, you agree to these terms.</p>
              <h3 className="text-xl font-bold text-white">1. Service Usage</h3>
              <p>You may use our AI tools for creating original content.</p>
              <h3 className="text-xl font-bold text-white">2. Content Rights</h3>
              <p>You retain all rights to content you create using our platform.</p>
              <h3 className="text-xl font-bold text-white">3. Privacy</h3>
              <p>We respect your privacy and protect your data.</p>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 19: HELP DESK */}
      {page === 19 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Agent Grok Help Desk</h1>
            <div className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-8">
              <div className="h-96 bg-black rounded-lg border-2 border-purple-500 mb-4 p-4 overflow-y-auto">
                <div className="bg-purple-600 rounded-lg p-4 mb-4 max-w-xs">
                  <p className="text-white">Hi! I'm Agent Grok. How can I help you today?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="flex-1 bg-black border-2 border-purple-500 rounded-lg px-4 py-3 text-white"
                />
                <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg transition">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 20: COMMUNITY */}
      {page === 20 && (
        <div className="min-h-screen bg-black p-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-purple-400 mb-8">Community Hub</h1>
            <div className="space-y-4">
              {COMMUNITY_POSTS.map((post, i) => (
                <div key={i} className="bg-purple-950/30 border-2 border-purple-700 rounded-xl p-6 hover:border-purple-500 transition">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{post.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{post.title}</h3>
                        {post.trending && <TrendingUp size={20} className="text-purple-500" />}
                      </div>
                      <p className="text-purple-300 mb-3">by {post.author} • {post.time}</p>
                      <div className="flex gap-6 text-purple-400">
                        <span className="flex items-center gap-1"><Heart size={18} /> {post.likes}</span>
                        <span className="flex items-center gap-1"><MessageCircle size={18} /> {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PAGE 21: THANK YOU */}
      {page === 21 && (
        <div className="min-h-screen bg-black p-6 pb-32 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-3xl mx-auto rounded-xl border-4 border-purple-700"
              >
                <source src="/ThatsAllFolks.MP4" type="video/mp4" />
              </video>
            </div>
            <h1 className="text-6xl font-black text-purple-400 mb-6" style={{fontFamily:'Impact,sans-serif'}}>
              THAT'S ALL FOLKS!
            </h1>
            <p className="text-2xl text-purple-300 mb-8">Thank you for using MandaStrong Studio</p>
            <div className="flex gap-6 justify-center mb-8">
              <a href="https://MandaStrong1.Etsy.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition">
                Visit our Etsy Store
              </a>
            </div>
          </div>
        </div>
      )}

      {/* AI TOOL INTERFACE MODAL */}
      {selectedTool && (
        <AIToolInterface
          tool={selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}
    </div>
  );
}
