import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('renders name in copyright', () => {
  render(<Footer />)
  expect(screen.getByText(/Haris Gumilar/)).toBeInTheDocument()
})

test('renders LinkedIn link', () => {
  render(<Footer />)
  const linkedInLink = screen.getByRole('link', { name: /linkedin/i })
  expect(linkedInLink).toHaveAttribute('href', 'https://linkedin.com/in/oche')
})

test('renders Email link', () => {
  render(<Footer />)
  const emailLink = screen.getByRole('link', { name: /email/i })
  expect(emailLink).toHaveAttribute('href', 'mailto:oche.0325@gmail.com')
})
