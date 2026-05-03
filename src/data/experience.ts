export type Experience = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  techStack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Sekolah.mu',
    role: 'Senior Software Engineer (Backend)',
    period: 'Jan 2024 – Present',
    location: 'Remote',
    bullets: [
      'Develop features based on client requirements',
      'Research and implement new technologies',
      'Troubleshoot production issues and provide long-term solutions',
      'Optimize and enhance applications',
      'Design scalable and maintainable systems',
    ],
    techStack: [
      'Laravel',
      'Golang',
      'GORM',
      'Gin',
      'Amazon SQS',
      'Elasticsearch',
      'PHP',
      'MySQL',
      'REST APIs',
      'Git',
    ],
  },
  {
    company: 'Sekolah.mu',
    role: 'Backend Engineer',
    period: 'Jan 2023 – Dec 2023',
    location: 'Remote',
    bullets: [
      'Develop backend features',
      'Debug and resolve production issues',
      'Write integration tests using Golang',
      'Improve system performance',
    ],
    techStack: [
      'Laravel',
      'Golang',
      'GORM',
      'Gin',
      'Amazon SQS',
      'Elasticsearch',
      'PHP',
      'MySQL',
      'Git',
    ],
  },
  {
    company: 'Sekolah.mu',
    role: 'Full Stack Engineer',
    period: 'Apr 2022 – Jan 2023',
    location: 'Remote',
    bullets: [
      'Develop features across backend and frontend',
      'Debug and optimize production systems',
      'Build integration tests',
    ],
    techStack: [
      'Laravel',
      'Golang',
      'Vue.js',
      'GORM',
      'Gin',
      'Amazon SQS',
      'Elasticsearch',
      'PHP',
      'MySQL',
      'Git',
    ],
  },
  {
    company: 'Collega Inti Pratama, PT',
    role: 'Full Stack Developer',
    period: 'May 2018 – May 2022',
    location: 'Hybrid',
    bullets: [
      'Develop features for banking systems',
      'Implement Open Banking APIs',
      'Debug production issues',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'REST APIs',
      'DB2',
      'Zkoss',
      'Git',
    ],
  },
  {
    company: 'Padepokan Tujuh Sembilan, PT',
    role: 'Java Programmer',
    period: 'Mar 2017 – Feb 2018',
    location: 'On-site',
    bullets: [
      'Migrate core banking apps from Power Builder to Java',
      'Upgrade Java 6 to Java 8',
      'Develop client-requested features',
    ],
    techStack: ['Java', 'DB2', 'Hibernate', 'Zkoss'],
  },
]
