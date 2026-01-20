import { useEffect, useRef } from "react";

interface PageProps {
  onNavigate: (page: number) => void;
}

export default function Page2({ onNavigate }: PageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  }, []);

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
          Welcome! Make Awesome Family Movies Or Put Your Dreams Into Film Reality.
        </p>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center gap-6 z-10">
        <button onClick={() => onNavigate(0)} className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">Back</button>
        <button onClick={() => onNavigate(2)} className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">Next</button>
      </div>
    </div>
  );
}
