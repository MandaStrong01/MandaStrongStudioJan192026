import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  const next = () => { if (page < 21) setPage(page + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(page - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* NAV CONTROLS */}
      <div style={{ position: 'fixed', top: '10px', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 100 }}>
        <button onClick={back} style={{ background: 'rgba(0,0,0,0.7)', color: '#8a2be2', border: '2px solid #8a2be2', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={next} style={{ background: 'rgba(0,0,0,0.7)', color: '#8a2be2', border: '2px solid #8a2be2', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        
        {/* PAGE 1 VIDEO */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* YOUR 21 IMAGES (image1.png to image21.png) */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
        />

        {/* PAGE 13 INTERACTIVE SLIDER */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '10vw', fontWeight: 'bold', color: '#8a2be2', textShadow: '2px 2px 5px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '30px', cursor: 'pointer', accentColor: '#8a2be2' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>
    </div>
  );
}