import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function HowItWorks({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).howItWorks

  return (
    <section id={SECTION_IDS.how} className="scroll-mt-24 py-24 sm:py-32 lg:py-36">
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

        <div className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-4">
          {t.steps.map((s, idx) => (
            <article
              key={s.n}
              className="animate-fade-up group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-primary/40 sm:p-7"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-white tabular-nums">
                  {s.n}
                </div>
                <div className="h-[2px] w-10 bg-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
