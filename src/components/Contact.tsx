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

export default function Contact({ theme }: { theme: Theme }) {
  return (
    <section id="contact" className="site-section" style={{
      padding: '96px 48px',
      borderTop: '1px solid ' + theme.border,
    }}>
      <p style={{ color: theme.accent, fontSize: 13, letterSpacing: '0.1em', marginBottom: 16 }}>
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

      <p style={{ fontSize: 16, color: theme.muted, lineHeight: 1.9, maxWidth: 500, marginBottom: 48 }}>
        Ob Jobangebot, Projektidee oder einfach nur ein kurzes Hallo:
        Ich freue mich über jede Nachricht und antworte zeitnah.
      </p>

      <div className="contact-actions" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}>
        <a href="mailto:maximilian@joppien.dev" style={{
          padding: '14px 32px',
          backgroundColor: theme.accent,
          color: '#fff',
          fontWeight: 700,
          fontSize: 14,
          borderRadius: 6,
        }}>
          ✉️ E-Mail schreiben
        </a>
        <a href="https://github.com/mvxsvchs" target="_blank" rel="noreferrer" aria-label="GitHub-Profil von Maximilian Joppien in neuem Tab öffnen" style={{
          padding: '14px 32px',
          border: '1px solid ' + theme.border,
          color: theme.muted,
          fontSize: 14,
          borderRadius: 6,
        }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/maximilian-joppien-5b784b287/" target="_blank" rel="noreferrer" aria-label="LinkedIn-Profil von Maximilian Joppien in neuem Tab öffnen" style={{
          padding: '14px 32px',
          border: '1px solid ' + theme.border,
          color: theme.muted,
          fontSize: 14,
          borderRadius: 6,
        }}>
          LinkedIn
        </a>
      </div>

      <div className="contact-footer" style={{
        paddingTop: 32,
        borderTop: '1px solid ' + theme.border,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        color: theme.muted,
      }}>
        <span>2026 Joppien</span>
        <span style={{ color: theme.accent }}>Offen für neue Möglichkeiten ✨</span>
      </div>
    </section>
  )
}
