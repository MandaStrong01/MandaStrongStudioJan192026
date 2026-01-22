import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);
  const [showStudio, setShowStudio] = useState(false);

  // Navigation Logic for the 21-page sequence
  const next = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 1. PRODUCTION NAVIGATION OVERLAY */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(5,5,5,0.95)', zIndex: 1000, borderBottom: '3px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={next} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      {/* 2. MAIN APP PROJECTOR */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1: DYNAMIC BACKGROUND VIDEO */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', display: 'block', position: 'absolute', top: '80px', zIndex: 0 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        )}

        {/* 1:1 REPLICATION OF YOUR 21 IMAGES */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1400px' }}>
          <img 
            src={`/image${page}.png`} 
            style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} 
            alt={`Studio Page ${page}`} 
          />

          {/* PAGE 3: ACTIONABLE PRICING UPDATES ($20, $30, $50) */}
          {page === 3 && (
            <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 50 }}>
              <div style={{ background: '#111', border: '2px solid #8a2be2', padding: '15px', borderRadius: '12px', textAlign: 'center', minWidth: '130px' }}>
                <p style={{ color: '#8a2be2', margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '0.8rem' }}>BASIC</p>
                <p style={{ fontSize: '2rem', fontWeight: '900', margin: 0 }}>$20</p>
              </div>
              <div style={{ background: '#111', border: '2px solid #ff00ff', padding: '15px', borderRadius: '12px', textAlign: 'center', minWidth: '130px', transform: 'scale(1.1)', boxShadow: '0 0 15px #ff00ff' }}>
                <p style={{ color: '#ff00ff', margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '0.8rem' }}>PRO</p>
                <p style={{ fontSize: '2rem', fontWeight: '900', margin: 0 }}>$30</p>
              </div>
              <div style={{ background: '#111', border: '2px solid #00ffff', padding: '15px', borderRadius: '12px', textAlign: 'center', minWidth: '130px' }}>
                <p style={{ color: '#00ffff', margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '0.8rem' }}>STUDIO</p>
                <p style={{ fontSize: '2rem', fontWeight: '900', margin: 0 }}>$50</p>
              </div>
            </div>
          )}

          {/* PAGE 12: MEDIA LIBRARY + ENHANCEMENT STUDIO ATTACHMENT */}
          {page === 12 && (
            <div style={{ position: 'absolute', top: '25%', width: '100%', textAlign: 'center', zIndex: 50 }}>
              <button 
                onClick={() => setShowStudio(true)}
                style={{ background: 'linear-gradient(45deg, #8a2be2, #ff00ff)', color: 'white', padding: '20px 50px', fontSize: '1.4rem', fontWeight: '900', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 0 30px rgba(138, 43, 226, 0.8)' }}
              >
                OPEN ENHANCEMENT STUDIO
              </button>
            </div>
          )}

          {/* PAGE 21: FINAL OUTRO VIDEO */}
          {page === 21 && (
            <video autoPlay playsInline style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
              <source src="/thatsallfolks.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* 3. ENHANCEMENT STUDIO OVERLAY (0-180 MIN SLIDER) */}
      {showStudio && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.97)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#0a0a0a', border: '3px solid #8a2be2', borderRadius: '30px', padding: '40px', width: '90%', maxWidth: '850px', textAlign: 'center', boxShadow: '0 0 60px rgba(138, 43, 226, 0.5)' }}>
            <h2 style={{ color: '#8a2be2', fontSize: '2.8rem', fontWeight: '900', marginBottom: '40px', letterSpacing: '2px' }}>ENHANCEMENT STUDIO</h2>
            
            <div style={{ marginBottom: '50px' }}>
              <p style={{ fontSize: '1.4rem', color: '#ccc', letterSpacing: '3px', marginBottom: '15px' }}>SET MOVIE DURATION</p>
              <p style={{ fontSize: '7rem', fontWeight: '900', color: '#8a2be2', margin: '20px 0', lineHeight: 1 }}>{mins} MIN</p>
              <input 
                type="range" min="0" max="180" value={mins} 
                onChange={(e) => setMins(Number(e.target.value))}
                style={{ width: '100%', height: '20px', accentColor: '#8a2be2', cursor: 'pointer' }} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', color: '#888', fontWeight: 'bold' }}>
                <span>0 MIN</span>
                <span>90 MIN</span>
                <span>180 MIN</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px' }}>
              <button style={{ background: '#111', border: '1px solid #8a2be2', color: 'white', padding: '15px', borderRadius: '10px', fontWeight: 'bold' }}>AI Upscale</button>
              <button style={{ background: '#111', border: '1px solid #8a2be2', color: 'white', padding: '15px', borderRadius: '10px', fontWeight: 'bold' }}>Color Grade</button>
              <button style={{ background: '#111', border: '1px solid #8a2be2', color: 'white', padding: '15px', borderRadius: '10px', fontWeight: 'bold' }}>Denoise</button>
            </div>

            <button onClick={() => setShowStudio(false)} style={{ background: '#8a2be2', color: 'white', padding: '15px 50px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '900', fontSize: '1.1rem' }}>CLOSE STUDIO</button>
          </div>
        </div>
      )}

      {/* 4. PRODUCTION FOOTER */}
      <div style={{ background: '#050505', padding: '45px', textAlign: 'center', borderTop: '3px solid #8a2be2', marginTop: '60px', color: '#8a2be2', fontWeight: '900', fontStyle: 'italic', letterSpacing: '1px' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY" ~ FIND ME ON MANDASTRONG1.ETSY.COM
      </div>
    </div>
  );
}