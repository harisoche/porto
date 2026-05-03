import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'
import type { Project } from '../data/projects'

const mockProject: Project = {
  name: 'Invoice Plus',
  period: 'Sep 2023 – Jun 2024',
  description: 'SaaS for generating invoices.',
  bullets: ['Built backend with Golang', 'Designed PostgreSQL schema'],
  techStack: ['Golang', 'PostgreSQL'],
  context: 'Freelance',
}

test('renders project name', () => {
  render(<ProjectCard project={mockProject} />)
  expect(screen.getByText('Invoice Plus')).toBeInTheDocument()
})

test('renders context badge', () => {
  render(<ProjectCard project={mockProject} />)
  expect(screen.getByText('Freelance')).toBeInTheDocument()
})

test('renders description', () => {
  render(<ProjectCard project={mockProject} />)
  expect(screen.getByText('SaaS for generating invoices.')).toBeInTheDocument()
})

test('renders tech stack badges', () => {
  render(<ProjectCard project={mockProject} />)
  expect(screen.getByText('Golang')).toBeInTheDocument()
  expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
})

test('renders bullet points', () => {
  render(<ProjectCard project={mockProject} />)
  expect(screen.getByText('Built backend with Golang')).toBeInTheDocument()
})
