import React, { useState, useEffect } from "react";
import {
  Sparkles, Menu, Search, Play, MessageCircle, Film, Music,
  Video, Mic, Zap, Clock, Upload, Database,
  Sliders, Layers, Palette, Download, Youtube, Twitter, Instagram,
  Facebook, BookOpen, Shield, Heart, ChevronRight, ChevronLeft,
  Home, Settings, Check, Headphones, Volume2, FileVideo, TrendingUp
} from "lucide-react";

// ---------------------------------------------------------------------------
// UTILITIES
// ---------------------------------------------------------------------------

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

const ENHANCEMENT_TOOLS = [
  "AI Upscaling", "Noise Reduction", "Stabilization", "Color Enhancement",
  "Audio Enhancement", "Frame Interpolation", "Sharpening", "Deblur",
  "HDR Tone Mapping", "Face Enhancement", "Auto Crop", "Smart Zoom",
  "Background Removal", "Object Removal", "Sky Replacement", "Style Transfer",
  "Auto Color Grade", "Slow Motion", "Time Lapse", "Motion Blur",
  "Depth of Field", "Vignette", "Grain Removal", "Contrast Boost",
  "Saturation Boost", "Exposure Fix", "White Balance", "Shadow Recovery",
  "Highlight Recovery", "Detail Enhancement"
];

// ---------------------------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------------------------

