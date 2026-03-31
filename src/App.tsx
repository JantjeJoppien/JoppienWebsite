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
import LegalPage from "./components/LegalPage.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import { getRouteFromPath, getRoutePath, type AppRoute, type PortfolioSlug, type SectionKey } from "./siteRouting.ts";

export default function App() {
  const [dark, setDark] = useState(true)
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromPath(window.location.pathname))
  const isFirstRouteSync = useRef(true)
  const isJantjePortfolio = route.kind === 'portfolio' && route.portfolio === 'jantje'

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
    if (route.kind === 'portfolio') {
      document.title = route.portfolio === 'jantje' ? 'Jantje Joppien' : 'Maximilian Joppien'
      return
    }

    document.title = 'Joppien'
  }, [route])

  useEffect(() => {
    const behavior = isFirstRouteSync.current ? 'auto' : 'smooth'
    isFirstRouteSync.current = false

    const frame = window.requestAnimationFrame(() => {
      if (route.kind !== 'portfolio' || route.section === 'home') {
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

  const theme = isJantjePortfolio
    ? {
        dark,
        bg: dark ? '#38392f' : '#fefae0',
        surface: dark ? '#45463a' : '#faedcd',
        border: dark ? '#9ea285' : '#d4a373',
        text: dark ? '#f5f0dc' : '#5f4a36',
        muted: dark ? '#d8d6be' : '#8c6f52',
        accent: dark ? '#c4a07a' : '#b9824d',
        accentLight: dark ? 'rgba(196, 160, 122, 0.12)' : 'rgba(212, 163, 115, 0.18)',
      }
    : {
        dark,
        bg: dark ? '#02182B' : '#EAEBED',
        surface: dark ? '#0b253d' : '#F6F8F9',
        border: dark ? '#173756' : '#B7C9D1',
        text: dark ? '#f7f8fb' : '#123547',
        muted: dark ? '#9fb3c8' : '#4F6C79',
        accent: dark ? '#D7263D' : '#006989',
        accentLight: dark ? 'rgba(215, 38, 61, 0.20)' : 'rgba(0, 105, 137, 0.14)',
      }

  const backgroundImage = isJantjePortfolio
    ? dark
      ? 'radial-gradient(circle at 14% 16%, rgba(196, 160, 122, 0.12), transparent 26%), radial-gradient(circle at 84% 14%, rgba(204, 213, 174, 0.08), transparent 30%), radial-gradient(circle at 76% 78%, rgba(233, 237, 201, 0.06), transparent 32%), linear-gradient(180deg, #434538 0%, #38392f 100%)'
      : 'radial-gradient(circle at 14% 16%, rgba(212, 163, 115, 0.22), transparent 24%), radial-gradient(circle at 86% 12%, rgba(254, 250, 224, 0.72), transparent 22%), radial-gradient(circle at 78% 74%, rgba(204, 213, 174, 0.18), transparent 28%), linear-gradient(180deg, #fffdf2 0%, #faedcd 100%)'
    : dark
      ? 'radial-gradient(circle at 14% 18%, rgba(215, 38, 61, 0.28), transparent 24%), radial-gradient(circle at 84% 14%, rgba(76, 118, 168, 0.22), transparent 26%), radial-gradient(circle at 74% 76%, rgba(215, 38, 61, 0.16), transparent 24%), linear-gradient(180deg, #072038 0%, #02182B 100%)'
      : 'radial-gradient(circle at 12% 16%, rgba(0, 105, 137, 0.16), transparent 24%), radial-gradient(circle at 88% 12%, rgba(255, 255, 255, 0.72), transparent 20%), radial-gradient(circle at 76% 74%, rgba(0, 105, 137, 0.10), transparent 26%), linear-gradient(180deg, #f6f8fa 0%, #eaebed 100%)'

  const activePortfolio = route.kind === 'portfolio' ? route.portfolio : 'maximilian'
  const navigateToSection = createSectionNavigator(activePortfolio)

  const mainContent = (() => {
    if (route.kind === 'home') {
      return (
        <HomeLanding
          theme={theme}
          navigateToPortfolio={navigateToPortfolio}
        />
      )
    }

    if (route.kind === 'legal') {
      return <LegalPage theme={theme} page={route.page} />
    }

    return (
      <>
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
      </>
    )
  })()

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        backgroundImage,
        color: theme.text,
        minHeight: '100vh',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
      <Navbar
        theme={theme}
        toggleDark={() => setDark(!dark)}
        navigateToPortfolio={navigateToPortfolio}
        navigateToSection={navigateToSection}
        route={route}
      />
      <main id="main-content">
        {mainContent}
      </main>
      <SiteFooter theme={theme} navigateToRoute={navigateToRoute} />
    </div>
  )
}
