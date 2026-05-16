"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"
import { MobileSlider } from "@/components/ui/mobile-slider"
import { PortfolioCard } from "@/components/gallery/portfolio-card"
import { portfolioItems, categories, type PortfolioCategory } from "@/data/portfolio"
import { cn } from "@/lib/cn"
import { useLocale } from "@/components/providers/app-providers"

export function PortfolioSection() {
  const { t } = useLocale()
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-ambient-in bg-card py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <div className="mb-16 max-w-3xl md:mb-20">
          <Reveal variant="text">
            <p className="label-sm mb-6 text-foreground/35">{t.portfolio.label}</p>
          </Reveal>
          <Reveal variant="text" delay={100}>
            <h2 className="display-xl mb-5 max-w-full text-pretty text-[clamp(1.85rem,7vw,4.75rem)] leading-[0.92] text-foreground md:text-[clamp(2.25rem,7.5vw,5rem)]">
              {t.portfolio.title}
            </h2>
          </Reveal>
          <Reveal variant="line" delay={140}>
            <div className="mb-6 h-px w-12 bg-foreground/12" />
          </Reveal>
          <Reveal variant="text" delay={180}>
            <p className="max-w-lg text-sm leading-relaxed text-foreground/50 md:text-base">
              {t.portfolio.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal variant="text" delay={200}>
          <div className="mb-12 md:mb-16">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 border-b border-foreground/8 pb-8 md:gap-x-8 md:gap-y-6 md:pb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "group relative min-h-11 shrink-0 px-2 py-2.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-2.5 md:py-3",
                    activeCategory === category
                      ? "text-foreground"
                      : "text-foreground/40 hover:text-foreground/72"
                  )}
                >
                  <span className="relative z-10">{t.portfolio.categories[category]}</span>
                  <span
                    className={cn(
                      "pointer-events-none absolute bottom-1 left-2 right-2 h-px origin-left bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:left-2.5 md:right-2.5",
                      activeCategory === category ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-foreground/35"
                    )}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="md:hidden">
          <MobileSlider
            ariaLabel={t.portfolio.sliderAria}
            swipeHint={t.common.swipeHint}
            autoplayIntervalMs={2500}
            itemClassName="min-w-[min(86vw,22rem)] max-w-[min(86vw,22rem)]"
          >
            {filteredItems.map((item, index) => {
              const itemT = t.portfolio.items[item.id as keyof typeof t.portfolio.items]
              const displayTitle = itemT?.title ?? item.title
              const displayCategory = t.portfolio.categories[item.category]

              return (
                <Reveal key={item.id} delay={index * 45} variant="image">
                  <PortfolioCard
                    item={item}
                    index={index}
                    displayTitle={displayTitle}
                    displayCategory={displayCategory}
                  />
                </Reveal>
              )
            })}
          </MobileSlider>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {filteredItems.map((item, index) => {
            const itemT = t.portfolio.items[item.id as keyof typeof t.portfolio.items]
            const displayTitle = itemT?.title ?? item.title
            const displayCategory = t.portfolio.categories[item.category]

            return (
              <div
                key={item.id}
                className={cn(
                  index % 5 === 0 && "md:col-span-2 lg:col-span-2",
                  index % 7 === 3 && "md:row-span-2"
                )}
              >
                <Reveal delay={index * 55} variant="image">
                  <PortfolioCard
                    item={item}
                    index={index}
                    displayTitle={displayTitle}
                    displayCategory={displayCategory}
                  />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
