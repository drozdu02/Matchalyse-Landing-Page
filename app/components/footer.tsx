import { AppCtaLink } from "@/components/app-cta-link"
import { SocialLinks } from "@/components/social-links"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer
  const nav = getDictionary(locale).nav

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-lg tracking-tight text-white">
              Matchalyse
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white">
              {t.description}
            </p>
            <div className="mt-8">
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                {t.socialTitle}
              </div>
              <SocialLinks
                className="mt-4"
                instagramLabel={t.instagramLabel}
                tiktokLabel={t.tiktokLabel}
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                {t.sectionsTitle}
              </div>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                {nav.links.map((link) => (
                  <a
                    key={link.href}
                    className="text-white underline-offset-4 hover:underline"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                {t.productTitle}
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <AppCtaLink className="text-sm text-white">
                  {t.appLink}
                </AppCtaLink>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                {t.infoTitle}
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-white">
                <div>{t.teamProfile}</div>
                <div className="text-xs leading-relaxed">
                  {t.contactLabel}{" "}
                  <a
                    className="underline-offset-4 hover:underline"
                    href={`mailto:${t.contactEmail}`}
                  >
                    {t.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-white sm:flex-row sm:items-start sm:justify-between">
          <div>© {new Date().getFullYear()} Matchalyse</div>
          <div className="max-w-xl sm:text-right">{t.disclaimer}</div>
        </div>
      </div>
    </footer>
  )
}
