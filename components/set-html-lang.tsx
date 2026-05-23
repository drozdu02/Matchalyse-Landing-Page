"use client"

import * as React from "react"
import type { Locale } from "@/lib/i18n/config"

export function SetHtmlLang({ locale }: { locale: Locale }) {
  React.useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
