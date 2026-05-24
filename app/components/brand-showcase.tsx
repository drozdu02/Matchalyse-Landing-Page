import { SHOWCASE_SLIDES } from "@/constants/showcase-slides"
import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import LogoMarquee from "./logo-marquee"

export default function BrandShowcase({ locale }: { locale: Locale }) {
  const { brandShowcase: t, hero } = getDictionary(locale)

  return (
    <section
      aria-labelledby="brand-showcase-heading"
      className="w-full border-b border-white/10 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      <h2 id="brand-showcase-heading" className="sr-only">
        {t.heading}
      </h2>

      <LogoMarquee
        slides={SHOWCASE_SLIDES}
        ariaLabel={t.marqueeLabel}
        scrollHint={t.scrollHint}
        showLogo
        heroIntro={{
          title: hero.title,
          titleLine2: hero.titleLine2,
          description: hero.description,
          ctaApp: hero.ctaApp,
          ctaLearn: hero.ctaLearn,
          aboutHref: `#${SECTION_IDS.about}`,
        }}
        slidesIntro={{
          title: t.slidesTitle,
          description: t.slidesDescription,
        }}
      />
    </section>
  )
}
