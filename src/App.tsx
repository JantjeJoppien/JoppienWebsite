import { useEffect, useRef, useState } from 'react'

import HomeLanding from "./components/HomeLanding.tsx";
import Navbar from "./components/Navbar.tsx";
import MaximilianHero from "./components/MaximilianHero.tsx";
import MaximilianAbout from "./components/MaximilianAbout.tsx";
import MaximilianInterests from "./components/MaximilianInterests.tsx";
import MaximilianProjects from "./components/MaximilianProjects.tsx";
import MaximilianContact from "./components/MaximilianContact.tsx";
import JantjeHero from "./components/JantjeHero.tsx";
import JantjeAbout from "./components/JantjeAbout.tsx";
import JantjeInterests from "./components/JantjeInterests.tsx";
import JantjeProjects from "./components/JantjeProjects.tsx";
import JantjeContact from "./components/JantjeContact.tsx";
import { getRouteFromPath, getRoutePath, type AppRoute, type PortfolioSlug, type SectionKey } from "./siteRouting.ts";

export default function App() {
  const [dark, setDark] = useState(true)
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromPath(window.location.pathname))
  const isFirstRouteSync = useRef(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (media.matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [route])

  useEffect(() => {
    const handlePopState = () => setRoute(getRouteFromPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const behavior = isFirstRouteSync.current ? 'auto' : 'smooth'
    isFirstRouteSync.current = false

    const frame = window.requestAnimationFrame(() => {
      if (route.kind === 'home' || route.section === 'home') {
        window.scrollTo({ top: 0, behavior })
        return
      }

      document.getElementById(route.section)?.scrollIntoView({ behavior, block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [route])

  function navigateToRoute(nextRoute: AppRoute) {
    const nextPath = getRoutePath(nextRoute)

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }

    setRoute(nextRoute)
  }

  function navigateToPortfolio(portfolio: PortfolioSlug) {
    navigateToRoute({ kind: 'portfolio', portfolio, section: 'home' })
  }

  function createSectionNavigator(portfolio: PortfolioSlug) {
    return (section: SectionKey) => {
      navigateToRoute({ kind: 'portfolio', portfolio, section })
    }
  }

  const theme = {
    dark,
    bg: dark ? '#02182B' : '#EAEBED',
    surface: dark ? '#0b253d' : '#F6F8F9',
    border: dark ? '#173756' : '#B7C9D1',
    text: dark ? '#f7f8fb' : '#123547',
    muted: dark ? '#9fb3c8' : '#4F6C79',
    accent: dark ? '#D7263D' : '#006989',
    accentLight: dark ? 'rgba(215, 38, 61, 0.20)' : 'rgba(0, 105, 137, 0.14)',
  }

  if (route.kind === 'home') {
    return (
      <div
        style={{
          backgroundColor: theme.bg,
          backgroundImage: dark
            ? 'radial-gradient(circle at 14% 18%, rgba(215, 38, 61, 0.28), transparent 24%), radial-gradient(circle at 84% 14%, rgba(76, 118, 168, 0.22), transparent 26%), radial-gradient(circle at 74% 76%, rgba(215, 38, 61, 0.16), transparent 24%), linear-gradient(180deg, #072038 0%, #02182B 100%)'
            : 'radial-gradient(circle at 12% 16%, rgba(0, 105, 137, 0.16), transparent 24%), radial-gradient(circle at 88% 12%, rgba(255, 255, 255, 0.72), transparent 20%), radial-gradient(circle at 76% 74%, rgba(0, 105, 137, 0.10), transparent 26%), linear-gradient(180deg, #f6f8fa 0%, #eaebed 100%)',
          color: theme.text,
          minHeight: '100vh',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <HomeLanding theme={theme} navigateToPortfolio={navigateToPortfolio} toggleDark={() => setDark(!dark)} />
      </div>
    )
  }

  const navigateToSection = createSectionNavigator(route.portfolio)
  const portfolioLabel = route.portfolio === 'maximilian' ? 'Maximilian' : 'Jantje'

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        backgroundImage: dark
          ? 'radial-gradient(circle at 14% 18%, rgba(215, 38, 61, 0.28), transparent 24%), radial-gradient(circle at 84% 14%, rgba(76, 118, 168, 0.22), transparent 26%), radial-gradient(circle at 74% 76%, rgba(215, 38, 61, 0.16), transparent 24%), linear-gradient(180deg, #072038 0%, #02182B 100%)'
          : 'radial-gradient(circle at 12% 16%, rgba(0, 105, 137, 0.16), transparent 24%), radial-gradient(circle at 88% 12%, rgba(255, 255, 255, 0.72), transparent 20%), radial-gradient(circle at 76% 74%, rgba(0, 105, 137, 0.10), transparent 26%), linear-gradient(180deg, #f6f8fa 0%, #eaebed 100%)',
        color: theme.text,
        minHeight: '100vh',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
      <Navbar
        theme={theme}
        toggleDark={() => setDark(!dark)}
        portfolio={route.portfolio}
        portfolioLabel={portfolioLabel}
        navigateToSection={navigateToSection}
      />
      <main id="main-content">
        {route.portfolio === 'maximilian' ? (
          <>
            <MaximilianHero theme={theme} navigateToSection={navigateToSection} />
            <MaximilianAbout theme={theme} />
            <MaximilianInterests theme={theme} />
            <MaximilianProjects theme={theme} />
            <MaximilianContact theme={theme} />
          </>
        ) : (
          <>
            <JantjeHero theme={theme} navigateToSection={navigateToSection} />
            <JantjeAbout theme={theme} />
            <JantjeInterests theme={theme} />
            <JantjeProjects theme={theme} />
            <JantjeContact theme={theme} />
          </>
        )}
      </main>
    </div>
  )
}
