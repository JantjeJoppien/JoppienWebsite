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
}

export default function Navbar({ theme, toggleDark }: Props) {
  const links = [
    { label: 'Über mich', href: '#about' },
    { label: 'Interessen', href: '#interests' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '18px 48px',
      borderBottom: '1px solid ' + theme.border,
      backgroundColor: theme.bg + 'ee',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      <a href="#" style={{ fontWeight: 800, fontSize: 20, color: theme.text }}>
        Joppien<span style={{ color: theme.accent }}>.</span>
      </a>

      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} style={{ fontSize: 13, color: theme.muted }}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggleDark}
            style={{
              background: theme.surface,
              border: '1px solid ' + theme.border,
              color: theme.text,
              padding: '6px 14px',
              borderRadius: 20,
              cursor: 'pointer',
              fontSize: 14,
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
