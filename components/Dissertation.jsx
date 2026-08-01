import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { DISSERTATION } from '../data';

const TAB_IDS = ['summary', 'methodology', 'findings', 'skills'];

export default function Dissertation({ c }) {
  const [activeTab, setActiveTab] = useState('summary');
  const d = DISSERTATION;
  const tab = d.tabs[activeTab];

  return (
    <div style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <SectionHeader eyebrow="Academic Research" title="MSc Dissertation" c={c} />

        {/* Title card */}
        <div style={{
          background: c.card, border: `1px solid ${c.bdr}`,
          borderRadius: 14, padding: '2.5rem',
          marginBottom: '2rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${c.gold}, ${c.gold}55, transparent)`,
          }} />

          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem', letterSpacing: '0.22em',
            color: c.gold, marginBottom: 16,
          }}>
            {d.university.toUpperCase()} · {d.degree.toUpperCase()} · {d.year}
          </p>

          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.8vw, 1.45rem)',
            fontWeight: 600, color: c.text,
            lineHeight: 1.4, marginBottom: 20,
          }}>
            {d.title}
          </h3>

          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {d.tags.map((tag, i) => (
              <span key={i} style={{
                background: c.glow, border: `1px solid ${c.gold}30`,
                borderRadius: 4, padding: '3px 9px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem', color: c.gold,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', gap: 4, marginBottom: '1.5rem',
          background: c.card2, borderRadius: 10, padding: 4,
        }}>
          {TAB_IDS.map(id => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                flex: 1, padding: '8px 4px',
                border: 'none', cursor: 'pointer', borderRadius: 8,
                fontSize: '0.8rem', fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.2s',
                background: activeTab === id ? c.gold : 'transparent',
                color:      activeTab === id ? '#0A1628' : c.sec,
              }}
            >
              {d.tabs[id].label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{
          background: c.card, border: `1px solid ${c.bdr}`,
          borderRadius: 14, padding: '2.25rem',
        }}>
          {activeTab !== 'skills' ? (
            <>
              <h4 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, fontSize: '1.12rem',
                color: c.text, marginBottom: 16,
              }}>
                {tab.title}
              </h4>
              <p style={{
                color: c.sec, lineHeight: 1.9,
                fontSize: '0.88rem', whiteSpace: 'pre-line',
              }}>
                {tab.body}
              </p>
            </>
          ) : (
            <>
              <h4 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, fontSize: '1.12rem',
                color: c.text, marginBottom: 18,
              }}>
                {tab.title}
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                gap: 10,
              }}>
                {tab.items.map((item, i) => (
                  <div key={i} style={{
                    background: c.card2, border: `1px solid ${c.bdr}`,
                    borderRadius: 10, padding: '0.9rem',
                    display: 'flex', gap: 10, alignItems: 'center',
                  }}>
                    <span style={{ fontSize: '1.05rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ color: c.text, fontWeight: 600, fontSize: '0.81rem' }}>
                        {item.skill}
                      </div>
                      <div style={{ color: c.sec, fontSize: '0.71rem', marginTop: 2 }}>
                        {item.tool}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
