export const portfolioSlugs = ['maximilian', 'jantje'] as const
export const sectionOrder = ['home', 'about', 'interests', 'projects', 'contact'] as const

export type PortfolioSlug = (typeof portfolioSlugs)[number]
export type SectionKey = (typeof sectionOrder)[number]

export type AppRoute =
  | { kind: 'home' }
  | { kind: 'portfolio', portfolio: PortfolioSlug, section: SectionKey }

export function getPortfolioPath(portfolio: PortfolioSlug, section: SectionKey) {
  return section === 'home' ? `/${portfolio}/` : `/${portfolio}/${section}`
}

export function getRoutePath(route: AppRoute) {
  if (route.kind === 'home') {
    return '/'
  }

  return getPortfolioPath(route.portfolio, route.section)
}

export function getRouteFromPath(pathname: string): AppRoute {
  if (pathname === '/' || pathname === '/main') {
    return { kind: 'home' }
  }

  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  const parts = normalized.split('/').filter(Boolean)

  if (parts.length >= 1 && portfolioSlugs.includes(parts[0] as PortfolioSlug)) {
    const portfolio = parts[0] as PortfolioSlug
    const section = (parts[1] ?? 'home') as SectionKey

    if (sectionOrder.includes(section)) {
      return { kind: 'portfolio', portfolio, section }
    }
  }

  return { kind: 'home' }
}
