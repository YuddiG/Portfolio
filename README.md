# Udit Ganglani — Portfolio

Professional portfolio built with **Next.js 14 (Pages Router)** and plain CSS.  
No Tailwind required — all styling is via `styles/globals.css` and inline style props.

---

## Quick start (local development)

### Prerequisites
- **Node.js 18+** — check with `node -v`
- **npm** (comes with Node) or **yarn**

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site hot-reloads on every save.

---

## Project structure

```
portfolio/
├── components/          # One file per section
│   ├── Ticker.jsx       # Gold scrolling ticker tape
│   ├── Nav.jsx          # Fixed navigation + mobile drawer
│   ├── SectionHeader.jsx# Reusable eyebrow / title / rule
│   ├── Hero.jsx         # Landing section
│   ├── About.jsx        # Bio + highlight cards
│   ├── Experience.jsx   # Colour-coded timeline
│   ├── Education.jsx    # Degree / qualification cards
│   ├── Skills.jsx       # Animated skill bars
│   ├── Certifications.jsx
│   ├── Dissertation.jsx # Tabbed academic viewer
│   ├── Projects.jsx     # Expandable project cards
│   ├── Contact.jsx      # Info + contact form
│   └── Footer.jsx
│
├── data/
│   └── index.js         # ← ALL content lives here. Edit this to update the site.
│
├── lib/
│   └── palette.js       # palette(dark) → colour tokens for dark/light mode
│
├── pages/
│   ├── _document.js     # Google Fonts, favicon
│   ├── _app.js          # Global CSS import
│   └── index.js         # Root page — all state lives here
│
├── styles/
│   └── globals.css      # Keyframes, utility classes, CSS custom properties
│
└── public/              # Static assets (add profile.jpg here)
```

---

## How to customise content

**All text and data is in `data/index.js`** — you never need to touch a component to update copy.

| What to change | Where |
|---|---|
| Email / LinkedIn / visa status | `CONTACT` object |
| Work experience bullets | `EXPERIENCES` array |
| Degrees and notes | `EDUCATION` array |
| Skill names and percentages | `SKILLS` array |
| Certification status | `CERTIFICATIONS` array |
| Project descriptions and tools | `PROJECTS` array |
| Dissertation title, tags, tab content | `DISSERTATION` object |

---

## Adding a profile photo

1. Save your photo as `public/profile.jpg` (square crop recommended, min 400×400 px).
2. Open `components/Hero.jsx` and replace the placeholder block:

```jsx
{/* Remove this placeholder … */}
<div style={{ textAlign: 'center' }}>
  <div style={{ fontSize: '3.8rem', lineHeight: 1 }}>👤</div>
  <p …>PROFILE PHOTO</p>
</div>

{/* … and add this instead: */}
<img
  src="/profile.jpg"
  alt="Udit Ganglani"
  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
/>
```

---

## Adding a new project

Open `data/index.js`, find the `PROJECTS` array, and append a new object:

```js
{
  title:       'My New Project',
  tag:         'Category',
  subtitle:    'Context or company',
  icon:        '📊',           // emoji
  accent:      '#2563EB',      // any hex colour for the card accent
  description: 'What you built and why it mattered.',
  tools:       ['Excel', 'Python', 'Power BI'],
  outcome:     '🏆 Key result or metric',
},
```

The Projects section renders automatically — no component changes needed.

---

## Wiring up the contact form

The form currently simulates a send (1.3 s delay, then success toast). To make it real, replace the `setTimeout` in `components/Contact.jsx` with your preferred service:

### Option A — Resend (recommended, free tier available)
```bash
npm install resend
```
Create `pages/api/contact.js`:
```js
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, subject, message } = req.body;
  await resend.emails.send({
    from:    'portfolio@yourdomain.com',
    to:      'yuddi.ganglani26@gmail.com',
    subject: subject || `Portfolio contact from ${name}`,
    text:    `From: ${name} <${email}>\n\n${message}`,
  });
  res.status(200).json({ ok: true });
}
```
Then in `Contact.jsx`, replace the `setTimeout` with:
```js
await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
```

### Option B — Formspree (zero backend, free tier)
Replace the `<form onSubmit={handleSubmit}>` with:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
No API route needed.

---

## Deploy to Vercel

Vercel auto-detects Next.js — deployment takes under 2 minutes.

### Step 1 — Push to GitHub

```bash
# Inside the portfolio/ folder:
git init
git add .
git commit -m "Initial portfolio commit"
# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**.
3. Select your `portfolio` repository → click **Import**.
4. Leave all settings as defaults (Vercel detects Next.js automatically).
5. Click **Deploy**.

Your site is live at `https://portfolio-xxxx.vercel.app` within ~60 seconds.

### Step 3 — Add a custom domain (optional)

1. In your Vercel project, go to **Settings → Domains**.
2. Type your domain (e.g. `uditganglani.ie`) → click **Add**.
3. Vercel shows you two DNS records to add at your registrar:
   - An **A record** pointing to `76.76.21.21`
   - A **CNAME** `www` pointing to `cname.vercel-dns.com`
4. Add these at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
5. DNS propagates within minutes–hours; Vercel auto-provisions an SSL certificate.

### Environment variables (if using Resend or similar)

In Vercel dashboard → **Settings → Environment Variables**, add:
```
RESEND_API_KEY = re_xxxxxxxxxxxx
```
Redeploy once for changes to take effect.

---

## Subsequent updates

After the initial deploy, every `git push` to `main` triggers an automatic redeploy on Vercel. No manual action required.

```bash
# Edit data/index.js, then:
git add .
git commit -m "Update projects section"
git push
# Vercel deploys automatically — live in ~30 seconds
```

---

## Build for production (optional local check)

```bash
npm run build   # compiles and optimises
npm start       # serves the production build at localhost:3000
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (Pages Router) |
| Language | JavaScript (JSX) |
| Styling | Plain CSS (`styles/globals.css`) + inline style props |
| Fonts | Playfair Display · Inter · JetBrains Mono (Google Fonts) |
| Deployment | Vercel |
| Form backend | Plug-in (Resend / Formspree — see above) |
