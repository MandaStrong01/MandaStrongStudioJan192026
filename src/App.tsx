import { useState } from 'react';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@1,900&display=swap');
  :root { --p: #8a2be2; --b: #000; --w: #fff; }
  body { margin: 0; background: var(--b); color: var(--w); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; overflow-x: hidden; }
  .ocean-vid { position: absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; opacity:0.4; z-index:0; }
  .manda-border { border: 4px solid var(--p); }
  .manda-btn { border: 4px solid var(--p); background: rgba(0,0,0,0.6); color: var(--w); padding: 15px 30px; cursor: pointer; font-size: 1.2rem; font-style: italic; font-weight: 900; text-transform: uppercase; }
  .manda-btn:hover { background: var(--p); }
  .slider-input { -webkit-appearance: none; width: 100%; height: 20px; background: #111; border: 2px solid var(--p); outline: none; }
  .slider-input::-webkit-slider-thumb { -webkit-appearance: none; height: 45px; width: 45px; background: var(--p); border: 4px solid var(--w); cursor: pointer; }
  .pro-card { background: var(--p); border: 8px solid var(--w); color: var(--b); transform: scale(1.05); }
`;

export default function App() {
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState(90);

  const nav = (num: number) => { setPage(num); window.scrollTo(0,0); };

  return (
    <div className="manda-app">
      <style>{STYLES}</style>

      {page === 1 && (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <video autoPlay loop muted playsInline className="ocean-vid">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-in-the-sunset-4119-large.mp4" />
          </video>
          <div style={{ zIndex: 1, textAlign: 'center' }}>
            <h1 style={{ fontSize: '8vw', margin: '0' }}>MANDASTRONG STUDIO</h1>
            <button className="manda-btn" style={{ fontSize: '2.5rem' }} onClick={() => nav(3)}>GET STARTED</button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '5rem', marginBottom: '60px' }}>SELECT PLAN</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', maxWidth: '1300px', margin: '0 auto' }}>
            <div className="manda-border" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '2.5rem' }}>BASIC</h3>
              <div style={{ fontSize: '6rem', color: 'var(--p)' }}>$20</div>
              <button className="manda-btn" style={{ width: '100%' }} onClick={() => nav(11)}>SELECT</button>
            </div>
            <div className="pro-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '2.5rem' }}>PRO</h3>
              <div style={{ fontSize: '6rem' }}>$40</div>
              <button className="manda-btn" style={{ width: '100%', background: 'black', border: 'none' }} onClick={() => nav(11)}>SELECT</button>
            </div>
            <div className="manda-border" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '2.5rem' }}>STUDIO</h3>
              <div style={{ fontSize: '6rem', color: 'var(--p)' }}>$80</div>
              <button className="manda-btn" style={{ width: '100%' }} onClick={() => nav(11)}>SELECT</button>
            </div>
          </div>
        </div>
      )}

      {page === 11 && (
        <div style={{ padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '4rem', borderLeft: '15px solid var(--p)', paddingLeft: '20px' }}>EDITOR SUITE</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="manda-btn" style={{ background: 'var(--w)', color: 'var(--b)' }} onClick={() => nav(12)}>MEDIA LIBRARY</button>
              <button className="manda-btn" style={{ background: 'var(--p)', border: '4px solid var(--w)' }} onClick={() => nav(13)}>OPEN ENHANCEMENT EDITOR</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '30px' }}>
            <div className="manda-border" style={{ height: '60vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '3rem', opacity: 0.2 }}>SIGNAL_PREVIEW_4K</span>
            </div>
            <div className="manda-border" style={{ padding: '20px' }}>
              <h3 style={{ borderBottom: '4px solid var(--p)', marginBottom: '20px' }}>TOOLS</h3>
              {['CUT', 'TRIM', 'SPLIT', 'FX', 'AUDIO', 'RENDER'].map(t => (
                <button key={t} className="manda-btn" style={{ width: '100%', marginBottom: '10px' }}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {page === 12 && (
        <div style={{ padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '4rem' }}>MEDIA LIBRARY</h2>
            <button className="manda-btn" onClick={() => nav(11)}>BACK</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="manda-border" style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>📁</div>
            ))}
          </div>
        </div>
      )}

      {page === 13 && (
        <div style={{ padding: '80px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '5rem', color: 'var(--p)', marginBottom: '40px' }}>ENHANCEMENT STUDIO</h2>
          <div className="manda-border" style={{ padding: '80px', background: '#050505' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>DURATION CONTROL</h3>
            <div style={{ fontSize: '12rem', color: 'var(--p)', lineHeight: '1' }}>{duration} <span style={{ fontSize: '3rem', color: 'var(--w)' }}>MIN</span></div>
            <input type="range" min="0" max="180" value={duration} className="slider-input" onChange={(e) => setDuration(parseInt(e.target.value))} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', fontSize: '2rem', opacity: 0.4 }}>
              <span>0 MIN</span><span>180 MIN</span>
            </div>
          </div>
          <button className="manda-btn" style={{ marginTop: '60px', fontSize: '2rem' }} onClick={() => nav(11)}>RETURN TO EDITOR</button>
        </div>
      )}
    </div>
  );
}