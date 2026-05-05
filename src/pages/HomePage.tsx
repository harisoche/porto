import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import SkillBadge from '../components/SkillBadge'

const featuredSkills = [
  'Golang',
  'Java',
  'Laravel',
  'Spring Boot',
  'PostgreSQL',
  'Docker',
  'Elasticsearch',
  'RabbitMQ',
]

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh]">
      <div className="mb-3 font-mono text-text-secondary text-sm">{'// hello, world'}</div>

      <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-3">
        Haris <span className="text-accent">{profile.nickname}</span> Gumilar
      </h1>

      <h2 className="text-xl text-accent font-mono mb-5">{profile.title}</h2>

      <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">
        {profile.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {featuredSkills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="px-5 py-2.5 bg-accent text-bg font-semibold rounded-md hover:opacity-90 transition-opacity duration-200 text-sm"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2.5 border border-accent text-accent font-semibold rounded-md hover:bg-accent hover:text-bg transition-colors duration-200 text-sm"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}
