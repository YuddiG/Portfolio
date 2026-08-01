/* ═══════════════════════════════════════════════════════════════
   data/index.js — All static content for the portfolio.
   Edit this file to update any section without touching components.
   ═══════════════════════════════════════════════════════════════ */

export const CONTACT = {
  email:          'yuddi.ganglani26@gmail.com',
  linkedin:       'https://linkedin.com/in/uditganglani',
  linkedinLabel:  'linkedin.com/in/uditganglani',
  location:       'Dublin, Ireland',
  visa:           'Stamp 1G — No Sponsorship Required',
};

export const EXPERIENCES = [
  {
    title:    'Assistant Finance Manager',
    company:  'Intentfin Ventures Limited',
    location: 'Indore, India',
    period:   '2023 – 2024',
    color:    '#7C3AED',
    bullets: [
      'Built end-to-end three-statement financial models for restaurant clients, integrated with Power BI dashboards for real-time management reporting and actuals-vs-budget tracking.',
      'Drove process improvement initiatives across client reporting workflows; designed and delivered cross-team training sessions on updated reporting standards subsequently adopted company-wide.',
      'Managed full AP/AR cycles, payroll processing, and month-end close activities across multiple client portfolios simultaneously.',
      'Developed rolling budgeting and forecasting models enabling real-time performance variance analysis for strategic CFO-level decision support.',
    ],
  },
  {
    title:    'Senior Finance Analyst',
    company:  'Bin Khumairi Smoking Goods Co. LLC',
    location: 'Dubai, UAE',
    period:   '2021 – 2023',
    color:    '#C9A84C',
    bullets: [
      'Served as primary external audit liaison for all Bin Khumairi group sister companies, reporting directly to CFO; coordinated full statutory audit cycles end-to-end across the group.',
      'Produced a two-year post-investment financial retrospective for Scorpion Smoking Requisites capex, evidencing ~20% EBIT margin, ~15% ROI, and ~2-year payback — analysis underpinned board-approved capex for 3 new outlets.',
      'Led month-end close including P&L analysis, balance sheet reconciliations, intercompany eliminations, and group management reporting packs.',
      'Coordinated multi-entity consolidation and intercompany transaction processing across subsidiary companies in the group.',
    ],
  },
  {
    title:    'Finance Executive',
    company:  'Royal Foodstuff LLC',
    location: 'Dubai, UAE',
    period:   '2019 – 2021',
    color:    '#059669',
    bullets: [
      'Identified and corrected a material unrealised FX gain misclassification during an external audit, preventing errors in the statutory financial statements.',
      'Managed full AP function including supplier reconciliations, vendor payment runs, and cash flow forecasting for a multi-category FMCG trading business.',
      'Supported preparation of management accounts, financial statements, and corporate tax compliance filings.',
      'Maintained fixed asset register with depreciation schedules; liaised with operations on capex requests and approvals.',
    ],
  },
  {
    title:    'Assistant of Accounting',
    company:  "Shree Shyam's Resources",
    location: 'India',
    period:   '2018 – 2020',
    color:    '#D97706',
    bullets: [
      'Maintained day-to-day bookkeeping records including accounts payable, accounts receivable, and journal entries across the business.',
      'Assisted with preparation of monthly financial statements and management reports for senior review.',
      'Performed bank reconciliations and ledger maintenance as part of the month-end close process.',
      'Supported senior accountants with tax compliance, vendor payment processing, and payroll administration.',
    ],
  },
];

export const EDUCATION = [
  {
    degree:      'MSc Finance',
    institution: 'Dublin City University',
    location:    'Dublin, Ireland',
    year:        'Jan 2026',
    badge:       'Postgraduate Degree',
    emoji:       '🎓',
    note:        'CFA Research Challenge Ireland Finalist — Cairn Homes plc equity research & DCF valuation. Dissertation: EU bank stability econometrics across 14 countries (GARCH, GMM, OLS panel, 2010–2023).',
  },
  {
    degree:      'ACCA Affiliate',
    institution: 'Association of Chartered Certified Accountants',
    location:    'Global',
    year:        '2023',
    badge:       'Professional Qualification',
    emoji:       '📋',
    note:        'All professional examinations completed across financial reporting, audit & assurance, taxation, performance management, and advanced financial management.',
  },
  {
    degree:      'BSc (Hons) Applied Accounting',
    institution: 'Oxford Brookes University',
    location:    'Oxford, UK',
    year:        '2022',
    badge:       'Undergraduate Degree',
    emoji:       '📚',
    note:        'Awarded via the ACCA–OBU joint programme. Research & Analysis project covering equity valuation and financial ratio analysis.',
  },
];

