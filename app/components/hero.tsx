"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import HeroBackground from "./hero-background"
import { APP_URL_PLACEHOLDER } from "@/constants/app-url-placeholder"
import { SECTION_IDS } from "@/constants/section-ids"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <HeroBackground />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs backdrop-blur">
            <span className="font-medium text-white">
              Statystyka · uczenie maszynowe · prawdopodobieństwo
            </span>
          </div>

          <h1 className="mt-7 text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Analiza meczów
            <span className="block font-normal text-white">
              w oparciu o dane i modele
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
            Prowadzimy analizę ilościową wyników sportowych: przygotowanie
            danych, modele statystyczne i uczenie maszynowe, kalibracja
            prawdopodobieństw oraz weryfikacja na materiale historycznym. Wyniki
            modeli zestawiamy z wieloletnią praktyką własnej analizy
            przedmeczowej, w tym w kontekście oceny decyzji zakładowych;
            umożliwia to krytyczną interpretację wyników. Oszacowania
            przekazujemy wraz z opisem metodyki, bez roszczeń co do pewnego
            wyniku spotkania.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={APP_URL_PLACEHOLDER} className="inline-flex">
              <Button className="h-12 rounded-full bg-primary px-6 text-base font-semibold text-slate-950 hover:opacity-90">
                Przejdź do aplikacji
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </a>

            <Link href={`#${SECTION_IDS.about}`} className="inline-flex">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "Modelowanie", v: "ML i modele statystyczne" },
              { k: "Output", v: "prawdopodobieństwa i przedziały" },
              { k: "Weryfikacja", v: "backtest i walidacja" },
              { k: "Komunikacja", v: "metodologia i ograniczenia" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4 backdrop-blur"
              >
                <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                  {x.k}
                </div>
                <div className="mt-2 text-sm text-white">{x.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
