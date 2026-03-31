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

import ReactiveBorder from "./ReactiveBorder.tsx";

export default function JantjeAbout({ theme }: { theme: Theme }) {
  return (
    <section id="about" className="site-section about-grid reveal-up" data-reveal style={{
      padding: '96px 48px',
      borderTop: '1px solid ' + theme.border,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start',
    }}>
      <div>
        <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>
          — Ueber mich
        </p>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          color: theme.text,
          marginBottom: 32,
          lineHeight: 1.1,
        }}>
          Jantje <br/> Joppien
        </h2>
        <div style={{ fontSize: 16, lineHeight: 1.9, color: theme.muted }}>
          <p style={{ marginBottom: 20 }}>
            Dieser Bereich ist als Platzhalter fuer eine persoenliche Vorstellung gedacht.
            Hier kann spaeter ein kurzer Einstieg stehen, der Ton, Haltung und Fokus der Seite erklaert.
          </p>
          <p style={{ marginBottom: 20 }}>
            Auch Stationen, Interessen oder berufliche Schwerpunkte lassen sich hier problemlos
            eintragen, ohne das Layout noch einmal umbauen zu muessen.
          </p>
          <p>
            Aktuell dient der Abschnitt vor allem dazu, die gleiche Struktur wie Maximilians
            Portfolio bereitzustellen, nur mit einer eigenen Farbwelt fuer Jantje.
          </p>
        </div>
      </div>

      <ReactiveBorder className="about-card reveal-up reveal-delay-1" data-reveal glowColor={theme.dark ? theme.accent : 'rgba(212, 163, 115, 0.40)'} style={{
        backgroundColor: theme.surface,
        border: '1px solid ' + theme.border,
        borderRadius: 12,
        padding: 36,
        marginTop: 60,
      }}>
        <p style={{ color: theme.accent, fontSize: 14, marginBottom: 24 }}>Auf einen Blick</p>
        {[
          { emoji: '📍', key: 'Standort', value: 'Platzhalter fuer Ort oder Region' },
          { emoji: '💼', key: 'Fokus', value: 'Platzhalter fuer Beruf, Thema oder Rolle' },
          { emoji: '🌿', key: 'Stil', value: 'Ruhig, persoenlich und warm' },
          { emoji: '🗣️', key: 'Sprachen', value: 'Platzhalter fuer Sprachen oder Kommunikation' },
          { emoji: '📬', key: 'Status', value: 'Kontaktdaten und Inhalte folgen spaeter' },
        ].map((row, i) => (
          <div key={row.key} className="about-card__row" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 0',
            borderBottom: i < 4 ? '1px solid ' + theme.border : 'none',
            fontSize: 15,
          }}>
            <span style={{ fontSize: 18 }}>{row.emoji}</span>
            <span style={{ color: theme.muted, minWidth: 100, fontSize: 13 }}>{row.key}</span>
            <span style={{ color: theme.text }}>{row.value}</span>
          </div>
        ))}
      </ReactiveBorder>
    </section>
  )
}
