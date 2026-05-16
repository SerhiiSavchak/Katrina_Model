"use client"

import type { PortfolioItem } from "@/data/portfolio"
import Image from "next/image"

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
  displayTitle: string
  displayCategory: string
}

export function PortfolioCard({
  item,
  index,
  displayTitle,
  displayCategory,
}: PortfolioCardProps) {
  return (
    <article className="group/card h-full cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={displayTitle}
          fill
          className="object-cover transition-transform duration-[1.15s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.04]"
          style={
            item.objectPosition ? { objectPosition: item.objectPosition } : undefined
          }
          sizes="(max-width: 768px) 86vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-700 ease-out group-hover/card:bg-foreground/[0.07]" />
      </div>

      <div className="flex items-start justify-between gap-4 pt-4">
        <div className="min-w-0">
          <h3 className="mb-1 text-sm text-foreground transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:text-foreground/75">
            {displayTitle}
          </h3>
          <p className="label-xs text-foreground/35 transition-colors duration-500 group-hover/card:text-foreground/45">
            {displayCategory}
          </p>
        </div>
        <span className="label-xs shrink-0 tabular-nums text-foreground/25 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:-translate-y-px group-hover/card:text-foreground/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  )
}
