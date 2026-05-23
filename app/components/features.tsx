import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function Features({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).features

  return (
    <section id={SECTION_IDS.features} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white">
              {t.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {t.cards.map((c) => (
                <article
                  key={c.title}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-primary/40 sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute -inset-10 bg-[radial-gradient(40%_40%_at_20%_10%,rgba(191,255,0,0.10),transparent_60%)]" />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                      {c.meta}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
                      {c.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
