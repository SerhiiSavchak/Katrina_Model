"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { PortfolioCard } from "@/components/gallery/portfolio-card"
import { PortfolioFilter } from "@/components/gallery/portfolio-filter"
import { portfolioItems, categories, type PortfolioCategory } from "@/data/portfolio"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading
            title="Portfolio"
            subtitle="Selected work from fashion, studio, beauty and art nude photography"
          />
        </Reveal>

        <Reveal delay={100}>
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
