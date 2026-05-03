import PageHeader from '../components/PageHeader'
import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/experience'

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="Experience"
        subtitle="7+ years building backend systems"
      />
      <div className="relative">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>
    </div>
  )
}