export default function App() {
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [duration, setDuration] = useState(90);
  const [selectedPlan, setSelectedPlan] = useState("studio");

  // Stripe checkout URLs
  const STRIPE_PLANS = {
    basic: "https://buy.stripe.com/test_basic20plan",
    pro: "https://buy.stripe.com/test_pro30plan",
    studio: "https://buy.stripe.com/test_studio50plan"
  };

  const handlePayment = () => {
    const planUrl = STRIPE_PLANS[selectedPlan] || STRIPE_PLANS.studio;
    window.location.href = planUrl;
  };

  // Always unlock Studio Master
  useEffect(() => setSelectedPlan("studio"), []);

  useEffect(() => window.scrollTo(0, 0), [page]);

  const goTo = (p: number) => {
    setPage(p);
    setMenuOpen(false);
  };

  // -------------------------------------------------------------------------
  // COMPONENTS
  // -------------------------------------------------------------------------

  const QuickAccessMenu = () => (
    <div className="fixed top-8 right-6 z-50">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full font-black uppercase text-white flex items-center gap-2 shadow-lg transition-all"
      >
        <Menu size={20} /> Quick Access
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-black border-2 border-purple-600 rounded-2xl p-4 w-64 shadow-2xl">
          {[
            { page: 1, label: "Home" },
            { page: 4, label: "AI Hub" },
            { page: 12, label: "Editor Suite" },
            { page: 16, label: "Export" },
            { page: 17, label: "Tutorials" },
            { page: 19, label: "Help Desk" },
            { page: 21, label: "Finish" }
          ].map((item) => (
            <button
              key={item.page}
              onClick={() => goTo(item.page)}
              className="text-left text-xs font-bold text-purple-400 px-4 py-2 hover:bg-purple-600 hover:text-white rounded-lg transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const Footer = () =>
    page >= 3 && (
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 py-3 text-center text-white text-xs md:text-sm font-black uppercase z-40 border-t border-purple-900/30">
        <p>
          MandaStrong Studio 2025 • Author of Doxy The School Bully • MandaStrong1.Etsy.com
        </p>
      </div>
    );

  const Navigation = () =>
    page >= 2 && page <= 21 ? (
      <div className="fixed bottom-20 left-0 right-0 z-50 flex justify-center gap-6">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="bg-purple-600 hover:bg-purple-500 px-10 py-3 rounded-full font-black uppercase text-white shadow-lg flex items-center gap-2"
          >
            <ChevronLeft size={20} /> Back
          </button>
        )}
        {page < 21 && (
          <button
            onClick={() => setPage(page + 1)}
            className="bg-purple-600 hover:bg-purple-500 px-10 py-3 rounded-full font-black uppercase text-white shadow-lg flex items-center gap-2"
          >
            Next <ChevronRight size={20} />
          </button>
        )}
      </div>
    ) : null;

  const ToolBoard = ({ title, tools }: { title: string; tools: string[] }) => (
    <div className="min-h-screen bg-black text-white p-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black uppercase text-purple-500 mb-12">
          {title} BOARD
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-gray-900/50 border-2 border-purple-900/30 rounded-xl p-4 flex items-center gap-3 hover:border-purple-600 hover:bg-gray-900 transition cursor-pointer"
            >
              <Sparkles size={20} className="text-purple-500" />
              <span className="font-bold text-sm">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // -------------------------------------------------------------------------
  // PAGES
  // -------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <QuickAccessMenu />
      <Footer />
      <Navigation />

      {/* PAGE 1 – HOME */}
      {page === 1 && (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 flex flex-col justify-center items-center text-center px-4">
          <Sparkles size={80} className="text-purple-400 mb-8" />
          <h1 className="text-6xl md:text-8xl font-black uppercase text-purple-300 mb-6">
            MANDASTRONG STUDIO
          </h1>
          <p className="text-xl md:text-3xl font-black text-purple-200 mb-10">
            The All-In-One Movie Maker ~ Create Up To 3 Hours of Magic!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setPage(2)}
              className="bg-purple-600 hover:bg-purple-500 px-10 py-3 rounded-xl text-xl font-black text-white"
            >
              Next
            </button>
            <button
              onClick={() => setPage(3)}
              className="bg-purple-800 hover:bg-purple-700 px-10 py-3 rounded-xl text-xl font-black text-white"
            >
              Login / Register
            </button>
            <button
              onClick={() => setPage(4)}
              className="bg-gray-800 hover:bg-gray-700 px-10 py-3 rounded-xl text-xl font-black text-white"
            >
              Browse Tools
            </button>
          </div>
        </div>
      )}

      {/* PAGE 3 – PRICING */}
      {page === 3 && (
        <div className="min-h-screen bg-black p-8 pb-32 overflow-y-auto">
          <h2 className="text-5xl font-black text-center mb-10">Select Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Basic", price: "20", features: ["HD Export", "100 AI Tools", "10 GB Storage", "Email Support"] },
              { name: "Pro", price: "30", features: ["4K Export", "300 AI Tools", "100 GB Storage", "Priority Support"], popular: true },
              { name: "Studio", price: "50", features: ["8K Export", "All 600 AI Tools", "1 TB Storage", "24/7 Live Support", "Full Commercial Rights"] }
            ].map((plan) => (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                className={`border-4 rounded-3xl p-8 cursor-pointer transition ${
                  selectedPlan === plan.name.toLowerCase() || plan.popular
                    ? "border-yellow-400 scale-105"
                    : "border-purple-900"
                }`}
              >
                {plan.popular && (
                  <div className="bg-purple-600 px-4 py-1 rounded-full text-sm font-black mb-4 inline-block">
                    POPULAR
                  </div>
                )}
                <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
                <p className="text-5xl font-black mb-6">
                  ${plan.price}
                  <span className="text-2xl">/mo</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                      <Check size={16} className="text-purple-400" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handlePayment}
              className="bg-purple-600 hover:bg-purple-500 px-16 py-5 rounded-xl font-black text-2xl uppercase"
            >
              Continue to Payment
            </button>
            <p className="text-gray-400 mt-4">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>
      )}

      {/* TOOL BOARDS */}
      {page === 5 && <ToolBoard title="WRITING" tools={TOOL_BOARDS.Writing} />}
      {page === 6 && <ToolBoard title="VOICE" tools={TOOL_BOARDS.Voice} />}
      {page === 7 && <ToolBoard title="IMAGE" tools={TOOL_BOARDS.Image} />}
      {page === 8 && <ToolBoard title="VIDEO" tools={TOOL_BOARDS.Video} />}
      {page === 9 && <ToolBoard title="MOTION" tools={TOOL_BOARDS.Motion} />}

      {/* PAGE 12 – AI ENHANCEMENT GRID */}
      {page === 12 && (
        <div className="min-h-screen bg-black p-8 pb-32">
          <h1 className="text-5xl font-black uppercase text-purple-500 mb-8">
            AI Enhancement Studio
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ENHANCEMENT_TOOLS.map((tool, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border-2 border-purple-600/30 rounded-xl p-3 text-center text-sm font-bold hover:bg-purple-900/30 transition"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}