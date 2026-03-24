import { type PortfolioSlug } from "../siteRouting.ts";
import jantjeMaxiImage from "../assets/JantjeMaxi.JPEG";
import happyImage from "../assets/Happy.JPEG";
import lunaImage from "../assets/Luna.jpg";
import odinImage from "../assets/Odin.jpg";

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

  const dogs = [
    { name: 'Luna', image: lunaImage, text: 'Luna bringt Ruhe, Neugier und ihren ganz eigenen Blick auf jede Alltagsszene mit.' },
    { name: 'Odin', image: odinImage, text: 'Odin wirkt wie der aufmerksame Beobachter der Truppe und ist immer voll dabei.' },
    { name: 'Happy', image: happyImage, text: 'Happy macht seinem Namen alle Ehre und sorgt fuer die extra Portion Energie im Rudel.' },
  ]

  return (
    <div
      className={`home-landing ${theme.dark ? 'home-landing--dark' : 'home-landing--light'}`}
      style={{ minHeight: '100vh' }}
    >
      <header className="home-landing__header" style={{
        borderBottom: '1px solid ' + theme.border,
      }}>
        <a href="/" style={{ fontWeight: 800, fontSize: 20, color: theme.text }}>
          Joppien<span style={{ color: theme.accent }}>.</span>
        </a>
        <nav className="home-landing__nav">
          <a
            href="/jantje/"
            onClick={(event) => handlePortfolioClick(event, 'jantje')}
            style={{
              padding: '6px 14px',
              border: '1px solid ' + theme.border,
              borderRadius: 999,
              color: theme.text,
              background: theme.dark ? 'rgba(11, 37, 61, 0.46)' : 'rgba(255, 255, 255, 0.56)',
              fontSize: 15,
            }}
          >
            Jantje
          </a>
          <a
            href="/maximilian/"
            onClick={(event) => handlePortfolioClick(event, 'maximilian')}
            style={{
              padding: '6px 14px',
              border: '1px solid ' + theme.border,
              borderRadius: 999,
              color: theme.text,
              background: theme.dark ? 'rgba(11, 37, 61, 0.46)' : 'rgba(255, 255, 255, 0.56)',
              fontSize: 15,
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
              padding: '6px 14px',
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
        <section className="home-landing__hero" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <p style={{ color: theme.accent, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>
              joppien.dev
            </p>
            <h1 style={{ fontSize: 'clamp(46px, 9vw, 92px)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.05em', color: theme.text }}>
              Zwei Menschen, drei Hunde und jede Menge eigene Ideen.
            </h1>
            <p style={{ maxWidth: 640, fontSize: 19, lineHeight: 1.85, color: theme.muted, marginTop: 28 }}>
              Jantje und Maximilian teilen sich nicht nur den Namen Joppien, sondern auch dieses Zuhause im Web.
              Von hier aus geht es weiter zu ihren persoenlichen Portfolios, Projekten und Geschichten.
            </p>
          </div>

          <aside
            className="home-landing__photo-placeholder"
            style={{
              border: '1px solid ' + theme.border,
              background: theme.dark ? 'rgba(11, 37, 61, 0.7)' : 'rgba(255, 255, 255, 0.76)',
              color: theme.text,
            }}
          >
            <img
              className="home-landing__photo-frame home-landing__photo-frame--image"
              src={jantjeMaxiImage}
              alt="Jantje und Maximilian zusammen"
            />
            <p style={{ margin: '18px 0 0', color: theme.muted, lineHeight: 1.75 }}>
              Ein gemeinsamer Moment als Einstieg: persoenlich, nahbar und direkt mit der Startseite verbunden.
            </p>
          </aside>
        </section>

        <section className="home-landing__grid" style={{ maxWidth: 1100, margin: '56px auto 0' }}>
          {[
            {
              key: 'jantje' as const,
              title: 'Jantje',
              description: 'Ein eigener Bereich fuer persoenliche Stationen, Projekte, Interessen und alles, was Jantje ausmacht.',
            },
            {
              key: 'maximilian' as const,
              title: 'Maximilian',
              description: 'Das bestehende Portfolio zeigt bereits den Stil, die Projekte und die Themen, die Maximilian gerade beschaeftigen.',
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
                Bereich ansehen
              </a>
            </article>
          ))}
        </section>

        <section className="home-landing__dogs" style={{ maxWidth: 1100, margin: '72px auto 0' }}>
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: theme.accent, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Family Crew
            </p>
            <h2 style={{ margin: 0, fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1, letterSpacing: '-0.04em', color: theme.text }}>
              Luna, Odin und Happy gehoeren natuerlich dazu.
            </h2>
            <p style={{ color: theme.muted, fontSize: 18, lineHeight: 1.85, marginTop: 22 }}>
              Drei Hunde, drei Charaktere und ziemlich sicher die wahren Hauptfiguren im Alltag. Auch sie bekommen hier ihren kleinen Platz auf der Startseite.
            </p>
          </div>

          <div className="home-landing__dogs-grid">
            {dogs.map((dog) => (
              <article
                key={dog.name}
                className="home-landing__dog-card"
                style={{
                  border: '1px solid ' + theme.border,
                  background: theme.dark ? 'rgba(11, 37, 61, 0.68)' : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <img className="home-landing__dog-image" src={dog.image} alt={dog.name} />
                <h3 style={{ margin: '22px 0 10px', color: theme.text, fontSize: 28 }}>{dog.name}</h3>
                <p style={{ margin: 0, color: theme.muted, lineHeight: 1.8 }}>{dog.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
