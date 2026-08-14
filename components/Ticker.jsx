const TICKER_TEXT =
  'QUALIFIED ACCA MEMBER  ·  MSc FINANCE — DCU 2026  ·  ' +
  '6 YEARS INTERNATIONAL EXPERIENCE  ·  FP&A SPECIALIST  ·  FINANCIAL MODELLING  ·  ' +
  'POWER BI  ·  BUSINESS PARTNERING  ·  DUBLIN, IRELAND  ·  AUDIT & ASSURANCE  ·  ' +
  'INVESTMENT ANALYSIS  ·  STAMP 1G VISA  ·  ';

export default function Ticker() {
  return (
    <div style={{
      background: '#040D1A',
      overflow: 'hidden',
      height: 30,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #1A3352',
    }}>
      <div
        className="ticker-inner"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          color: '#C9A84C',
          opacity: 0.85,
        }}
      >
        {/* Duplicate for seamless loop — translateX(-50%) == one copy width */}
        <span>{TICKER_TEXT}</span>
        <span>{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
