# Maximilian Joppien

Persönliche Portfolio-Website von Maximilian Joppien, gebaut mit React, TypeScript und Vite.

## Überblick

Die Website dient als persönliche Portfolio-Seite mit Fokus auf:

- kurze Vorstellung
- Interessen
- ausgewählte Projekte
- Kontaktmöglichkeiten

Optisch unterstützt die Seite Light Mode und Dark Mode mit einer Farbwelt auf Basis von Crimson und Nights.

## Tech-Stack

- React 19
- TypeScript
- Vite
- ESLint
- Tailwind CSS

## Lokale Entwicklung

Voraussetzungen:

- Node.js 20+ empfohlen
- npm

Projekt starten:

```bash
npm install
npm run dev
```

Die Entwicklungsumgebung läuft anschließend standardmäßig über Vite lokal im Browser.

## Verfügbare Skripte

```bash
npm run dev
```

Startet den lokalen Entwicklungsserver.

```bash
npm run build
```

Erstellt den Production-Build im Ordner `dist/`.

```bash
npm run preview
```

Startet eine lokale Vorschau des Production-Builds.

```bash
npm run lint
```

Prüft den Code mit ESLint.

## Projektstruktur

```text
src/
  components/   Wiederverwendbare UI-Bausteine
  App.tsx       App-Layout und Theme-Logik
  main.tsx      Einstiegspunkt der Anwendung
  index.css     Globale Styles
public/         Statische Dateien
```

## Design

Die Website unterstützt Light Mode und Dark Mode. Die aktuelle Farbwelt basiert auf:

- Crimson: `#D7263D`
- Nights: `#02182B`

## Deployment

Das Repository enthält bereits eine einfache Deployment-Struktur:

- [Dockerfile](./Dockerfile) für ein Nginx-basiertes Container-Setup
- [deploy.yml](./.github/workflows/deploy.yml) für automatisches Deployment über GitHub Actions

Der Workflow wird bei einem Push auf `main` ausgeführt und verbindet sich per SSH mit dem Server. Dort werden anschließend `git pull`, `docker compose up -d --build` und ein Docker-Image-Cleanup ausgeführt.

Wenn du deployen willst, sollten diese GitHub Secrets gesetzt sein:

- `SERVER_IP_ADDRESS`
- `SERVER_USER`
- `SERVER_SSH_KEY`

## Empfehlung vor dem Commit

Vor jedem Commit mindestens einmal ausführen:

```bash
npm run build
```
