import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import { en } from "@/lib/i18n/dictionaries/en"
import { pl } from "@/lib/i18n/dictionaries/pl"

const dictionaries: Record<Locale, Dictionary> = {
  pl,
  en,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
