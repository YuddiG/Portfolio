/**
 * Returns the colour palette object for dark or light mode.
 * Pass the result as prop `c` to every section component.
 *
 * Usage:
 *   const c = palette(isDark);
 *   <Hero c={c} />
 */
export function palette(dark) {
  return {
    bg:    dark ? '#0A1628' : '#EEF2F7',
    bg2:   dark ? '#071020' : '#E4EAF3',
    card:  dark ? '#0E2040' : '#FFFFFF',
    card2: dark ? '#122440' : '#F4F7FB',
    bdr:   dark ? '#1A3352' : '#D1DAE8',
    text:  dark ? '#DDE5F0' : '#0D1E35',
    sec:   dark ? '#6E8FAD' : '#4B6280',
    gold:  '#C9A84C',
    glow:  dark ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.08)',
    nav:   dark ? 'rgba(7,16,32,0.93)'    : 'rgba(238,242,247,0.93)',
  };
}
