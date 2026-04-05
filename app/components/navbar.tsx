"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { APP_URL_PLACEHOLDER } from "@/constants/app-url-placeholder"
import { links } from "@/constants/links"
import { ArrowUpRight, Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    if (pathname !== "/") return
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  if (pathname !== "/") return null

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        scrolled
          ? "border-b border-border bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-baseline gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Strona główna"
          >
            <span className="font-display text-lg tracking-tight text-white">
              Ticket
              <span className="text-primary">Dashboard</span>
            </span>
            <span className="hidden text-xs font-medium tracking-wide text-white sm:inline">
              analiza danych sportowych
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={APP_URL_PLACEHOLDER}
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
            >
              Przejdź do aplikacji
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <div className="rounded-xl border border-border bg-slate-950/60 p-2 backdrop-blur-xl">
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-white hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={APP_URL_PLACEHOLDER}
                  className="mt-1 inline-flex items-center justify-between rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-slate-950"
                >
                  Przejdź do aplikacji
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
