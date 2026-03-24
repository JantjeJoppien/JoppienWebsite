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

export default function JantjeProjects({ theme }: { theme: Theme }) {
  return (
    <section id="projects" className="site-section reveal-up" data-reveal style={{ padding: '96px 48px', borderTop: '1px solid ' + theme.border }}>
      <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>— Projects</p>
      <div style={{ padding: 30, borderRadius: 22, border: '1px solid ' + theme.border, background: theme.surface }}>
        <h2 style={{ marginTop: 0, color: theme.text }}>Projektbereich in Vorbereitung</h2>
        <p style={{ color: theme.muted, lineHeight: 1.9, marginBottom: 0 }}>
          Hier koennen spaeter Projekte, Referenzen oder Arbeitsproben von Jantje eingebunden werden.
        </p>
      </div>
    </section>
  )
}
