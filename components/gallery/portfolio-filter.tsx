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
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="group relative"
        >
          <span
            className={cn(
              "text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
              activeCategory === category
                ? "text-foreground"
                : "text-foreground/40 group-hover:text-foreground/70"
            )}
          >
            {category}
          </span>
          {/* Animated underline */}
          <span
            className={cn(
              "absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300",
              activeCategory === category
                ? "w-full"
                : "w-0 group-hover:w-full group-hover:bg-foreground/40"
            )}
          />
          {/* Optional: Category number */}
          {index > 0 && (
            <span className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 text-[8px] text-foreground/20">
              ·
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
