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
    <section id="contact" className="site-section reveal-up" data-reveal style={{
      padding: '96px 48px',
      borderTop: '1px solid ' + theme.border,
    }}>
      <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>
        — Meld dich gerne
      </p>
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: 800,
        letterSpacing: '-1.5px',
        color: theme.text,
        marginBottom: 20,
        lineHeight: 1.1,
      }}>
        Kontakt
      </h2>

      <p style={{ fontSize: 17, color: theme.muted, lineHeight: 1.85, maxWidth: 500, marginBottom: 48 }}>
        Ob Nachricht, Vernetzung oder kurzer Austausch:
        Jantje ist per Mail, GitHub und LinkedIn erreichbar.
      </p>

      <div className="contact-actions reveal-up reveal-delay-1" data-reveal style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
        <a href="mailto:jantje@joppien.dev" className="button-link button-link--primary" style={{
          padding: '14px 32px',
          backgroundColor: theme.accent,
          color: '#fff',
          fontWeight: 700,
          fontSize: 15,
          borderRadius: 6,
        }}>
          ✉️ E-Mail schreiben
        </a>
        <a href="https://github.com/JantjeJoppien" target="_blank" rel="noreferrer" aria-label="GitHub-Profil von Jantje Joppien in neuem Tab oeffnen" className="button-link button-link--secondary" style={{
          padding: '14px 32px',
          border: '1px solid ' + theme.border,
          color: theme.muted,
          fontSize: 15,
          borderRadius: 6,
        }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jantje-joppien-663356213/" target="_blank" rel="noreferrer" aria-label="LinkedIn-Profil von Jantje Joppien in neuem Tab oeffnen" className="button-link button-link--secondary" style={{
          padding: '14px 32px',
          border: '1px solid ' + theme.border,
          color: theme.muted,
          fontSize: 15,
          borderRadius: 6,
        }}>
          LinkedIn
        </a>
      </div>
    </section>
  )
}
