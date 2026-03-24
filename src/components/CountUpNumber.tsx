import { useEffect, useMemo, useState } from 'react'

function getDaysSinceMarriage() {
  const startDate = new Date(2025, 4, 5)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diffMs = today.getTime() - startDate.getTime()

  return Math.max(0, Math.floor(diffMs / 86400000))
}

export default function CountUpNumber() {
  const target = useMemo(() => getDaysSinceMarriage(), [])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 3600
    const startTime = performance.now()

    let frame = 0

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [target])

  useEffect(() => {
    const now = new Date()
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    const timeout = window.setTimeout(() => {
      window.location.reload()
    }, nextMidnight.getTime() - now.getTime())

    return () => window.clearTimeout(timeout)
  }, [])

  return <span>{count}</span>
}
