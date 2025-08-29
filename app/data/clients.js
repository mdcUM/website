export const CLIENTS_HOME = [
  'Ascend',
  'ShapeLog',
  'BuyMySpot',
  'Civic Lab',
  'DataWorks',
  'Health+AI',
  'GovTech',
  'FinServe',
  'Medlytics'
];

export const CLIENTS = [
  // {
  //   name: 'Ascend',
  //   logo: '',                       // put '/clients/ascend.svg' later
  //   brand: 'rgba(143, 123, 255, 1)',
  //   year: 2025,
  //   tags: ['Web & App', 'Design'],
  //   summary: 'Membership portal with onboarding and billing.',
  //   work: [
  //     'Next.js front-end with auth & plans',
  //     'Stripe billing + webhooks',
  //     'Admin dashboard for member ops',
  //   ],
  //   impact: [{ label: 'Signup time ↓', value: '45%' }, { label: 'NPS', value: '+18' }],
  //   testimonial: { quote: 'Felt like an in-house team — super fast and thoughtful.', author: 'Jordan K., Ops' },
  //   website: 'https://example.com',
  //   caseUrl: '/clients/ascend',
  //   description:
  //     'Ascend is a fast-growing membership program that needed to replace manual Google Forms and spreadsheet-based billing with a scalable digital portal. Their challenge was to streamline onboarding, unify payment operations, and empower the Ops team with better visibility. The project was central to preparing Ascend for growth in 2025.',
  //   whatwedid:
  //     'We partnered with Ascend to design and deliver a full membership portal that eliminated friction for both new members and internal teams. The engagement began with mapping the legacy signup flow and cutting nine redundant fields, which allowed us to build a three-step onboarding journey with progressive profiling. '
  //     + 'On the technical side we built a Next.js front-end with passwordless authentication, plan gating, and proration logic. Stripe Billing was integrated with resilient webhook handling for invoices, trials, and dunning, so revenue ops no longer had to chase down failed payments. '
  //     + 'We delivered an Admin dashboard with role-based access for Ops, Support, and Finance, providing tools to refund, swap plans, and annotate member profiles. To ensure visual cohesion, we implemented a small design system based on shadcn/ui primitives and design tokens. '
  //     + 'Finally, we instrumented analytics funnels to measure drop-offs and validate UX improvements. Within weeks of launch, signup time dropped by 45% and member NPS rose by +18, proving the effectiveness of the overhaul.',
  // },
  // {
  //   name: 'Civic Lab',
  //   logo: '',
  //   brand: '#77D0FF',
  //   year: 2025,
  //   tags: ['Data & ML'],
  //   summary: 'KPI dashboard aggregating city service data.',
  //   work: ['ETL to warehouse', 'Role-based dashboards', 'Alerting on outliers'],
  //   impact: [{ label: 'Manual reports ↓', value: '6h/wk' }, { label: 'Freshness', value: 'hourly' }],
  //   testimonial: { quote: 'Clear, actionable metrics changed our standups.', author: 'Alex T., PM' },
  //   website: 'https://example.com',
  //   caseUrl: '/clients/civic-lab',
  //   description:
  //     'Civic Lab is an innovation office focused on improving municipal operations. They needed a reliable way to track KPIs across multiple city departments — everything from 311 calls to transit performance — without relying on manual spreadsheets. The project’s goal was to create a shared source of truth and make city data useful for both executives and frontline managers.',
  //   whatwedid:
  //     'Our work with Civic Lab centered on consolidating fragmented data pipelines into a single warehouse and defining consistent KPI models across five departments. We engineered ETL jobs that ingested both CSV uploads and API feeds, applied schema validation, and ensured compliance with privacy requirements. '
  //     + 'Using dbt, we created transformations that standardized metrics, calculated SLAs, and rolled results up by department. On top of this, we built role-aware dashboards tailored for executives, department leads, and analysts, enabling drill-downs and easy exports. '
  //     + 'We also implemented anomaly detection with automated threshold alerts delivered via Slack and email, so teams were notified of outliers in real-time. To ensure adoption, we documented a shared data dictionary and ran training sessions for staff. '
  //     + 'The result was an hourly refreshed, trustworthy KPI dashboard that replaced a weekly six-hour spreadsheet process and reshaped standups into data-driven conversations.',
  // },
  // {
  //   name: 'Health AI',
  //   logo: '',
  //   brand: '#FF87D0',
  //   year: 2024,
  //   tags: ['Data & ML', 'Cloud'],
  //   summary: 'Rapid ML prototype for lead scoring.',
  //   work: ['Feature pipeline & labeling', 'Baseline models', 'Deploy behind feature flag'],
  //   impact: [{ label: 'Conversion lift', value: '+12%' }, { label: 'TTM', value: '3 weeks' }],
  //   testimonial: { quote: 'Hit the deadline and proved value fast.', author: 'Morgan P., Growth' },
  //   website: 'https://example.com',
  //   caseUrl: '/clients/health-ai',
  //   description:
  //     'Health+AI is a digital health startup exploring machine learning to boost patient acquisition. Facing tight growth deadlines, they needed a rapid prototype to validate whether predictive lead scoring could improve conversion without disrupting existing workflows.',
  //   whatwedid:
  //     'We engaged with Health+AI to design, prototype, and ship a pragmatic lead scoring pipeline in just three weeks. The project began by aligning with the Growth team on label definitions and evaluation metrics, which set guardrails against leakage and bias. '
  //     + 'We built a feature pipeline combining marketing touchpoints and early product usage signals, handling missing values and normalizing inputs. Two baseline models — logistic regression and gradient boosting — were trained with explainability techniques such as SHAP to give stakeholders confidence. '
  //     + 'For deployment, we stood up a lightweight scoring API that supported batch scoring and cached results. This was wired into the existing CRM and exposed behind a feature flag, allowing a 50/50 holdout experiment. '
  //     + 'Throughout the pilot, we tracked lift, recall at top-k, and downstream revenue. The rollout demonstrated a +12% conversion lift, proving value fast and creating a clear roadmap for scaling the pipeline beyond prototype.',
  // },
  // {
  //   name: 'FinServe',
  //   logo: '',
  //   brand: '#E6DAFF',
  //   year: 2024,
  //   tags: ['Design'],
  //   summary: 'Brand refresh + UI kit + component library.',
  //   work: ['Design tokens & Figma kit', 'shadcn/ui theming', 'Dev handoff guides'],
  //   impact: [{ label: 'Dev velocity', value: '+20%' }, { label: 'Consistency', value: 'systemized' }],
  //   testimonial: { quote: 'Everything feels cohesive now.', author: 'Priya S., Design' },
  //   website: 'https://example.com',
  //   caseUrl: '/clients/finserve',
  //   description:
  //     'FinServe is a fintech company with multiple digital products. As the portfolio expanded, inconsistent design patterns slowed developers and diluted the brand experience. The project was aimed at refreshing the visual identity and equipping teams with a unified design system.',
  //   whatwedid:
  //     'We collaborated with FinServe’s design and engineering leads to rebuild their brand system from the ground up. The refresh began with defining core tokens — colors, typography, spacing, and elevation — which we implemented both in Figma and in code. '
  //     + 'From there, we built a comprehensive UI kit in Figma with documented components, variants, and usage guidelines. In parallel, we themed a React component library based on shadcn/ui, ensuring accessibility, state coverage, and parity with design tokens. '
  //     + 'To support smooth adoption, we wrote handoff documentation covering naming conventions, contribution workflows, and versioning. We also ran workshops to train both designers and engineers. '
  //     + 'Finally, we audited twelve core product screens, applying fixes and migration steps to bring them in line with the system. Within the first quarter, developers reported ~20% faster UI delivery, and stakeholders noted a clear improvement in cross-product consistency.',
  // },
];
