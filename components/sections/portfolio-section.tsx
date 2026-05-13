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
    <section id="portfolio" className="py-32 md:py-40 lg:py-52 bg-card relative">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            03 / Portfolio
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h2 className="editorial-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4">
                PORTFOLIO
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-foreground/50 text-sm md:text-base max-w-xl">
                Selected work from fashion, studio, beauty and art nude photography
              </p>
            </Reveal>
          </div>
        </div>

        {/* Filter */}
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-4 md:gap-8 mb-16 md:mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] pb-2 transition-all duration-300 border-b",
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

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {filteredItems.map((item, index) => {
            // Create asymmetric layout pattern
            const layoutPatterns = [
              "col-span-12 md:col-span-7 lg:col-span-6",    // Large left
              "col-span-12 md:col-span-5 lg:col-span-6 md:mt-24",  // Medium right, offset
              "col-span-12 md:col-span-5 lg:col-span-4",    // Small left
              "col-span-12 md:col-span-7 lg:col-span-8",    // Large right
              "col-span-12 md:col-span-6 lg:col-span-5 md:mt-16",  // Medium, offset
              "col-span-12 md:col-span-6 lg:col-span-7",    // Large
            ]
            const pattern = layoutPatterns[index % layoutPatterns.length]

            return (
              <div key={item.id} className={pattern}>
                <Reveal delay={index * 75}>
                  <PortfolioCard item={item} index={index} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
