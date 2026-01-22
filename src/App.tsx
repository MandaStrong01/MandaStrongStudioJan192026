import React, { useState, useEffect } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);
  const [showStudio, setShowStudio] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const next = () => { if (page < 21) setPage(p => p + 1); };
  const back = () => { if (page > 1) setPage(p => p - 1); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* NAVIGATION */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '30px', padding: '15px 0', background: 'rgba(5,5,5,0.98)', zIndex: 1000, borderBottom: '2px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <div style={{ alignSelf: 'center', color: '#8a2be2', fontWeight: 'bold' }}>PAGE {page} / 21</div>
        <button onClick={next} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1: BACKGROUND & AVATAR */}
        {page === 1 && (
          <>
            <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', position: 'absolute', top: '80px', zIndex: 0 }}>
              <source src="/background.mp4" type="video/mp4" />
            </video>
            <video autoPlay loop muted playsInline style={{ position: 'fixed', bottom: '20px', right: '20px', width: '200px', borderRadius: '50%', border: '3px solid #8a2be2', zIndex: 100 }}>
              <source src="/avatar.mp4" type="video/mp4" />
            </video>
          </>
        )}

        <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', zIndex: 1 }}>
          <img src={`/image${page}.png`} style={{ width: '100%', display: 'block' }} alt={`Page ${page}`} />

          {/* PAGE 3: PRICING OVERLAY */}
          {page === 3 && (
            <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(17,17,17,0.9)', border: '2px solid #8a2be2', padding: '15px', borderRadius: '12px' }}>$20</div>
              <div style={{ background: 'rgba(17,17,17,0.9)', border: '2px solid #ff00ff', padding: '15px', borderRadius: '12px', transform: 'scale(1.1)' }}>$30</div>
              <div style={{ background: 'rgba(17,17,17,0.9)', border: '2px solid #00ffff', padding: '15px', borderRadius: '12px' }}>$50</div>
            </div>
          )}

          {/* PAGE 10: MAIN MOVIE PLAYBACK */}
          {page === 10 && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
              <video controls style={{ width: '90%', maxHeight: '80%' }}>
                <source src="/packageDTSBexpscript.mp4" type="video/mp4" />
              </video>
            </div>
          )}

          {/* PAGE 12: STUDIO BUTTON */}
          {page === 12 && (
            <div style={{ position: 'absolute', top: '25%', width: '100%', textAlign: 'center' }}>
              <button onClick={() => setShowStudio(true)} style={{ background: 'linear-gradient(45deg, #8a2be2, #ff00ff)', color: 'white', padding: '20px 50px', fontSize: '1.4rem', borderRadius: '50px', cursor: 'pointer', border: 'none' }}>OPEN ENHANCEMENT STUDIO</button>
            </div>
          )}

          {/* PAGE 21: OUTRO */}
          {page === 21 && (
            <video autoPlay playsInline style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
              <source src="/thatsallfolks.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* STUDIO MODAL */}
      {showStudio && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.98)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#0a0a0a', border: '3px solid #8a2be2', borderRadius: '30px', padding: '40px', width: '90%', maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ color: '#8a2be2', fontSize: '2.5rem' }}>ENHANCEMENT STUDIO</h2>
            <p style={{ fontSize: '8rem', color: '#8a2be2', margin: '20px 0' }}>{mins}m</p>
            <input type="range" min="0" max="180" value={mins} onChange={(e) => setMins(Number(e.target.value))} style={{ width: '100%', accentColor: '#8a2be2' }} />
            <br/><br/>
            <button onClick={() => setShowStudio(false)} style={{ background: '#8a2be2', color: 'white', padding: '15px 60px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>CLOSE STUDIO</button>
          </div>
        </div>
      )}

      <footer style={{ background: '#050505', padding: '50px 0', textAlign: 'center', borderTop: '2px solid #8a2be2', marginTop: '100px', color: '#8a2be2' }}>
        <p style={{ fontWeight: '900' }}>MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"</p>
      </footer>
    </div>
  );
}