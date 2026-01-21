import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  const goNext = () => { if (page < 21) setPage(prev => prev + 1); window.scrollTo(0,0); };
  const goBack = () => { if (page > 1) setPage(prev => prev - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', overflowX: 'hidden' }}>
      
      {/* 1. TOP NAVIGATION OVERLAY */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(0,0,0,0.85)', zIndex: 1000, borderBottom: '2px solid #8a2be2' }}>
        <button onClick={goBack} style={{ background: '#000', color: '#8a2be2', border: '2px solid #8a2be2', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px', textTransform: 'uppercase' }}>BACK</button>
        <button onClick={goNext} style={{ background: '#000', color: '#8a2be2', border: '2px solid #8a2be2', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px', textTransform: 'uppercase' }}>NEXT</button>
      </div>

      {/* 2. APP CONTENT FRAME */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '80px' }}>
        
        {/* VIDEO BACKGROUND (PAGE 1 ONLY) */}
        {page === 1 && (
          <div style={{ width: '100%', backgroundColor: '#000' }}>
            <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
              <source src="/backup.mp4 (2)" type="video/mp4" />
            </video>
          </div>
        )}

        {/* YOUR 21 IMAGES */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={`/image${page}.png`} 
            style={{ width: '100%', maxWidth: '1400px', display: 'block' }} 
            alt={`Page ${page}`} 
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* PAGE 13: THE FUNCTIONAL ENHANCEMENT SLIDER */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center', zIndex: 50 }}>
            <div style={{ fontSize: '12vw', fontWeight: '900', color: '#8a2be2', textShadow: '4px 4px 15px #000', marginBottom: '10px' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '85%', height: '45px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* 3. STUDIO FOOTER */}
      <div style={{ textAlign: 'center', padding: '40px 20px', color: '#8a2be2', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}