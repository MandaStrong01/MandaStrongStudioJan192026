import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronLeft, Menu, Settings, Music, Layers, Check } from 'lucide-react';

// Common Layout Wrapper to ensure consistency across 21 pages
const PageWrapper = ({ children, onBack, onNext, pageNum }: any) => (
  <div className="min-h-screen bg-black text-white relative flex flex-col">
    <div className="fixed top-0 w-full flex justify-between items-center p-6 bg-black/90 z-50 border-b border-purple-600/30">
      <div className="flex items-center gap-4">
        {onBack && <button onClick={onBack} className="bg-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">← Back</button>}
        <span className="text-purple-400 font-bold hidden md:inline">MANDASTRONG'S STUDIO</span>
      </div>
      <div className="font-bold text-purple-200">PAGE {pageNum} / 21</div>
      <div className="flex items-center gap-4">
        {onNext && <button onClick={onNext} className="bg-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">Next →</button>}
      </div>
    </div>
    <div className="flex-1 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {children}
    </div>
    <button className="fixed bottom-8 right-8 bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl z-50 shadow-2xl hover:scale-110 transition-transform">💬</button>
  </div>
);

// PAGE 1 - Video Background + Avatar
const Page1 = ({ onNext }: any) => (
  <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
      <source src="/background.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>MANDASTRONG'S STUDIO</h1>
      <p className="text-2xl md:text-3xl mb-12 text-purple-200 font-bold">An All In One Make A Movie App!</p>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-500 text-white px-16 py-5 rounded-2xl text-2xl font-black transition-all shadow-[0_0_30px_rgba(147,51,234,0.5)]">START CREATING</button>
    </div>
    {/* Avatar Video - Page 1 specific requirement */}
    <div className="fixed bottom-8 right-32 w-48 h-48 rounded-full border-4 border-purple-600 overflow-hidden shadow-2xl z-50 hidden md:block">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/avatar.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);

// PAGE 3 - Subscription Pricing ($20, $30, $50)
const Page3 = ({ onNext, onBack }: any) => {
  const plans = [
    { name: 'Basic', price: '20', color: 'purple', tools: '100 AI Tools' },
    { name: 'Pro', price: '30', color: 'yellow', tools: '300 AI Tools', popular: true },
    { name: 'Studio', price: '50', color: 'purple', tools: 'All 600 AI Tools' }
  ];
  return (
    <PageWrapper onNext={onNext} onBack={onBack} pageNum={3}>
      <h2 className="text-5xl font-black text-center mb-12">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-gray-900 border-2 ${plan.popular ? 'border-yellow-500 scale-105' : 'border-purple-600'} rounded-2xl p-8 relative`}>
            {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold">BEST VALUE</div>}
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-5xl font-black mb-6">${plan.price}<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-center gap-2"><Check size={18} className="text-green-500"/> {plan.tools}</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-500"/> HD/4K Exports</li>
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold ${plan.popular ? 'bg-yellow-500 text-black' : 'bg-purple-600 text-white'}`}>Select {plan.name}</button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

// PAGE 10 - Main Movie Playback
const Page10 = ({ onNext, onBack }: any) => (
  <PageWrapper onNext={onNext} onBack={onBack} pageNum={10}>
    <h2 className="text-4xl font-black mb-8 text-center text-purple-400">PREVIEW: DOXY THE SCHOOL BULLY</h2>
    <div className="aspect-video bg-gray-900 rounded-3xl border-4 border-purple-600 overflow-hidden shadow-2xl">
      <video controls className="w-full h-full object-contain">
        <source src="/packageDTSBexpscript.mp4" type="video/mp4" />
      </video>
    </div>
  </PageWrapper>
);

// PAGE 12 - Enhancement Studio (0-180 Min Slider)
const Page12 = ({ onNext, onBack }: any) => {
  const [mins, setMins] = useState(90);
  return (
    <PageWrapper onNext={onNext} onBack={onBack} pageNum={12}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-black mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">ENHANCEMENT STUDIO</h2>
        <div className="bg-gray-900 border-4 border-purple-600 rounded-[3rem] p-12 shadow-[0_0_50px_rgba(147,51,234,0.3)]">
          <p className="text-2xl text-gray-400 mb-4 uppercase tracking-widest">Movie Duration</p>
          <div className="text-[10rem] font-black leading-none text-purple-500 mb-8">{mins}<span className="text-3xl ml-2">MIN</span></div>
          <input 
            type="range" min="0" max="180" value={mins} 
            onChange={(e) => setMins(Number(e.target.value))}
            className="w-full h-4 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" 
          />
          <div className="flex justify-between mt-4 font-bold text-gray-600"><span>0m</span><span>180m</span></div>
        </div>
      </div>
    </PageWrapper>
  );
};

// PAGE 21 - That's All Folks (Closing Video)
const Page21 = ({ onBack, onHome }: any) => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
    <video autoPlay playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src="/thatsallfolks.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 text-center bg-black/60 p-12 rounded-3xl border-2 border-purple-600 backdrop-blur-md max-w-4xl mx-4">
      <h1 className="text-7xl font-black mb-6 text-purple-400 uppercase tracking-tighter">Mission Complete</h1>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">
        Proceeds benefit Veterans Mental Health. Thank you for making a difference.
      </p>
      <div className="flex justify-center gap-6">
        <button onClick={onBack} className="bg-gray-800 px-10 py-4 rounded-xl font-bold">Back</button>
        <button onClick={onHome} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">Restart Studio</button>
      </div>
      <p className="mt-8 text-purple-500 font-black">MandaStrong1.Etsy.com</p>
    </div>
  </div>
);

