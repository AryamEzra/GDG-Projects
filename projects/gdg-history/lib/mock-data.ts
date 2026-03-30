export type AttendanceStatus = "present" | "absent";

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  date: string;
  status: AttendanceStatus;
  session: string;
}

export const students = [
  {
    id: "1",
    name: "Abebe Kebede",
    email: "abebe@gdgaastu.com",
    coins: 2450,
    attendance: 92,
    track: "Web Development",
    absences: 2,
    joinedDate: "2024-01-15",
    avatar: "AK",
  },
  {
    id: "2",
    name: "Almaz Gebreselassie",
    email: "almaz@gdgaastu.com",
    coins: 1890,
    attendance: 88,
    track: "Mobile Development",
    absences: 4,
    joinedDate: "2024-02-10",
    avatar: "AG",
  },
  {
    id: "3",
    name: "Berhanu Tadesse",
    email: "berhanu@gdgaastu.com",
    coins: 3120,
    attendance: 96,
    track: "Data Science",
    absences: 1,
    joinedDate: "2024-01-20",
    avatar: "BT",
  },
  {
    id: "4",
    name: "Chaltu Yohannes",
    email: "chaltu@gdgaastu.com",
    coins: 1650,
    attendance: 85,
    track: "Web Development",
    absences: 5,
    joinedDate: "2024-03-05",
    avatar: "CY",
  },
  {
    id: "5",
    name: "Dawit Assefa",
    email: "dawit@gdgaastu.com",
    coins: 2780,
    attendance: 94,
    track: "Cloud Computing",
    absences: 2,
    joinedDate: "2024-01-25",
    avatar: "DA",
  },
  {
    id: "6",
    name: "Emebet Mulatu",
    email: "emebet@gdgaastu.com",
    coins: 1200,
    attendance: 78,
    track: "AI/ML",
    absences: 8,
    joinedDate: "2024-04-10",
    avatar: "EM",
  },
];

export const tracks = [
  {
    id: "web-dev",
    slug: "web-dev",
    name: "Web Development",
    description: "Master modern web technologies and build responsive applications",
    mentor: "Dr. Solomon Yohannes",
    icon: "🌐",
    members: 24,
    level: "Intermediate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile-dev",
    slug: "mobile-dev",
    name: "Mobile Development",
    description: "Create powerful mobile apps with Flutter and React Native",
    mentor: "Eng. Hiwot Assefa",
    icon: "📱",
    members: 18,
    level: "Intermediate",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "data-science",
    slug: "data-science",
    name: "Data Science",
    description: "Analyze data and build predictive models using Python",
    mentor: "Prof. Adnan Mohamed",
    icon: "📊",
    members: 16,
    level: "Advanced",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "cloud-computing",
    slug: "cloud-computing",
    name: "Cloud Computing",
    description: "Deploy and scale applications on cloud platforms",
    mentor: "Eng. Tigist Menelik",
    icon: "☁️",
    members: 14,
    level: "Intermediate",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai-ml",
    slug: "ai-ml",
    name: "AI & Machine Learning",
    description: "Build intelligent systems with TensorFlow and PyTorch",
    mentor: "Dr. Abebe Kebede",
    icon: "🤖",
    members: 20,
    level: "Advanced",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "devops",
    slug: "devops",
    name: "DevOps & Infrastructure",
    description: "Master CI/CD, containerization, and infrastructure automation",
    mentor: "Eng. Yohannes Taffa",
    icon: "⚙️",
    members: 12,
    level: "Advanced",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "blockchain",
    slug: "blockchain",
    name: "Blockchain Development",
    description: "Build decentralized applications and smart contracts",
    mentor: "Eng. Kebede Girma",
    icon: "⛓️",
    members: 11,
    level: "Advanced",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    name: "UI/UX Design",
    description: "Create beautiful and intuitive user experiences",
    mentor: "Designer Almaz Berhe",
    icon: "🎨",
    members: 15,
    level: "Beginner",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "dsa-progress",
    slug: "dsa-progress",
    href: "/dsa",
    name: "DSA Progress",
    description: "Practice and track Data Structures and Algorithms performance",
    mentor: "Eng. Meron Alemu",
    icon: "🧠",
    members: 19,
    level: "Intermediate",
    color: "from-teal-500 to-cyan-500",
  },
];

