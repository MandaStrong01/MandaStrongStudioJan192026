import React, { useState, useEffect } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // Auto-scroll to top when turning pages
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const next = () => { if (page < 21) setPage(p => p + 1); };
  const back = () => { if (page > 1) setPage(p => p - 1); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 1. OVERLAY NAVIGATION */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(5,5,5,0.95)', zIndex: 1000, borderBottom: '3px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={next} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      <div style={{ paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1 VIDEO BACKGROUND */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', position: 'absolute', top: '80px', zIndex: 0, opacity: 0.7 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        )}

        <div style={{ position: 'relative', width: '100%', maxWidth: '1400px' }}>
          {/* THE 21 PAGES (Projecting your Page1.tsx to Page21.tsx images) */}
          <img 
            src={`/${page === 21 ? 'Page21st.tsx' : `Page${page}.tsx`}`} 
            style={{ width: '100%', display: 'block', zIndex: 1 }} 
            alt={`Studio Page ${page}`} 
          />

          {/* PAGE 3: PRICING OVERLAY ($20, $30, $50) */}
          {page === 3 && (
            <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', justifyContent: 'center', gap: '25px', zIndex: 50 }}>
              <div style={{ background: '#111', border: '2px solid #8a2be2', padding: '15px 30px', borderRadius: '12px', fontWeight: 'bold' }}>$20</div>
              <div style={{ background: '#111', border: '2px solid #ff00ff', padding: '15px 30px', borderRadius: '12px', fontWeight: 'bold', transform: 'scale(1.1)' }}>$30</div>
              <div style={{ background: '#111', border: '2px solid #00ffff', padding: '15px 30px', borderRadius: '12px', fontWeight: 'bold' }}>$50</div>
            </div>
          )}

          {/* PAGE 12: ENHANCEMENT STUDIO DURATION SLIDER */}
          {page === 12 && (
            <div style={{ position: 'absolute', top: '30%', width: '100%', textAlign: 'center', zIndex: 50 }}>
              <div style={{ background: 'rgba(10,10,10,0.95)', border: '3px solid #8a2be2', borderRadius: '40px', padding: '50px', margin: '0 auto', maxWidth: '700px', boxShadow: '0 0 50px rgba(138, 43, 226, 0.4)' }}>
                <h2 style={{ color: '#8a2be2', fontSize: '2rem', fontWeight: '900' }}>ENHANCEMENT STUDIO</h2>
                <p style={{ fontSize: '8rem', fontWeight: '900', color: '#8a2be2', margin: '10px 0' }}>{mins}<span style={{fontSize: '2rem'}}>min</span></p>
                <input 
                  type="range" min="0" max="180" value={mins} 
                  onChange={(e) => setMins(Number(e.target.value))} 
                  style={{ width: '100%', accentColor: '#8a2be2', cursor: 'pointer', height: '15px' }} 
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', marginTop: '10px', fontWeight: 'bold' }}><span>0m</span><span>180m</span></div>
              </div>
            </div>
          )}

          {/* PAGE 21: CLOSING VIDEO */}
          {page === 21 && (
            <video autoPlay playsInline style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
              <source src="/thatsallfolks.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#050505', padding: '60px 0', textAlign: 'center', borderTop: '2px solid #8a2be2', marginTop: '80px', color: '#8a2be2' }}>
        <p style={{ fontWeight: '900', fontSize: '1.2rem', margin: 0 }}>MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"</p>
        <p style={{ opacity: 0.6, marginTop: '10px' }}>VISIT US AT MANDASTRONG1.ETSY.COM</p>
      </footer>
    </div>
  );
}