// MAIN APP ENGINE
export default function App() {
  const [page, setPage] = useState(1);
  const next = () => setPage(p => Math.min(21, p + 1));
  const back = () => setPage(p => Math.max(1, p - 1));

  // Placeholder render logic for intermediate tool pages (4-9, 11, 13-20)
  const renderToolPage = (num: number, title: string) => (
    <PageWrapper onNext={next} onBack={back} pageNum={num}>
      <h2 className="text-4xl font-bold mb-8 text-purple-400">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-gray-900 border border-purple-600/50 p-6 rounded-xl text-center hover:bg-purple-900/20 cursor-pointer transition-colors">
            <Zap className="mx-auto mb-2 text-purple-500" />
            <span className="text-sm font-bold">Tool #{i + 1}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );

  switch(page) {
    case 1: return <Page1 onNext={next} />;
    case 2: return renderToolPage(2, "STORY & CONCEPT");
    case 3: return <Page3 onNext={next} onBack={back} />;
    case 4: return renderToolPage(4, "SCRIPT TOOLS");
    case 5: return renderToolPage(5, "VOICE TOOLS");
    case 6: return renderToolPage(6, "IMAGE TOOLS");
    case 7: return renderToolPage(7, "VIDEO TOOLS");
    case 8: return renderToolPage(8, "MOTION TOOLS");
    case 9: return renderToolPage(9, "EDIT TOOLS");
    case 10: return <Page10 onNext={next} onBack={back} />;
    case 11: return renderToolPage(11, "EDITOR SUITE");
    case 12: return <Page12 onNext={next} onBack={back} />;
    case 13: return renderToolPage(13, "TIMELINE EDITOR");
    case 14: return renderToolPage(14, "AUDIO MIXER");
    case 15: return renderToolPage(15, "SETTINGS");
    case 16: return renderToolPage(16, "LEARNING CENTER");
    case 17: return renderToolPage(17, "EXPORT CENTER");
    case 18: return renderToolPage(18, "TERMS & DISCLAIMER");
    case 19: return renderToolPage(19, "AGENT GROK HELP");
    case 20: return renderToolPage(20, "COMMUNITY HUB");
    case 21: return <Page21 onBack={back} onHome={() => setPage(1)} />;
    default: return <Page1 onNext={next} />;
  }
}import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Film, Book, Play, Bot, Zap, Clock, TrendingUp, Flame, Heart, MessageCircle, Upload, FileText, ChevronLeft, Menu, Settings, Music, Layers, Check } from 'lucide-react';

