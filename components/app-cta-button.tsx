"use client"

import type * as React from "react"
import { Button } from "@/components/ui/button"
import { useAppComingSoon } from "@/components/app-coming-soon-provider"
import { cn } from "@/lib/utils"

type AppCtaButtonProps = React.ComponentProps<typeof Button>

export function AppCtaButton({ className, onClick, ...props }: AppCtaButtonProps) {
  const { notifyComingSoon } = useAppComingSoon()

  return (
    <Button
      type="button"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) notifyComingSoon()
      }}
      {...props}
    />
  )
}
