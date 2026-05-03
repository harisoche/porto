interface SkillBadgeProps {
  skill: string
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block bg-surface border border-border text-accent text-xs px-3 py-1 rounded-full font-mono">
      {skill}
    </span>
  )
}
