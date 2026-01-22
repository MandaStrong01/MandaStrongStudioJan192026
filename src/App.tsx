import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);
  const [showStudio, setShowStudio] = useState(false);

  // Navigation logic to cycle through your 21-page design
  const next = () => { if (page < 21) setPage(p => p + 1); window.scrollTo(0,0); };
  const back = () => { if (page > 1) setPage(p => p - 1); window.scrollTo(0,0); };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', margin: 0, padding: 0, color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 1. TOP NAVIGATION OVERLAY (Purple/Black Design) */}
      <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', padding: '15px', background: 'rgba(5,5,5,0.95)', zIndex: 1000, borderBottom: '3px solid #8a2be2' }}>
        <button onClick={back} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>BACK</button>
        <button onClick={next} style={{ background: '#8a2be2', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>NEXT</button>
      </div>

      {/* 2. THE 21-PAGE PRODUCTION FRAME */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* PAGE 1: BACKGROUND VIDEO LAYER */}
        {page === 1 && (
          <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '1400px', display: 'block', position: 'absolute', top: '80px', zIndex: 0 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        )}

        {/* 1:1 REPLICATION OF YOUR IMAGES (image1.png to image21.png) */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1400px' }}>
          <img 
            src={`/image${page}.png`} 
            style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} 
            alt={`Studio Page ${page}`} 
          />

          {/* PAGE 3: UPDATED PRICING OVERLAY ($20, $30, $50) */}
          {page === 3 && (
            <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 50 }}>
              <div style={{ background: '#1a1a1a', border: '2px solid #8a2be2', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: '#8a2be2' }}>BASIC</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'black' }}>$20</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '2px solid #ff00ff', padding: '20px', borderRadius: '15px', textAlign: 'center', transform: 'scale(1.1)' }}>
                <h3 style={{ color: '#ff00ff' }}>PRO</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'black' }}>$30</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '2px solid #00ffff', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: '#00ffff' }}>STUDIO</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'black' }}>$50</p>
              </div>
            </div>
          )}

          {/* PAGE 12: MEDIA LIBRARY + OPEN ENHANCEMENT STUDIO */}
          {page === 12 && (
            <div style={{ position: 'absolute', top: '20%', width: '100%', textAlign: 'center', zIndex: 50 }}>
              <button 
                onClick={() => setShowStudio(true)}
                style={{ background: 'linear-gradient(to r, #8a2be2, #ff00ff)', color: 'white', padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'black', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 0 20px rgba(138, 43, 226, 0.6)' }}
              >
                OPEN ENHANCEMENT STUDIO
              </button>
            </div>
          )}

          {/* PAGE 21: FINAL "THAT'S ALL FOLKS" VIDEO */}
          {page === 21 && (
            <video autoPlay playsInline style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
              <source src="/thatsallfolks.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* 3. THE ENHANCEMENT STUDIO ATTACHMENT OVERLAY */}
      {showStudio && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#111', border: '3px solid #8a2be2', borderRadius: '30px', padding: '40px', width: '90%', maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ color: '#8a2be2', fontSize: '2.5rem', marginBottom: '40px' }}>ENHANCEMENT STUDIO</h2>
            
            <div style={{ marginBottom: '50px' }}>
              <p style={{ fontSize: '1.2rem', color: '#ccc' }}>FILM DURATION</p>
              <p style={{ fontSize: '5rem', fontWeight: 'black', color: '#8a2be2' }}>{mins} MIN</p>
              <input 
                type="range" min="0" max="180" value={mins} 
                onChange={(e) => setMins(Number(e.target.value))}
                style={{ width: '100%', height: '15px', accentColor: '#8a2be2', cursor: 'pointer' }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
              <button style={{ background: '#222', border: '1px solid #8a2be2', color: 'white', padding: '15px', borderRadius: '10px' }}>AI Upscale</button>
              <button style={{ background: '#222', border: '1px solid #8a2be2', color: 'white', padding: '15px', borderRadius: '10px' }}>Color Grade</button>
            </div>

            <button onClick={() => setShowStudio(false)} style={{ background: '#8a2be2', color: 'white', padding: '10px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>CLOSE STUDIO</button>
          </div>
        </div>
      )}

      {/* 4. FOOTER */}
      <div style={{ background: '#050505', padding: '40px', textAlign: 'center', borderTop: '3px solid #8a2be2', marginTop: '50px', color: '#8a2be2', fontWeight: 'bold' }}>
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY" ~ MANDASTRONG1.ETSY.COM
      </div>
    </div>
  );
}