import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);
  const [showStudio, setShowStudio] = useState(false);

  const next = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* NAVIGATION */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(5,5,5,0.95)', zIndex: 1000, borderBottom: '3px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={next} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1 VIDEO */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', display: 'block', position: 'absolute', top: '80px', zIndex: 0 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        )}

        {/* 21 PAGE IMAGE PROJECTOR */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1400px' }}>
          <img src={`/image${page}.png`} style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} alt={`Page ${page}`} />

          {/* PRICING (Page 3) */}
          {page === 3 && (
            <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 50 }}>
              <div style={{ background: '#111', border: '2px solid #8a2be2', padding: '15px', borderRadius: '12px' }}>$20</div>
              <div style={{ background: '#111', border: '2px solid #ff00ff', padding: '15px', borderRadius: '12px', transform: 'scale(1.1)' }}>$30</div>
              <div style={{ background: '#111', border: '2px solid #00ffff', padding: '15px', borderRadius: '12px' }}>$50</div>
            </div>
          )}

          {/* STUDIO ATTACHMENT (Page 12) */}
          {page === 12 && (
            <div style={{ position: 'absolute', top: '25%', width: '100%', textAlign: 'center', zIndex: 50 }}>
              <button onClick={() => setShowStudio(true)} style={{ background: 'linear-gradient(45deg, #8a2be2, #ff00ff)', color: 'white', padding: '20px 50px', fontSize: '1.4rem', fontWeight: '900', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>OPEN ENHANCEMENT STUDIO</button>
            </div>
          )}

          {/* FINAL VIDEO (Page 21) */}
          {page === 21 && (
            <video autoPlay playsInline style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
              <source src="/thatsallfolks.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* STUDIO SLIDER MODAL */}
      {showStudio && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.97)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#0a0a0a', border: '3px solid #8a2be2', borderRadius: '30px', padding: '40px', width: '90%', maxWidth: '