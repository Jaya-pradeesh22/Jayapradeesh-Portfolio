import { useEffect, useState } from 'react'
import { nav } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = nav.map((item) => item.href.replace('#', ''))

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 140 <= window.scrollY) {
          current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="dot" />
        JP
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
      </button>

      <ul className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://www.linkedin.com/in/jayapradeesh/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  )
}
