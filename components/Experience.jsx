import SectionHeader from './SectionHeader';
import { EXPERIENCES } from '../data';

export default function Experience({ c }) {
  return (
    <div style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Career"
          title="Work Experience"
          subtitle="Progressive international finance career across the UAE and India — spanning FMCG, F&B, and multi-entity group environments."
          c={c}
        />

        <div style={{ position: 'relative' }}>

          {/* Vertical timeline rule */}
          <div style={{
            position: 'absolute', left: 18, top: 0, bottom: 0, width: 1,
            background: `linear-gradient(to bottom, ${c.gold}, ${c.bdr}, transparent)`,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {EXPERIENCES.map((exp, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.75rem', paddingLeft: '3rem', position: 'relative' }}>

                {/* Coloured dot */}
                <div style={{
                  position: 'absolute', left: 11, top: 22,
                  width: 14, height: 14, borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 0 4px ${exp.color}22, 0 0 12px ${exp.color}30`,
                }} />

                {/* Card */}
                <div className="lift" style={{
                  flex: 1,
                  background: c.card, border: `1px solid ${c.bdr}`,
                  borderLeft: `3px solid ${exp.color}45`,
                  borderRadius: 12, padding: '1.75rem',
                }}>
                  {/* Header row */}
                  <div style={{
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'space-between', gap: 10,
                    marginBottom: 14,
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700, fontSize: '1.12rem',
                        color: c.text, marginBottom: 4,
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.88rem' }}>
                        {exp.company}
                      </p>
                      <p style={{ color: c.sec, fontSize: '0.76rem', marginTop: 2 }}>
                        📍 {exp.location}
                      </p>
                    </div>

                    <span style={{
                      alignSelf: 'flex-start',
                      background: `${exp.color}18`, border: `1px solid ${exp.color}35`,
                      borderRadius: 6, padding: '3px 10px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem', color: exp.color,
                      whiteSpace: 'nowrap',
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{
                          width: 5, height: 5, borderRadius: '50%',
                          background: exp.color, flexShrink: 0, marginTop: 7,
                        }} />
                        <span style={{ color: c.sec, fontSize: '0.85rem', lineHeight: 1.65 }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}
