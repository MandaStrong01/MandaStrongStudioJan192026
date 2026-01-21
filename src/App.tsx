/**
 * MANDASTRONG STUDIO 2025 – FINAL PRODUCTION BUILD
 * Design: Black + Purple, Bold Italic Font
 * Pages: 21 Total
 * Soundtrack: background.mp4 plays on pages 1–2 (unmuted)
 * Stripe: Hosted Checkout with success/cancel redirects
 */

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const STRIPE_PLANS = {
  basic: "https://buy.stripe.com/test_00basic123?success_url=https://mandastrong-studio-2025.bolt.host/success&cancel_url=https://mandastrong-studio-2025.bolt.host/cancel",
  pro: "https://buy.stripe.com/test_00pro123?success_url=https://mandastrong-studio-2025.bolt.host/success&cancel_url=https://mandastrong-studio-2025.bolt.host/cancel",
  studio: "https://buy.stripe.com/test_00studio123?success_url=https://mandastrong-studio-2025.bolt.host/success&cancel_url=https://mandastrong-studio-2025.bolt.host/cancel",
};

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🎵 Background video autoplay with sound for pages 1–2
  useEffect(() => {
    if (videoRef.current) {
      if (page === 1 || page === 2) {
        videoRef.current.play().catch(() => {});
        videoRef.current.muted = false;
        videoRef.current.volume = 0.8;
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [page]);

  const nextPage = () => setPage((p) => Math.min(p + 1, 21));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  // 🎬 Redirect handling
  useEffect(() => {
    if (window.location.pathname === "/success") setPage(4);
    if (window.location.pathname === "/cancel") setPage(3);
  }, []);

  return (
    <div className="app-container">
      {page <= 2 && (
        <video
          ref={videoRef}
          className="bg-video"
          src="/videos/background.mp4"
          autoPlay
          loop
          playsInline
        />
      )}

      <div className="overlay">
        <header className="header">
          <h1 className="title">
            {page === 21 ? "Thank You!" : "MandaStrong Studio 2025"}
          </h1>
        </header>

        <main className="main-content">
          {/* Splash */}
          {page === 0 && (
            <div className="page">
              <h2>Loading cinematic experience...</h2>
              <button onClick={() => setPage(1)}>Enter Studio</button>
            </div>
          )}

          {/* Page 1 – Welcome */}
          {page === 1 && (
            <div className="page">
              <h2>Welcome To MandaStrong’s Studio</h2>
              <p>The All-In-One Make-A-Movie App!</p>
              <div className="nav-buttons">
                <button onClick={() => setPage(2)}>Next</button>
                <button onClick={() => setPage(3)}>Login</button>
                <button onClick={() => setPage(3)}>Register</button>
              </div>
            </div>
          )}

          {/* Page 2 – Intro */}
          {page === 2 && (
            <div className="page">
              <h2>Start Your Story</h2>
              <p>Create family movies and share your dreams worldwide!</p>
              <div className="nav-buttons">
                <button onClick={prevPage}>Back</button>
                <button onClick={nextPage}>Next</button>
              </div>
            </div>
          )}

          {/* Page 3 – Login & Plans */}
          {page === 3 && (
            <div className="page">
              <h2>Login or Register</h2>
              <div className="auth-container">
                <div className="auth-box">
                  <h3>Login</h3>
                  <input placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button onClick={() => setPage(4)}>Login</button>
                </div>
                <div className="auth-box">
                  <h3>Register</h3>
                  <input placeholder="Name" />
                  <input placeholder="Email" />
                  <button onClick={() => setPage(4)}>Register</button>
                </div>
              </div>

              <h3>Select Your Plan</h3>
              <div className="plans">
                <div className="plan-card">
                  <h4>Basic</h4>
                  <p>$20/month</p>
                  <a href={STRIPE_PLANS.basic}>
                    <button>Select</button>
                  </a>
                </div>
                <div className="plan-card highlight">
                  <h4>Pro</h4>
                  <p>$30/month</p>
                  <a href={STRIPE_PLANS.pro}>
                    <button>Select</button>
                  </a>
                </div>
                <div className="plan-card">
                  <h4>Studio</h4>
                  <p>$50/month</p>
                  <a href={STRIPE_PLANS.studio}>
                    <button>Select</button>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Pages 4–9 – AI Tools */}
          {[4, 5, 6, 7, 8, 9].includes(page) && (
            <div className="page">
              <h2>AI Tools Hub</h2>
              <p>Page {page}: Create, Enhance, and Animate.</p>
              <div className="tool-grid">
                {Array.from({ length: 20 }).map((_, i) => (
                  <button key={i} className="tool-btn">
                    Tool {i + 1 + (page - 4) * 20}
                  </button>
                ))}
              </div>
              <div className="nav-buttons">
                <button onClick={prevPage}>Back</button>
                <button onClick={nextPage}>Next</button>
              </div>
            </div>
          )}

          {/* Page 10 – Doxy Movie */}
          {page === 10 && (
            <div className="page">
              <h2>🎬 Doxy: The School Bully</h2>
              <video src="/videos/packageDTSBexpscript.mp4" controls />
              <p>Your completed film is live and free to watch!</p>
              <button onClick={() => setPage(11)}>Next</button>
            </div>
          )}

          {/* Page 11 – Media */}
          {page === 11 && (
            <div className="page">
              <h2>Media Library</h2>
              <p>Your AI-generated assets appear here.</p>
              <button onClick={() => setPage(12)}>Open Enhancement Studio</button>
            </div>
          )}

          {/* Pages 12–20 – Creative Suite */}
          {[12, 13, 14, 15, 16, 17, 18, 19, 20].includes(page) && (
            <div className="page">
              <h2>
                {[
                  "Editor Dashboard",
                  "Sound & Voice Studio",
                  "Title & Text Creator",
                  "AI Animation Lab",
                  "Color Grade / Visual FX",
                  "Render / Export",
                  "Publish / Share",
                  "Agent Grok Help Desk",
                  "Community Hub",
                ][page - 12]}
              </h2>
              <p>Interactive creative tools coming soon.</p>
              <div className="nav-buttons">
                <button onClick={prevPage}>Back</button>
                <button onClick={nextPage}>Next</button>
              </div>
            </div>
          )}

          {/* Page 21 – Thank You */}
          {page === 21 && (
            <div className="page">
              <video src="/videos/thatsallfolks.mp4" autoPlay loop muted />
              <h2>That’s All Folks!</h2>
              <p>Supporting Veterans’ Mental Health & Bullying Prevention</p>
              <p>
                Visit <a href="https://MandaStrong1.Etsy.com">MandaStrong1.Etsy.com</a>
              </p>
              <button onClick={() => setPage(1)}>Return Home</button>
            </div>
          )}
        </main>

        {/* Footer */}
        {page >= 3 && (
          <footer className="footer">
            © 2025 MandaStrong Studio | Author of “Doxy: The School Bully”
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;
