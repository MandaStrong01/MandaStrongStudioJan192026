import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Check, Sparkles, Zap, Crown } from 'lucide-react';
import Footer from '../components/Footer';
import QuickAccess from '../components/QuickAccess';

interface PageProps {
  onNavigate: (page: number) => void;
}

export default function Page3({ onNavigate }: PageProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach(v => {
      v.pause();
      v.currentTime = 0;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 text-white flex flex-col">
      <button className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transition-all hover:scale-110">
        <Play className="w-6 h-6 text-white" />
      </button>

      <div className="flex-1 flex flex-col px-4 py-12">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-purple-400 mb-4">Get Started with MandaStrong Studio</h1>
            <p className="text-xl text-white/70">Choose your plan and start creating amazing films today</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              Login
            </button>
            <button
              onClick={() => setShowRegister(true)}
              className="bg-black hover:bg-purple-900 text-white font-bold px-8 py-3 rounded-lg transition-all border border-purple-500"
            >
              Register
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-black">BASIC</h2>
              </div>
              <div className="text-4xl font-black mb-6">
                $20<span className="text-lg text-white/60">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 30 minutes video duration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>720p HD export</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Basic AI tools (50 tools)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Standard rendering speed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>5GB cloud storage</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-all">
                Choose Basic
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm border-2 border-purple-400 rounded-2xl p-8 hover:border-purple-300 transition-all hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-black">PRO</h2>
              </div>
              <div className="text-4xl font-black mb-6">
                $40<span className="text-lg text-white/60">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 90 minutes video duration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>1080p Full HD export</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Advanced AI tools (300 tools)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Priority rendering (2x faster)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>50GB cloud storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Watermark removal</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-lg transition-all">
                Choose Pro
              </button>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-black">STUDIO</h2>
              </div>
              <div className="text-4xl font-black mb-6">
                $80<span className="text-lg text-white/60">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Unlimited duration (up to 2.5 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>4K Ultra HD export</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>All AI tools (720+ tools)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Ultra-fast rendering (5x faster)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Unlimited cloud storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Priority support 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Commercial license</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-3 rounded-lg transition-all">
                Choose Studio
              </button>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => onNavigate(2)}
              className="flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-900 transition-all border border-purple-500"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={() => onNavigate(4)}
              className="flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-500 transition-all"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-black/90 rounded-2xl border border-purple-500/50 p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-black border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-black border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-all">
                Login
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition-all border border-purple-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-black/90 rounded-2xl border border-purple-500/50 p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-black border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-black border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-black border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-black border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-all">
                Register
              </button>
              <button
                onClick={() => setShowRegister(false)}
                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition-all border border-purple-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <QuickAccess onNavigate={onNavigate} />
      <Footer />
    </div>
  );
}
