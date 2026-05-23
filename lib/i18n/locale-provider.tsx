"use client"

import * as React from "react"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

type LocaleContextValue = {
  locale: Locale
  dictionary: Dictionary
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: LocaleContextValue & { children: React.ReactNode }) {
  const value = React.useMemo(
    () => ({ locale, dictionary }),
    [locale, dictionary]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = React.useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return context
}