export interface TrackLessonPlanItem {
  id: string;
  title: string;
  deadline: string;
  summary: string;
}

export const trackLessonPlans: Record<string, TrackLessonPlanItem[]> = {
  'web-dev': [
    { id: 'html-css-foundations', title: 'HTML/CSS Foundations', deadline: '2026-04-05', summary: 'Build a responsive landing page with semantic HTML and modern CSS.' },
    { id: 'react-components', title: 'React Component System', deadline: '2026-04-12', summary: 'Create reusable components and compose a small feature page.' },
    { id: 'api-integration', title: 'API Integration', deadline: '2026-04-19', summary: 'Fetch and display external API data with loading and error states.' },
  ],
  'mobile-dev': [
    { id: 'flutter-ui', title: 'Flutter UI Basics', deadline: '2026-04-06', summary: 'Implement core widgets and navigation structure.' },
    { id: 'state-management', title: 'State Management', deadline: '2026-04-13', summary: 'Manage app state with provider or riverpod.' },
    { id: 'device-features', title: 'Device Features', deadline: '2026-04-20', summary: 'Add camera/location and basic permissions handling.' },
  ],
  'data-science': [
    { id: 'data-cleaning', title: 'Data Cleaning Pipeline', deadline: '2026-04-07', summary: 'Prepare a messy dataset and document transformation steps.' },
    { id: 'eda-visualization', title: 'EDA and Visualization', deadline: '2026-04-14', summary: 'Create exploratory analysis and clear visual summaries.' },
    { id: 'model-baseline', title: 'Baseline Model', deadline: '2026-04-21', summary: 'Train and evaluate a baseline prediction model.' },
  ],
  'cloud-computing': [
    { id: 'cloud-fundamentals', title: 'Cloud Fundamentals', deadline: '2026-04-08', summary: 'Document deployment architecture and core services.' },
    { id: 'container-deploy', title: 'Containerized Deploy', deadline: '2026-04-15', summary: 'Deploy an app using containers and managed runtime.' },
    { id: 'monitoring-alerts', title: 'Monitoring and Alerts', deadline: '2026-04-22', summary: 'Set up logs, metrics, and alert thresholds.' },
  ],
  'ai-ml': [
    { id: 'ml-basics', title: 'ML Basics', deadline: '2026-04-09', summary: 'Train a simple model and explain evaluation metrics.' },
    { id: 'feature-engineering', title: 'Feature Engineering', deadline: '2026-04-16', summary: 'Improve model performance with engineered features.' },
    { id: 'model-comparison', title: 'Model Comparison', deadline: '2026-04-23', summary: 'Compare two models and justify your final choice.' },
  ],
  devops: [
    { id: 'ci-pipeline', title: 'CI Pipeline', deadline: '2026-04-10', summary: 'Create automated lint/test workflow in GitHub Actions.' },
    { id: 'infra-as-code', title: 'Infrastructure as Code', deadline: '2026-04-17', summary: 'Provision resources with reusable IaC templates.' },
    { id: 'release-strategy', title: 'Release Strategy', deadline: '2026-04-24', summary: 'Implement staging and production release flow.' },
  ],
  blockchain: [
    { id: 'smart-contract-basics', title: 'Smart Contract Basics', deadline: '2026-04-11', summary: 'Write and test a basic smart contract.' },
    { id: 'dapp-integration', title: 'dApp Integration', deadline: '2026-04-18', summary: 'Connect frontend wallet flow to contract operations.' },
    { id: 'security-review', title: 'Contract Security Review', deadline: '2026-04-25', summary: 'Identify and fix common smart contract risks.' },
  ],
  'ui-ux': [
    { id: 'research-wireframes', title: 'Research and Wireframes', deadline: '2026-04-10', summary: 'Create user flows and low-fidelity wireframes.' },
    { id: 'design-system', title: 'Design System Draft', deadline: '2026-04-17', summary: 'Define typography, colors, and components for consistency.' },
    { id: 'prototype-validation', title: 'Prototype and Validation', deadline: '2026-04-24', summary: 'Build a clickable prototype and gather usability feedback.' },
  ],
};

