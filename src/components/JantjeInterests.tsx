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

const interests = [
  {
    emoji: '🌿',
    title: 'Interesse Eins',
    desc: 'Platzhaltertext fuer ein Thema, das Jantje spaeter naeher beschreiben kann. Hier passt zum Beispiel ein persoenlicher Schwerpunkt hinein.',
  },
  {
    emoji: '📚',
    title: 'Interesse Zwei',
    desc: 'Noch ein Bereich fuer Inhalte, Hobbys oder Inspirationen. Die Karte ist bewusst im gleichen Stil wie bei Maximilian aufgebaut.',
  },
  {
    emoji: '✨',
    title: 'Interesse Drei',
    desc: 'Dieser Platzhalter kann spaeter mit einer kurzen Beschreibung gefuellt werden, um der Seite mehr Charakter und persoenlichen Kontext zu geben.',
  },
]

export default function JantjeInterests({ theme }: { theme: Theme }) {
  return (
    <section id="interests" className="site-section reveal-up" data-reveal style={{ padding: '96px 48px', borderTop: '1px solid ' + theme.border }}>
      <p style={{ color: theme.accent, fontSize: 14, letterSpacing: '0.1em', marginBottom: 16 }}>
        — Was mich interessiert
      </p>
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: 800,
        letterSpacing: '-1.5px',
        color: theme.text,
        marginBottom: 56,
        lineHeight: 1.1,
      }}>
        Interessen
      </h2>

      <div className="interests-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
      }}>
        {interests.map((item, index) => (
          <ReactiveBorder key={item.title} className={`reveal-up reveal-delay-${Math.min(index + 1, 3)}`} data-reveal glowColor={theme.dark ? theme.accent : 'rgba(212, 163, 115, 0.40)'} style={{
            backgroundColor: theme.surface,
            border: '1px solid ' + theme.border,
            borderRadius: 12,
            padding: '32px 28px',
            transition: 'background 0.2s',
          }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>{item.emoji}</div>
            <h3 style={{ color: theme.text, fontWeight: 700, fontSize: 19, marginBottom: 12 }}>{item.title}</h3>
            <p style={{ color: theme.muted, fontSize: 15, lineHeight: 1.8 }}>{item.desc}</p>
          </ReactiveBorder>
        ))}
      </div>
    </section>
  )
}
