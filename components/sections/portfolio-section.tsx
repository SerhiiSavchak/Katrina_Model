"use client"

import { useState } from "react"
import { SiteContainer } from "@/components/layout/site-container"
import { Reveal } from "@/components/ui/reveal"
import { MobileSlider } from "@/components/ui/mobile-slider"
import { PortfolioCard } from "@/components/gallery/portfolio-card"
import { PortfolioModal } from "@/components/gallery/portfolio-modal"
import { portfolioItems, categories, type PortfolioCategory } from "@/data/portfolio"
import { cn } from "@/lib/cn"
import { useLocale } from "@/components/providers/app-providers"

function desktopGridClass(item: (typeof portfolioItems)[number]) {
  if (item.featured && item.aspectRatio === "landscape") {
    return "md:col-span-2 lg:col-span-3"
  }
  if (item.aspectRatio === "landscape") {
    return "md:col-span-2 lg:col-span-2"
  }
  return "md:col-span-1"
}

export function PortfolioSection() {
  const { t } = useLocale()
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")
  const [openId, setOpenId] = useState<string | null>(null)

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const selectedItem = openId ? (filteredItems.find((i) => i.id === openId) ?? null) : null

  const setCategory = (category: PortfolioCategory) => {
    setActiveCategory(category)
    setOpenId(null)
  }

  return (
    <section id="portfolio" className="section-ambient-in bg-card py-12 md:py-16 lg:py-20">
      <PortfolioModal
        item={selectedItem}
        items={filteredItems}
        t={t}
        onClose={() => setOpenId(null)}
        onNavigate={(id) => setOpenId(id)}
      />
      <SiteContainer>
        <div className="mb-8 max-w-2xl md:mb-10">
          <Reveal variant="text">
            <p className="label-sm mb-4 text-foreground/35 md:mb-5">{t.portfolio.label}</p>
          </Reveal>
          <Reveal variant="text" delay={100}>
            <h2 className="display-xl mb-4 max-w-full text-pretty text-[clamp(1.65rem,5.5vw,3.75rem)] leading-[0.92] text-foreground md:mb-5 md:text-[clamp(1.85rem,4vw,4rem)]">
              {t.portfolio.title}
            </h2>
          </Reveal>
          <Reveal variant="line" delay={140}>
            <div className="mb-4 h-px w-12 bg-foreground/12 md:mb-5" />
          </Reveal>
          <Reveal variant="text" delay={180}>
            <p className="max-w-lg text-sm leading-relaxed text-foreground/50 md:text-[15px]">
              {t.portfolio.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal variant="text" delay={200}>
          <div className="mb-6 md:mb-8">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 border-b border-foreground/8 pb-6 md:gap-x-6 md:gap-y-5 md:pb-7">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategory(category)}
                  className={cn(
                    "group relative min-h-10 shrink-0 rounded-sm px-2 py-2 text-[10px] uppercase tracking-[0.12em] transition-[color,transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-11 md:px-2.5 md:py-2.5 md:text-[11px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-[0.98]",
                    activeCategory === category
                      ? "text-foreground"
                      : "text-foreground/40 [@media(hover:hover)]:hover:bg-foreground/[0.05] [@media(hover:hover)]:hover:text-foreground/78"
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
            compactFooter
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
                    onOpen={() => setOpenId(item.id)}
                  />
                </Reveal>
              )
            })}
          </MobileSlider>
        </div>

        <div className="hidden md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
            {filteredItems.map((item, index) => {
            const itemT = t.portfolio.items[item.id as keyof typeof t.portfolio.items]
            const displayTitle = itemT?.title ?? item.title
            const displayCategory = t.portfolio.categories[item.category]

            return (
              <div key={item.id} className={cn("min-w-0 h-full", desktopGridClass(item))}>
                <Reveal delay={index * 45} variant="image">
                  <PortfolioCard
                    item={item}
                    index={index}
                    displayTitle={displayTitle}
                    displayCategory={displayCategory}
                    onOpen={() => setOpenId(item.id)}
                    featuredLayout
                  />
                </Reveal>
              </div>
            )
          })}
        </div>
      </SiteContainer>
    </section>
  )
}
