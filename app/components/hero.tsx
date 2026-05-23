import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBackground from "./hero-background"
import { APP_URL_PLACEHOLDER } from "@/constants/app-url-placeholder"
import { SECTION_IDS } from "@/constants/section-ids"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16">
      <HeroBackground />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="animate-fade-up max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs backdrop-blur">
            <span className="font-medium text-white">{t.badge}</span>
          </div>

          <h1 className="mt-7 text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.title}
            <span className="block font-normal text-white">{t.titleLine2}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={APP_URL_PLACEHOLDER} className="inline-flex">
              <Button className="h-12 rounded-full bg-primary px-6 text-base font-semibold text-black hover:opacity-90">
                {t.ctaApp}
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </a>

            <Link href={`#${SECTION_IDS.about}`} className="inline-flex">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10"
              >
                {t.ctaLearn}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {t.stats.map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
              >
                <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                  {x.k}
                </div>
                <div className="mt-2 text-sm text-white">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
