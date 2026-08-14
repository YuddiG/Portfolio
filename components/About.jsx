import SectionHeader from './SectionHeader';

const HIGHLIGHTS = [
  { icon: '🌍', heading: 'International Career',   desc: 'UAE & India — FMCG, F&B, and financial services sectors' },
  { icon: '📊', heading: 'FP&A Specialist',         desc: 'Financial modelling, budgeting, forecasting & variance analysis' },
  { icon: '🎓', heading: 'Dual Qualification',      desc: 'Qualified ACCA Member + MSc Finance (DCU) — professional and academic credentials' },
  { icon: '🤝', heading: 'Business Partnering',     desc: 'Translating financial data into strategic insight for senior stakeholders' },
  { icon: '💡', heading: 'Tech-enabled Finance',    desc: 'Power BI, Python, Excel — elevating FP&A delivery through data tools' },
  { icon: '🔬', heading: 'Research Depth',          desc: 'CFA Research Challenge Finalist; MSc dissertation in EU banking econometrics' },
];

const TAGS = [
  'Dublin, Ireland 📍',
  'Stamp 1G ✅',
  'No Sponsorship Required 🟢',
  'Open to Opportunities',
];

export default function About({ c }) {
  return (
    <div style={{ padding: '5rem 1.5rem', background: c.bg2 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Background"
          title="About Me"
          subtitle="A finance professional combining six years of international FP&A experience with rigorous academic training and a commercial, data-driven mindset."
          c={c}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>

          {/* Bio copy */}
          <div style={{ flex: '1 1 340px' }}>
            {[
              'With nearly six years of international finance experience spanning the UAE and India, I have built a comprehensive skill set across FP&A, management accounting, financial reporting, audit liaison, and strategic business partnering. My career spans FMCG trading, food & beverage, and multi-entity group environments.',
              'Holding full ACCA membership and an MSc in Finance from Dublin City University (2026), I combine professional accounting rigour with advanced financial theory. Academic work includes an econometric dissertation on EU bank stability and a CFA Research Challenge Ireland Finals appearance for equity research on Cairn Homes plc.',
              'Currently based in Dublin on a Stamp 1G post-study work visa — requiring no employer sponsorship — I am actively seeking FP&A, commercial finance, or financial analysis opportunities where I can contribute analytical depth and commercial insight.',
            ].map((para, i) => (
              <p key={i} style={{ color: c.sec, lineHeight: 1.9, marginBottom: 16, fontSize: '0.96rem' }}>
                {para}
              </p>
            ))}

            {/* Status tags */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
              {TAGS.map((tag, i) => (
                <span key={i} style={{
                  background: c.glow, border: `1px solid ${c.gold}35`,
                  borderRadius: 20, padding: '5px 13px',
                  fontSize: '0.74rem', color: c.gold,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.04em',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div style={{
            flex: '1 1 360px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))',
            gap: 12,
          }}>
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="lift" style={{
                background: c.card, border: `1px solid ${c.bdr}`,
                borderRadius: 12, padding: '1.2rem',
              }}>
                <div style={{ fontSize: '1.4rem', marginBottom: 8 }}>{h.icon}</div>
                <div style={{ fontWeight: 600, color: c.text, fontSize: '0.87rem', marginBottom: 5 }}>
                  {h.heading}
                </div>
                <div style={{ color: c.sec, fontSize: '0.77rem', lineHeight: 1.55 }}>
                  {h.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
