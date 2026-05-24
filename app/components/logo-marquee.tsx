"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AppCtaButton } from "@/components/app-cta-button"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import type { ShowcaseSlide } from "@/constants/showcase-slides"
import { cn } from "@/lib/utils"

type HeroIntro = {
  title: string
  titleLine2: string
  description: string
  ctaApp: string
  ctaLearn: string
  aboutHref: string
}

type SlidesIntro = {
  title: string
  description: string
}

type LogoMarqueeProps = {
  slides: ShowcaseSlide[]
  ariaLabel: string
  scrollHint: string
  showLogo?: boolean
  heroIntro?: HeroIntro
  slidesIntro?: SlidesIntro
  className?: string
}

export default function LogoMarquee({
  slides,
  ariaLabel,
  scrollHint,
  showLogo = true,
  heroIntro,
  slidesIntro,
  className,
}: LogoMarqueeProps) {
  return (
    <div className={cn("w-full", className)}>
      {showLogo && heroIntro ? (
        <div className="animate-fade-up mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pb-12 sm:gap-10 sm:pb-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          <div className="w-full max-w-xl text-center lg:text-left">
            <h1 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              {heroIntro.title}
              <span className="mt-2 block font-normal text-white/90">
                {heroIntro.titleLine2}
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white sm:text-lg">
              {heroIntro.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <AppCtaButton className="h-12 rounded-full bg-primary px-6 text-base font-semibold text-black hover:opacity-90">
                {heroIntro.ctaApp}
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </AppCtaButton>

              <Link href={heroIntro.aboutHref} className="inline-flex">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10 sm:w-auto"
                >
                  {heroIntro.ctaLearn}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          <BrandLogo
            size="marquee"
            priority
            className="mx-auto shrink-0 lg:mx-0"
          />
        </div>
      ) : showLogo ? (
        <div className="-mt-3 flex justify-center px-4 pb-6 sm:-mt-4 sm:pb-8">
          <BrandLogo size="marquee" priority />
        </div>
      ) : null}

      {slidesIntro ? (
        <div className="mx-auto max-w-6xl border-t border-white/10 px-4 pt-12 pb-8 sm:px-6 sm:pt-14 sm:pb-10">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-left">
            {slidesIntro.title}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-white/70 sm:text-base lg:mx-0 lg:text-left">
            {slidesIntro.description}
          </p>
        </div>
      ) : null}

      <div className="relative w-full">
        <p className="sr-only">{scrollHint}</p>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black via-black/90 to-transparent sm:w-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black via-black/90 to-transparent sm:w-20"
          aria-hidden="true"
        />

        <div
          role="region"
          aria-label={ariaLabel}
          tabIndex={0}
          className="showcase-scroll flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth py-2 [-ms-overflow-style:none] [scrollbar-width:thin] sm:gap-12 sm:py-4 md:gap-14 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {slides.map((slide) => (
            <figure
              key={slide.id}
              className="relative h-64 w-[min(85vw,28rem)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-black first:ml-4 last:mr-4 sm:h-80 sm:w-[32rem] md:h-96 md:w-[36rem] sm:first:ml-8 sm:last:mr-8"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 576px"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>

      <p className="mt-6 pb-2 text-center text-xs text-white/50 sm:mt-8 sm:text-sm">
        {scrollHint}
      </p>
    </div>
  )
}
