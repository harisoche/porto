import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactPage from './ContactPage'

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
})

test('renders email address', () => {
  render(<ContactPage />)
  expect(screen.getByText('oche.0325@gmail.com')).toBeInTheDocument()
})

test('copy button changes text to "Copied!" after click', async () => {
  render(<ContactPage />)
  const copyButton = screen.getByRole('button', { name: /copy/i })
  fireEvent.click(copyButton)
  await waitFor(() => {
    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })
})

test('renders LinkedIn link', () => {
  render(<ContactPage />)
  const linkedInLink = screen.getByRole('link', { name: /open/i })
  expect(linkedInLink).toHaveAttribute('href', 'https://linkedin.com/in/oche')
})
