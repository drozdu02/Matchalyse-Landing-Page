export const locales = ["pl", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pl"

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localePath(locale: Locale, path = ""): string {
  if (locale === "pl") return path === "" ? "/" : path
  return path === "" ? "/en" : `/en${path}`
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "pl" ? "en" : "pl"
}
