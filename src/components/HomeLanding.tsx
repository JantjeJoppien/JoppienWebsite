import { type PortfolioSlug } from "../siteRouting.ts";

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

export default function HomeLanding({
  theme,
  navigateToPortfolio,
  toggleDark,
}: {
  theme: Theme
  navigateToPortfolio: (portfolio: PortfolioSlug) => void
  toggleDark: () => void
}) {
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

  return (
    <div
      className={`home-landing ${theme.dark ? 'home-landing--dark' : 'home-landing--light'}`}
      style={{ minHeight: '100vh' }}
    >
      <header className="home-landing__header" style={{
        borderBottom: '1px solid ' + theme.border,
      }}>
        <a href="/" style={{ fontWeight: 800, fontSize: 22, color: theme.text }}>
          Joppien<span style={{ color: theme.accent }}>.</span>
        </a>
        <nav className="home-landing__nav">
          <a
            href="/jantje/"
            onClick={(event) => handlePortfolioClick(event, 'jantje')}
            style={{
              padding: '10px 16px',
              border: '1px solid ' + theme.border,
              borderRadius: 999,
              color: theme.text,
              background: theme.dark ? 'rgba(11, 37, 61, 0.46)' : 'rgba(255, 255, 255, 0.56)',
            }}
          >
            Jantje
          </a>
          <a
            href="/maximilian/"
            onClick={(event) => handlePortfolioClick(event, 'maximilian')}
            style={{
              padding: '10px 16px',
              border: '1px solid ' + theme.border,
              borderRadius: 999,
              color: theme.text,
              background: theme.dark ? 'rgba(11, 37, 61, 0.46)' : 'rgba(255, 255, 255, 0.56)',
            }}
          >
            Maximilian
          </a>
          <button
            type="button"
            onClick={toggleDark}
            aria-label={theme.dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
            title={theme.dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
            style={{
              padding: '10px 16px',
              border: '1px solid ' + theme.border,
              borderRadius: 999,
              color: theme.text,
              background: theme.dark ? 'rgba(11, 37, 61, 0.46)' : 'rgba(255, 255, 255, 0.56)',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            {theme.dark ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main className="home-landing__main">
        <section style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: theme.accent, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>
            joppien.dev
          </p>
          <h1 style={{ fontSize: 'clamp(46px, 9vw, 92px)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.05em' }}>
            Zwei Portfolios, eine gemeinsame Startseite.
          </h1>
          <p style={{ maxWidth: 680, fontSize: 19, lineHeight: 1.85, color: theme.muted, marginTop: 28 }}>
            Jantje und Maximilian Joppien haben hier ihren gemeinsamen Einstiegspunkt.
            Von hier aus gelangt ihr direkt zu den jeweiligen Portfolio-Seiten.
          </p>
        </section>

        <section className="home-landing__grid" style={{ maxWidth: 1100, margin: '56px auto 0' }}>
          {[
            {
              key: 'jantje' as const,
              title: 'Jantje',
              description: 'Die React-Struktur steht bereits. Inhalte und Projekte koennen jetzt schrittweise ausgebaut werden.',
            },
            {
              key: 'maximilian' as const,
              title: 'Maximilian',
              description: 'Das bestehende Portfolio mit Hero, About, Interessen, Projekten und Kontakt lebt unter seinem eigenen Bereich.',
            },
          ].map((entry) => (
            <article
              className="home-landing__card"
              key={entry.key}
              style={{
                padding: 30,
                borderRadius: 28,
                border: '1px solid ' + theme.border,
                background: theme.dark ? 'rgba(11, 37, 61, 0.74)' : 'rgba(255, 255, 255, 0.78)',
                boxShadow: theme.dark ? '0 24px 60px rgba(0, 0, 0, 0.26)' : '0 24px 60px rgba(18, 53, 71, 0.08)',
              }}
            >
              <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1, color: theme.text }}>{entry.title}</h2>
              <p style={{ color: theme.muted, fontSize: 16, lineHeight: 1.8, margin: '16px 0 28px' }}>{entry.description}</p>
              <a
                href={`/${entry.key}/`}
                onClick={(event) => handlePortfolioClick(event, entry.key)}
                style={{
                  display: 'inline-flex',
                  padding: '13px 22px',
                  borderRadius: 999,
                  background: theme.accent,
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                Portfolio ansehen
              </a>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
