import { SECTION_IDS } from "@/constants/section-ids"
import { STAT_HIGHLIGHTS } from "@/constants/stats"

export default function Stats() {
  return (
    <section id={SECTION_IDS.stats} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Zakres i ograniczenia
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white">
              Produkt rozwijany jest w sposób ciągły. Poniżej określamy obszar
              działania oraz zakres odpowiedzialności — w tym brak publikacji
              liczb bez pokrycia w danych i ustalonej metodyce.
            </p>
          </div>
          <div className="hidden text-xs font-medium tracking-[0.22em] text-white uppercase lg:block">
            zakres
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {STAT_HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur sm:p-7"
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
