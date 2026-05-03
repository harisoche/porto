import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { profile } from '../data/profile'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [secondaryCopied, setSecondaryCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copySecondaryEmail = async () => {
    await navigator.clipboard.writeText(profile.secondaryEmail)
    setSecondaryCopied(true)
    setTimeout(() => setSecondaryCopied(false), 2000)
  }

  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Open to new opportunities — feel free to reach out"
      />
      <div className="max-w-lg space-y-4">
        {/* Email */}
        <div className="bg-surface border border-border rounded-lg p-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-mono mb-1">
              Primary Email
            </p>
            <p className="text-text-primary">{profile.email}</p>
          </div>
          <button
            onClick={copyEmail}
            className="text-sm px-3 py-1.5 border border-border rounded text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200 shrink-0"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Secondary Email */}
        <div className="bg-surface border border-border rounded-lg p-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-mono mb-1">
              Secondary Email
            </p>
            <p className="text-text-primary">{profile.secondaryEmail}</p>
          </div>
          <button
            onClick={copySecondaryEmail}
            className="text-sm px-3 py-1.5 border border-border rounded text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200 shrink-0"
          >
            {secondaryCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* LinkedIn */}
        <div className="bg-surface border border-border rounded-lg p-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-mono mb-1">
              LinkedIn
            </p>
            <p className="text-text-primary">in/oche</p>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1.5 border border-border rounded text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200 shrink-0"
          >
            Open ↗
          </a>
        </div>

        {/* Phone */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-text-secondary text-xs uppercase tracking-widest font-mono mb-1">
            Phone
          </p>
          <p className="text-text-primary">+{profile.phone}</p>
        </div>

        {/* Location */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-text-secondary text-xs uppercase tracking-widest font-mono mb-1">
            Location
          </p>
          <p className="text-text-primary">{profile.location}</p>
        </div>
      </div>
    </div>
  )
}
