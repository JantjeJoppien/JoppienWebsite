import { getPortfolioPath, sectionOrder, type AppRoute, type PortfolioSlug, type SectionKey } from "../siteRouting.ts";

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
  navigateToPortfolio: (portfolio: PortfolioSlug) => void
  navigateToSection: (section: SectionKey) => void
  route: AppRoute
}

const sectionLabels: Record<SectionKey, string> = {
  home: 'Start',
  about: 'Über mich',
  interests: 'Interessen',
  projects: 'Projekte',
  contact: 'Kontakt',
}

export default function Navbar({ theme, toggleDark, navigateToPortfolio, navigateToSection, route }: Props) {
  function handlePortfolioClick(event: React.MouseEvent<HTMLAnchorElement>, portfolio: PortfolioSlug) {
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
    navigateToPortfolio(portfolio)
  }

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
    navigateToSection(section)
  }

  const isPortfolio = route.kind === 'portfolio'
  const currentPortfolio = isPortfolio ? route.portfolio : 'maximilian'

  return (
    <nav className="site-navbar" aria-label="Hauptnavigation" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 48px',
      borderBottom: '1px solid ' + theme.border,
      backgroundColor: theme.dark ? 'rgba(4, 12, 27, 0.45)' : 'rgba(255, 255, 255, 0.55)',
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

      <div className="site-navbar__links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {isPortfolio ? (
          sectionOrder.map((section) => (
            <a
              key={section}
              href={getPortfolioPath(currentPortfolio, section)}
              onClick={(event) => handleSectionClick(event, section)}
              style={{ fontSize: 14, color: theme.muted }}
            >
              {sectionLabels[section]}
            </a>
          ))
        ) : (
          (['jantje', 'maximilian'] as const).map((slug) => (
            <a
              key={slug}
              href={`/${slug}/`}
              onClick={(event) => handlePortfolioClick(event, slug)}
              style={{ fontSize: 14, color: theme.muted }}
            >
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </a>
          ))
        )}
        <button
          onClick={toggleDark}
          type="button"
          aria-label={theme.dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
          title={theme.dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
          style={{
            background: 'transparent',
            border: '1px solid ' + theme.border,
            color: theme.text,
            padding: '6px 14px',
            borderRadius: 999,
            cursor: 'pointer',
            fontSize: 15,
          }}
        >
          {theme.dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
