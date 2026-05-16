"use client"

import { cn } from "@/lib/cn"
import type { PortfolioCategory } from "@/data/portfolio"

interface PortfolioFilterProps {
  categories: PortfolioCategory[]
  activeCategory: PortfolioCategory
  onCategoryChange: (category: PortfolioCategory) => void
}

export function PortfolioFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 px-1 md:gap-x-8 md:gap-y-6">
      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className="group relative min-h-11 touch-manipulation px-2 py-2.5 md:min-h-11 md:px-2.5 md:py-2.5"
        >
          <span
            className={cn(
              "text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-[color,transform] duration-300 active:scale-[0.97]",
              activeCategory === category
                ? "text-foreground"
                : "text-foreground/40 [@media(hover:hover)]:group-hover:text-foreground/72"
            )}
          >
            {category}
          </span>
          <span
            className={cn(
              "absolute bottom-1 left-0 right-0 h-px origin-left bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.32,1)]",
              activeCategory === category ? "scale-x-100" : "scale-x-0 [@media(hover:hover)]:group-hover:scale-x-100 [@media(hover:hover)]:group-hover:bg-foreground/40"
            )}
          />
          {index > 0 && (
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-[8px] text-foreground/20 md:-left-5">
              ·
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