// Common Layout Wrapper to ensure consistency across 21 pages
const PageWrapper = ({ children, onBack, onNext, pageNum }: any) => (
  <div className="min-h-screen bg-black text-white relative flex flex-col">
    <div className="fixed top-0 w-full flex justify-between items-center p-6 bg-black/90 z-50 border-b border-purple-600/30">
      <div className="flex items-center gap-4">
        {onBack && <button onClick={onBack} className="bg-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">← Back</button>}
        <span className="text-purple-400 font-bold hidden md:inline">MANDASTRONG'S STUDIO</span>
      </div>
      <div className="font-bold text-purple-200">PAGE {pageNum} / 21</div>
      <div className="flex items-center gap-4">
        {onNext && <button onClick={onNext} className="bg-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">Next →</button>}
      </div>
    </div>
    <div className="flex-1 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {children}
    </div>
    <button className="fixed bottom-8 right-8 bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl z-50 shadow-2xl hover:scale-110 transition-transform">💬</button>
  </div>
);

// PAGE 1 - Video Background + Avatar
const Page1 = ({ onNext }: any) => (
  <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
      <source src="/background.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>MANDASTRONG'S STUDIO</h1>
      <p className="text-2xl md:text-3xl mb-12 text-purple-200 font-bold">An All In One Make A Movie App!</p>
      <button onClick={onNext} className="bg-purple-600 hover:bg-purple-500 text-white px-16 py-5 rounded-2xl text-2xl font-black transition-all shadow-[0_0_30px_rgba(147,51,234,0.5)]">START CREATING</button>
    </div>
    {/* Avatar Video - Page 1 specific requirement */}
    <div className="fixed bottom-8 right-32 w-48 h-48 rounded-full border-4 border-purple-600 overflow-hidden shadow-2xl z-50 hidden md:block">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/avatar.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);

// PAGE 3 - Subscription Pricing ($20, $30, $50)
const Page3 = ({ onNext, onBack }: any) => {
  const plans = [
    { name: 'Basic', price: '20', color: 'purple', tools: '100 AI Tools' },
    { name: 'Pro', price: '30', color: 'yellow', tools: '300 AI Tools', popular: true },
    { name: 'Studio', price: '50', color: 'purple', tools: 'All 600 AI Tools' }
  ];
  return (
    <PageWrapper onNext={onNext} onBack={onBack} pageNum={3}>
      <h2 className="text-5xl font-black text-center mb-12">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-gray-900 border-2 ${plan.popular ? 'border-yellow-500 scale-105' : 'border-purple-600'} rounded-2xl p-8 relative`}>
            {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold">BEST VALUE</div>}
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-5xl font-black mb-6">${plan.price}<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-center gap-2"><Check size={18} className="text-green-500"/> {plan.tools}</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-500"/> HD/4K Exports</li>
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold ${plan.popular ? 'bg-yellow-500 text-black' : 'bg-purple-600 text-white'}`}>Select {plan.name}</button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

// PAGE 10 - Main Movie Playback
const Page10 = ({ onNext, onBack }: any) => (
  <PageWrapper onNext={onNext} onBack={onBack} pageNum={10}>
    <h2 className="text-4xl font-black mb-8 text-center text-purple-400">PREVIEW: DOXY THE SCHOOL BULLY</h2>
    <div className="aspect-video bg-gray-900 rounded-3xl border-4 border-purple-600 overflow-hidden shadow-2xl">
      <video controls className="w-full h-full object-contain">
        <source src="/packageDTSBexpscript.mp4" type="video/mp4" />
      </video>
    </div>
  </PageWrapper>
);

// PAGE 12 - Enhancement Studio (0-180 Min Slider)
const Page12 = ({ onNext, onBack }: any) => {
  const [mins, setMins] = useState(90);
  return (
    <PageWrapper onNext={onNext} onBack={onBack} pageNum={12}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-black mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">ENHANCEMENT STUDIO</h2>
        <div className="bg-gray-900 border-4 border-purple-600 rounded-[3rem] p-12 shadow-[0_0_50px_rgba(147,51,234,0.3)]">
          <p className="text-2xl text-gray-400 mb-4 uppercase tracking-widest">Movie Duration</p>
          <div className="text-[10rem] font-black leading-none text-purple-500 mb-8">{mins}<span className="text-3xl ml-2">MIN</span></div>
          <input 
            type="range" min="0" max="180" value={mins} 
            onChange={(e) => setMins(Number(e.target.value))}
            className="w-full h-4 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" 
          />
          <div className="flex justify-between mt-4 font-bold text-gray-600"><span>0m</span><span>180m</span></div>
        </div>
      </div>
    </PageWrapper>
  );
};

// PAGE 21 - That's All Folks (Closing Video)
const Page21 = ({ onBack, onHome }: any) => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
    <video autoPlay playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src="/thatsallfolks.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 text-center bg-black/60 p-12 rounded-3xl border-2 border-purple-600 backdrop-blur-md max-w-4xl mx-4">
      <h1 className="text-7xl font-black mb-6 text-purple-400 uppercase tracking-tighter">Mission Complete</h1>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">
        Proceeds benefit Veterans Mental Health. Thank you for making a difference.
      </p>
      <div className="flex justify-center gap-6">
        <button onClick={onBack} className="bg-gray-800 px-10 py-4 rounded-xl font-bold">Back</button>
        <button onClick={onHome} className="bg-purple-600 px-10 py-4 rounded-xl font-bold">Restart Studio</button>
      </div>
      <p className="mt-8 text-purple-500 font-black">MandaStrong1.Etsy.com</p>
    </div>
  </div>
);

