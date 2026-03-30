import type { LegalSlug } from "../siteRouting.ts";

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

const legalContent: Record<LegalSlug, {
  title: string
  intro: string
  sections: Array<{ heading: string; paragraphs: string[] }>
}> = {
  impressum: {
    title: 'Impressum',
    intro: 'Anbieterkennzeichnung fuer die Website joppien.dev auf Basis der aktuell im Projekt hinterlegten Informationen.',
    sections: [
      {
        heading: 'Angaben gemaess Paragraph 5 DDG',
        paragraphs: [
          'Maximilian Joppien',
          'E-Mail: maximilian@joppien.dev',
          'Die vollstaendige ladungsfaehige Anschrift ist im Repository nicht hinterlegt und sollte vor einer Live-Schaltung dieser Seite noch ergaenzt werden.',
        ],
      },
      {
        heading: 'Inhaltlich verantwortlich',
        paragraphs: [
          'Verantwortlich fuer die Inhalte dieser Website ist, soweit nicht anders gekennzeichnet, Maximilian Joppien.',
        ],
      },
      {
        heading: 'Haftung fuer Inhalte und Links',
        paragraphs: [
          'Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet wird jedoch keine Gewaehr uebernommen.',
          'Diese Website kann Links zu externen Angeboten enthalten. Fuer deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.',
        ],
      },
    ],
  },
  datenschutz: {
    title: 'Datenschutzerklaerung',
    intro: 'Diese Datenschutzerklaerung beschreibt die Verarbeitung personenbezogener Daten fuer die aktuelle technische Auspraegung dieser Website.',
    sections: [
      {
        heading: 'Verantwortliche Stelle',
        paragraphs: [
          'Verantwortlich fuer die Datenverarbeitung im Zusammenhang mit dieser Website ist Maximilian Joppien.',
          'Kontakt: maximilian@joppien.dev',
          'Die postalische Anschrift sollte vor einer produktiven Veroeffentlichung noch im Impressum und in dieser Datenschutzerklaerung ergaenzt werden.',
        ],
      },
      {
        heading: 'Server-Logfiles',
        paragraphs: [
          'Beim Aufruf dieser Website koennen durch das Hosting technisch notwendige Verbindungsdaten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit, angeforderte Datei, Referrer und User-Agent.',
          'Die konkrete Ausgestaltung haengt vom eingesetzten Hosting-Anbieter ab. Angaben zum Hosting-Dienstleister und zu Aufbewahrungsfristen sollten vor dem produktiven Einsatz noch ergaenzt werden.',
        ],
      },
      {
        heading: 'Kontaktaufnahme',
        paragraphs: [
          'Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen uebermittelten Angaben zur Bearbeitung der Anfrage und fuer moegliche Anschlussfragen verarbeitet.',
          'Die Verarbeitung erfolgt zur Kommunikation und Bearbeitung Ihres Anliegens.',
        ],
      },
      {
        heading: 'Analyse und Tracking',
        paragraphs: [
          'Nach dem aktuellen Stand dieses Projekts werden keine eigenen Analyse-, Marketing- oder Tracking-Dienste eingebunden.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        paragraphs: [
          'Sie haben im Rahmen der gesetzlichen Vorgaben insbesondere Rechte auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung sowie Widerspruch gegen bestimmte Verarbeitungen.',
          'Anfragen koennen an maximilian@joppien.dev gerichtet werden.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie-Hinweise',
    intro: 'Uebersicht zum Einsatz von Cookies und vergleichbaren Technologien auf dieser Website.',
    sections: [
      {
        heading: 'Aktueller Stand',
        paragraphs: [
          'Nach dem aktuellen Stand dieses Repositories setzt die Website keine eigenen Cookies fuer Analyse, Marketing oder Personalisierung.',
          'Auch fuer die dargestellte Dark-Mode-Umschaltung oder Navigation wird derzeit keine persistente Speicherung ueber Cookies verwendet.',
        ],
      },
      {
        heading: 'Technisch notwendige Prozesse',
        paragraphs: [
          'Abhaengig vom Hosting oder von spaeter eingebundenen Diensten koennen technisch notwendige Mechanismen eingesetzt werden, damit die Website ausgeliefert und sicher betrieben werden kann.',
          'Sollten kuenftig Cookies, Consent-Tools oder externe Dienste hinzukommen, muss diese Seite entsprechend aktualisiert werden.',
        ],
      },
      {
        heading: 'Kontakt',
        paragraphs: [
          'Bei Fragen zu Cookies oder aehnlichen Technologien kontaktieren Sie bitte maximilian@joppien.dev.',
        ],
      },
    ],
  },
}

export default function LegalPage({
  theme,
  page,
}: {
  theme: Theme
  page: LegalSlug
}) {
  const content = legalContent[page]

  return (
    <section className="legal-page">
      <div
        className="legal-page__card"
        style={{
          border: '1px solid ' + theme.border,
          background: theme.dark ? 'rgba(11, 37, 61, 0.76)' : 'rgba(255, 255, 255, 0.84)',
          boxShadow: theme.dark ? '0 24px 60px rgba(0, 0, 0, 0.24)' : '0 24px 60px rgba(18, 53, 71, 0.10)',
        }}
      >
        <p className="legal-page__eyebrow" style={{ color: theme.accent }}>
          Rechtliches
        </p>
        <h1 className="legal-page__title" style={{ color: theme.text }}>
          {content.title}
        </h1>
        <p className="legal-page__intro" style={{ color: theme.muted }}>
          {content.intro}
        </p>

        <div className="legal-page__sections">
          {content.sections.map((section) => (
            <section key={section.heading} className="legal-page__section">
              <h2 style={{ color: theme.text }}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} style={{ color: theme.muted }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
