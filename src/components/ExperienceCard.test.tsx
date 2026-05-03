import { render, screen } from '@testing-library/react'
import ExperienceCard from './ExperienceCard'
import type { Experience } from '../data/experience'

const mockExperience: Experience = {
  company: 'Test Company',
  role: 'Senior Engineer',
  period: 'Jan 2024 – Present',
  location: 'Remote',
  bullets: ['Built scalable systems', 'Led backend architecture'],
  techStack: ['Golang', 'PostgreSQL'],
}

test('renders role and company', () => {
  render(<ExperienceCard experience={mockExperience} />)
  expect(screen.getByText('Senior Engineer')).toBeInTheDocument()
  expect(screen.getByText('Test Company')).toBeInTheDocument()
})

test('renders period and location', () => {
  render(<ExperienceCard experience={mockExperience} />)
  expect(screen.getByText('Jan 2024 – Present')).toBeInTheDocument()
  expect(screen.getByText('Remote')).toBeInTheDocument()
})

test('renders all bullet points', () => {
  render(<ExperienceCard experience={mockExperience} />)
  expect(screen.getByText('Built scalable systems')).toBeInTheDocument()
  expect(screen.getByText('Led backend architecture')).toBeInTheDocument()
})

test('renders tech stack badges', () => {
  render(<ExperienceCard experience={mockExperience} />)
  expect(screen.getByText('Golang')).toBeInTheDocument()
  expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
})
