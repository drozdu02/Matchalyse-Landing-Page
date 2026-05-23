"use client"

import type * as React from "react"
import { useAppComingSoon } from "@/components/app-coming-soon-provider"
import { cn } from "@/lib/utils"

type AppCtaLinkProps = React.ComponentProps<"button">

export function AppCtaLink({ className, onClick, children, ...props }: AppCtaLinkProps) {
  const { notifyComingSoon } = useAppComingSoon()

  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer text-left underline-offset-4 hover:underline",
        className
      )}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) notifyComingSoon()
      }}
      {...props}
    >
      {children}
    </button>
  )
}
