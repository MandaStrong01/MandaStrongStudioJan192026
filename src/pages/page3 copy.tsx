import { useEffect } from "react";

export default function Page3() {
  useEffect(() => {
    // stop any background audio/video when entering Page 3
    const videos = document.querySelectorAll("video");
    videos.forEach(v => {
      v.pause();
      v.currentTime = 0;
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top auth */}
      <div className="flex justify-center gap-6 py-8">
        <button className="btn-black">Login</button>
        <button className="btn-black">Register</button>
      </div>

      {/* Plans */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-8">
        <div className="plan-box">Starter</div>
        <div className="plan-box">Pro</div>
        <div className="plan-box">Studio</div>
      </div>

      {/* Footer starts here */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm">
        © MandaStrong Studio
      </footer>
    </div>
  );
}
