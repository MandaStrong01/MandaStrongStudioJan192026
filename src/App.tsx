import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Styling to ensure the images fill the screen exactly as intended
  const containerStyle: React.CSSProperties = {
    backgroundColor: '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1200px', // Adjust if your images are wider
    display: 'block',
    height: 'auto'
  };

  const navOverlay: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    display: 'flex',
    gap: '10px',
    zIndex: 1000
  };

  const btnStyle = {
    background: 'rgba(138, 43, 226, 0.2)',
    color: '#8a2be2',
    border: '2px solid #8a2be2',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    backdropFilter: 'blur(5px)'
  };

  return (
    <div style={containerStyle}>
      {/* 1. Navigation Buttons (Floating to stay out of the way of your design) */}
      <div style={navOverlay}>
        <button style={btnStyle} onClick={() => page > 1 && setPage(page - 1)}>BACK</button>
        <button style={btnStyle} onClick={() => page < 21 && setPage(page + 1)}>NEXT</button>
      </div>

      {/* 2. The Page Display */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
        
        {/* Page 1 Video Background - plays behind your first image */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* Your Original 21 Images */}
        <img 
          src={`/image${page}.png`} 
          style={{ ...imageStyle, zIndex: 1 }} 
          alt={`Studio Page ${page}`} 
        />

        {/* Page 13: Functional Slider Overlay */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '60%', width: '100%', textAlign: 'center', zIndex: 2 }}>
            <div style={{ fontSize: '8vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '4px 4px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* Footer (Invisible or minimal to avoid clashing with your image design) */}
      <div style={{ padding: '20px', color: '#333', fontSize: '10px' }}>
        MANDASTRONG1 2025
      </div>
    </div>
  );
}