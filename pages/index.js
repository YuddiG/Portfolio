import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

import { palette } from '../lib/palette';

import Ticker         from '../components/Ticker';
import Nav            from '../components/Nav';
import Hero           from '../components/Hero';
import About          from '../components/About';
import Experience     from '../components/Experience';
import Education      from '../components/Education';
import Skills         from '../components/Skills';
import Certifications from '../components/Certifications';
import Dissertation   from '../components/Dissertation';
import Projects       from '../components/Projects';
import Contact        from '../components/Contact';
import Footer         from '../components/Footer';

const SECTION_IDS = [
  'home', 'about', 'experience', 'education',
  'skills', 'certifications', 'dissertation', 'projects', 'contact',
];

/**
 * Smoothly scrolls to a section, accounting for the fixed header height
 * (30px ticker + 60px nav = 90px).
 */
function useScrollTo() {
  return (id) => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - 88), behavior: 'smooth' });
  };
}

export default function Portfolio() {
  const [dark,     setDark]     = useState(true);
  const [active,   setActive]   = useState('home');
  const [skillsOn, setSkillsOn] = useState(false);

  const skillsRef = useRef(null);
  const scrollTo  = useScrollTo();
  const c         = palette(dark);

  /* ── Skills bar trigger via IntersectionObserver ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsOn(true); },
      { threshold: 0.1 },
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Scroll-spy: highlight active nav item ── */
  useEffect(() => {
    const onScroll = () => {
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && window.scrollY + 180 >= el.offsetTop) {
          setActive(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Udit Ganglani | Finance Professional</title>
        <meta
          name="description"
          content="Qualified ACCA Member | MSc Finance Graduate (DCU) | FP&A Specialist based in Dublin, Ireland."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title"       content="Udit Ganglani | Finance Professional" />
        <meta property="og:description" content="ACCA Affiliate | MSc Finance | CFA Level I Candidate | Dublin, Ireland" />
        <meta property="og:type"        content="website" />
      </Head>

      <div style={{
        background:  c.bg,
        color:       c.text,
        minHeight:   '100vh',
        transition:  'background 0.35s, color 0.35s',
        fontFamily:  "'Inter', sans-serif",
      }}>
        {/* Fixed ticker — always at the very top */}
        <Ticker />

        {/* Fixed nav — sits below the ticker (top: 30px) */}
        <Nav
          c={c}
          active={active}
          scrollTo={scrollTo}
          dark={dark}
          setDark={setDark}
        />

        {/* ── Sections ────────────────────────────────────── */}

        {/* paddingTop: 30 accounts for the ticker height so
            #home doesn't sit underneath it on first paint.   */}
        <div id="home" style={{ paddingTop: 30 }}>
          <Hero c={c} scrollTo={scrollTo} />
        </div>

        <div id="about">
          <About c={c} />
        </div>

        <div id="experience">
          <Experience c={c} />
        </div>

        <div id="education">
          <Education c={c} />
        </div>

        {/* ref attached here so IntersectionObserver fires when Skills enters viewport */}
        <div id="skills" ref={skillsRef}>
          <Skills c={c} animated={skillsOn} />
        </div>

        <div id="certifications">
          <Certifications c={c} />
        </div>

        <div id="dissertation">
          <Dissertation c={c} />
        </div>

        <div id="projects">
          <Projects c={c} />
        </div>

        <div id="contact">
          <Contact c={c} />
        </div>

        <Footer c={c} />
      </div>
    </>
  );
}
