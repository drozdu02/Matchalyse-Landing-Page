import { SHOWCASE_SLIDES } from "@/constants/showcase-slides"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import LogoMarquee from "./logo-marquee"

export default function BrandShowcase({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).brandShowcase

  return (
    <section
      aria-labelledby="brand-showcase-heading"
      className="w-full border-b border-white/10 pt-[4.5rem] pb-4 sm:pt-20 sm:pb-6"
    >
      <h2 id="brand-showcase-heading" className="sr-only">
        {t.heading}
      </h2>

      <LogoMarquee
        slides={SHOWCASE_SLIDES}
        ariaLabel={t.marqueeLabel}
        scrollHint={t.scrollHint}
        showLogo
      />
    </section>
  )
}
