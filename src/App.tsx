import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Simple navigation to flip through your 21 images
  const next = () => { if (page < 21) setPage(page + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(page - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 1. STUDIO NAV CONTROLS */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(0,0,0,0.9)', zIndex: 100, borderBottom: '2px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: '#fff', border: 'none', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>BACK</button>
        <button onClick={next} style={{ background: '#8a2be2', color: '#fff', border: 'none', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%', paddingTop: '75px' }}>
        
        {/* PAGE 1 VIDEO LAYER */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* YOUR 21 IMAGES (1:1 Copy of your design) */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
        />

        {/* PAGE 13 FUNCTIONAL SLIDER */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '10vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '3px 3px 10px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '30px', color: '#8a2be2', fontWeight: 'bold' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}