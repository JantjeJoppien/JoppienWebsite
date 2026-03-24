import type { CSSProperties, HTMLAttributes, MouseEvent } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  glowColor: string
  style?: CSSProperties
}

export default function ReactiveBorder({ glowColor, style, className = '', onMouseMove, children, ...props }: Props) {
  const edgeThreshold = 72

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const distances = {
      top: y,
      right: rect.width - x,
      bottom: rect.height - y,
      left: x,
    }
    const nearestEdge = Object.entries(distances).reduce((closest, edge) =>
      edge[1] < closest[1] ? edge : closest
    )
    const edgeDistance = nearestEdge[1]

    let glowX = x
    let glowY = y

    switch (nearestEdge[0]) {
      case 'top':
        glowY = 0
        break
      case 'right':
        glowX = rect.width
        break
      case 'bottom':
        glowY = rect.height
        break
      default:
        glowX = 0
        break
    }

    const isNearEdge = edgeDistance <= edgeThreshold

    element.style.setProperty('--glow-x', `${glowX}px`)
    element.style.setProperty('--glow-y', `${glowY}px`)
    element.style.setProperty('--glow-color', glowColor)
    element.style.setProperty('--glow-alpha', `${Math.max(0, 1 - edgeDistance / edgeThreshold)}`)
    element.dataset.edgeActive = isNearEdge ? 'true' : 'false'

    onMouseMove?.(event)
  }

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.dataset.edgeActive = 'false'
    event.currentTarget.style.setProperty('--glow-alpha', '0')
  }

  return (
    <div
      {...props}
      className={`reactive-border ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="reactive-border__glow" aria-hidden="true" />
      <div className="reactive-border__halo" aria-hidden="true" />
      <div className="reactive-border__content">
        {children}
      </div>
    </div>
  )
}
