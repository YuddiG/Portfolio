import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { CONTACT } from '../data';

const FIELDS = [
  { key: 'name',    label: 'Full Name',     placeholder: 'Your name',       type: 'text',  required: true  },
  { key: 'email',   label: 'Email',         placeholder: 'your@email.com',  type: 'email', required: true  },
  { key: 'subject', label: 'Subject',       placeholder: 'Role / Enquiry',  type: 'text',  required: false },
];

const INFO_ITEMS = [
  { icon: '📧', label: 'Email',    value: CONTACT.email,        href: `mailto:${CONTACT.email}` },
  { icon: '💼', label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
  { icon: '📍', label: 'Location', value: CONTACT.location,     href: null },
  { icon: '✅', label: 'Visa',     value: CONTACT.visa,         href: null },
];

export default function Contact({ c }) {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);

  const handleChange = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    // TODO: replace with your preferred form backend (e.g. Resend, Formspree, EmailJS).
    // For now this simulates a successful send after 1.3 s.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1300);
  };

  const inputStyle = (c) => ({
    width: '100%', padding: '9px 13px',
    background: c.card2, border: `1px solid ${c.bdr}`,
    borderRadius: 8, color: c.text,
    fontSize: '0.88rem', outline: 'none',
    transition: 'border-color 0.2s',
  });

  return (
    <div style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact"
          subtitle="Open to FP&A, corporate finance, and commercial finance opportunities across Ireland."
          c={c}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>

          {/* ── Left: contact info ─────────────────── */}
          <div style={{ flex: '1 1 265px' }}>
            <p style={{ color: c.sec, lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
              I&apos;m actively seeking FP&amp;A and commercial finance roles where I can contribute
              analytical rigour, a commercial mindset, and a genuine passion for driving financial
              performance. I&apos;d welcome any conversation about opportunities or collaboration.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {INFO_ITEMS.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: c.glow, border: `1px solid ${c.gold}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.05rem', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.6rem', letterSpacing: '0.12em',
                      color: c.gold, marginBottom: 2, textTransform: 'uppercase',
                    }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: c.text, textDecoration: 'none', fontSize: '0.86rem', fontWeight: 500 }}
                      >
                        {item.value} ↗
                      </a>
                    ) : (
                      <span style={{ color: c.text, fontSize: '0.86rem', fontWeight: 500 }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: contact form ────────────────── */}
          <div style={{ flex: '1 1 340px' }}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: c.card, border: `1px solid ${c.bdr}`,
                borderRadius: 14, padding: '2rem',
              }}
            >
              {sent && (
                <div style={{
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  borderRadius: 8, padding: '11px 15px',
                  marginBottom: 18, color: '#22c55e', fontSize: '0.84rem',
                }}>
                  ✅ Message sent! I&apos;ll be in touch shortly.
                </div>
              )}

              {FIELDS.map(field => (
                <div key={field.key} style={{ marginBottom: 15 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    color: c.gold, textTransform: 'uppercase', marginBottom: 7,
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.key]}
                    onChange={handleChange(field.key)}
                    style={inputStyle(c)}
                    onFocus={e  => { e.target.style.borderColor = c.gold; }}
                    onBlur={e   => { e.target.style.borderColor = c.bdr;  }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 18 }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem', letterSpacing: '0.15em',
                  color: c.gold, textTransform: 'uppercase', marginBottom: 7,
                }}>
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  style={{ ...inputStyle(c), resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = c.gold; }}
                  onBlur={e  => { e.target.style.borderColor = c.bdr;  }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold"
                disabled={loading}
                style={{
                  width: '100%', padding: '12px', borderRadius: 8,
                  fontSize: '0.88rem', opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
