import PageHeader from '../components/PageHeader'
import SkillBadge from '../components/SkillBadge'
import { skillCategories } from '../data/skills'

export default function SkillsPage() {
  return (
    <div>
      <PageHeader title="Skills" subtitle="Technologies I work with" />
      <div className="space-y-8">
        {skillCategories.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-text-secondary text-xs uppercase tracking-widest font-mono mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
