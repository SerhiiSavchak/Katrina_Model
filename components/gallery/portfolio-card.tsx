"use client"

import type { PortfolioItem } from "@/data/portfolio"
import Image from "next/image"

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <article className="group cursor-pointer h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
      </div>
      
      {/* Caption */}
      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm text-foreground mb-1 group-hover:text-foreground/70 transition-colors">
            {item.title}
          </h3>
          <p className="label-xs text-foreground/35">
            {item.category}
          </p>
        </div>
        <span className="label-xs text-foreground/25 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  )
}
