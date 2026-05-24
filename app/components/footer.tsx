import { AppCtaLink } from "@/components/app-cta-link"
import { SocialLinks } from "@/components/social-links"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { cn } from "@/lib/utils"

function FooterDot() {
  return (
    <span className="shrink-0 text-white/25" aria-hidden="true">
      ·
    </span>
  )
}

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer
  const nav = getDictionary(locale).nav

  return (
    <footer className="border-t border-white/10 py-10 sm:py-12">
      <div
        className={cn(
          "mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-4 text-center sm:px-6"
        )}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-white/85 sm:gap-x-2.5">
          <span className="shrink-0 font-display text-sm text-white">Matchalyse</span>

          {nav.links.map((link) => (
            <span key={link.href} className="contents">
              <FooterDot />
              <a
                className="shrink-0 whitespace-nowrap hover:text-white hover:underline underline-offset-4"
                href={link.href}
              >
                {link.label}
              </a>
            </span>
          ))}

          <FooterDot />

          <AppCtaLink className="shrink-0 whitespace-nowrap text-xs text-white/85 hover:text-white">
            {t.appLink}
          </AppCtaLink>

          <FooterDot />

          <a
            className="shrink-0 whitespace-nowrap hover:text-white hover:underline underline-offset-4"
            href={`mailto:${t.contactEmail}`}
          >
            {t.contactEmail}
          </a>

          <SocialLinks
            size="sm"
            className="shrink-0"
            instagramLabel={t.instagramLabel}
            tiktokLabel={t.tiktokLabel}
          />
        </div>

        <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-white/55">
          <span className="shrink-0 whitespace-nowrap">
            © {new Date().getFullYear()} Matchalyse
          </span>
          <FooterDot />
          <p className="min-w-0 text-pretty">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
