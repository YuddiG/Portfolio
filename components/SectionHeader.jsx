/**
 * SectionHeader — eyebrow label, title, optional subtitle, gold rule.
 *
 * Props:
 *   eyebrow  {string}  Small monospace label above the title
 *   title    {string}  Main heading (Playfair Display)
 *   subtitle {string=} Optional supporting copy
 *   c        {object}  Colour palette from lib/palette.js
 */
export default function SectionHeader({ eyebrow, title, subtitle, c }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.63rem',
        letterSpacing: '0.25em',
        color: c.gold,
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>
        {eyebrow}
      </p>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(1.75rem, 4vw, 2.7rem)',
        fontWeight: 700,
        color: c.text,
        lineHeight: 1.15,
        marginBottom: subtitle ? 14 : 0,
      }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{
          color: c.sec,
          fontSize: '0.96rem',
          maxWidth: 580,
          margin: '0 auto',
          lineHeight: 1.65,
        }}>
          {subtitle}
        </p>
      )}

      {/* Gold underline rule */}
      <div style={{
        width: 44,
        height: 2,
        background: `linear-gradient(90deg, ${c.gold}, transparent)`,
        margin: '1.5rem auto 0',
      }} />
    </div>
  );
}
