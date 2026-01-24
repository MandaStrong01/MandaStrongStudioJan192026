import React, { useState } from 'react';

const CSS = `
  body { margin: 0; background: #000; color: #fff; font-family: 'Arial Black', sans-serif; text-transform: uppercase; overflow-x: hidden; }
  .video-bg { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1; object-fit: cover; filter: brightness(0.5); }
  
  /* DESIGN: PURPLE & BLACK THEME */
  .hero-title { font-size: 8.5vw; color: #000; font-weight: 900; text-align: center; margin: 0; }
  .hero-subtitle { font-size: 2.5vw; color: #000; font-style: italic; margin-bottom: 40px; font-weight: bold; text-align: center; }

  .black-btn { 
    background: #000; color: #fff; border: 2px solid #8a2be2; 
    padding: 15px 35px; border-radius: 10px; font-size: 1.2rem; 
    cursor: pointer; font-weight: bold; transition: 0.3s;
  }
  .black-btn:hover { box-shadow: 0 0 15px #8a2be2; background: #1a1a1a; }
  
  .nav-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; border-bottom: 3px solid #8a2be2; background: rgba(0,0,0,0.9); position: sticky; top: 0; z-index: 100; }
  .purple-glow { color: #8a2be2; text-shadow: 0 0 10px rgba(138, 43, 226, 0.8); }
  .footer { position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px; background: rgba(0,0,0,0.95); border-top: 4px solid #8a2be2; text-align: center; font-size: 0.8rem; z-index: 1000; font-weight: bold; }
  
  .pricing-grid { display: flex; gap: 20px; justify-content: center; margin-top: 40px; }
  .p-card { border: 2px solid #333; padding: 25px; background: #0a0a0a; width: 200px; text-align: center; border-radius: 10px; }
  .p-card.featured { border-color: #8a2be2; transform: scale(1.05); background: rgba(138,43,226,0.1); }
`;

export default function App() {
  const [page, setPage] = useState(1);
  const [view, setView] = useState('splash'); 
  const [mins, setMins] = useState(90);

  const handleNav = (target: number) => {
    if (target < 3) { setView('splash'); setPage(1); }
    else if (target > 21) { setPage(21); }
    else { setPage(target); }
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '120px' }}>
      <style>{CSS}</style>
      
      {/* BACKGROUND VIDEO: USES YOUR BACKUP FILE */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/backup.mp4 (2)" type="video/mp4" />
      </video>

      {/* PAGE 1: SPLASH & AUTHENTICATION */}
      {view === 'splash' && (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="hero-title">MANDASTRONG'S STUDIO</h1>
          <h2 className="hero-subtitle">Welcome To The All-In-One Make-A-Movie App!</h2>
          <div style={{display:'flex', gap:'20px'}}>
            <button className="black-btn" onClick={() => setView('login')}>Login</button>
            <button className="black-btn" onClick={() => setView('register')}>Register</button>
            <button className="black-btn" onClick={() => { setView('app'); setPage(3); }}>👁 Browse as Guest</button>
          </div>
          <p style={{marginTop: '20px', color: '#000', fontWeight: 'bold'}}>Explore the platform without an account</p>
        </div>
      )}

      {/* LOGIN VIEW */}
      {view === 'login' && (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{background:'rgba(0,0,0,0.85)', padding:'40px', border:'3px solid #8a2be2', borderRadius:'20px', textAlign:'center'}}>
            <h2 className="purple-glow">Login</h2>
            <input style={{display:'block', margin:'10px auto', padding:'12px', background:'#111', border:'1px solid #8a2be2', color:'#fff', borderRadius:'8px'}} type="email" placeholder="Email" />
            <input style={{display:'block', margin:'10px auto', padding:'12px', background:'#111', border:'1px solid #8a2be2', color:'#fff', borderRadius:'8px'}} type="password" placeholder="Password" />
            <button className="black-btn" style={{marginTop:'20px', width:'100%'}} onClick={() => { setView('app'); setPage(3); }}>Login</button>
            <button style={{background:'none', border:'none', color:'#8a2be2', marginTop:'15px', cursor:'pointer', fontWeight:'bold'}} onClick={()=>setView('splash')}>← Back</button>
          </div>
        </div>
      )}

      {/* MAIN STUDIO AREA (PAGES 3-21) */}
      {view === 'app' && (
        <>
          <div className="nav-header">
            <span className="purple-glow">MANDASTRONG STUDIO</span>
            <div>
              <button className="black-btn" style={{padding:'5px 15px', fontSize:'0.7rem'}} onClick={() => handleNav(page - 1)}>BACK</button>
              <button className="black-btn" style={{padding:'5px 15px', fontSize:'0.7rem', marginLeft:'10px'}} onClick={() => handleNav(page + 1)}>NEXT</button>
            </div>
          </div>

          <div style={{ padding: '40px', textAlign: 'center' }}>
            {/* PAGE 3: PRICING TIERS 20-30-50 */}
            {page === 3 && (
              <div className="pricing-grid">
                <div className="p-card"><h3>BASIC</h3><h2 className="purple-glow">$20</h2><button className="black-btn" style={{fontSize:'0.8rem', marginTop:'10px'}} onClick={()=>handleNav(4)}>Select</button></div>
                <div className="p-card featured"><h3>PRO</h3><h2 className="purple-glow">$30</h2><button className="black-btn" style={{fontSize:'0.8rem', marginTop:'10px'}} onClick={()=>handleNav(4)}>Select</button></div>
                <div className="p-card"><h3>STUDIO</h3><h2 className="purple-glow">$50</h2><button className="black-btn" style={{fontSize:'0.8rem', marginTop:'10px'}} onClick={()=>handleNav(4)}>Select</button></div>
              </div>
            )}

            {/* AUTOMATED IMAGE SLOTS (PAGES 4-21) */}
            {page > 3 && page <= 21 && (
              <div style={{maxWidth: '900px', margin: '0 auto', border: '3px solid #8a2be2', background:'#000'}}>
                <img src={`/image${page}.png`} style={{width: '100%', display: 'block'}} alt={`Page ${page}`} />
                
                {/* PAGE 13: ENHANCEMENT STUDIO SLIDER */}
                {page === 13 && (
                  <div style={{padding: '40px', background: '#000'}}>
                    <h1 className="purple-glow">ENHANCEMENT STUDIO</h1>
                    <div style={{fontSize:'8rem', color: '#8a2be2'}}>{mins} MIN</div>
                    <input 
                      type="range" min="0" max="180" value={mins} 
                      style={{width: '80%', cursor:'pointer'}} 
                      onChange={(e) => setMins(Number(e.target.value))} 
                    />
                    <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'0 auto', fontWeight:'bold'}}><span>0 MIN</span><span>180 MIN</span></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      <div className="footer">
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY" ~ SHOP AT MANDASTRONG1.ETSY.COM
      </div>
    </div>
  );
}