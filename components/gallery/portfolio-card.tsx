"use client"

import { cn } from "@/lib/cn"
import type { PortfolioItem } from "@/data/portfolio"
import Image from "next/image"

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  // Varied aspect ratios for editorial feel
  const aspectPatterns = [
    "aspect-[4/5]",
    "aspect-[3/4]",
    "aspect-[5/6]",
    "aspect-[4/5]",
    "aspect-[3/4]",
    "aspect-[5/7]",
  ]
  const aspectClass = aspectPatterns[index % aspectPatterns.length]

  return (
    <article className="group relative overflow-hidden bg-background">
      <div className={cn("relative w-full", aspectClass)}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700" />
      </div>
      
      {/* Caption - Always visible, editorial style */}
      <div className="pt-4 pb-6">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/40 block mb-1">
              {item.category}
            </span>
            <h3 className="editorial-heading text-lg md:text-xl text-foreground">
              {item.title}
            </h3>
          </div>
          <span className="text-[10px] text-foreground/30 font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </article>
  )
}
