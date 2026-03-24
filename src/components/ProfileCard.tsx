import { useState } from 'react'

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

interface ProfileCardProps {
  theme: Theme
  imageSrc: string
}

export default function ProfileCard({ theme, imageSrc }: ProfileCardProps) {
  const [transform, setTransform] = useState('perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - bounds.left
    const offsetY = event.clientY - bounds.top
    const rotateY = ((offsetX / bounds.width) - 0.5) * 16
    const rotateX = (0.5 - (offsetY / bounds.height)) * 16

    setTransform(
      `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    )
  }

  function handleLeave() {
    setTransform('perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      className="profile-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        '--profile-border': theme.border,
        '--profile-surface': theme.surface,
        '--profile-text': theme.text,
        '--profile-muted': theme.muted,
        '--profile-accent': theme.accent,
        '--profile-accent-light': theme.accentLight,
        transform,
      } as React.CSSProperties}
    >
      <div className="profile-card__frame">
        <div className="profile-card__image-wrap">
          <img className="profile-card__image" src={imageSrc} alt="Maximilian Joppien" />
        </div>

        <div className="profile-card__body">
          <h2 className="profile-card__name">Maximilian Joppien</h2>
          <p className="profile-card__role">Entwickler, Gamer</p>

          <div className="profile-card__chips">
            <span>Frontend</span>
            <span>Gaming</span>
            <span>Sports</span>
          </div>
        </div>
      </div>
    </div>
  )
}
