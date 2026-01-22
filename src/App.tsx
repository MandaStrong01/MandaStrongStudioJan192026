import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Simple navigation to move through the 21 pages of your design
  const goNext = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const goBack = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* 1. MINIMAL NAVIGATION (Allows your design to be the focus) */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(0,0,0,0.8)', zIndex: 1000, borderBottom: '2px solid #8a2be2' }}>
        <button onClick={goBack} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>BACK</button>
        <button onClick={goNext} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>NEXT</button>
      </div>

      {/* 2. THE 21 IMAGES (Recreating your app 1:1) */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* VIDEO BACKGROUND (PAGE 1 ONLY) */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* YOUR ARTWORK: image1.png to image21.png */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {/* PAGE 13: THE ONLY INTERACTIVE OVERLAY (The Slider) */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center', zIndex: 50 }}>
            <div style={{ fontSize: '10vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '4px 4px 10px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* 3. YOUR FOOTER */}
      <div style={{ padding: '30px', textAlign: 'center', color: '#8a2be2', fontWeight: 'bold', background: '#000' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}