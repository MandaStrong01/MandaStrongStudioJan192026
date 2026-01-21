import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Pure black container to let your images be the focus
  const screenStyle: React.CSSProperties = {
    backgroundColor: '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    padding: 0
  };

  // Buttons are simplified to stay out of the way of your art
  const navBtn = {
    background: 'none',
    color: '#8a2be2',
    border: '2px solid #8a2be2',
    padding: '8px 20px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    borderRadius: '4px'
  };

  return (
    <div style={screenStyle}>
      {/* 1. Navigation (Floating and Minimal) */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', display: 'flex', gap: '10px', zIndex: 100 }}>
        <button style={navBtn} onClick={() => page > 1 && setPage(page - 1)}>BACK</button>
        <button style={navBtn} onClick={() => page < 21 && setPage(page + 1)}>NEXT</button>
      </div>

      {/* 2. The 21-Image Frame */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px' }}>
        
        {/* Page 1 Video Layer */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* Display your images 1 through 21 */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} 
          alt={`Studio Page ${page}`} 
        />

        {/* Page 13: The Functional Minute Slider Overlay */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center', zIndex: 2 }}>
            <div style={{ fontSize: '8vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '3px 3px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* 3. Small Credit (to keep the layout clean) */}
      <div style={{ color: '#444', fontSize: '10px', padding: '20px' }}>
        MANDASTRONG1 2025
      </div>
    </div>
  );
}