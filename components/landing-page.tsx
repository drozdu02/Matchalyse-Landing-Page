import Navbar from "@/app/components/navbar"
import BrandShowcase from "@/app/components/brand-showcase"
import About from "@/app/components/about"
import HowItWorks from "@/app/components/how-it-works"
import Stats from "@/app/components/stats"
import Footer from "@/app/components/footer"
import { SetHtmlLang } from "@/components/set-html-lang"
import { AppComingSoonProvider } from "@/components/app-coming-soon-provider"
import { LocaleProvider } from "@/lib/i18n/locale-provider"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export function LandingPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale)

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <AppComingSoonProvider>
        <SetHtmlLang locale={locale} />
        <div className="bg-black text-white">
          <Navbar />
          <BrandShowcase locale={locale} />
          <About locale={locale} />
          <HowItWorks locale={locale} />
          <Stats locale={locale} />
          <Footer locale={locale} />
        </div>
      </AppComingSoonProvider>
    </LocaleProvider>
  )
}
