import { SECTION_IDS } from "@/constants/section-ids"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about

  return (
    <section id={SECTION_IDS.about} className="scroll-mt-24 py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
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
      </div>
    </section>
  )
}
