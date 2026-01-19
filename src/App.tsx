import React, { useState } from 'react';

const CSS = `
  body { margin: 0; background: #000; color: #fff; font-family: 'Arial Black', sans-serif; text-transform: uppercase; overflow-x: hidden; }
  .video-bg { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1; object-fit: cover; filter: brightness(0.4); }

  /* THE HIGH-END PURPLE DESIGN */
  .hero-title { font-size: 8.5vw; color: #000; font-weight: 900; text-align: center; line-height: 0.9; }
  .hero-subtitle { font-size: 2.5vw; color: #000; font-style: italic; margin-bottom: 50px; font-weight: bold; text-align: center; }

  .black-btn {
    background: #000; color: #fff; border: 3px solid #8a2be2;
    padding: 18px 45px; border-radius: 15px; font-size: 1.4rem;
    cursor: pointer; font-weight: 900; transition: 0.4s;
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
  }
  .black-btn:hover { box-shadow: 0 0 25px #8a2be2; background: #1a1a1a; transform: translateY(-2px); }

  .nav-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; border-bottom: 4px solid #8a2be2; background: rgba(0,0,0,0.95); position: sticky; top: 0; z-index: 100; }
  .purple-glow { color: #8a2be2; text-shadow: 0 0 15px rgba(138, 43, 226, 0.9); }
  .cyan-glow { color: #00f2ff; text-shadow: 0 0 10px rgba(0, 242, 255, 0.8); }

  .footer { position: fixed; bottom: 0; left: 0; width: 100%; padding: 20px; background: rgba(0,0,0,0.98); border-top: 5px solid #8a2be2; text-align: center; font-size: 0.9rem; z-index: 1000; font-weight: 900; letter-spacing: 1px; }

  /* PRICING CARDS */
  .pricing-container { display: flex; gap: 30px; justify-content: center; margin-top: 50px; flex-wrap: wrap; }
  .p-card { border: 3px solid #333; padding: 40px; background: rgba(10,10,10,0.8); width: 250px; text-align: center; border-radius: 20px; transition: 0.3s; }
  .p-card.featured { border-color: #8a2be2; transform: scale(1.1); background: rgba(138,43,226,0.1); box-shadow: 0 0 30px rgba(138, 43, 226, 0.4); }
  .price-tag { fontSize: 4rem; margin: 20px 0; display: block; }
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
    <div style={{ minHeight: '100vh', paddingBottom: '150px' }}>
      <style>{CSS}</style>

      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/backup.mp4 (2)" type="video/mp4" />
      </video>

      {/* --- PAGE 1: SPLASH --- */}
      {view === 'splash' && (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="hero-title">MANDASTRONG'S<br/>STUDIO</h1>
          <h2 className="hero-subtitle">Welcome To The All-In-One Make-A-Movie App!</h2>
          <div style={{display:'flex', gap:'25px'}}>
            <button className="black-btn" onClick={() => setView('login')}>LOGIN</button>
            <button className="black-btn" onClick={() => setView('register')}>REGISTER</button>
            <button className="black-btn" style={{borderColor: '#00f2ff'}} onClick={() => { setView('app'); setPage(3); }}>BROWSE AS GUEST</button>
          </div>
        </div>
      )}

      {/* --- LOGIN VIEW --- */}
      {view === 'login' && (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{background:'rgba(0,0,0,0.9)', padding:'60px', border:'4px solid #8a2be2', borderRadius:'30px', textAlign:'center', width: '400px'}}>
            <h2 className="purple-glow" style={{fontSize: '2.5rem'}}>STUDIO LOGIN</h2>
            <input style={{display:'block', margin:'20px auto', padding:'15px', background:'#111', border:'2px solid #8a2be2', color:'#fff', borderRadius:'10px', width: '80%'}} type="email" placeholder="EMAIL ADDRESS" />
            <input style={{display:'block', margin:'20px auto', padding:'15px', background:'#111', border:'2px solid #8a2be2', color:'#fff', borderRadius:'10px', width: '80%'}} type="password" placeholder="PASSWORD" />
            <button className="black-btn" style={{marginTop:'20px', width:'90%'}} onClick={() => { setView('app'); setPage(3); }}>ENTER STUDIO</button>
            <p className="purple-glow" style={{cursor:'pointer', marginTop:'25px', fontWeight: 'bold'}} onClick={()=>setView('splash')}>← BACK TO HOME</p>
          </div>
        </div>
      )}

      {/* --- MAIN APP INTERFACE --- */}
      {view === 'app' && (
        <>
          <div className="nav-header">
            <span className="purple-glow" style={{fontSize: '1.5rem', fontWeight: '900'}}>MANDASTRONG STUDIO</span>
            <div>
              <button className="black-btn" style={{padding:'10px 25px', fontSize:'0.9rem'}} onClick={() => handleNav(page - 1)}>BACK</button>
              <button className="black-btn" style={{padding:'10px 25px', fontSize:'0.9rem', marginLeft:'15px', borderColor: '#00f2ff'}} onClick={() => handleNav(page + 1)}>NEXT</button>
            </div>
          </div>

          <div style={{ padding: '60px 20px', textAlign: 'center' }}>
            {/* PAGE 3: THE $20, $30, $50 PLANS */}
            {page === 3 && (
              <div className="pricing-container">
                <div className="p-card"><h3>BASIC</h3><span className="purple-glow price-tag">$20</span><button className="black-btn" style={{fontSize:'1rem'}} onClick={()=>handleNav(4)}>SELECT</button></div>
                <div className="p-card featured"><h3>PRO</h3><span className="cyan-glow price-tag">$30</span><button className="black-btn" style={{fontSize:'1rem', borderColor: '#00f2ff'}} onClick={()=>handleNav(4)}>SELECT</button></div>
                <div className="p-card"><h3>STUDIO</h3><span className="purple-glow price-tag">$50</span><button className="black-btn" style={{fontSize:'1rem'}} onClick={()=>handleNav(4)}>SELECT</button></div>
              </div>
            )}

            {/* AUTOMATED IMAGE SLOTS (PAGES 4-21) */}
            {page > 3 && page <= 21 && (
              <div style={{maxWidth: '1100px', margin: '0 auto', border: '5px solid #8a2be2', background:'#000', boxShadow: '0 0 50px rgba(138, 43, 226, 0.2)'}}>
                <img src={`/image${page}.png`} style={{width: '100%', display: 'block'}} alt={`Studio Page ${page}`} />

                {/* PAGE 13: THE ENHANCEMENT STUDIO DASHBOARD */}
                {page === 13 && (
                  <div style={{padding: '60px', background: '#000', borderTop: '4px solid #8a2be2'}}>
                    <h1 className="purple-glow" style={{fontSize: '3rem'}}>ENHANCEMENT STUDIO</h1>
                    <div style={{fontSize:'10rem', color: '#8a2be2', fontWeight: '900'}}>{mins} MIN</div>
                    <input
                      type="range" min="0" max="180" value={mins}
                      style={{width: '90%', height: '25px', cursor:'pointer'}}
                      onChange={(e) => setMins(Number(e.target.value))}
                    />
                    <div style={{display:'flex', justifyContent:'space-between', width:'90%', margin:'20px auto', fontWeight:'900', color: '#8a2be2'}}><span>0 MIN</span><span>180 MIN</span></div>
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
