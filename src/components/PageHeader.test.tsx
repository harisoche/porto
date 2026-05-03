import { render, screen } from '@testing-library/react'
import PageHeader from './PageHeader'

test('renders the title', () => {
  render(<PageHeader title="Experience" />)
  expect(screen.getByText('Experience')).toBeInTheDocument()
})

test('renders optional subtitle when provided', () => {
  render(<PageHeader title="Skills" subtitle="Technologies I work with" />)
  expect(screen.getByText('Technologies I work with')).toBeInTheDocument()
})

test('does not render subtitle element when not provided', () => {
  render(<PageHeader title="Skills" />)
  expect(screen.queryByTestId('page-subtitle')).not.toBeInTheDocument()
})
