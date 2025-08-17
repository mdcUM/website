export const companies = [
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

const SECTIONS = [
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

export default SECTIONS;

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