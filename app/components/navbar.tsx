"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { APP_URL_PLACEHOLDER } from "@/constants/app-url-placeholder"
import { localePath } from "@/lib/i18n/config"
import { useLocale } from "@/lib/i18n/locale-provider"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ArrowUpRight, Menu, X } from "lucide-react"

const LANDING_PATHS = ["/", "/en"] as const

export default function Navbar() {
  const pathname = usePathname()
  const { locale, dictionary } = useLocale()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const isLanding = LANDING_PATHS.includes(
    pathname as (typeof LANDING_PATHS)[number]
  )

  React.useEffect(() => {
    if (!isLanding) return
    const onScroll = () => setScrolled(window.scrollY > 8)
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
      className={[
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl relative",
        "border-primary/35 bg-black/90",
        "shadow-[0_1px_0_0_rgba(191,255,0,0.22)]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/70 before:to-transparent",
        scrolled
          ? "border-primary/55 bg-black/95 shadow-[0_4px_28px_-6px_rgba(191,255,0,0.18)]"
          : "",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-[4.5rem] items-center justify-between sm:h-20">
          <Link
            href={localePath(locale)}
            className="group inline-flex shrink-0 items-baseline rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={dictionary.nav.homeAria}
          >
            <span className="font-display text-xl tracking-tight text-white sm:text-2xl">
              Match<span className="text-primary">alyse</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {dictionary.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3.5 py-2.5 text-base text-white/90 transition-colors hover:bg-primary/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LocaleSwitcher />

            <a
              href={APP_URL_PLACEHOLDER}
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-black hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
            >
              {dictionary.nav.cta}
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <a
                  href={APP_URL_PLACEHOLDER}
                  className="mt-1 inline-flex items-center justify-between rounded-lg bg-primary px-3 py-3.5 text-base font-semibold text-black"
                >
                  {dictionary.nav.cta}
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
