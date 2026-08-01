import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data';

export default function Projects({ c }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ padding: '5rem 1.5rem', background: c.bg2 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          subtitle="Finance, research, and technology projects demonstrating analytical depth and cross-functional initiative."
          c={c}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="lift"
                onClick={() => toggle(i)}
                style={{
                  background: c.card,
                  border:    `1px solid ${isOpen ? project.accent + '80' : c.bdr}`,
                  borderTop: `3px solid ${project.accent}`,
                  borderRadius: 14, padding: '1.75rem',
                  cursor: 'pointer', transition: 'border-color 0.2s',
                }}
              >
                {/* Card header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <div style={{ fontSize: '1.9rem' }}>{project.icon}</div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem', letterSpacing: '0.08em',
                    background: `${project.accent}18`, border: `1px solid ${project.accent}35`,
                    color: project.accent, padding: '3px 8px', borderRadius: 4,
                  }}>
                    {project.tag}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, fontSize: '1.08rem',
                  color: c.text, marginBottom: 4,
                }}>
                  {project.title}
                </h3>

                <p style={{ color: project.accent, fontSize: '0.76rem', fontWeight: 500, marginBottom: 11 }}>
                  {project.subtitle}
                </p>

                <p style={{ color: c.sec, fontSize: '0.82rem', lineHeight: 1.65 }}>
                  {project.description}
                </p>

                {/* Expanded detail */}
                {isOpen && (
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${c.bdr}` }}>
                    <p style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.6rem', letterSpacing: '0.15em',
                      color: c.sec, textTransform: 'uppercase', marginBottom: 8,
                    }}>
                      Tools & Methods
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                      {project.tools.map((tool, ti) => (
                        <span key={ti} style={{
                          background: c.card2, border: `1px solid ${c.bdr}`,
                          borderRadius: 4, padding: '2px 8px',
                          fontSize: '0.7rem', color: c.sec,
                        }}>
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div style={{
                      background: `${project.accent}12`,
                      border: `1px solid ${project.accent}30`,
                      borderRadius: 8, padding: '10px 14px',
                      fontSize: '0.76rem', color: project.accent,
                      fontFamily: "'JetBrains Mono', monospace",
                      lineHeight: 1.5,
                    }}>
                      {project.outcome}
                    </div>
                  </div>
                )}

                <p style={{ marginTop: 10, textAlign: 'right', color: c.sec, fontSize: '0.7rem' }}>
                  {isOpen ? '▲ Less' : '▼ Details'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
