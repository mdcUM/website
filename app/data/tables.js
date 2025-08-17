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

export const MEMBERS = [
  {
    key: 'eboard',
    title: 'Executive Board',
    members: [
      {
        name: 'Vincent Wu',
        title: 'President',
        grade: 'Junior',
        image: '/members/vincent.jpg',
        links: {
          github: 'https://github.com/averybrooks',
          linkedin: 'https://linkedin.com/in/averybrooks',
          email: 'bigpanda@umich.edu',
        },
      },
      {
        name: 'Priya Shah',
        title: 'VP, Operations',
        grade: 'Junior',
        links: {
          linkedin: 'https://linkedin.com/in/priyashah',
          website: 'https://priyashah.dev',
        },
      },
      {
        name: 'Mateo Alvarez',
        title: 'VP, Product',
        grade: 'Junior',
        links: {
          github: 'https://github.com/mateoalvarez',
          linkedin: 'https://linkedin.com/in/mateoalvarez',
        },
      },
      {
        name: 'Chloe Nguyen',
        title: 'Treasurer',
        grade: 'Junior',
        links: {
          email: 'chloe@yourorg.org',
          linkedin: 'https://linkedin.com/in/chloenguyen',
        },
      },
      {
        name: 'Devon Carter',
        title: 'Head of Engineering',
        grade: 'Senior',
        links: {
          github: 'https://github.com/devoncarter',
          linkedin: 'https://linkedin.com/in/devoncarter',
          website: 'https://devon.build',
        },
      },
      {
        name: 'Hana Iqbal',
        title: 'Head of Research',
        grade: 'Sophomore',
        links: {
          twitter: 'https://twitter.com/hanaiqbal',
          linkedin: 'https://linkedin.com/in/hanaiqbal',
        },
      },
    ],
  },
  {
    key: 'analysts',
    title: 'Analysts',
    members: [
      { name: 'Riley Chen',    title: 'Analyst', grade: 'Freshman',  links: { github: 'https://github.com/rileychen' } },
      { name: 'Jamie Park',    title: 'Analyst', grade: 'Sophomore', links: { linkedin: 'https://linkedin.com/in/jamiepark' } },
      { name: 'Noah Williams', title: 'Analyst', grade: 'Sophomore', links: { website: 'https://noah.codes' } },
      { name: 'Amara Singh',   title: 'Analyst', grade: 'Junior',    links: { linkedin: 'https://linkedin.com/in/amarasingh' } },
      { name: 'Lucas Romero',  title: 'Analyst', grade: 'Senior',    links: { github: 'https://github.com/lucasromero' } },
      { name: 'Maya Patel',    title: 'Analyst', grade: 'Junior',    links: { linkedin: 'https://linkedin.com/in/mayapatel' } },
      { name: 'Ethan Brooks',  title: 'Analyst', grade: 'Freshman',  links: { website: 'https://ethan.dev' } },
      { name: 'Sofia Li',      title: 'Analyst', grade: 'Senior',    links: { linkedin: 'https://linkedin.com/in/sofiali' } },
      { name: 'Oliver Kim',    title: 'Analyst', grade: 'Sophomore', links: { github: 'https://github.com/oliverkim' } },
      { name: 'Nora Johnson',  title: 'Analyst', grade: 'Junior',    links: { linkedin: 'https://linkedin.com/in/noraj' } },
      { name: 'Zane Wright',   title: 'Analyst', grade: 'Freshman',  links: { website: 'https://zanewright.me' } },
      { name: 'Jade Thompson', title: 'Analyst', grade: 'Senior',    links: { github: 'https://github.com/jadethompson' } },
    ],
  },
  {
    key: 'advisors',
    title: 'Advisors',
    members: [
      {
        name: 'Dr. Elena Torres',
        title: 'Faculty Advisor',
        links: { email: 'elena@university.edu', linkedin: 'https://linkedin.com/in/elenatorres' },
      },
      {
        name: 'Akira Tanaka',
        title: 'Industry Advisor',
        links: { linkedin: 'https://linkedin.com/in/akirtanaka' },
      },
      {
        name: 'Grace Miller',
        title: 'Alumni Advisor',
        links: { linkedin: 'https://linkedin.com/in/gracemiller', email: 'grace@alumni.org' },
      },
      {
        name: 'Daniel Cho',
        title: 'Industry Advisor',
        links: { linkedin: 'https://linkedin.com/in/danielcho' },
      },
    ],
  },
];