export const attendanceRecords: AttendanceRecord[] = [
  {
    id: "1",
    studentId: "1",
    studentName: "Abebe Kebede",
    date: "2024-12-20",
    status: "present",
    session: "General Session",
  },
  {
    id: "2",
    studentId: "2",
    studentName: "Almaz Gebreselassie",
    date: "2024-12-20",
    status: "absent",
    session: "General Session",
  },
  {
    id: "3",
    studentId: "3",
    studentName: "Berhanu Tadesse",
    date: "2024-12-20",
    status: "present",
    session: "General Session",
  },
  {
    id: "4",
    studentId: "1",
    studentName: "Abebe Kebede",
    date: "2024-12-19",
    status: "present",
    session: "Track Session",
  },
  {
    id: "5",
    studentId: "4",
    studentName: "Chaltu Yohannes",
    date: "2024-12-19",
    status: "absent",
    session: "Track Session",
  },
  {
    id: "6",
    studentId: "5",
    studentName: "Dawit Assefa",
    date: "2024-12-19",
    status: "present",
    session: "Track Session",
  },
];

export const dsaProblems = [
  {
    id: "1",
    studentId: "1",
    studentName: "Abebe Kebede",
    problemName: "Two Sum",
    difficulty: "Easy",
    solved: true,
    solvedDate: "2024-12-15",
    language: "Python",
  },
  {
    id: "2",
    studentId: "1",
    studentName: "Abebe Kebede",
    problemName: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    solved: true,
    solvedDate: "2024-12-18",
    language: "Python",
  },
  {
    id: "3",
    studentId: "3",
    studentName: "Berhanu Tadesse",
    problemName: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    solved: true,
    solvedDate: "2024-12-10",
    language: "Java",
  },
  {
    id: "4",
    studentId: "5",
    studentName: "Dawit Assefa",
    problemName: "Merge K Sorted Lists",
    difficulty: "Hard",
    solved: true,
    solvedDate: "2024-12-05",
    language: "C++",
  },
];

export const leaderboard = [
  { rank: 1, name: "Berhanu Tadesse", coins: 3120, track: "Data Science" },
  { rank: 2, name: "Dawit Assefa", coins: 2780, track: "Cloud Computing" },
  { rank: 3, name: "Abebe Kebede", coins: 2450, track: "Web Development" },
  { rank: 4, name: "Almaz Gebreselassie", coins: 1890, track: "Mobile Development" },
  { rank: 5, name: "Chaltu Yohannes", coins: 1650, track: "Web Development" },
  { rank: 6, name: "Emebet Mulatu", coins: 1200, track: "AI/ML" },
];

export const recentActivity = [
  {
    id: "1",
    type: "achievement",
    studentName: "Berhanu Tadesse",
    action: "Earned 500 coins",
    timestamp: "2 hours ago",
    icon: "🏆",
  },
  {
    id: "2",
    type: "problem_solved",
    studentName: "Abebe Kebede",
    action: "Solved LeetCode problem",
    timestamp: "4 hours ago",
    icon: "✅",
  },
  {
    id: "3",
    type: "track_completed",
    studentName: "Almaz Gebreselassie",
    action: "Completed Mobile Dev module",
    timestamp: "6 hours ago",
    icon: "🎓",
  },
  {
    id: "4",
    type: "attendance",
    studentName: "Chaltu Yohannes",
    action: "Attended general session",
    timestamp: "1 day ago",
    icon: "📍",
  },
  {
    id: "5",
    type: "achievement",
    studentName: "Dawit Assefa",
    action: "Reached 95% attendance",
    timestamp: "2 days ago",
    icon: "🎯",
  },
];

export const dashboardStats = {
  totalMembers: students.length,
  activeSessionToday: 23,
  averageAttendance: 88.8,
  totalCoinsDistributed: students.reduce((sum, s) => sum + s.coins, 0),
};

export const coreTeams = [
  {
    id: 'communication',
    name: 'Communication',
    description: 'Handles announcements, partner outreach, and internal updates.',
    icon: '📣',
    members: 8,
    level: 'Core',
  },
  {
    id: 'event',
    name: 'Event',
    description: 'Plans workshops, meetups, hackathons, and execution logistics.',
    icon: '🎉',
    members: 10,
    level: 'Core',
  },
  {
    id: 'content',
    name: 'Content',
    description: 'Creates slides, posts, visual assets, and educational materials.',
    icon: '📝',
    members: 7,
    level: 'Core',
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Maintains platforms, tools, automations, and technical systems.',
    icon: '🛠️',
    members: 9,
    level: 'Core',
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Coordinates planning, milestones, reporting, and cross-team delivery.',
    icon: '📂',
    members: 6,
    level: 'Core',
  },
];

