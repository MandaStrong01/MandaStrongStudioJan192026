import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* 1. NAVIGATION CONTROLS (Invisible styling to let your images shine) */}
      <div style={{ position: 'fixed', top: '15px', width: '100%', display: 'flex', justifyContent: 'center', gap: '30px', zIndex: 100 }}>
        <button onClick={() => page > 1 && setPage(page - 1)} style={{ background: 'rgba(0,0,0,0.6)', color: '#8a2be2', border: '2px solid #8a2be2', padding: '12px 24px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={() => page < 21 && setPage(page + 1)} style={{ background: 'rgba(0,0,0,0.6)', color: '#8a2be2', border: '2px solid #8a2be2', padding: '12px 24px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        
        {/* 2. THE VIDEO (Only for Page 1) */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* 3. YOUR 21 IMAGES (The exact content of your app) */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
        />

        {/* 4. THE INTERACTIVE SLIDER (Only for Page 13) */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '12vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '3px 3px 6px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '85%', height: '40px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>
    </div>
  );
}