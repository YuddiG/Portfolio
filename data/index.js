/* ═══════════════════════════════════════════════════════════════
   data/index.js — All static content for the portfolio.
   Edit this file to update any section without touching components.
   ═══════════════════════════════════════════════════════════════ */

export const CONTACT = {
  email:          'yuddi.ganglani26@gmail.com',
  phone:          '+353 89 959 8233',
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
    period:   'Jun 2024 – May 2025',
    color:    '#7C3AED',
    bullets: [
      'Developed Excel-based financial models for budgeting and forecasting, improving forecast accuracy by approx. 15%.',
      'Built Excel-based financial models for scenario planning and sensitivity analysis, directly supporting strategic business decisions for the business portfolios.',
      'Delivered monthly management accounts and P&L commentary packs for senior leadership and clients, streamlining the month-end closing process and reducing the reporting cycle by approx. 20%.',
      'Developed Power BI and Excel financial dashboards to provide real-time KPI reporting and business performance visibility to executive stakeholders.',
    ],
  },
  {
    title:    'Senior Finance Analyst',
    company:  'Bin Khumairi Smoking Goods Co. LLC',
    location: 'Dubai, UAE',
    period:   'Jul 2022 – Mar 2024',
    color:    '#C9A84C',
    bullets: [
      'Prepared and delivered monthly management accounts for the whole group with IFRS-compliant P&L, detailed variance analysis (actuals vs. budget and prior period), and strategic commentary for C-suite and senior leadership.',
      'Supported full annual budgeting and quarterly forecasting cycles; built financial projections, analysed cost drivers, and produced actuals vs. budget (AVB) reporting packs with root-cause explanations.',
      'Built Excel-based financial models to analyse gross margins, cost structures, and working capital trends, informing pricing and procurement decisions across multi-entity business units.',
      'Acted as finance business partner to non-finance department heads, translating complex financial data into actionable management information (MI) to support operational decision-making.',
      'Improved FP&A reporting efficiency by approx. 25% by redesigning Excel reporting templates and partially automating recurring monthly management reports.',
    ],
  },
  {
    title:    'Finance Executive',
    company:  'Royal Foodstuff LLC',
    location: 'Dubai, UAE',
    period:   'Apr 2021 – May 2022',
    color:    '#059669',
    bullets: [
      'Supported end-to-end FP&A activities including annual budgeting, quarterly forecasting, variance analysis, and management accounts preparation across multi-entity structures.',
      'Analysed revenue, operating expenses, and cash flow trends to identify risks and opportunities, supporting business planning and strategic decision-making for senior management.',
      'Collaborated with external auditors and tax advisors to ensure IFRS-compliant financial reporting and regulatory adherence across multiple jurisdictions.',
      'Prepared monthly management reporting packs with KPI performance summaries, budget variance commentary, and operational insights for business-unit managers.',
    ],
  },
  {
    title:    'Assistant of Accounting and Marketing',
    company:  "Shree Shyam's Resources",
    location: 'India',
    period:   'May 2018 – May 2020',
    color:    '#D97706',
    bullets: [
      'Performed monthly reconciliations, prepared financial summaries and management reporting to support senior stakeholders.',
      'Assisted with tax compliance, statutory filings, and regulatory reporting, ensuring adherence to applicable requirements.',
    ],
  },
];

export const EDUCATION = [
  {
    degree:      'MSc Finance',
    institution: 'Dublin City University',
    location:    'Dublin, Ireland',
    year:        'Mar 2026',
    badge:       'Second Class Honours, Grade I',
    emoji:       '🎓',
    note:        'Key Areas: Financial Modelling · Corporate Finance · Financial Markets · Data Analysis. CFA Research Challenge Ireland Finalist (2026) — equity research on Cairn Homes plc. Dissertation: EU bank stability econometrics (GARCH, GMM, OLS panel, 2010–2023).',
  },
  {
    degree:      'ACCA Affiliate',
    institution: 'Association of Chartered Certified Accountants',
    location:    'Global',
    year:        'Sep 2024',
    badge:       'Professional Qualification',
    emoji:       '📋',
    note:        'All professional examinations completed across financial reporting, audit & assurance, taxation, performance management, and advanced financial management.',
  },
  {
    degree:      'BSc (Hons) Applied Accounting',
    institution: 'Oxford Brookes University',
    location:    'Oxford, UK',
    year:        'Mar 2023',
    badge:       'Lower Second Class Honours',
    emoji:       '📚',
    note:        'Key Areas: Financial Reporting (IFRS) · Financial Management · Corporate Finance · Management Accounting · Financial Analysis · Corporate Governance.',
  },
];

