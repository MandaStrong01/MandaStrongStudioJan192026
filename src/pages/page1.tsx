import { useEffect, useRef, useState } from "react";
import AuthModal from "../components/AuthModal";

interface PageProps {
  onNavigate: (page: number) => void;
}

export default function Page1({ onNavigate }: PageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        videoRef.current!.muted = true;
        videoRef.current!.play();
      });
    }
  }, []);

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/mandastrong_avatar_background_70s.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center pt-20 text-center">
        <h1 className="text-5xl font-extrabold font-serif text-black">
          MANDASTRONG'S STUDIO
        </h1>
        <p className="mt-4 text-xl font-bold italic text-black">
          An All In One Make A Movie App! 2 ~ 2.5 Hours Duration
        </p>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center gap-6 z-10">
        <button onClick={() => onNavigate(1)} className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">Next</button>
        <button onClick={() => handleAuthClick('login')} className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">Login</button>
        <button onClick={() => handleAuthClick('register')} className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">Register</button>
      </div>

      {showAuthModal && (
        <AuthModal mode={authMode} onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
}
