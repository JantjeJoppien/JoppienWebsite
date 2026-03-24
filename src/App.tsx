import { useEffect, useRef, useState } from 'react'

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Interests from "./components/Interests.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import { getSectionFromPath, getSectionPath, type SectionKey } from "./siteRouting.ts";

export default function App() {
  const [dark, setDark] = useState(true)
  const initialRoute = useRef(getSectionFromPath(window.location.pathname))

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
  }, [])

  useEffect(() => {
    const targetSection = initialRoute.current

    const scrollToSection = () => {
      if (targetSection === 'home') {
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }

      document.getElementById(targetSection)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }

    const frame = window.requestAnimationFrame(scrollToSection)
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      const section = getSectionFromPath(window.location.pathname)

      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigateToSection(section: SectionKey) {
    const nextPath = getSectionPath(section)

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }

    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <Navbar theme={theme} toggleDark={() => setDark(!dark)} navigateToSection={navigateToSection} />
      <main id="main-content">
        <Hero theme={theme} navigateToSection={navigateToSection} />
        <About theme={theme} />
        <Interests theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  )
}