export const SKILLS = [
  {
    category: 'Financial Expertise',
    icon: '📊',
    items: [
      { name: 'Financial Analysis & Reporting',  pct: 92 },
      { name: 'FP&A / Budgeting & Forecasting',  pct: 88 },
      { name: 'Financial Modelling',              pct: 85 },
      { name: 'Management Accounting',            pct: 90 },
      { name: 'Audit & Assurance',                pct: 82 },
      { name: 'Variance Analysis',                pct: 87 },
    ],
  },
  {
    category: 'Technical Tools',
    icon: '⚙️',
    items: [
      { name: 'Microsoft Excel (Advanced)', pct: 94 },
      { name: 'Power BI',                   pct: 78 },
      { name: 'Xero',                       pct: 88 },
      { name: 'QuickBooks',                 pct: 82 },
      { name: 'Python',                     pct: 66 },
      { name: 'MS Office Suite',            pct: 92 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    items: [
      { name: 'Business Partnering',            pct: 88 },
      { name: 'Stakeholder Management',         pct: 86 },
      { name: 'Presentation & Communication',   pct: 85 },
      { name: 'Leadership & Development',       pct: 80 },
      { name: 'Problem Solving',                pct: 91 },
      { name: 'Cross-functional Collaboration', pct: 87 },
    ],
  },
];

export const CERTIFICATIONS = [
  { name: 'ACCA Affiliate',         body: 'ACCA',      year: '2023',     status: 'Awarded',   statusColor: '#22c55e', icon: '✅' },
  { name: 'Xero Advisor Certified', body: 'Xero',      year: '2023',     status: 'Certified', statusColor: '#1AB4D7', icon: '✅' },
  { name: 'Power BI Data Analyst',  body: 'Microsoft', year: 'Pursuing', status: 'Pursuing',  statusColor: '#F59E0B', icon: '📗' },
];

export const PROJECTS = [
  {
    title:       'CFA Research Challenge',
    tag:         'Equity Research',
    subtitle:    'Cairn Homes plc — CFA Institute Ireland',
    icon:        '🏢',
    accent:      '#C9A84C',
    description: 'Sell-side equity research on Cairn Homes plc for the CFA Institute Research Challenge. Developed a full DCF valuation, trading comparables, sensitivity tables, and formal investment thesis. Reached the Ireland national finals as one of the top teams.',
    tools:       ['DCF Valuation', 'Comparable Company Analysis', 'Sensitivity Analysis', 'Excel', 'Financial Modelling', 'PowerPoint'],
    outcome:     '🏆 Ireland Finalist — CFA Institute Research Challenge 2025',
  },
  {
    title:       'Algorithmic Trading Bot',
    tag:         'FinTech / Python',
    subtitle:    'Personal Project — MetaTrader 5 / AvaTrade',
    icon:        '🤖',
    accent:      '#7C3AED',
    description: 'Designed and built a fully automated trading bot in Python with MT5 and Claude AI API integration. Uses yfinance and MT5 data feeds for signal generation with a hybrid three-layer exit system: hard stop-loss, ATR-based soft stop with AI review trigger, and trailing take-profit.',
    tools:       ['Python', 'MetaTrader 5', 'Claude AI API', 'AvaTrade', 'ATR Strategy', 'yfinance', 'REST APIs'],
    outcome:     '🤖 Fully functional forex/commodities bot with AI-powered risk overlay',
  },
  {
    title:       'Capex Retrospective Analysis',
    tag:         'FP&A / Business Case',
    subtitle:    'Scorpion Smoking Requisites — Bin Khumairi Group',
    icon:        '📈',
    accent:      '#059669',
    description: 'Two-year post-investment financial performance retrospective for retail outlet capex. Quantified ROI, payback period, and EBIT margin contribution — the analysis provided the analytical basis for a board-approved expansion decision to open three new outlets.',
    tools:       ['Excel', 'Financial Modelling', 'KPI Dashboard', 'EBIT Analysis', 'Payback Modelling', 'Board Presentation'],
    outcome:     '📈 ~20% EBIT margin · ~15% ROI · ~2-yr payback → Board-approved expansion',
  },
  {
    title:       'Power BI Finance Dashboard',
    tag:         'Business Intelligence',
    subtitle:    'Intentfin Ventures — Restaurant Client Portfolio',
    icon:        '📊',
    accent:      '#2563EB',
    description: 'Designed and deployed an integrated Power BI management reporting dashboard for a multi-client restaurant portfolio. Applied star schema data modelling, advanced DAX (CALCULATE, RANKX, time intelligence), and row-level security for multi-user access.',
    tools:       ['Power BI', 'DAX (CALCULATE, RANKX)', 'Star Schema', 'RLS', 'Excel', 'Three-Statement Model'],
    outcome:     '📊 Adopted across client portfolio as primary management reporting tool',
  },
];

export const DISSERTATION = {
  university: 'Dublin City University',
  degree:     'MSc Finance',
  year:       '2026',
  title:      '"The Role of Capital Adequacy in Explaining Bank Stability: A Cross-Country EU Comparison (2010–2023)"',
  tags:       ['GARCH', 'GMM', 'OLS Panel', '14 EU Countries', '2010–2023', 'BankFocus', 'Bloomberg', 'ECB Data'],
  tabs: {
    summary: {
      label: 'Summary',
      title: 'Executive Summary',
      body: `This MSc Finance dissertation investigates the relationship between capital adequacy and bank stability across EU member states over 2010–2023 — spanning post-GFC regulatory reform, the European sovereign debt crisis, and post-pandemic recovery.

Following Basel III and CRD IV implementation, this research empirically examines whether higher Tier 1 capital ratios are associated with improved bank stability, and how this relationship varies across different EU economies. A cross-country panel dataset of EU-listed banks was constructed, applying three econometric models for robustness.

The study contributes to existing literature by extending the time horizon to 2023, capturing the low interest-rate environment and post-pandemic normalisation cycle — providing fresh evidence on capital buffer durability across a full economic cycle.`,
    },
    methodology: {
      label: 'Methodology',
      title: 'Research Methodology',
      body: `Three complementary econometric approaches were employed:

● GARCH (Generalised Autoregressive Conditional Heteroskedasticity)
Applied to model time-varying volatility in bank equity returns, providing a dynamic measure of bank stability. Captures the heteroskedastic nature of financial time series data.

● GMM (Generalised Method of Moments)
Arellano-Bond two-step dynamic panel GMM used to address endogeneity concerns inherent in bank capital studies. Controls for bank fixed effects and lagged performance variables.

● OLS (Ordinary Least Squares)
Baseline specification with panel fixed effects and country-clustered standard errors, enabling direct comparison with prior academic literature.

Sample: EU-listed banks across 14 member states. Data sourced from Bloomberg, ECB Statistical Data Warehouse, and BankFocus (Bureau van Dijk). Annual frequency, 2010–2023.`,
    },
    findings: {
      label: 'Key Findings',
      title: 'Key Findings',
      body: `1. Capital Adequacy & Stability
Higher Tier 1 capital ratios are positively and significantly associated with bank stability (Z-score), consistent across all three model specifications. Better-capitalised banks demonstrate greater resilience to adverse economic shocks.

2. Cross-Country Heterogeneity
The capital-stability relationship is moderated by country-level macroeconomic conditions. Periphery EU banks (Greece, Italy, Spain) show a weaker buffer effect versus core economies (Germany, Netherlands, France), reflecting structural differences in bank business models.

3. Non-linearity
The relationship exhibits diminishing returns beyond a threshold capital ratio — incremental capital above certain levels provides less additional stability benefit, suggesting regulatory optima rather than a simple linear relationship.

4. Post-GFC Convergence
Cross-country capital ratio dispersion narrowed significantly post-2015, consistent with the harmonising effect of the European Banking Union, Single Supervisory Mechanism (SSM), and SREP processes.`,
    },
    skills: {
      label: 'Skills Used',
      title: 'Skills Applied',
      items: [
        { icon: '📊', skill: 'GARCH Modelling',     tool: 'R / EViews' },
        { icon: '🔢', skill: 'GMM Estimation',       tool: 'R (plm package)' },
        { icon: '📉', skill: 'OLS Panel Regression', tool: 'R / Stata' },
        { icon: '📑', skill: 'Academic Research',    tool: 'Bloomberg / ECB Data' },
        { icon: '📈', skill: 'Data Visualisation',   tool: 'R / ggplot2' },
        { icon: '🏦', skill: 'Banking Regulation',   tool: 'Basel III / CRD IV' },
        { icon: '📝', skill: 'Econometric Analysis', tool: 'Panel Data Methods' },
        { icon: '🔎', skill: 'Literature Review',    tool: 'Academic Finance' },
      ],
    },
  },
};
