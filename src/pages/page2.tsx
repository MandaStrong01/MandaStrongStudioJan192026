import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import Footer from '../components/Footer';
import QuickAccess from '../components/QuickAccess';

interface PageProps {
  onNavigate: (page: number) => void;
}

export default function Page2({ onNavigate }: PageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current!.muted = true;
        videoRef.current!.play();
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20">
      <video
        ref={videoRef}
        src="/background.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <button className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transition-all hover:scale-110">
        <Play className="w-6 h-6 text-white" />
      </button>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
          MANDASTRONG'S STUDIO
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-purple-300 mb-12 drop-shadow-lg max-w-4xl">
          Welcome! Make Awesome Family Movies Or Put Your Dreams Into Film Reality.
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
          Transform your stories into cinematic masterpieces with our all-in-one movie creation platform.
          Upload your footage, add AI-powered effects, and create professional films up to 2.5 hours long.
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => onNavigate(1)}
            className="flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-900 transition-all border border-purple-500"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={() => onNavigate(3)}
            className="flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-500 transition-all"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <QuickAccess onNavigate={onNavigate} />
      <Footer />
    </div>
  );
}
