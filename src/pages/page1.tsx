import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PageProps {
  onNavigate: (page: number) => void;
}

export default function Page1({ onNavigate }: PageProps) {
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
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/mandastrong_avatar_background_70s.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
          MANDASTRONG STUDIO
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-purple-300 mb-12 drop-shadow-lg">
          An All-In-One Make A Movie App! Up to 2.5 Hours Duration
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => onNavigate(1)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-12 py-5 rounded-lg text-2xl transition-all shadow-2xl hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-7 h-7" />
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => onNavigate(2)}
              className="bg-black/50 hover:bg-black/70 text-white font-bold px-8 py-3 rounded-lg transition-all border border-purple-500"
            >
              Login
            </button>
            <button
              onClick={() => onNavigate(2)}
              className="bg-black/50 hover:bg-black/70 text-white font-bold px-8 py-3 rounded-lg transition-all border border-purple-500"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <button className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transition-all hover:scale-110">
        <Play className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
