import SkillBadge from './SkillBadge'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 hover:border-accent transition-colors duration-200">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-text-primary font-semibold">{project.name}</h3>
        <span className="text-xs px-2 py-0.5 rounded-full border border-border text-text-secondary shrink-0">
          {project.context}
        </span>
      </div>

      <p className="text-text-secondary text-xs font-mono">{project.period}</p>

      <p className="text-text-secondary text-sm">{project.description}</p>

      {project.bullets.length > 0 && (
        <ul className="space-y-1 text-text-secondary text-sm">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent mt-0.5 shrink-0">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border">
        {project.techStack.map((tech) => (
          <SkillBadge key={tech} skill={tech} />
        ))}
      </div>
    </div>
  )
}