export const SKILLS = [
  {
    category: 'Financial Expertise',
    icon: '📊',
    items: [
      { name: 'Financial Analysis & FP&A',       pct: 92 },
      { name: 'Budgeting & Forecasting',          pct: 88 },
      { name: 'Financial Modelling',              pct: 85 },
      { name: 'Management Accounting',            pct: 90 },
      { name: 'Variance Analysis & KPI Reporting',pct: 87 },
      { name: 'IFRS & Irish/US GAAP',             pct: 82 },
    ],
  },
  {
    category: 'Data & Systems',
    icon: '⚙️',
    items: [
      { name: 'Microsoft Excel (Advanced)',          pct: 94 },
      { name: 'Power BI / Tableau',                 pct: 80 },
      { name: 'Python / SQL',                       pct: 72 },
      { name: 'Xero / QuickBooks / Sage',           pct: 85 },
      { name: 'SAP S4/HANA / MS Dynamics 365',      pct: 70 },
      { name: 'GenAI / Anthropic Claude',           pct: 78 },
    ],
  },
  {
    category: 'Professional Skills',
    icon: '🤝',
    items: [
      { name: 'Business Partnering',             pct: 88 },
      { name: 'Stakeholder Communication',       pct: 86 },
      { name: 'Analytical Thinking',             pct: 91 },
      { name: 'Cross-functional Collaboration',  pct: 87 },
      { name: 'Problem Solving',                 pct: 91 },
      { name: 'Attention to Detail',             pct: 90 },
    ],
  },
];

export const CERTIFICATIONS = [
  { name: 'ACCA Affiliate',         body: 'ACCA',      year: 'Sep 2024', status: 'Awarded',   statusColor: '#22c55e', icon: '✅' },
  { name: 'Xero Advisor Certified', body: 'Xero',      year: '2023',     status: 'Certified', statusColor: '#1AB4D7', icon: '✅' },
  { name: 'Power BI Data Analyst',  body: 'Microsoft', year: 'Pursuing', status: 'Pursuing',  statusColor: '#F59E0B', icon: '📗' },
];

export const PROJECTS = [
  {
    title:       'CFA Research Challenge',
    tag:         'Equity Research',
    subtitle:    'Cairn Homes plc — CFA Institute Ireland Finalist 2026',
    icon:        '🏢',
    accent:      '#C9A84C',
    description: 'Represented DCU at the Irish Regional Finale; conducted full equity research on Cairn Homes plc (ISE-listed) including financial statement analysis (FY2018–FY2024), earnings forecasting, and DCF / trading multiples valuation.',
    tools:       ['DCF Valuation', 'Trading Multiples', 'Scenario Analysis', 'Excel', 'Financial Modelling', 'PowerPoint'],
    outcome:     '🏆 Ireland Finalist — CFA Institute Research Challenge 2026',
  },
  {
    title:       'Multi-Asset Portfolio Optimisation',
    tag:         'Portfolio Theory / Python',
    subtitle:    'DCU Finance Project, 2025',
    icon:        '📉',
    accent:      '#0EA5E9',
    description: 'Built a mean-variance portfolio optimisation model across Equities, Bonds, FX, and Commodities using Python. Performed Value at Risk (VaR) analysis at 90–99% confidence levels and benchmarked against the Euronext 100 Index via OLS regression.',
    tools:       ['Python', 'Pandas', 'NumPy', 'SciPy', 'OLS Regression', 'VaR Analysis', 'Mean-Variance Optimisation'],
    outcome:     '📊 Low market beta (~0.23) · Positive alpha · Benchmarked vs Euronext 100',
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
