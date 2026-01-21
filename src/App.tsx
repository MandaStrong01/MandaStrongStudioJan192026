import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Simple navigation to go through your 21 images
  const next = () => { if (page < 21) setPage(page + 1); };
  const back = () => { if (page > 1) setPage(page - 1); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* SIMPLE NAV HEADER */}
      <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'center', gap: '20px', background: '#000', borderBottom: '2px solid #8a2be2', position: 'sticky', top: 0, zIndex: 10 }}>
        <button onClick={back} style={{ background: '#000', color: '#fff', border: '1px solid #8a2be2', padding: '10px 20px', cursor: 'pointer' }}>BACK</button>
        <button onClick={next} style={{ background: '#000', color: '#fff', border: '1px solid #8a2be2', padding: '10px 20px', cursor: 'pointer' }}>NEXT</button>
      </div>

      {/* THE 21 IMAGES DISPLAYED 1:1 */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px' }}>
        
        {/* Page 1 Video Background (backup.mp4 (2)) */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/backup.mp4 (2)" type="video/mp4" />
          </video>
        )}

        {/* Your Images (image1.png to image21.png) */}
        <img 
          src={`/image${page}.png`} 
          style={{ width: '100%', display: 'block' }} 
          alt={`Page ${page}`} 
        />

        {/* The functional Slider overlay only on Page 13 */}
        {page === 13 && (
          <div style={{ position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '6rem', fontWeight: 'bold', color: '#8a2be2', textShadow: '2px 2px #000' }}>{mins} MIN</div>
            <input 
              type="range" min="0" max="180" value={mins} 
              style={{ width: '80%', height: '30px', cursor: 'pointer' }}
              onChange={(e) => setMins(Number(e.target.value))} 
            />
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{ color: '#8a2be2', padding: '20px', textAlign: 'center', fontWeight: 'bold' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}