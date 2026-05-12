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
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 text-sm tracking-wide transition-all duration-300",
            activeCategory === category
              ? "text-foreground border-b border-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
