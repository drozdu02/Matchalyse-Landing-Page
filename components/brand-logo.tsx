import Image from "next/image"
import { cn } from "@/lib/utils"

const LOGO_SRC = "/logo.jpeg"

type BrandLogoProps = {
  className?: string
  size?: "nav" | "footer" | "showcase" | "marquee"
  priority?: boolean
}

const sizeConfig = {
  nav: { width: 97, height: 44, className: "h-11 w-auto" },
  footer: { width: 123, height: 56, className: "h-14 w-auto" },
  showcase: {
    width: 1040,
    height: 560,
    className: "h-[22rem] w-auto sm:h-[26rem] md:h-[30rem] lg:h-[36rem]",
  },
  marquee: {
    width: 780,
    height: 480,
    className: "h-80 w-auto sm:h-96 md:h-[28rem] lg:h-[32rem]",
  },
} as const

export function BrandLogo({
  className,
  size = "nav",
  priority = false,
}: BrandLogoProps) {
  const config = sizeConfig[size]

  return (
    <Image
      src={LOGO_SRC}
      alt="Matchalyse"
      width={config.width}
      height={config.height}
      priority={
        priority || size === "nav" || size === "showcase" || size === "marquee"
      }
      className={cn("max-w-full object-contain", config.className, className)}
    />
  )
}
