import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AppCtaButton } from "@/components/app-cta-button"
import { Button } from "@/components/ui/button"
import { SECTION_IDS } from "@/constants/section-ids"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero

  return (
    <section className="relative overflow-hidden bg-black pt-12 sm:pt-16">
      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="animate-fade-up max-w-3xl">
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.title}
            <span className="block font-normal text-white">{t.titleLine2}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AppCtaButton className="h-12 rounded-full bg-primary px-6 text-base font-semibold text-black hover:opacity-90">
              {t.ctaApp}
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </AppCtaButton>

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
        </div>
      </div>
    </section>
  )
}
