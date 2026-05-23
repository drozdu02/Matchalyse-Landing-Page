"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AppCtaButton } from "@/components/app-cta-button"
import { localePath } from "@/lib/i18n/config"
import { useLocale } from "@/lib/i18n/locale-provider"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Menu, X } from "lucide-react"

const LANDING_PATHS = ["/", "/en"] as const
const SCROLL_COMPACT_THRESHOLD = 32

export default function Navbar() {
  const pathname = usePathname()
  const { locale, dictionary } = useLocale()
  const [open, setOpen] = React.useState(false)
  const [compact, setCompact] = React.useState(false)

  const isLanding = LANDING_PATHS.includes(
    pathname as (typeof LANDING_PATHS)[number]
  )

  React.useEffect(() => {
    if (!isLanding) return

    const onScroll = () => {
      setCompact(window.scrollY > SCROLL_COMPACT_THRESHOLD)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isLanding])

  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  if (!isLanding) return null

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        "before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/70 before:to-transparent before:transition-opacity before:duration-300",
        compact
          ? "border-primary/55 bg-black/95 shadow-[0_8px_32px_-8px_rgba(191,255,0,0.22)] before:opacity-100"
          : "border-primary/15 bg-black/40 shadow-none before:opacity-60"
      )}
    >
      <nav className="relative w-full pl-3 pr-3 sm:pl-5 sm:pr-5 lg:pl-8 lg:pr-10 xl:pl-12 xl:pr-14">
        <div
          className={cn(
            "relative flex w-full items-center transition-[height] duration-300 ease-out",
            compact ? "h-14 sm:h-16" : "h-[4.5rem] sm:h-20"
          )}
        >
          <Link
            href={localePath(locale)}
            className="group relative z-10 inline-flex shrink-0 items-baseline rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={dictionary.nav.homeAria}
          >
            <span
              className={cn(
                "font-display tracking-tight text-white transition-[font-size] duration-300 ease-out",
                compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              )}
            >
              Match<span className="text-primary">alyse</span>
            </span>
          </Link>

          <div className="pointer-events-none absolute inset-x-0 hidden items-center justify-center md:flex">
            <div className="pointer-events-auto flex items-center gap-1">
              {dictionary.nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-md px-3.5 text-white/90 transition-[padding,font-size,color,background-color] duration-300 ease-out hover:bg-primary/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    compact ? "py-2 text-sm" : "py-2.5 text-base"
                  )}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "relative z-10 ml-auto flex items-center transition-[gap] duration-300 ease-out",
              compact ? "gap-2" : "gap-3"
            )}
          >
            <LocaleSwitcher />

            <AppCtaButton
              className={cn(
                "hidden h-auto items-center gap-2 rounded-full bg-primary font-semibold text-black hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex",
                "transition-[padding,font-size] duration-300 ease-out",
                compact
                  ? "px-4 py-2 text-sm"
                  : "px-5 py-2.5 text-base"
              )}
            >
              {dictionary.nav.cta}
              <ArrowUpRight
                className={cn(
                  "shrink-0 transition-[width,height] duration-300 ease-out",
                  compact ? "h-4 w-4" : "h-5 w-5"
                )}
                aria-hidden="true"
              />
            </AppCtaButton>

            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-white transition-[width,height,background-color] duration-300 ease-out hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden",
                compact ? "h-9 w-9" : "h-11 w-11"
              )}
              aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className={cn(compact ? "h-5 w-5" : "h-6 w-6")} />
              ) : (
                <Menu className={cn(compact ? "h-5 w-5" : "h-6 w-6")} />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <div className="rounded-xl border border-primary/25 bg-black/95 p-2 shadow-[0_8px_32px_-8px_rgba(191,255,0,0.2)] backdrop-blur-xl">
              <div className="flex flex-col">
                {dictionary.nav.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3.5 text-base text-white/90 hover:bg-primary/10"
                  >
                    {l.label}
                  </a>
                ))}
                <AppCtaButton className="mt-1 inline-flex h-auto w-full items-center justify-between rounded-lg bg-primary px-3 py-3.5 text-base font-semibold text-black">
                  {dictionary.nav.cta}
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </AppCtaButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
