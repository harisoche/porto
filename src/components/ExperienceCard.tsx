import SkillBadge from './SkillBadge'
import type { Experience } from '../data/experience'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-10 border-l border-border last:border-l-transparent">
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg" />

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-text-primary font-semibold">{experience.role}</h3>
            <p className="text-accent text-sm">{experience.company}</p>
          </div>
          <div className="text-right">
            <p className="text-text-secondary text-sm">{experience.period}</p>
            <span className="inline-block text-xs px-2 py-0.5 rounded border border-border text-text-secondary mt-1">
              {experience.location}
            </span>
          </div>
        </div>

        <ul className="mt-3 space-y-1 text-text-secondary text-sm">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent mt-0.5 shrink-0">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {experience.techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <SkillBadge key={tech} skill={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
