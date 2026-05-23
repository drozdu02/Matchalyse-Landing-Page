import Navbar from "@/app/components/navbar"
import Hero from "@/app/components/hero"
import BrandShowcase from "@/app/components/brand-showcase"
import About from "@/app/components/about"
import HowItWorks from "@/app/components/how-it-works"
import Features from "@/app/components/features"
import Stats from "@/app/components/stats"
import Footer from "@/app/components/footer"
import { SetHtmlLang } from "@/components/set-html-lang"
import { LocaleProvider } from "@/lib/i18n/locale-provider"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export function LandingPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale)

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <SetHtmlLang locale={locale} />
      <div className="bg-black text-white">
        <Navbar />
        <BrandShowcase locale={locale} />
        <Hero locale={locale} />
        <About locale={locale} />
        <HowItWorks locale={locale} />
        <Features locale={locale} />
        <Stats locale={locale} />
        <Footer locale={locale} />
      </div>
    </LocaleProvider>
  )
}
