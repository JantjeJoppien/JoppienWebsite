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
    intro: 'Hier finden Sie die offiziellen Kontakt- und Verantwortlichkeitsangaben zu joppien.dev als privatem Portfolio-Auftritt.',
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        paragraphs: [
          'Maximilian Joppien',
          'E-Mail: familie@joppien.dev',
          'Telefon: +49 2431 9015179',
          'Eine ladungsfähige Anschrift wird zeitnah hinterlegt, sobald die finale private Adresse bestätigt ist.',
          'Privater Portfolio-Auftritt ohne Geschäftstätigkeit.',
        ],
      },
      {
        heading: 'Inhaltlich Verantwortliche',
        paragraphs: [
          'Sämtliche Inhalte verantwortet Maximilian Joppien.',
        ],
      },
      {
        heading: 'Register, Aufsicht, Berufsrecht',
        paragraphs: [
          'Es handelt sich um rein private Portfolio-Auftritte; eine Eintragung in ein Handels-, Partnerschafts- oder Vereinsregister findet nicht statt.',
          'Eine Genehmigung nach besonderen Berufsgesetzen oder eine zuständige Aufsichtsbehörde ist nicht erforderlich.',
        ],
      },
      {
        heading: 'Kontakt',
        paragraphs: [
          'Per E-Mail sind wir unter familie@joppien.dev erreichbar.',
          'Telefonisch erreichen Sie uns unter +49 2431 9015179.',
        ],
      },
      {
        heading: 'Digital Services Act / DSA',
        paragraphs: [
          'Nach aktueller Einschätzung handelt es sich bei diesem Portfolio nicht um einen vom DSA erfassten Vermittlungsdienst und daher besteht dort keine gesonderte Meldepflicht.',
        ],
      },
      {
        heading: 'Haftung für Inhalte',
        paragraphs: [
          'Die Inhalte wurden mit größtmöglicher Sorgfalt erstellt. Für Aktualität, Vollständigkeit oder Fehlerfreiheit wird jedoch keine Gewähr übernommen.',
          'Verweise auf externe Inhalte erfolgen nach besten Wissen, für deren Inhalte sind die jeweiligen Betreiber verantwortlich.',
        ],
      },
    ],
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    intro: 'Diese Erklärung beschreibt, wie personenbezogene Daten für den aktuellen Stand des Projekts verarbeitet werden.',
    sections: [
      {
        heading: 'Verantwortlicher',
        paragraphs: [
          'Verantwortlich für die Verarbeitung ist Maximilian Joppien.',
          'Kontakt: maximilian@joppien.dev',
          'Eine vollständige postalische Anschrift sollte vor einer Live-Schaltung ergänzt werden.',
        ],
      },
      {
        heading: 'Server-Logfiles',
        paragraphs: [
          'Beim Besuch der Website erhebt der Hosting-Anbieter standardmäßig Verbindungsdaten wie IP-Adresse, aufgerufene Seite, Datum/Uhrzeit, Referrer und User-Agent.',
          'Diese Daten werden nur zur technischen Sicherstellung und Abwehr von Angriffen gespeichert.',
        ],
      },
      {
        heading: 'Kontaktaufnahme',
        paragraphs: [
          'Bei einer Kontaktaufnahme per E-Mail werden die angegebenen Informationen zur Beantwortung der Anfrage verarbeitet.',
          'Grundlage ist unser berechtigtes Interesse an der Kommunikationsführung.',
        ],
      },
      {
        heading: 'Analyse & Tracking',
        paragraphs: [
          'Aktuell werden keine Analyse-, Marketing- oder Trackingdienste eingebunden.',
          'Sollten zukünftig solche Tools hinzukommen, wird diese Erklärung entsprechend erweitert.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        paragraphs: [
          'Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch gegen bestimmte Verarbeitungen verlangen.',
          'Wenden Sie sich dazu bitte an maximilian@joppien.dev.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie-Hinweise',
    intro: 'Hinweise zum Einsatz von Cookies und ähnlichen Technologien.',
    sections: [
      {
        heading: 'Aktuelle Verwendung',
        paragraphs: [
          'Zum jetzigen Zeitpunkt werden keine eigenen Cookies zu Analyse-, Marketing- oder Personalisierungszwecken gesetzt.',
          'Auch der Dark-Mode oder die Navigation arbeiten ohne persistente Cookies.',
        ],
      },
      {
        heading: 'Technisch notwendige Mechanismen',
        paragraphs: [
          'Abhängig vom Hosting oder zukünftigen Integrationen können technische Cookies notwendig sein, damit Inhalte ausgeliefert werden.',
          'Entsprechende Mechanismen werden bei Bedarf ergänzt und dokumentiert.',
        ],
      },
      {
        heading: 'Kontakt',
        paragraphs: [
          'Fragen zum Thema Cookies richten Sie bitte an maximilian@joppien.dev.',
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
                    {paragraph.split('\n').map((line, index, array) => (
                      <span key={`${paragraph}-${index}`}>
                        {line}
                        {index < array.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </section>
            ))}
        </div>
      </div>
    </section>
  )
}
