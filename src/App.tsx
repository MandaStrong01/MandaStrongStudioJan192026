import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  const nav = (n: number) => {
    if (n >= 1 && n <= 21) {
      setPage(n);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-black uppercase pb-24">
      {/* HEADER NAV */}
      <div className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 border-b-4 border-purple-600 bg-black/95">
        <span className="text-purple-600 text-xl">MANDASTRONG STUDIO</span>
        <div className="flex gap-3">
          <button
            onClick={() => nav(page - 1)}
            className="bg-black text-white border-2 border-purple-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-purple-900 transition-all"
          >
            BACK
          </button>
          <button
            onClick={() => nav(page + 1)}
            className="bg-black text-white border-2 border-purple-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-purple-900 transition-all"
          >
            NEXT
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center justify-center pt-5">
        {page === 1 ? (
          /* PAGE 1: VIDEO BACKGROUND + IMAGE OVERLAY */
          <div className="relative w-full flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="fixed inset-0 w-full h-full object-cover -z-10"
            >
              <source src="/mandastrong_avatar_background_70s.mp4" type="video/mp4" />
            </video>
            <img src="/image1.png" alt="Splash Page" className="w-full max-w-5xl" />
            <div className="absolute bottom-[20%] flex gap-5">
              <button
                onClick={() => nav(3)}
                className="bg-black text-white border-2 border-purple-600 px-12 py-6 rounded-lg text-2xl font-bold hover:bg-purple-900 transition-all"
              >
                START
              </button>
            </div>
          </div>
        ) : (
          /* PAGES 2-21: IMAGE DISPLAY */
          <div className="relative">
            <img src={`/image${page}.png`} alt={`Page ${page}`} className="w-full max-w-5xl" />

            {/* PAGE 13: DURATION SLIDER OVERLAY */}
            {page === 13 && (
              <div className="absolute top-[55%] w-full text-center">
                <div className="text-9xl font-bold text-purple-600">{mins} MIN</div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={mins}
                  onChange={(e) => setMins(Number(e.target.value))}
                  className="w-[70%] h-5 cursor-pointer"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="fixed bottom-0 left-0 w-full py-4 bg-black/95 border-t-4 border-purple-600 text-center text-sm font-bold z-50">
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}
