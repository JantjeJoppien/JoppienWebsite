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

const projects = [
  {
    emoji: '🧠',
    title: 'QuizBuster',
    desc: 'Ein Quiz-Spiel mit Fokus auf saubere Struktur, Performance und eine gute User Experience.' +
        ' Ideal für spannende Wissensduelle.',
    tags: ['React', 'FastAPI', 'TypeScript'],
    repo: 'https://github.com/mvxsvchs/QuizBuster',
  },
  {
    emoji: '🎯',
    title: 'Lumaka - StickerQuest',
    desc: 'Ein spielerisches System rund um Sticker und Sammlungen. Entwickelt, ' +
        'um Motivation und Fortschritt visuell greifbar zu machen.',
    tags: ['Kotlin', 'Android', 'Mobile', 'Gamification'],
    repo: 'https://github.com/mvxsvchs/LumakaStickerQuest',
  }
]

export default function Projects({ theme }: { theme: Theme }) {
  return (
    <section id="projects" style={{ padding: '96px 48px', borderTop: '1px solid ' + theme.border }}>
      <p style={{ color: theme.accent, fontSize: 13, letterSpacing: '0.1em', marginBottom: 16 }}>
        — Was ich so gebaut habe
      </p>
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: 800,
        letterSpacing: '-1.5px',
        color: theme.text,
        marginBottom: 56,
        lineHeight: 1.1,
      }}>
        Projekte
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {projects.map((project) => (
          <ReactiveBorder key={project.title} glowColor={theme.accent} style={{
            backgroundColor: theme.surface,
            border: '1px solid ' + theme.border,
            borderRadius: 12,
            padding: '28px 32px',
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
          }}>
            <div style={{ fontSize: 36, flexShrink: 0, marginTop: 4 }}>{project.emoji}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: theme.text, fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{project.title}</h3>
              <p style={{ color: theme.muted, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 12,
                    color: theme.accent,
                    backgroundColor: theme.accentLight,
                    padding: '4px 12px',
                    borderRadius: 20,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} auf GitHub öffnen`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: 18,
                  color: theme.accent,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                GitHub ansehen
              </a>
            </div>
          </ReactiveBorder>
        ))}
      </div>
    </section>
  )
}
