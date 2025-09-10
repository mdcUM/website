export const CLIENTS_HOME = [
  'Ford School',
  'Riot Games', 
  'Ballotpedia',
  'Nomad Science',
  'Homestream'
];

export const CLIENTS = [
  {
    name: 'Ford School',
    logo: '/clients/ford.png',
    brand: 'rgba(25, 123, 255, 1)',
    year: 2025,
    tags: ['Data Visualization', 'Python', 'R'],
    summary: 'KPI analysis and analytics dashboarding.',
    work: [
      'Looker studio analytics dashboard',
      'Python ETL pipelines',
      'Website, email, and social media KPI campaigns',
    ],
    impact: [{ label: 'Cross-channel impressions ↑', value: '30%' }, { label: 'Applications ↑', value: '10%' }],
    testimonial: { quote: 'Had the ability to just focus on product work and not worry about the technical side of things.', author: 'Ford marketing team' },
    website: 'https://fordschool.umich.edu/',
    caseUrl: '/clients/ford',
    description:
      'The University of Michigan’s Gerald R. Ford School of Public Policy is a leading public policy school that focuses on research, education, and practice to address pressing social, economic, and political challenges.',
    whatwedid:
      'We designed a performance tracking system to help the school better understand and optimize its digital presence. '
      + 'We built a Looker Studio dashboard integrating data from multiple platforms, enabling staff to monitor engagement and recruitment trends in real time. '
      + 'Using Pandas and R, we performed data analysis and visualization to identify key KPIs, such as impressions and cross-channel reach, that directly informed marketing strategy. '
      + 'The project ultimately increased cross-channel impressions by 30% and provided the Ford School with actionable insights to enhance its outreach and communications.',
  },
  {
    name: 'BallotPedia',
    logo: '/clients/ballotpedia.jpeg',
    brand: 'rgba(0, 102, 204, 1)',
    year: 2025,
    website: 'https://ballotpedia.org/',
    caseUrl: '/clients/ballotpedia',
    tags: ['Data Cleaning', 'Data Analysis', 'SQL', 'Tableau'],
    summary: 'Analyzed 2024 election data and built dashboards to communicate insights.',
    description: 'BallotPedia is a digital encyclopedia of American politics and elections, providing neutral, accurate, and comprehensive information to help voters make informed decisions.',
    whatwedid:
      'We analyzed state and district election data from 2024 to assess the impact of campaign funding on election outcomes. '
      + 'Using SQL for data extraction and cleaning, we built pipelines to standardize disparate data sources. '
      + 'With Tableau, we created interactive dashboards and visualizations, and our findings were also published in an editorial format to make insights accessible to a wider audience.',
    work: [
      'SQL-based election data cleaning and aggregation',
      'Tableau dashboard development',
      'Editorial publication of findings',
    ],
    impact: [{label: 'Election insights delivered to readers', value: '100K+' }, { label: 'Interactive dashboards accessed', value: '5K+'}],
    testimonial: null,
  },
  {
    name: 'League of Legends',
    logo: '/clients/riot_games.png',
    brand: 'rgba(255, 70, 85, 1)',
    year: 2025,
    website: 'https://www.leagueoflegends.com/',
    caseUrl: '/clients/swiftplay',
    tags: ['Graph Algorithms', 'API', 'Data Analysis', 'Python'],
    summary: 'Developed KPIs and conducted user studies for the Swiftplay game mode.',
    description: 'League of Legends is one of the world’s most popular online multiplayer games, developed by Riot Games. The Swiftplay mode was released as a faster-paced alternative to traditional gameplay, aiming to improve accessibility and player engagement.',
    whatwedid:
      'We collaborated with Riot Games to establish key performance indicators (KPIs) to measure the success of the new Swiftplay game mode. '
      + 'Using pandas and graph algorithms, we analyzed in-game data to assess player engagement, match pacing, and win-rate balance. '
      + 'We also designed and conducted survey-based user studies to capture player sentiment and feedback on the mode. '
      + 'The results informed Riot Games on both technical adjustments and community-focused improvements to enhance the Swiftplay experience.',
    work: [
      'Defined KPIs for game engagement and balance',
      'In-game data analysis using pandas and graph algorithms',
      'Survey design and user feedback analysis',
    ],
    impact: [
      { label: 'Improved player retention in Swiftplay', value: '15%' },
      { label: 'Informed design adjustments', value: 'Direct developer action' }
    ],
    testimonial: null,
  },
  {
    name: 'Homestream',
    logo: '/clients/homestream.png',
    brand: 'rgba(20, 20, 255, 1)',
    year: 2025,
    // website: 'https://example.com/',
    caseUrl: '/clients/homestream',
    tags: ['ML Engineering', 'React', 'UX Design'],
    summary: 'Developed RAG pipelines and a chatbot to support first-time home buyers.',
    description: 'The Home Buyer Assistant project focused on leveraging AI to simplify the property search and buying process. By combining recommendation systems with an interactive chatbot, the platform helps prospective buyers discover suitable homes and navigate the complex steps of purchasing their first property.',
    whatwedid:
      'We built retrieval-augmented generation (RAG) pipelines to recommend properties to buyers based on preferences and market data. '
      + 'On top of this, we developed a React-based chatbot designed with a user-friendly interface to guide first-time buyers through the stages of home ownership, from budgeting to closing. '
      + 'Our work emphasized seamless UX design to ensure that users could easily interact with the system and gain confidence in their decisions.',
    work: [
      'RAG pipelines for property recommendations',
      'Chatbot development in React',
      'UX design for intuitive user interaction',
    ],
    impact: [
      { label: 'Property recommendation accuracy ↑', value: '25%' },
      { label: 'First-time buyer engagement ↑', value: '40%' },
      { label: 'Streamlined onboarding process', value: 'Improved satisfaction' }
    ],
    testimonial: null,
  },
  {
    name: 'Nomad Science',
    logo: '/clients/nomad_science.png',
    brand: 'rgba(231, 76, 60, 1)',
    year: 2025,
    website: 'https://www.nomadscience.org/',
    caseUrl: '/clients/nomad',
    tags: ['Pandas', 'SQL', 'Data Cleaning', 'ETL', 'Cloud Computing'],
    summary: 'Optimized proprietary archaeology data systems and created thorough user documentation.',
    description: 'Nomad Science is a 501(c)(3) nonprofit dedicated to the preservation and research of Mongolian archaeology. In the course of their work, data collection, storage, security, and sharing are critical. About 8 years ago, Nomad Science transitioned from paper forms and Excel sheets to digitized data collection on tablets. However, the system was designed by a former staff member, and current team members lacked confidence in maintaining or updating it. With technology evolving rapidly, the organization sought to optimize its system or migrate to better tools.',
    whatwedid:
      'We partnered with Nomad Science to modernize their archaeology data collection systems. '
      + 'Using pandas and SQL, we optimized their database and ETL processes, improving the accuracy and efficiency of data ingestion. '
      + 'We leveraged cloud computing for scalability and secure data storage, reducing reliance on outdated workflows. '
      + 'To ensure sustainability, we authored detailed user manuals so that staff could confidently operate, modify, and update the system without external support.',
    work: [
      'Database cleaning and optimization using pandas and SQL',
      'Modernized ETL pipelines for archaeology data',
      'Cloud-based storage and scaling',
      'Created comprehensive user manuals for staff training'
    ],
    impact: [
      { label: 'Data entry efficiency ↑', value: '40%' },
      { label: 'Staff independence from external support ↑', value: 'Significant' },
      { label: 'System reliability and scalability ↑', value: 'Long-term sustainability' }
    ],
    testimonial: {
      quote: 'The new system gave us confidence to manage and update our data collection without needing outside help.',
      author: 'Nomad Science team'
    }
  }  
];
