import { useState } from 'react'

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Interests from "./components/Interests.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";

export default function App() {
  const [dark, setDark] = useState(true)

  const theme = {
    dark,
    bg: dark ? '#02182B' : '#f5f8fb',
    surface: dark ? '#0b253d' : '#ffffff',
    border: dark ? '#173756' : '#bfd0de',
    text: dark ? '#f7f8fb' : '#02182B',
    muted: dark ? '#9fb3c8' : '#4d6174',
    accent: '#D7263D',
    accentLight: dark ? 'rgba(215, 38, 61, 0.20)' : 'rgba(215, 38, 61, 0.12)',
  }

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        backgroundImage: dark
          ? 'radial-gradient(circle at 14% 18%, rgba(215, 38, 61, 0.28), transparent 24%), radial-gradient(circle at 84% 14%, rgba(76, 118, 168, 0.22), transparent 26%), radial-gradient(circle at 74% 76%, rgba(215, 38, 61, 0.16), transparent 24%), linear-gradient(180deg, #072038 0%, #02182B 100%)'
          : 'radial-gradient(circle at 12% 16%, rgba(215, 38, 61, 0.16), transparent 24%), radial-gradient(circle at 88% 12%, rgba(2, 24, 43, 0.12), transparent 22%), radial-gradient(circle at 76% 74%, rgba(215, 38, 61, 0.10), transparent 26%), linear-gradient(180deg, #f8fbfd 0%, #edf3f8 100%)',
        color: theme.text,
        minHeight: '100vh',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
      <Navbar theme={theme} toggleDark={() => setDark(!dark)} />
      <main id="main-content">
        <Hero theme={theme} />
        <About theme={theme} />
        <Interests theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  )
}
