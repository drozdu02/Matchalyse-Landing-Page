"use client"

import Link from "next/link"
import { localePath } from "@/lib/i18n/config"
import { useLocale } from "@/lib/i18n/locale-provider"
import { cn } from "@/lib/utils"

export function LocaleSwitcher() {
  const { locale, dictionary } = useLocale()

  return (
    <div
      className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-sm font-medium"
      role="group"
      aria-label={dictionary.localeSwitcher.ariaLabel}
    >
      {(["pl", "en"] as const).map((code) => {
        const href = localePath(code)
        const isActive = locale === code

        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors",
              isActive
                ? "bg-white text-black"
                : "text-white/80 hover:text-white"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {dictionary.localeSwitcher[code]}
          </Link>
        )
      })}
    </div>
  )
}
