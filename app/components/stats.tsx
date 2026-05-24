import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function Stats({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).stats

  return (
    <section id={SECTION_IDS.stats} className="scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {t.title}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
          {t.description}
        </p>
      </div>
    </section>
  )
}
