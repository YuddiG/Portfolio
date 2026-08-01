import SectionHeader from './SectionHeader';
import { SKILLS } from '../data';

/**
 * Props:
 *   c        {object}  Colour palette
 *   animated {boolean} Passed from parent — true once section enters viewport.
 *                      Parent attaches a ref + IntersectionObserver and flips this flag.
 */
export default function Skills({ c, animated }) {
  return (
    <div style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Competencies"
          title="Skills & Expertise"
          subtitle="Financial, technical, and interpersonal capabilities built across international FP&A and management accounting roles."
          c={c}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(295px, 1fr))',
          gap: '1.75rem',
        }}>
          {SKILLS.map((category, ci) => (
            <div key={ci} style={{
              background: c.card, border: `1px solid ${c.bdr}`,
              borderRadius: 14, padding: '2rem',
            }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '1.35rem' }}>{category.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: '0.96rem', color: c.text }}>
                  {category.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.items.map((skill, si) => (
                  <div key={si}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: c.sec, fontSize: '0.83rem' }}>{skill.name}</span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem', color: c.gold,
                      }}>
                        {skill.pct}%
                      </span>
                    </div>

                    {/* Track */}
                    <div style={{ background: c.card2, borderRadius: 2, height: 3, overflow: 'hidden' }}>
                      {/* Fill — width transitions from 0 → target once `animated` flips true */}
                      <div
                        className="skill-bar"
                        style={{
                          width: animated ? `${skill.pct}%` : 0,
                          transitionDelay: animated ? `${si * 0.06}s` : '0s',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
