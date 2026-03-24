export const BASE_PATH = '/maximilian'

export const sectionOrder = ['home', 'about', 'interests', 'projects', 'contact'] as const

export type SectionKey = (typeof sectionOrder)[number]

export function getSectionPath(section: SectionKey) {
  return section === 'home' ? `${BASE_PATH}/` : `${BASE_PATH}/${section}`
}

export function getSectionFromPath(pathname: string): SectionKey {
  if (pathname === BASE_PATH || pathname === `${BASE_PATH}/`) {
    return 'home'
  }

  if (pathname.startsWith(`${BASE_PATH}/`)) {
    const slug = pathname.slice(BASE_PATH.length + 1).split('/')[0]
    if (sectionOrder.includes(slug as SectionKey)) {
      return slug as SectionKey
    }
  }

  return 'home'
}
