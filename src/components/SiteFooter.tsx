import { getRoutePath, type AppRoute } from "../siteRouting.ts";

interface Theme {
  dark: boolean
  border: string
  text: string
  muted: string
  accent: string
}

const legalLinks: Array<{ label: string; route: AppRoute }> = [
  { label: 'Impressum', route: { kind: 'legal', page: 'impressum' } },
  { label: 'Datenschutz', route: { kind: 'legal', page: 'datenschutz' } },
  { label: 'Cookies', route: { kind: 'legal', page: 'cookies' } },
]

export default function SiteFooter({
  theme,
  navigateToRoute,
}: {
  theme: Theme
  navigateToRoute: (route: AppRoute) => void
}) {
  function handleRouteClick(event: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) {
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
    navigateToRoute(route)
  }

  return (
    <footer
      className="site-footer"
      style={{
        borderTop: '1px solid ' + theme.border,
        color: theme.muted,
      }}
    >
      <div className="site-footer__inner">
        <p className="site-footer__credit" style={{ color: theme.muted }}>
          © 2026 Jantje Joppien & Maximilian Joppien
        </p>
        <div className="site-footer__nav-wrapper">
          <nav aria-label="Rechtliche Seiten" className="site-footer__nav">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={getRoutePath(link.route)}
                onClick={(event) => handleRouteClick(event, link.route)}
                style={{ color: theme.muted }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