// MAIN APP ENGINE
export default function App() {
  const [page, setPage] = useState(1);
  const next = () => setPage(p => Math.min(21, p + 1));
  const back = () => setPage(p => Math.max(1, p - 1));

  // Placeholder render logic for intermediate tool pages (4-9, 11, 13-20)
  const renderToolPage = (num: number, title: string) => (
    <PageWrapper onNext={next} onBack={back} pageNum={num}>
      <h2 className="text-4xl font-bold mb-8 text-purple-400">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-gray-900 border border-purple-600/50 p-6 rounded-xl text-center hover:bg-purple-900/20 cursor-pointer transition-colors">
            <Zap className="mx-auto mb-2 text-purple-500" />
            <span className="text-sm font-bold">Tool #{i + 1}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );

  switch(page) {
    case 1: return <Page1 onNext={next} />;
    case 2: return renderToolPage(2, "STORY & CONCEPT");
    case 3: return <Page3 onNext={next} onBack={back} />;
    case 4: return renderToolPage(4, "SCRIPT TOOLS");
    case 5: return renderToolPage(5, "VOICE TOOLS");
    case 6: return renderToolPage(6, "IMAGE TOOLS");
    case 7: return renderToolPage(7, "VIDEO TOOLS");
    case 8: return renderToolPage(8, "MOTION TOOLS");
    case 9: return renderToolPage(9, "EDIT TOOLS");
    case 10: return <Page10 onNext={next} onBack={back} />;
    case 11: return renderToolPage(11, "EDITOR SUITE");
    case 12: return <Page12 onNext={next} onBack={back} />;
    case 13: return renderToolPage(13, "TIMELINE EDITOR");
    case 14: return renderToolPage(14, "AUDIO MIXER");
    case 15: return renderToolPage(15, "SETTINGS");
    case 16: return renderToolPage(16, "LEARNING CENTER");
    case 17: return renderToolPage(17, "EXPORT CENTER");
    case 18: return renderToolPage(18, "TERMS & DISCLAIMER");
    case 19: return renderToolPage(19, "AGENT GROK HELP");
    case 20: return renderToolPage(20, "COMMUNITY HUB");
    case 21: return <Page21 onBack={back} onHome={() => setPage(1)} />;
    default: return <Page1 onNext={next} />;
  }
}