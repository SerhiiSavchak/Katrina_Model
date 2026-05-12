"use client"

import { cn } from "@/lib/cn"
import type { PortfolioItem } from "@/data/portfolio"
import Image from "next/image"

interface PortfolioCardProps {
  item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const aspectClass = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
  }[item.aspectRatio]

  return (
    <article className="group relative overflow-hidden bg-card">
      <div className={cn("relative w-full", aspectClass)}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-2 block">
              {item.category}
            </span>
            <h3 className="font-serif text-xl text-white">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </article>
  )
}
