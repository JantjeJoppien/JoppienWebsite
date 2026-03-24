import { type SectionKey, getPortfolioPath } from "../siteRouting.ts";

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

export default function JantjeHero({ theme, navigateToSection }: { theme: Theme, navigateToSection: (section: SectionKey) => void }) {
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

  return (
    <section className="hero-section reveal-up is-visible" data-reveal style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '120px 48px 80px',
      width: 'min(1440px, 100%)',
      margin: '0 auto',
      gap: 64,
    }}>
      <div className="hero-copy" style={{ flex: '1 1 620px', minWidth: 0 }}>
        <p style={{ color: theme.accent, fontSize: 15, marginBottom: 24, letterSpacing: '0.05em' }}>
          Hey, ich bin
        </p>

        <h1 style={{ fontSize: 'clamp(56px, 9vw, 100px)', lineHeight: 1, margin: 0, letterSpacing: '-0.05em' }}>
          Jantje
        </h1>

        <p style={{
          fontSize: 19,
          lineHeight: 1.85,
          color: theme.muted,
          maxWidth: 560,
          margin: '28px 0 48px',
        }}>
          Diese Portfolio-Seite ist jetzt Teil der React-App und vorbereitet für den
          nächsten Ausbauschritt. Struktur, Routing und Platzhalter-Sektionen stehen bereits.
        </p>

        <div className="hero-actions reveal-up reveal-delay-1" data-reveal style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href={getPortfolioPath('jantje', 'about')} onClick={(event) => handleSectionClick(event, 'about')} className="button-link button-link--primary" style={{
            padding: '13px 30px',
            backgroundColor: theme.accent,
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            borderRadius: 4,
          }}>
            Seite aufbauen
          </a>
          <a href={getPortfolioPath('jantje', 'contact')} onClick={(event) => handleSectionClick(event, 'contact')} className="button-link button-link--secondary" style={{
            padding: '13px 30px',
            border: '1px solid ' + theme.border,
            color: theme.muted,
            fontSize: 15,
            borderRadius: 4,
          }}>
            Kontaktbereich
          </a>
        </div>
      </div>

      <div className="hero-portrait reveal-up reveal-delay-1" data-reveal>
        <div style={{
          padding: 30,
          borderRadius: 28,
          border: '1px solid ' + theme.border,
          background: theme.surface,
          boxShadow: theme.dark ? '0 24px 60px rgba(0, 0, 0, 0.22)' : '0 24px 60px rgba(18, 53, 71, 0.08)',
        }}>
          <p style={{ color: theme.accent, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: 0 }}>
            React Portfolio
          </p>
          <h2 style={{ margin: '14px 0 0', fontSize: 34 }}>Jantje</h2>
          <p style={{ color: theme.muted, fontSize: 16, lineHeight: 1.8, marginTop: 16 }}>
            Platzhalter-Inhalte heute, echte Portfolio-Seite als nächster Schritt.
          </p>
        </div>
      </div>
    </section>
  )
}
