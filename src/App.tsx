import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Navigation logic
  const goNext = () => page < 21 && setPage(page + 1);
  const goBack = () => page > 1 && setPage(page - 1);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff' }}>
      
      {/* 1. TOP NAVIGATION */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(0,0,0,0.8)', zIndex: 100, borderBottom: '1px solid #8a2be2' }}>
        <button onClick={goBack} style={{ background: '#000', color: '#8a2be2', border: '2px solid #8a2be2', padding: '10px 25px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>BACK</button>
        <button onClick={goNext} style={{ background: '#000', color: '#8a2be2', border: '2px solid #8a2be2', padding: '10px 25px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>NEXT</button>
      </div>

      {/* 2. THE IMAGE FRAME (Page 1-21) */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '70px' }}>
        
        {/* VIDEO LAYER (ONLY PAGE 1) */}
        {page === 1 && (
          <div style={{ position: 'relative', width: '100%' }}>
            <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
              <source src="/backup.mp4 (2)" type="video/mp4" />
            </video>
          </div>
        )}

        {/* YOUR 21 IMAGES (RECREATING THE APP EXACTLY) */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
        />

        {/* PAGE 13: THE INTERACTIVE SLIDER */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '12vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '4px 4px 10px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* 3. FOOTER */}
      <div style={{ textAlign: 'center', padding: '30px', color: '#8a2be2', fontWeight: 'bold', fontSize: '14px' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}