export const APPLY_URL = 'https://forms.gle/your-google-form-id';
export const EVENTS = [
  { title: 'Applications Open', start: '2025-08-25T09:00:00', end: '2025-08-25T09:30:00', location: 'Online', description: '10-minute form.' },
  { title: 'Info Session #1', start: '2025-08-28T18:00:00', end: '2025-08-28T19:00:00', location: 'EECS 1200 / Zoom', link: '/events/info-1' },
  { title: 'Coffee Chats (Drop-in)', start: '2025-08-30T13:00:00', end: '2025-08-30T16:00:00', location: 'Duderstadt Atrium', description: 'Meet the crew.' },
  { title: 'Applications Close', start: '2025-09-02T23:59:00', location: 'Online', description: 'Hard deadline.' },
  { title: 'Interviews', start: '2025-09-05T17:00:00', end: '2025-09-07T18:00:00', location: 'BBB 1690', description: '30 min convos.' },
  { title: 'Decisions Released', start: '2025-09-09T20:00:00', location: 'Email' },
  { title: 'Kickoff & Onboarding', start: '2025-09-15T18:00:00', end: '2025-09-15T19:30:00', location: 'EEE 290', description: 'Welcome aboard 🚀' },
];


export const CLIENTS = [
  {
    name: 'Ascend',
    logo: '',                       // put '/clients/ascend.svg' later
    brand: '#8F7BFF',
    year: 2025,
    tags: ['Web & App', 'Design'],
    summary: 'Membership portal with onboarding and billing.',
    work: [
      'Next.js front-end with auth & plans',
      'Stripe billing + webhooks',
      'Admin dashboard for member ops',
    ],
    impact: [{ label: 'Signup time ↓', value: '45%' }, { label: 'NPS', value: '+18' }],
    testimonial: { quote: 'Felt like an in-house team — super fast and thoughtful.', author: 'Jordan K., Ops' },
    website: 'https://example.com',
    caseUrl: '/work/ascend',
  },
  {
    name: 'Civic Lab',
    logo: '',
    brand: '#77D0FF',
    year: 2025,
    tags: ['Data & ML'],
    summary: 'KPI dashboard aggregating city service data.',
    work: ['ETL to warehouse', 'Role-based dashboards', 'Alerting on outliers'],
    impact: [{ label: 'Manual reports ↓', value: '6h/wk' }, { label: 'Freshness', value: 'hourly' }],
    testimonial: { quote: 'Clear, actionable metrics changed our standups.', author: 'Alex T., PM' },
    website: 'https://example.com',
    caseUrl: '/work/civic-lab',
  },
  {
    name: 'Health+AI',
    logo: '',
    brand: '#FF87D0',
    year: 2024,
    tags: ['Data & ML', 'Cloud'],
    summary: 'Rapid ML prototype for lead scoring.',
    work: ['Feature pipeline & labeling', 'Baseline models', 'Deploy behind feature flag'],
    impact: [{ label: 'Conversion lift', value: '+12%' }, { label: 'TTM', value: '3 weeks' }],
    testimonial: { quote: 'Hit the deadline and proved value fast.', author: 'Morgan P., Growth' },
    website: 'https://example.com',
    caseUrl: '/work/health-ai',
  },
  {
    name: 'FinServe',
    logo: '',
    brand: '#E6DAFF',
    year: 2024,
    tags: ['Design'],
    summary: 'Brand refresh + UI kit + component library.',
    work: ['Design tokens & Figma kit', 'shadcn/ui theming', 'Dev handoff guides'],
    impact: [{ label: 'Dev velocity', value: '+20%' }, { label: 'Consistency', value: 'systemized' }],
    testimonial: { quote: 'Everything feels cohesive now.', author: 'Priya S., Design' },
    website: 'https://example.com',
    caseUrl: '/work/finserve',
  },
];