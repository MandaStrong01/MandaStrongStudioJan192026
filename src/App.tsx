import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  const next = () => { if (page < 21) setPage(page + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(page - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* NAVIGATION OVERLAY */}
      <div style={{ position: 'fixed', top: '10px', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 100 }}>
        <button onClick={back} style={{ background: 'rgba(0,0,0,0.6)', color: '#8a2be2', border: '1px solid #8a2be2', padding: '10px 20px', cursor: 'pointer' }}>BACK</button>
        <button onClick={next} style={{ background: 'rgba(0,0,0,0.6)', color: '#8a2be2', border: '1px solid #8a2be2', padding: '10px 20px', cursor: 'pointer' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        
        {/* VIDEO FOR PAGE 1 */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* YOUR 21 IMAGES - NO CHANGES */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
        />

        {/* SLIDER FOR PAGE 13 */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '10vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '2px 2px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', cursor: 'pointer' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>
    </div>
  );
}