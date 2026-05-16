"use client"

import type { PortfolioItem } from "@/data/portfolio"
import { cn } from "@/lib/cn"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useState } from "react"

const FALLBACK_IMAGE = "/images/portfolio/portfolio-01.jpg"

/** Мобильный слайдер и десктопная сетка: одинаковое соотношение, без «рваных» высот. */
const CARD_MEDIA_ASPECT = "aspect-[4/5] md:aspect-[4/5]"

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
  displayTitle: string
  displayCategory: string
  onOpen: () => void
}

export function PortfolioCard({
  item,
  index,
  displayTitle,
  displayCategory,
  onOpen,
}: PortfolioCardProps) {
  const [src, setSrc] = useState(item.image)

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group/card flex h-full min-h-0 w-full cursor-pointer flex-col text-left transition-[opacity,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-90",
        "md:rounded-sm md:bg-card md:ring-1 md:ring-foreground/[0.06]",
        "[@media(hover:hover)]:md:group-hover/card:shadow-[0_18px_44px_-28px_rgba(0,0,0,0.14)] [@media(hover:hover)]:md:group-hover/card:ring-foreground/10"
      )}
    >
      <div
        className={cn(
          "relative isolate w-full shrink-0 overflow-hidden bg-muted md:rounded-t-sm",
          CARD_MEDIA_ASPECT
        )}
      >
        <Image
          src={src}
          alt={displayTitle}
          fill
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          className="object-cover motion-safe:will-change-transform motion-safe:transition-transform motion-safe:duration-[1.15s] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] [@media(hover:hover)]:motion-safe:group-hover/card:scale-[1.04]"
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          sizes="(max-width: 768px) 86vw, (max-width: 1024px) 45vw, 28vw"
          onError={() => setSrc(FALLBACK_IMAGE)}
        />

        <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 ease-out [@media(hover:hover)]:group-hover/card:bg-foreground/[0.09]" />
      </div>

      <div className="mt-auto flex min-h-[5.5rem] flex-shrink-0 items-start justify-between gap-4 pt-4 md:min-h-[4.5rem] md:px-0.5 md:pb-4 md:pt-3.5">
        <div className="min-w-0">
          <h3 className="mb-1 text-sm text-foreground transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] [@media(hover:hover)]:group-hover/card:text-foreground/80">
            {displayTitle}
          </h3>
          <p className="label-xs text-foreground/35 transition-colors duration-500 [@media(hover:hover)]:group-hover/card:text-foreground/48">
            {displayCategory}
          </p>
        </div>
        <span className="label-xs shrink-0 tabular-nums text-foreground/25 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] [@media(hover:hover)]:group-hover/card:text-foreground/38">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </button>
  )
}
