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

export default function JantjeContact({ theme }: { theme: Theme }) {
  return (
    <section id="contact" className="site-section reveal-up" data-reveal style={{ padding: '96px 48px', borderTop: '1px solid ' + theme.border }}>
      <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>— Contact</p>
      <p style={{ color: theme.muted, fontSize: 17, lineHeight: 1.9, maxWidth: 720, marginBottom: 0 }}>
        Auch der Kontaktbereich ist jetzt React-basiert vorbereitet und kann spaeter mit Mail,
        Social Links oder Formularen erweitert werden.
      </p>
    </section>
  )
}
