import { SOCIAL_LINKS } from "@/constants/social-links"
import { cn } from "@/lib/utils"

type SocialLinksProps = {
  instagramLabel: string
  tiktokLabel: string
  className?: string
  size?: "default" | "sm"
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.6 3.1 2.5 5 5.5 5.5v3.2c-2.2 0-4.2-.7-5.8-2v7.5a6.3 6.3 0 1 1-5.7-6.3h.1v3.3a3 3 0 1 0 2.1 2.8V3h3.8z" />
    </svg>
  )
}

const linkBaseClassName =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function SocialLinks({
  instagramLabel,
  tiktokLabel,
  className,
  size = "default",
}: SocialLinksProps) {
  const compact = size === "sm"

  return (
    <div className={cn("flex", compact ? "gap-2" : "gap-3", className)}>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkBaseClassName, compact ? "h-8 w-8" : "h-11 w-11")}
        aria-label={instagramLabel}
      >
        <InstagramIcon className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </a>
      <a
        href={SOCIAL_LINKS.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkBaseClassName, compact ? "h-8 w-8" : "h-11 w-11")}
        aria-label={tiktokLabel}
      >
        <TikTokIcon className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </a>
    </div>
  )
}
