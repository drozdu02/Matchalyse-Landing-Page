import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about

  return (
    <section id={SECTION_IDS.about} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 48)}
                className={
                  index === 0
                    ? "mt-6 text-lg leading-relaxed text-white"
                    : "mt-5 leading-relaxed text-white"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                {t.pillars.map((x) => (
                  <article key={x.title} className="relative">
                    <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                      {x.title}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
                      {x.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-9 border-t border-white/10 pt-7 text-sm leading-relaxed text-white">
                <span className="font-medium">{t.legalLabel}</span> {t.legalNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
