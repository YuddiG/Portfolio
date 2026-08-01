import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../data';

export default function Certifications({ c }) {
  return (
    <div style={{ padding: '5rem 1.5rem', background: c.bg2 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Professional certifications and designations underpinning my finance expertise."
          c={c}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
          gap: '1.5rem',
        }}>
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="lift" style={{
              background: c.card, border: `1px solid ${c.bdr}`,
              borderRadius: 14, padding: '1.75rem',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Coloured top stripe */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: cert.statusColor,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${cert.statusColor}18`, border: `1px solid ${cert.statusColor}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>
                  {cert.icon}
                </div>
                <span style={{
                  fontSize: '0.66rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.07em',
                  padding: '3px 9px', borderRadius: 4,
                  background: `${cert.statusColor}15`,
                  color: cert.statusColor,
                }}>
                  {cert.status}
                </span>
              </div>

              <h3 style={{ fontWeight: 700, color: c.text, marginBottom: 6, fontSize: '0.96rem' }}>
                {cert.name}
              </h3>
              <p style={{ color: c.sec, fontSize: '0.79rem', marginBottom: 8 }}>
                {cert.body}
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.67rem', color: cert.statusColor,
              }}>
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