export interface ArchiveProject {
  id: string;
  title: string;
  year: number;
  duration: string;
  track: string;
  description: string;
  objectives: string;
  techStack: string[];
  teamMembers: string;
  githubRepo: string;
  status: 'completed' | 'archived';
}

const ARCHIVE_YEARS = [2022, 2023, 2024] as const;

const ARCHIVE_TRACKS = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Cloud Computing',
  'AI & Machine Learning',
  'DevOps & Infrastructure',
  'Blockchain Development',
  'UI/UX Design',
  'DSA Progress',
] as const;

const ARCHIVE_CORE_TEAMS = [
  'Communication',
  'Event',
  'Content',
  'Technical',
  'Project Management',
] as const;

const FIRST_NAMES = [
  'Abebe',
  'Almaz',
  'Berhanu',
  'Chaltu',
  'Dawit',
  'Emebet',
  'Fikirte',
  'Hanna',
  'Isayas',
  'Kaleb',
  'Lulit',
  'Meron',
  'Natnael',
  'Rahel',
  'Samrawit',
  'Tewodros',
  'Yared',
  'Zelalem',
  'Betelhem',
  'Henok',
  'Marta',
  'Yonas',
  'Saron',
  'Mikias',
];

const LAST_NAMES = [
  'Kebede',
  'Gebreselassie',
  'Tadesse',
  'Yohannes',
  'Assefa',
  'Mulatu',
  'Tesfaye',
  'Alemu',
  'Bekele',
  'Haile',
  'Nigatu',
  'Berhe',
  'Mekonnen',
  'Arega',
  'Sisay',
  'Worku',
  'Girma',
  'Solomon',
  'Tigist',
  'Demissie',
  'Taffa',
  'Mamo',
  'Wondimu',
  'Beyene',
];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function buildName(seed: number) {
  const first = FIRST_NAMES[seed % FIRST_NAMES.length];
  const last = LAST_NAMES[Math.floor(seed / FIRST_NAMES.length) % LAST_NAMES.length];
  return `${first} ${last}`;
}

function buildEmail(name: string, seed: number) {
  const user = name.toLowerCase().replace(/\s+/g, '.');
  return `${user}${seed}@gdgaastu.archive`;
}

function buildPhone(seed: number) {
  const suffix = String(10000000 + seed).slice(-8);
  return `+251-9${suffix}`;
}

function trackTechStack(track: string): string[] {
  const map: Record<string, string[]> = {
    'Web Development': ['Next.js', 'TypeScript', 'PostgreSQL'],
    'Mobile Development': ['Flutter', 'Dart', 'Firebase'],
    'Data Science': ['Python', 'Pandas', 'scikit-learn'],
    'Cloud Computing': ['AWS', 'Docker', 'Terraform'],
    'AI & Machine Learning': ['Python', 'PyTorch', 'NumPy'],
    'DevOps & Infrastructure': ['GitHub Actions', 'Docker', 'Kubernetes'],
    'Blockchain Development': ['Solidity', 'Hardhat', 'Ethers.js'],
    'UI/UX Design': ['Figma', 'Design Tokens', 'Prototyping'],
    'DSA Progress': ['LeetCode', 'Python', 'C++'],
  };
  return map[track] ?? ['TypeScript', 'Node.js'];
}

export const archiveProjects: ArchiveProject[] = ARCHIVE_YEARS.flatMap((year) =>
  ARCHIVE_TRACKS.map((track, index) => ({
    id: `p-${year}-${slugify(track)}`,
    title: `${track} Capstone ${year}`,
    year,
    duration: 'Feb - Jun',
    track,
    description: `${track} cohort final delivery for the academic cycle.`,
    objectives: 'Deliver practical outcomes and document mentor-reviewed milestones.',
    techStack: trackTechStack(track),
    teamMembers: '20 students + 1 mentor',
    githubRepo: `https://github.com/gdg-aastu/${slugify(track)}-${year}`,
    status: (index + year) % 4 === 0 ? 'archived' : 'completed',
  }))
);

