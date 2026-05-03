import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

function renderNavbar(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar />
    </MemoryRouter>
  )
}

test('renders the logo', () => {
  renderNavbar()
  expect(screen.getByText('<HG />')).toBeInTheDocument()
})

test('renders all navigation links', () => {
  renderNavbar()
  expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByText('Experience').length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByText('Skills').length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByText('Education').length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
})

test('mobile menu opens on hamburger click', () => {
  renderNavbar()
  const hamburger = screen.getByLabelText('Toggle menu')
  expect(screen.getAllByText('Home').length).toBe(1)
  fireEvent.click(hamburger)
  expect(screen.getAllByText('Home').length).toBe(2)
})

test('mobile menu closes when a link is clicked', () => {
  renderNavbar()
  const hamburger = screen.getByLabelText('Toggle menu')
  fireEvent.click(hamburger)
  expect(screen.getAllByText('Home').length).toBe(2)
  const mobileLinks = screen.getAllByText('Home')
  fireEvent.click(mobileLinks[1])
  expect(screen.getAllByText('Home').length).toBe(1)
})
