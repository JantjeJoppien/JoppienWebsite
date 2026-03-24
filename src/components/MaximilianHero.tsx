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

import GlitchText from "./GlitchText.tsx";
import maximilianImage from "../assets/Maximilian.PNG";
import ProfileCard from "./ProfileCard.tsx";
import { getPortfolioPath, type SectionKey } from "../siteRouting.ts";

export default function MaximilianHero({ theme, navigateToSection }: { theme: Theme, navigateToSection: (section: SectionKey) => void }) {
  function handleSectionClick(event: React.MouseEvent<HTMLAnchorElement>, section: SectionKey) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigateToSection(section)
  }

  return (
    <section className="hero-section reveal-up is-visible" data-reveal style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '120px 48px 80px',
      width: 'min(1440px, 100%)',
      margin: '0 auto',
      gap: 64,
    }}>
      <div className="hero-copy" style={{ flex: '1 1 560px', minWidth: 0 }}>
        <p style={{ color: theme.accent, fontSize: 15, marginBottom: 24, letterSpacing: '0.05em' }}>
          Hey, ich bin
        </p>

        <GlitchText text="Maxi" color={theme.text} dark={theme.dark} />

        <p style={{
          fontSize: 19,
          lineHeight: 1.85,
          color: theme.muted,
          maxWidth: 520,
          marginBottom: 48,
        }}>
          Ich bin Entwickler und leidenschaftlicher Gamer.
          Auf dieser Seite erfährst du ein bisschen mehr über mich, meine
          Projekte und was mich antreibt.
        </p>

        <div className="hero-actions reveal-up reveal-delay-1" data-reveal style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href={getPortfolioPath('maximilian', 'about')} onClick={(event) => handleSectionClick(event, 'about')} className="button-link button-link--primary" style={{
            padding: '13px 30px',
            backgroundColor: theme.accent,
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            borderRadius: 4,
          }}>
            Mehr erfahren
          </a>
          <a href={getPortfolioPath('maximilian', 'contact')} onClick={(event) => handleSectionClick(event, 'contact')} className="button-link button-link--secondary" style={{
            padding: '13px 30px',
            border: '1px solid ' + theme.border,
            color: theme.muted,
            fontSize: 15,
            borderRadius: 4,
          }}>
            Kontakt aufnehmen
          </a>
        </div>

        <div className="hero-tags reveal-up reveal-delay-2" data-reveal style={{
          marginTop: 80,
          display: 'flex',
          gap: 40,
          paddingTop: 40,
          borderTop: '1px solid ' + theme.border,
        }}>
          {[
            { emoji: '🎮', label: 'Gamer' },
            { emoji: '⚽', label: 'Fußball-Fan' },
            { emoji: '🏎️', label: 'Formel 1' },
            { emoji: '💻', label: 'Entwickler' },
          ].map((tag) => (
            <div key={tag.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, marginBottom: 6 }}>{tag.emoji}</div>
              <div style={{ fontSize: 13, color: theme.muted, letterSpacing: '0.05em' }}>{tag.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-portrait reveal-up reveal-delay-1" data-reveal>
        <ProfileCard theme={theme} imageSrc={maximilianImage} />
      </div>
    </section>
  )
}