export interface ArchiveStudent {
  id: string;
  year: number;
  track: string;
  name: string;
  email: string;
  phone: string;
  mentor: string;
  status: 'active' | 'graduated';
}

export const archiveStudents: ArchiveStudent[] = ARCHIVE_YEARS.flatMap((year, yearIdx) =>
  ARCHIVE_TRACKS.flatMap((track, trackIdx) =>
    Array.from({ length: 20 }, (_, i) => {
      const seed = yearIdx * 1000 + trackIdx * 50 + i;
      const name = buildName(seed);
      return {
        id: `s-${year}-${trackIdx + 1}-${i + 1}`,
        year,
        track,
        name,
        email: buildEmail(name, seed),
        phone: buildPhone(seed),
        mentor: `Mentor ${trackIdx + 1}`,
        status: i % 5 === 0 ? 'graduated' : 'active',
      };
    })
  )
);

export interface ArchiveMemberRole {
  id: string;
  name: string;
  role: string;
  year: number;
  yearsActive: string;
  teamOrDomain: string;
  contributions: string;
  projects: string;
}

export const archiveMemberRoles: ArchiveMemberRole[] = ARCHIVE_YEARS.flatMap((year, yearIdx) =>
  ARCHIVE_TRACKS.map((track, trackIdx) => {
    const seed = yearIdx * 100 + trackIdx;
    const name = buildName(seed + 300);
    return {
      id: `m-${year}-${trackIdx + 1}`,
      name,
      role: trackIdx % 2 === 0 ? 'Track Lead' : 'Mentor',
      year,
      yearsActive: `${year - 1}-${year}`,
      teamOrDomain: track,
      contributions: 'Mentored submissions, coordinated lessons, and supported evaluations.',
      projects: `${track} Capstone ${year}`,
    };
  })
);

export interface ArchiveDocument {
  id: string;
  year: number;
  track: string;
  type: 'meeting-note' | 'event-report' | 'guideline' | 'curriculum';
  title: string;
  summary: string;
}

const DOCUMENT_TYPES: ArchiveDocument['type'][] = ['meeting-note', 'event-report', 'guideline', 'curriculum'];

export const archiveDocuments: ArchiveDocument[] = ARCHIVE_YEARS.flatMap((year) =>
  ARCHIVE_TRACKS.map((track, idx) => ({
    id: `d-${year}-${slugify(track)}`,
    year,
    track,
    type: DOCUMENT_TYPES[idx % DOCUMENT_TYPES.length],
    title: `${track} ${year} ${DOCUMENT_TYPES[idx % DOCUMENT_TYPES.length].replace('-', ' ')}`,
    summary: 'Archived notes, outcomes, and guidance document for the selected track and year.',
  }))
);

export interface CoreTeamMemberArchive {
  id: string;
  year: number;
  team: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

export const coreTeamMembersArchive: CoreTeamMemberArchive[] = ARCHIVE_YEARS.flatMap((year, yearIdx) =>
  ARCHIVE_CORE_TEAMS.flatMap((team, teamIdx) =>
    Array.from({ length: 10 }, (_, i) => {
      const seed = 5000 + yearIdx * 1000 + teamIdx * 100 + i;
      const name = buildName(seed);
      const role = i === 0 ? 'Lead' : i === 1 ? 'Co-Lead' : i < 4 ? 'Coordinator' : 'Member';
      return {
        id: `ctm-${year}-${teamIdx + 1}-${i + 1}`,
        year,
        team,
        name,
        role,
        email: buildEmail(name, seed),
        phone: buildPhone(seed),
      };
    })
  )
);

export interface CoreTeamArchive {
  id: string;
  year: number;
  team: string;
  initiative: string;
  lead: string;
  contributors: string;
  status: 'completed' | 'archived';
}

export const coreTeamArchive: CoreTeamArchive[] = [
  ...ARCHIVE_YEARS.flatMap((year, yearIdx) =>
    ARCHIVE_CORE_TEAMS.map((team, teamIdx) => ({
      id: `cta-${year}-${teamIdx + 1}`,
      year,
      team,
      initiative: `${team} Strategic Initiative ${year}`,
      lead: buildName(7000 + yearIdx * 100 + teamIdx),
      contributors: '10 members',
      status: ((year + teamIdx) % 5 === 0 ? 'archived' : 'completed') as CoreTeamArchive['status'],
    }))
  ),
];
