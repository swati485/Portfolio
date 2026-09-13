export const heroTagline = ['Code.', 'Learn.', 'Build.', 'Repeat.']

export const skillCards = [
  {
    number: '01',
    title: 'Languages',
    wide: false,
    skills: ['C', 'Java', 'Python', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Web & Frameworks',
    wide: false,
    skills: ['React.js', 'Express.js', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    number: '03',
    title: 'Databases',
    wide: false,
    skills: ['MySQL', 'MongoDB'],
  },
  {
    number: '04',
    title: 'Tools & Cloud',
    wide: false,
    skills: ['AWS (Basic)', 'Git & GitHub', 'Zabbix', 'HPSM', 'VS Code', 'Postman'],
  },
  {
    number: '05',
    title: 'Concepts',
    wide: true,
    skills: ['Data Structures', 'Algorithms', 'OOPs', 'Operating Systems', 'Computer Networks', 'DBMS'],
  },
]

export const aboutFacts = [
  { num: '8.71', label: 'CGPA · MCA, GEHU' },
  { num: '12', label: 'weeks as a Tech Ops intern' },
  { num: '4+', label: 'certifications earned' },
  { num: '3+', label: 'projects shipped solo' },
]

export const timeline = [
  {
    date: 'Mar – Jun 2026',
    title: 'Technical Operations Intern',
    org: 'General Mobile Technology India Pvt. Ltd. (MCarbon) · Noida',
    body:
      'Monitored production infrastructure and application performance using Zabbix, and managed the critical incident lifecycle with HPE Service Manager (HPSM) — troubleshooting and escalating within SLA timelines, with hands-on Linux and MySQL work along the way.',
    stats: [
      { value: '24/7', label: 'infra monitored' },
      { value: '100%', label: 'SLA maintained' },
      { value: '2+', label: 'enterprise tools' },
    ],
  },
  {
    date: '2024 – 2026',
    title: 'Master of Computer Applications',
    org: 'Graphic Era Hill University · Dehradun',
    body:
      'Specializing in advanced software engineering, machine learning, and cloud computing, with a strong grounding in algorithms, design patterns, and full-stack fundamentals.',
    stats: [
      { value: '8.71', label: 'CGPA' },
      { value: '2', label: 'years intensive' },
      { value: '1st Div', label: 'standing' },
    ],
  },
]

export const projects = [
  {
    title: "Parkinson's Disease Detection",
    tags: 'Python · Machine Learning · OpenCV',
    link: 'https://github.com/swati485/Parkinsons_Detection',
    body:
      "A non-invasive ML system for early Parkinson's detection that analyzes spiral and wave hand drawings to identify subtle movement patterns and tremor-related variations.",
    stats: ['83% accuracy', 'Fast', 'Non-invasive'],
  },
  {
    title: 'StreamWeaver — High-Throughput No-Code ETL Pipeline',
    tags: 'React · JavaScript · PapaParse · React Virtualized',
    link: 'https://github.com/swati485/StreamWeaver',
    body:
      'A no-code ETL pipeline designed for efficient processing and transformation of large CSV datasets, with virtualized data preview and a responsive, user-friendly interface.',
    stats: ['Large CSV Processing', 'Virtualized Data Preview', 'Real-time Progress'],
  },
]

export const contactEmail = 'swatisharma2520@gmail.com'

export const socialLinks = [
  { label: 'GITHUB', href: 'https://github.com/swati485', icon: 'github' as const },
  { label: 'LINKEDIN', href: 'https://linkedin.com', icon: 'linkedin' as const },
  { label: 'EMAIL', href: `mailto:${contactEmail}`, icon: 'envelope' as const },
]
