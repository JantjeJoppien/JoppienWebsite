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

export default function JantjeAbout({ theme }: { theme: Theme }) {
  return (
    <section id="about" className="site-section reveal-up" data-reveal style={{ padding: '96px 48px', borderTop: '1px solid ' + theme.border }}>
      <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>— About</p>
      <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', color: theme.text, marginBottom: 24, lineHeight: 1.1 }}>
        Jantje bekommt hier seine eigene persönliche Seite.
      </h2>
      <p style={{ color: theme.muted, fontSize: 17, lineHeight: 1.9, maxWidth: 720 }}>
        Dieser Abschnitt ist als React-Komponente angelegt und kann jetzt mit echten Informationen,
        Texten, Bildern und Projekten ersetzt werden.
      </p>
    </section>
  )
}
