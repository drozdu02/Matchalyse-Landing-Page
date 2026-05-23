import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function Stats({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).stats

  return (
    <section id={SECTION_IDS.stats} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white">
              {t.description}
            </p>
          </div>
          <div className="hidden text-xs font-medium tracking-[0.22em] text-white uppercase lg:block">
            {t.aside}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {t.highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-7"
            >
              <h3 className="text-lg leading-snug font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
