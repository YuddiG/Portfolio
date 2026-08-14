const STATS = [
  { value: '6+',   label: 'Years Exp.' },
  { value: 'ACCA', label: 'Member' },
  { value: 'MSc',  label: 'Finance, DCU' },
  { value: 'FP&A', label: 'Specialist' },
];

export default function Hero({ c, scrollTo }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(5rem, 10vh, 8rem) 1.5rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(${c.bdr}22 1px, transparent 1px),
          linear-gradient(90deg, ${c.bdr}22 1px, transparent 1px)
        `,
        backgroundSize: '56px 56px',
        opacity: 0.55,
      }} />

      {/* Radial gold glow */}
      <div style={{
        position: 'absolute', top: '25%', right: '8%',
        width: 500, height: 500,
        background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Dublin coordinates — subtle design detail */}
      <div style={{
        position: 'absolute', bottom: 60, right: '5%',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.56rem', color: c.sec, opacity: 0.28,
        letterSpacing: '0.1em', textAlign: 'right', lineHeight: 1.8,
      }}>
        53.3498° N  6.2603° W<br />DUBLIN, IRELAND
      </div>

      <div style={{
        maxWidth: 1280, margin: '0 auto', width: '100%',
        position: 'relative',
        display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center',
      }}>

        {/* ── Left: copy + CTAs ───────────────────────── */}
        <div style={{ flex: '1 1 440px' }}>

          <div className="fadeUp delay-1" style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 20,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.67rem', letterSpacing: '0.2em',
            color: c.gold, textTransform: 'uppercase',
          }}>
            <div style={{ width: 26, height: 1, background: c.gold }} />
            Finance Professional · Dublin, Ireland
          </div>

          <h1 className="fadeUp delay-2" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 7vw, 4.8rem)',
            fontWeight: 900, lineHeight: 1.02,
            letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            <span style={{ color: c.text }}>Udit</span>
            <br />
            <span className="gradient-text">Ganglani</span>
          </h1>

          <p className="fadeUp delay-3" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.7rem, 1.8vw, 0.83rem)',
            color: c.sec, letterSpacing: '0.06em',
            lineHeight: 1.7, marginBottom: 20,
          }}>
            QUALIFIED ACCA MEMBER  ·  MSc FINANCE  ·  FP&A SPECIALIST
          </p>

          <p className="fadeUp delay-4" style={{
            color: c.sec,
            fontSize: 'clamp(0.9rem, 2vw, 1.04rem)',
            lineHeight: 1.82, maxWidth: 510, marginBottom: 34,
          }}>
            Finance professional with nearly 6 years of international experience in FP&A,
            financial modelling, management accounting, audit liaison, and business partnering
            across the UAE and India. MSc Finance graduate from Dublin City University —
            specialising in investment analysis, strategic financial planning, and data-driven
            decision-making.
          </p>

          <div className="fadeUp delay-5" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              className="btn-gold"
              style={{ padding: '11px 26px', borderRadius: 8, fontSize: '0.85rem' }}
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>
            <button
              className="btn-outline"
              style={{ padding: '11px 26px', borderRadius: 8, fontSize: '0.85rem' }}
              onClick={() => scrollTo('projects')}
            >
              View Projects
            </button>
            <button
              className="btn-outline"
              style={{ padding: '11px 26px', borderRadius: 8, fontSize: '0.85rem' }}
              onClick={() => window.open('https://www.linkedin.com/in/udit-ganglani/', '_blank')}
            >
              LinkedIn ↗
            </button>
          </div>
        </div>

        {/* ── Right: avatar + stat cards ──────────────── */}
        <div style={{
          flex: '0 1 330px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 22,
        }}>

          {/* Profile avatar */}
          <div style={{ position: 'relative' }}>
            <div className="glow-pulse" style={{
              width: 205, height: 205, borderRadius: '50%',
              border: `2px solid ${c.gold}`,
              background: `linear-gradient(135deg, ${c.card}, ${c.card2})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/*
                Replace the placeholder below with a real <img> tag:
                <img src="/profile.jpg" alt="Udit Ganglani"
                     style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.8rem', lineHeight: 1 }}>👤</div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.52rem', letterSpacing: '0.12em',
                  color: c.sec, marginTop: 6,
                }}>
                  PROFILE PHOTO
                </p>
              </div>
            </div>

            {/* Location badge */}
            <div style={{
              position: 'absolute', bottom: -8, left: '50%',
              transform: 'translateX(-50%)',
              background: c.card, border: `1px solid ${c.bdr}`,
              borderRadius: 20, padding: '3px 14px',
              display: 'flex', alignItems: 'center', gap: 5,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ fontSize: '0.7rem' }}>📍</span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.58rem', color: c.sec, letterSpacing: '0.08em',
              }}>
                DUBLIN, IRELAND
              </span>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%' }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{
                background: c.card, border: `1px solid ${c.bdr}`,
                borderRadius: 10, padding: '13px 10px', textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem', fontWeight: 700,
                  color: c.gold, lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.57rem', letterSpacing: '0.08em',
                  color: c.sec, marginTop: 4, textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.55rem', letterSpacing: '0.25em',
          color: c.sec, textTransform: 'uppercase',
        }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 34,
          background: `linear-gradient(to bottom, ${c.gold}, transparent)`,
        }} />
      </div>
    </div>
  );
}
