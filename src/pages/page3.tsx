import { useEffect } from "react";

interface PageProps {
  onNavigate: (page: number) => void;
}

export default function Page3({ onNavigate }: PageProps) {
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach(v => {
      v.pause();
      v.currentTime = 0;
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex justify-center gap-6 py-8">
        <button className="bg-black text-white font-bold px-6 py-3 rounded-lg border-2 border-white hover:bg-gray-800 transition-all">Login</button>
        <button className="bg-black text-white font-bold px-6 py-3 rounded-lg border-2 border-white hover:bg-gray-800 transition-all">Register</button>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-8 flex-1 items-center">
        <div className="bg-gray-900 border-2 border-purple-500 rounded-lg p-8 text-center flex-1 max-w-sm">
          <h2 className="text-3xl font-bold mb-4">Starter</h2>
          <p className="text-gray-400">Basic Plan</p>
        </div>
        <div className="bg-gray-900 border-2 border-purple-500 rounded-lg p-8 text-center flex-1 max-w-sm">
          <h2 className="text-3xl font-bold mb-4">Pro</h2>
          <p className="text-gray-400">Professional Plan</p>
        </div>
        <div className="bg-gray-900 border-2 border-purple-500 rounded-lg p-8 text-center flex-1 max-w-sm">
          <h2 className="text-3xl font-bold mb-4">Studio</h2>
          <p className="text-gray-400">Studio Plan</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 py-8">
        <button onClick={() => onNavigate(1)} className="bg-black text-white font-bold px-8 py-3 rounded-lg border-2 border-white hover:bg-gray-800 transition-all">Back</button>
        <button onClick={() => onNavigate(3)} className="bg-black text-white font-bold px-8 py-3 rounded-lg border-2 border-white hover:bg-gray-800 transition-all">Next</button>
      </div>

      <footer className="py-6 text-center text-gray-400 text-sm">
        © MandaStrong Studio
      </footer>
    </div>
  );
}
