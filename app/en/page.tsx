import { LandingPage } from "@/components/landing-page"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Metadata } from "next"

const dictionary = getDictionary("en")

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  alternates: {
    languages: {
      pl: "/",
      en: "/en",
    },
  },
}

export default function EnglishPage() {
  return <LandingPage locale="en" />
}
