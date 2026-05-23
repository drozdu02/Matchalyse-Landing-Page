import type { Locale } from "@/lib/i18n/config"

export type NavLink = {
  label: string
  href: string
}

export type TextBlock = {
  title: string
  body: string
}

export type FeatureCard = TextBlock & {
  meta: string
}

export type Step = {
  n: string
  title: string
  body: string
}

export type StatHighlight = TextBlock

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
    marqueeLabel: string
    scrollHint: string
  }
  about: {
    title: string
    paragraphs: string[]
    pillars: TextBlock[]
    legalNote: string
    legalLabel: string
  }
  howItWorks: {
    title: string
    description: string
    aside: string
    steps: Step[]
  }
  features: {
    title: string
    description: string
    cards: FeatureCard[]
  }
  stats: {
    title: string
    description: string
    aside: string
    highlights: StatHighlight[]
  }
  appComingSoon: {
    title: string
    message: string
    closeLabel: string
  }
  footer: {
    description: string
    sectionsTitle: string
    productTitle: string
    infoTitle: string
    appLink: string
    teamProfile: string
    contactLabel: string
    contactEmail: string
    socialTitle: string
    instagramLabel: string
    tiktokLabel: string
    disclaimer: string
  }
}
