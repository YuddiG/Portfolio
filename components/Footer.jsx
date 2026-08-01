const GOLD = '#C9A84C';

const FOOTER_LINKS = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];

export default function Footer({ c }) {
  const scrollTo = (id) => {
    if (typeof document !== 'undefined') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      background: '#040D1A',
      padding: '2.5rem 1.5rem',
      borderTop: '1px solid #1A3352',
      textAlign: 'center',
    }}>
      {/* Logotype */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.55rem', fontWeight: 900,
        marginBottom: 8,
      }}>
        <span style={{ color: '#DDE5F0' }}>Udit </span>
        <span className="gradient-text">Ganglani</span>
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.58rem', letterSpacing: '0.2em',
        color: '#3A5470', marginBottom: 18,
      }}>
        ACCA AFFILIATE  ·  MSC FINANCE  ·  CFA CANDIDATE  ·  DUBLIN
      </p>

      {/* Nav links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 18, flexWrap: 'wrap' }}>
        {FOOTER_LINKS.map(link => (
          <span
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              color: '#3A5470', fontSize: '0.76rem',
              cursor: 'pointer', textTransform: 'capitalize',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#3A5470'; }}
          >
            {link}
          </span>
        ))}
      </div>

      <p style={{ color: '#243A52', fontSize: '0.74rem' }}>
        © {new Date().getFullYear()} Udit Ganglani · All Rights Reserved
      </p>
    </div>
  );
}
