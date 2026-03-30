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
      <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1px', color: theme.text, marginBottom: 12 }}>
        Kontakt
      </h2>
      <p style={{ color: theme.muted, fontSize: 17, lineHeight: 1.9, maxWidth: 720 }}>
        Für alle Anfragen nutzen Sie bitte unsere gemeinsame Familienadresse oder rufen Sie an.
      </p>
      <p style={{ marginTop: 28, color: theme.text, fontWeight: 600 }}>
        Kontaktinformationen folgen in Kürze.
      </p>
    </section>
  )
}
