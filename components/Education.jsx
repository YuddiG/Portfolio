import SectionHeader from './SectionHeader';
import { EDUCATION } from '../data';

export default function Education({ c }) {
  return (
    <div style={{ padding: '5rem 1.5rem', background: c.bg2 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Academics"
          title="Education"
          subtitle="A blend of professional accounting qualification and advanced postgraduate finance training."
          c={c}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {EDUCATION.map((edu, i) => (
            <div key={i} className="lift" style={{
              background: c.card, border: `1px solid ${c.bdr}`,
              borderRadius: 14, padding: '2rem',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Gold top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${c.gold}, ${c.gold}50, transparent)`,
              }} />

              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem', letterSpacing: '0.1em',
                background: c.glow, border: `1px solid ${c.gold}35`,
                color: c.gold, padding: '3px 10px',
                borderRadius: 4, display: 'inline-block', marginBottom: 16,
              }}>
                {edu.badge}
              </span>

              <div style={{ fontSize: '2rem', marginBottom: 10 }}>{edu.emoji}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.22rem', fontWeight: 700,
                color: c.text, marginBottom: 6,
              }}>
                {edu.degree}
              </h3>

              <p style={{ color: c.gold, fontWeight: 600, marginBottom: 4, fontSize: '0.88rem' }}>
                {edu.institution}
              </p>

              <p style={{ color: c.sec, fontSize: '0.76rem', marginBottom: 14 }}>
                📍 {edu.location} · 🗓 {edu.year}
              </p>

              <p style={{ color: c.sec, fontSize: '0.82rem', lineHeight: 1.65 }}>
                {edu.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
