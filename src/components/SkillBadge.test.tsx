import { render, screen } from '@testing-library/react'
import SkillBadge from './SkillBadge'

test('renders the skill name', () => {
  render(<SkillBadge skill="Golang" />)
  expect(screen.getByText('Golang')).toBeInTheDocument()
})

test('renders different skill names', () => {
  render(<SkillBadge skill="PostgreSQL" />)
  expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
})
