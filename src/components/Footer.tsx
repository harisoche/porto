import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-text-secondary text-sm">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-accent transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
