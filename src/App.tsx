import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  const goNext = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const goBack = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 1. TOP NAVIGATION OVERLAY */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(0,0,0,0.9)', zIndex: 1000, borderBottom: '2px solid #8a2be2' }}>
        <button onClick={goBack} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '10px 35px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>BACK</button>
        <button onClick={goNext} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '10px 35px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>NEXT</button>
      </div>

      {/* 2. PRODUCTION APP FRAME */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1: BACKGROUND VIDEO */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block', position: 'absolute', top: '80px', zIndex: 0 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        )}

        {/* PAGES 1 - 20: YOUR 21 IMAGES */}
        {page < 21 && (
          <img 
            src={`/image${page}.png`} 
            style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} 
            alt={`Page ${page}`} 
          />
        )}

        {/* PAGE 21: THAT'S ALL FOLKS VIDEO */}
        {page === 21 && (
          <video autoPlay playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/thatsallfolks.mp4" type="video/mp4" />
          </video>
        )}

        {/* PAGE 13: INTERACTIVE DURATION SLIDER */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center', zIndex: 50 }}>
            <div style={{ fontSize: '10vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '4px 4px 12px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* 3. STUDIO FOOTER */}
      <div style={{ background: '#000', padding: '40px', textAlign: 'center', borderTop: '2px solid #8a2be2', color: '#8a2be2', fontWeight: 'bold' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}