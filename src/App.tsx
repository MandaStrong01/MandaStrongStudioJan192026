import React, { useState } from 'react';

const CSS = `
  body { margin: 0; background: #000; color: #fff; font-family: 'Arial Black', sans-serif; text-transform: uppercase; overflow-x: hidden; }
  .video-bg { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1; object-fit: cover; }
  .nav-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; border-bottom: 3px solid #8a2be2; background: rgba(0,0,0,0.9); position: sticky; top: 0; z-index: 100; }
  .black-btn { background: #000; color: #fff; border: 2px solid #8a2be2; padding: 12px 30px; border-radius: 8px; font-size: 1.1rem; cursor: pointer; font-weight: bold; }
  .footer { position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px; background: rgba(0,0,0,0.95); border-top: 4px solid #8a2be2; text-align: center; font-size: 0.8rem; z-index: 1000; font-weight: bold; }
  .app-container { display: flex; flexDirection: column; align-items: center; padding-top: 20px; }
  img { width: 100%; max-width: 1000px; display: block; }
`;

export default function App() {
  const [page, setPage] = useState(1);
  const [mins, setMins] = useState(90);

  // This handles the transition between all 21 images
  const nav = (n: number) => {
    if (n >= 1 && n <= 21) {
      setPage(n);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      <style>{CSS}</style>

      {/* HEADER NAV FOR ALL 21 PAGES */}
      <div className="nav-header">
        <span style={{color: '#8a2be2'}}>MANDASTRONG STUDIO</span>
        <div style={{display: 'flex', gap: '10px'}}>
          <button className="black-btn" onClick={() => nav(page - 1)}>BACK</button>
          <button className="black-btn" onClick={() => nav(page + 1)}>NEXT</button>
        </div>
      </div>

      <div className="app-container">
        {/* PAGE 1 SPECIAL: BACKGROUND VIDEO + IMAGE OVERLAY */}
        {page === 1 ? (
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <video autoPlay loop muted playsInline className="video-bg">
              <source src="/backup.mp4 (2)" type="video/mp4" />
            </video>
            <img src="/image1.png" alt="Splash Page" />
            <div style={{ position: 'absolute', bottom: '20%', display: 'flex', gap: '20px' }}>
               <button className="black-btn" style={{padding: '20px 40px'}} onClick={() => nav(3)}>START</button>
            </div>
          </div>
        ) : (
          /* PAGES 2-21: DIRECT IMAGE DISPLAY */
          <div style={{position: 'relative'}}>
            <img src={`/image${page}.png`} alt={`Page ${page}`} />
            
            {/* OVERLAY THE SLIDER ONLY ON THE ENHANCEMENT PAGE (PAGE 13) */}
            {page === 13 && (
              <div style={{ position: 'absolute', top: '55%', width: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: '7rem', fontWeight: 'bold', color: '#8a2be2' }}>{mins} MIN</div>
                <input 
                  type="range" min="0" max="180" value={mins} 
                  style={{ width: '70%', height: '20px', cursor: 'pointer' }}
                  onChange={(e) => setMins(Number(e.target.value))} 
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="footer">MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY"</div>
    </div>
  );
}