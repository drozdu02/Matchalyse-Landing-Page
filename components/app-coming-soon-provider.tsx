"use client"

import * as React from "react"
import { X } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-provider"
import { cn } from "@/lib/utils"

type AppComingSoonContextValue = {
  notifyComingSoon: () => void
}

const AppComingSoonContext =
  React.createContext<AppComingSoonContextValue | null>(null)

const AUTO_DISMISS_MS = 7000

export function AppComingSoonProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { dictionary } = useLocale()
  const [visible, setVisible] = React.useState(false)
  const dismissTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  const clearDismissTimer = React.useCallback(() => {
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current)
      dismissTimerRef.current = null
    }
  }, [])

  const dismiss = React.useCallback(() => {
    clearDismissTimer()
    setVisible(false)
  }, [clearDismissTimer])

  const notifyComingSoon = React.useCallback(() => {
    clearDismissTimer()
    setVisible(true)
    dismissTimerRef.current = setTimeout(() => {
      setVisible(false)
      dismissTimerRef.current = null
    }, AUTO_DISMISS_MS)
  }, [clearDismissTimer])

  React.useEffect(() => {
    if (!visible) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [visible, dismiss])

  React.useEffect(() => () => clearDismissTimer(), [clearDismissTimer])

  return (
    <AppComingSoonContext.Provider value={{ notifyComingSoon }}>
      {children}

      <div
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 transition-all duration-300 sm:bottom-8",
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        )}
      >
        <div
          role="status"
          className={cn(
            "pointer-events-auto w-full max-w-md rounded-2xl border border-primary/35 bg-black/95 p-5 shadow-[0_16px_48px_-12px_rgba(191,255,0,0.25)] backdrop-blur-xl",
            !visible && "hidden"
          )}
        >
          <div className="flex items-start gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold tracking-tight text-primary">
                {dictionary.appComingSoon.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {dictionary.appComingSoon.message}
              </p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={dictionary.appComingSoon.closeLabel}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </AppComingSoonContext.Provider>
  )
}

export function useAppComingSoon() {
  const context = React.useContext(AppComingSoonContext)
  if (!context) {
    throw new Error("useAppComingSoon must be used within AppComingSoonProvider")
  }
  return context
}
