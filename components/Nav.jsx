import { useState, useEffect } from 'react';

const NAV_LINKS = [
  'home', 'about', 'experience', 'education',
  'skills', 'certifications', 'dissertation', 'projects', 'contact',
];

export default function Nav({ c, active, scrollTo, dark, setDark }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position:       'fixed',
        top:            30,          // sit below the 30px ticker tape
        left:           0,
        right:          0,
        zIndex:         900,
        background:     scrolled ? c.nav : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom:   scrolled ? `1px solid ${c.bdr}` : '1px solid transparent',
        transition:     'all 0.3s',
      }}>
        <div style={{
          maxWidth:    1280,
          margin:      '0 auto',
          padding:     '0 1.25rem',
          display:     'flex',
          alignItems:  'center',
          height:      60,
          gap:         20,
        }}>

          {/* ── Logo ─────────────────────────────────── */}
          <div
            onClick={() => scrollTo('home')}
            style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', flexShrink: 0 }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900, fontSize: '1rem', color: '#0A1628',
            }}>
              UG
            </div>
            <span className="desktop-only" style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.63rem', letterSpacing: '0.12em',
              color: c.sec, textTransform: 'uppercase',
            }}>
              Udit Ganglani
            </span>
          </div>

          {/* ── Desktop links ─────────────────────────── */}
          <div className="desktop-only" style={{
            display: 'flex', gap: 16, alignItems: 'center',
            flex: 1, justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {NAV_LINKS.map(link => (
              <span
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-item${active === link ? ' active' : ''}`}
                style={{ color: active === link ? c.gold : c.sec }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
          </div>

          {/* ── Controls ─────────────────────────────── */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            <button
              onClick={() => setDark(!dark)}
              style={{
                background: c.card2, border: `1px solid ${c.bdr}`,
                borderRadius: 20, padding: '5px 12px',
                cursor: 'pointer', color: c.sec, fontSize: '0.76rem',
                display: 'flex', alignItems: 'center', gap: 5,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {dark ? '☀️ Light' : '🌙 Dark'}
            </button>

            <button
              className="mobile-only"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none', border: 'none',
                color: c.text, fontSize: '1.3rem',
                cursor: 'pointer', padding: '4px',
              }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────── */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 90, left: 0, right: 0, bottom: 0,
          background: c.bg, zIndex: 899,
          padding: '2rem 1.5rem', overflowY: 'auto',
        }}>
          {NAV_LINKS.map(link => (
            <div
              key={link}
              onClick={() => { scrollTo(link); setMobileOpen(false); }}
              style={{
                padding: '1rem 0',
                borderBottom: `1px solid ${c.bdr}`,
                color: active === link ? c.gold : c.text,
                fontSize: '1.1rem', fontWeight: 600,
                cursor: 'pointer', textTransform: 'capitalize',
              }}
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
