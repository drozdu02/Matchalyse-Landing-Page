"use client"

import Image from "next/image"
import { BrandLogo } from "@/components/brand-logo"
import type { ShowcaseSlide } from "@/constants/showcase-slides"
import { cn } from "@/lib/utils"

type LogoMarqueeProps = {
  slides: ShowcaseSlide[]
  ariaLabel: string
  scrollHint: string
  showLogo?: boolean
  className?: string
}

export default function LogoMarquee({
  slides,
  ariaLabel,
  scrollHint,
  showLogo = true,
  className,
}: LogoMarqueeProps) {
  return (
    <div className={cn("w-full", className)}>
      {showLogo && (
        <div className="-mt-3 flex justify-center px-4 pb-6 sm:-mt-4 sm:pb-8">
          <BrandLogo size="marquee" priority />
        </div>
      )}

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

      <p className="mt-3 text-center text-xs text-white/50 sm:text-sm">
        {scrollHint}
      </p>
    </div>
  )
}
