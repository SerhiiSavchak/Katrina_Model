"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"
import { PortfolioCard } from "@/components/gallery/portfolio-card"
import { portfolioItems, categories, type PortfolioCategory } from "@/data/portfolio"
import { cn } from "@/lib/cn"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-28 md:py-36 lg:py-44 bg-card">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <Reveal>
            <p className="label-sm text-foreground/35 mb-6">03 / Portfolio</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-xl text-[clamp(2.5rem,8vw,5rem)] text-foreground mb-4">
              PORTFOLIO
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-foreground/50 text-sm md:text-base max-w-lg">
              Selected work from fashion, studio, beauty and art nude photography
            </p>
          </Reveal>
        </div>

        {/* Filter */}
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-6 md:gap-8 mb-12 md:mb-16 border-b border-foreground/8 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-[11px] uppercase tracking-[0.1em] pb-1 transition-all duration-300 border-b-2 -mb-[calc(1.5rem+1px)]",
                  activeCategory === category
                    ? "text-foreground border-foreground"
                    : "text-foreground/40 border-transparent hover:text-foreground/70"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={cn(
                index % 5 === 0 && "md:col-span-2 lg:col-span-2",
                index % 7 === 3 && "md:row-span-2"
              )}
            >
              <Reveal delay={index * 50}>
                <PortfolioCard item={item} index={index} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
