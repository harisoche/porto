export type Project = {
  name: string
  period: string
  description: string
  bullets: string[]
  techStack: string[]
  context: string
}

export const projects: Project[] = [
  {
    name: 'Invoice Plus — Generate Invoice SaaS',
    period: 'Sep 2023 – Jun 2024',
    description: 'SaaS platform for generating invoices, built as a freelance project.',
    bullets: [
      'Built backend service using Golang (Echo + Gorm)',
      'Created Swagger API documentation',
      'Designed PostgreSQL database',
    ],
    techStack: ['Golang', 'Echo', 'GORM', 'PostgreSQL', 'Swagger', 'JWT'],
    context: 'Freelance',
  },
  {
    name: 'Open Banking System',
    period: 'Jul 2022 – Feb 2023',
    description: 'Microservices-based open banking platform built as a freelance project.',
    bullets: [
      'Designed microservices-based architecture',
      'Developed Open APIs and documentation',
    ],
    techStack: ['Golang', 'Redis', 'RabbitMQ', 'Docker', 'CI/CD', 'Swagger'],
    context: 'Freelance',
  },
  {
    name: 'Elasticsearch Optimization',
    period: 'Oct 2022 – Dec 2022',
    description:
      'Improved filtering performance by migrating data from MySQL to Elasticsearch.',
    bullets: [
      'Migrated data from MySQL to Elasticsearch',
      'Significantly improved search and filter performance',
    ],
    techStack: ['Elasticsearch', 'MySQL', 'Laravel', 'Golang'],
    context: 'Sekolah.mu',
  },
  {
    name: 'Amazon SQS Implementation',
    period: 'Aug 2022 – Sep 2022',
    description:
      'Implemented queue system to optimize Excel generation and prevent scheduler blocking.',
    bullets: [
      'Implemented queue system to optimize Excel generation',
      'Reduced memory usage and prevented scheduler blocking',
    ],
    techStack: ['Amazon SQS', 'Laravel', 'Golang'],
    context: 'Sekolah.mu',
  },
  {
    name: 'Core Banking Open API',
    period: 'Sep 2021 – May 2022',
    description: 'Developed Open API for core banking system.',
    bullets: ['Developed Open API using Java, Spring Boot, Hibernate, DB2'],
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'DB2', 'REST APIs'],
    context: 'Collega',
  },
  {
    name: 'Core Banking System Maintenance',
    period: '2018 – 2021',
    description: 'Maintained and enhanced core banking system features and performance.',
    bullets: ['Developed features, fixed bugs, and optimized performance'],
    techStack: ['Java', 'Zkoss', 'Hibernate', 'Spring Boot', 'DB2'],
    context: 'Collega',
  },
  {
    name: 'Java Migration Projects',
    period: 'Mar 2017 – May 2018',
    description: 'Migrated legacy banking applications from Power Builder to Java.',
    bullets: [
      'Migrated Power Builder applications to Java',
      'Upgraded Java 6 to Java 8',
      'Built batch processing systems',
    ],
    techStack: ['Java', 'DB2', 'Hibernate', 'Spring Batch'],
    context: 'Padepokan',
  },
]
