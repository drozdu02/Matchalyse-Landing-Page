"use client"

import * as React from "react"
import { motion } from "motion/react"
import { SECTION_IDS } from "@/constants/section-ids"
import { steps } from "@/constants/steps"

export default function HowItWorks() {
  return (
    <section id={SECTION_IDS.how} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Jak to działa
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white">
              Kolejne etapy pipeline&apos;u: przygotowanie danych, modelowanie,
              komunikacja prawdopodobieństw oraz rekomendacja końcowa z
              uzasadnieniem merytorycznym.
            </p>
          </div>
          <div className="hidden text-xs font-medium tracking-[0.22em] text-white uppercase lg:block">
            pipeline
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur hover:border-primary/40 sm:p-7"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
