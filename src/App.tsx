import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);
  const [showStudio, setShowStudio] = useState(false);

  const next = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 21-PAGE NAVIGATOR */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(5,5,5,0.95)', zIndex: 1000, borderBottom: '3px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={next} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1 VIDEO (background.mp4) */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', display: 'block', position: 'absolute', top: '80px', zIndex: 0 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        )}

        <div style={{ position: 'relative', width: '100%', maxWidth: '1400px' }}>
          {/* THE 21 PAGES (image1.png to image21.png) */}
          <img src={`/image${page}.png`} style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} alt={`Page ${page}`} />

          {/* UPDATED PLANS (Page 3) */}
          {page === 3 && (
            <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 50 }}>
              <div style={{ background: '#111', border: '2px solid #8a2be2', padding: '15px', borderRadius: '12px' }}>$20</div>
              <div style={{ background: '#111', border: '2px solid #ff00ff', padding: '15px', borderRadius: '12px', transform: 'scale(1.1)' }}>$30</div>
              <div style={{ background: '#111', border: '2px solid #00ffff', padding: '15px', borderRadius: '12px' }}>$50</div>
            </div>
          )}

          {/* ENHANCEMENT STUDIO (Page 12) */}
          {page === 12 && (
            <div style={{ position: 'absolute', top: '25%', width: '100%', textAlign: 'center', zIndex: 50 }}>
              <button onClick={() => setShowStudio(true)} style={{ background: 'linear-gradient(45deg, #8a2be2, #ff00ff)', color: 'white', padding: '20px 50px', fontSize: '1.4rem', fontWeight: '900', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>OPEN ENHANCEMENT STUDIO</button>
            </div>
          )}

          {/* OUTRO VIDEO (Page 21: thatsallfolks.mp4) */}
          {page === 21 && (
            <video autoPlay playsInline style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
              <source src="/thatsallfolks.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* ENHANCEMENT STUDIO ATTACHMENT */}
      {showStudio && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.97)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#0a0a0a', border: '3px solid #8a2be2', borderRadius: '30px', padding: '40px', width: '90%', maxWidth: '850px', textAlign: 'center' }}>
            <h2 style={{ color: '#8a2be2', fontSize: '2.5rem', fontWeight: '900', marginBottom: '30px' }}>ENHANCEMENT STUDIO</h2>
            <p style={{ fontSize: '5rem', fontWeight: '900', color: '#8a2be2' }}>{mins} MIN</p>
            <input type="range" min="0" max="180" value={mins} onChange={(e) => setMins(Number(e.target.value))} style={{ width: '100%', accentColor: '#8a2be2' }} />
            <br/><br/>
            <button onClick={() => setShowStudio(false)} style={{ background: '#8a2be2', color: 'white', padding: '15px 50px', border: 'none', borderRadius: '10px' }}>CLOSE STUDIO</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ background: '#050505', padding: '40px', textAlign: 'center', borderTop: '3px solid #8a2be2', marginTop: '50px', color: '#8a2be2', fontWeight: '900' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"
      </div>
    </div>
  );
}