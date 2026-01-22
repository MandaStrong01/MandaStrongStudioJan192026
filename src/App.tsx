import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Navigation logic to move through your 21-page masterpiece
  const goNext = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const goBack = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: 900 }}>
      
      {/* 1. STUDIO NAVIGATION OVERLAY */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(5,5,5,0.95)', zIndex: 1000, borderBottom: '3px solid #8a2be2' }}>
        <button onClick={goBack} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase' }}>BACK</button>
        <button onClick={goNext} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase' }}>NEXT</button>
      </div>

      {/* 2. THE 21-IMAGE PROJECTOR */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* VIDEO LAYER: Plays behind your image on Page 1 */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', display: 'block', position: 'absolute', top: '80px', zIndex: 0 }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* YOUR ARTWORK: This recreates your app 1:1 using your files */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', maxWidth: '1400px', display: 'block', position: 'relative', zIndex: 1 }} 
          alt={`Studio Page ${page}`} 
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {/* PAGE 13: THE INTERACTIVE PURPLE SLIDER */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center', zIndex: 50 }}>
            <div style={{ fontSize: '12vw', color: '#8a2be2', textShadow: '4px 4px 15px #000', marginBottom: '10px' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '85%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* 3. STUDIO FOOTER */}
      <div style={{ background: '#050505', padding: '40px', textAlign: 'center', borderTop: '3px solid #8a2be2', marginTop: '50px' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}