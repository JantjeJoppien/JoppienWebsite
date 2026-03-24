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

export default function JantjeInterests({ theme }: { theme: Theme }) {
  return (
    <section id="interests" className="site-section reveal-up" data-reveal style={{ padding: '96px 48px', borderTop: '1px solid ' + theme.border }}>
      <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>— Interests</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {['Interessen', 'Hobbys', 'Persoenlichkeit'].map((item) => (
          <div key={item} style={{ padding: 26, borderRadius: 18, border: '1px solid ' + theme.border, background: theme.surface }}>
            <h3 style={{ margin: 0, color: theme.text }}>{item}</h3>
            <p style={{ color: theme.muted, lineHeight: 1.8, marginTop: 12 }}>
              Platzhalter fuer kuenftige Inhalte auf Jantjes Portfolio-Seite.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
