import { useEffect, useState } from 'react'
import { getSectionPath, type SectionKey } from "../siteRouting.ts";

interface Theme {
  dark: boolean
  bg: string
  surface: string
  border: string
  text: string
  muted: string
  accent: string
  accentLight: string
}

interface Props {
  theme: Theme
  toggleDark: () => void
  navigateToSection: (section: SectionKey) => void
}

export default function Navbar({ theme, toggleDark, navigateToSection }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const links: Array<{ label: string, section: SectionKey }> = [
    { label: 'Über mich', section: 'about' },
    { label: 'Interessen', section: 'interests' },
    { label: 'Projekte', section: 'projects' },
    { label: 'Kontakt', section: 'contact' },
  ]

  function handleSectionClick(event: React.MouseEvent<HTMLAnchorElement>, section: SectionKey) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    setMenuOpen(false)
    navigateToSection(section)
  }

  return (
    <nav className="site-navbar" aria-label="Hauptnavigation" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '18px 48px',
      borderBottom: '1px solid ' + theme.border,
      backgroundColor: theme.bg + 'ee',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      <a
        href="/"
        aria-label="Zur Hauptseite"
        style={{ fontWeight: 800, fontSize: 20, color: theme.text }}
      >
        Joppien<span style={{ color: theme.accent }}>.</span>
      </a>

      <button
        type="button"
        className="site-navbar__menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation-links"
        aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
        onClick={() => setMenuOpen((open) => !open)}
        style={{
          background: theme.surface,
          border: '1px solid ' + theme.border,
          color: theme.text,
          padding: '8px 14px',
          borderRadius: 999,
          cursor: 'pointer',
          fontSize: 15,
        }}
      >
        {menuOpen ? 'Schließen' : 'Menü'}
      </button>

      <ul
        id="site-navigation-links"
        className={`site-navbar__links ${menuOpen ? 'is-open' : ''}`}
        style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={getSectionPath(link.section)}
              onClick={(event) => handleSectionClick(event, link.section)}
              style={{ fontSize: 14, color: theme.muted }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              toggleDark()
              setMenuOpen(false)
            }}
            type="button"
            aria-label={theme.dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
            title={theme.dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
            style={{
              background: theme.surface,
              border: '1px solid ' + theme.border,
              color: theme.text,
              padding: '6px 14px',
              borderRadius: 20,
              cursor: 'pointer',
              fontSize: 15,
              transition: 'background 0.2s',
            }}
          >
            {theme.dark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
