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

export default function About({ theme }: { theme: Theme }) {
  return (
    <section id="about" style={{
      padding: '96px 48px',
      borderTop: '1px solid ' + theme.border,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start',
    }}>
      <div>
        <p style={{ color: theme.accent, fontSize: 13, letterSpacing: '0.1em', marginBottom: 16 }}>
          — Über mich
        </p>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          color: theme.text,
          marginBottom: 32,
          lineHeight: 1.1,
        }}>
          Maximilian <br/> Joppien
        </h2>
        <div style={{ fontSize: 15, lineHeight: 2, color: theme.muted }}>
          <p style={{ marginBottom: 20 }}>
            Ich bin Maxi – Entwickler mit einer Vorliebe für alles,
            was schnell ist oder auf dem Bildschirm passiert.
          </p>
          <p style={{ marginBottom: 20 }}>
            Aktuell suche ich eine neue Stelle, in der ich mich technisch und kreativ weiterentwickeln kann.
            Mir ist ein gutes Teamklima genauso wichtig wie klar strukturierter, wartbarer Code.
          </p>
          <p>
            Wenn ich nicht am Rechner bin,
            schaue ich Formel 1, verfolge meinen Lieblingsverein
            oder verliere mich gerne komplett in einem guten Spiel.
          </p>
        </div>
      </div>

      <ReactiveBorder glowColor={theme.accent} style={{
        backgroundColor: theme.surface,
        border: '1px solid ' + theme.border,
        borderRadius: 12,
        padding: 36,
        marginTop: 60,
      }}>
        <p style={{ color: theme.accent, fontSize: 13, marginBottom: 24 }}>Auf einen Blick</p>
        {[
          { emoji: '📍', key: 'Standort', value: 'Erkelenz, Deutschland' },
          { emoji: '🎓', key: 'Ausbildung', value: 'Anwendungsentwicklung / Kaufmann im Einzelhandel' },
          { emoji: '🔍', key: 'Status', value: 'Offen für Jobangebote' },
          { emoji: '💬', key: 'Sprachen', value: 'Deutsch, Englisch' },
          { emoji: '⏰', key: 'Antwortzeit', value: 'Innerhalb von 24 Stunden' },
        ].map((row, i) => (
          <div key={row.key} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 0',
            borderBottom: i < 4 ? '1px solid ' + theme.border : 'none',
            fontSize: 14,
          }}>
            <span style={{ fontSize: 18 }}>{row.emoji}</span>
            <span style={{ color: theme.muted, minWidth: 100, fontSize: 12 }}>{row.key}</span>
            <span style={{ color: theme.text }}>{row.value}</span>
          </div>
        ))}
      </ReactiveBorder>
    </section>
  )
}
