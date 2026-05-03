import PageHeader from '../components/PageHeader'
import { educationEntries } from '../data/education'

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Education"
        subtitle="Academic background and certifications"
      />
      <div className="space-y-5">
        {educationEntries.map((entry, i) => (
          <div key={i} className="bg-surface border border-border rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-text-primary font-semibold">{entry.title}</h3>
                <p className="text-accent text-sm mt-0.5">{entry.institution}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-text-secondary text-sm">{entry.year}</span>
                {entry.type === 'degree' && (
                  <span className="text-xs px-2 py-0.5 rounded border border-border text-text-secondary">
                    Degree
                  </span>
                )}
                {entry.type === 'certification' && (
                  <span className="text-xs px-2 py-0.5 rounded border border-accent text-accent">
                    Certified
                  </span>
                )}
              </div>
            </div>
            {entry.grade && (
              <p className="text-text-secondary text-sm mt-2">{entry.grade}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
