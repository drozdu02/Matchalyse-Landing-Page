import type { Locale } from "@/lib/i18n/config"

export type NavLink = {
  label: string
  href: string
}

export type Step = {
  n: string
  title: string
  body: string
}

export type Dictionary = {
  locale: Locale
  meta: {
    title: string
    description: string
  }
  nav: {
    homeAria: string
    openMenu: string
    closeMenu: string
    cta: string
    links: NavLink[]
  }
  localeSwitcher: {
    ariaLabel: string
    en: string
    pl: string
  }
  hero: {
    title: string
    titleLine2: string
    description: string
    ctaApp: string
    ctaLearn: string
  }
  brandShowcase: {
    heading: string
    slidesTitle: string
    slidesDescription: string
    marqueeLabel: string
    scrollHint: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
  howItWorks: {
    title: string
    description: string
    aside: string
    steps: Step[]
  }
  stats: {
    title: string
    description: string
    aside: string
  }
  appComingSoon: {
    title: string
    message: string
    closeLabel: string
  }
  footer: {
    appLink: string
    contactEmail: string
    instagramLabel: string
    tiktokLabel: string
    disclaimer: string
  }
}
