export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Golang', 'Java', 'PHP', 'Python', 'SQL', 'HTML'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'Laravel',
      'Spring Boot',
      'Spring MVC',
      'Spring Batch',
      'Gin',
      'Echo',
      'GORM',
      'Hibernate',
      'Vue.js',
      'Zkoss',
    ],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'DB2', 'Elasticsearch'],
  },
  {
    category: 'Tools & Infrastructure',
    skills: [
      'Amazon SQS',
      'RabbitMQ',
      'Redis',
      'Docker',
      'CI/CD',
      'REST APIs',
      'Swagger',
      'JWT',
      'Git',
    ],
  },
]
