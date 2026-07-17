"use client"

import { Reveal } from "@/components/ui/reveal"
import { MobileSlider } from "@/components/ui/mobile-slider"
import { ScrollParallax } from "@/components/ui/scroll-parallax"
import { SiteContainer } from "@/components/layout/site-container"
import { StoryModal } from "@/components/ui/story-modal"
import { stories, type Story } from "@/data/stories"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useState } from "react"
import { useLocale } from "@/components/providers/app-providers"

function StoryCoverImage({ story, title, sizes }: { story: Story; title: string; sizes: string }) {
  const primary = story.images[0] ?? ""
  const pos = story.objectPositions[0] ?? "50% 28%"
  return (
    <Image
      src={primary}
      alt={title}
      fill
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] [@media(hover:hover)]:motion-safe:group-hover:scale-[1.03]"
      style={{ objectPosition: pos }}
      sizes={sizes}
    />
  )
}

export function VisualStoriesSection() {
  const { t } = useLocale()
  const [openStory, setOpenStory] = useState<Story | null>(null)

  return (
    <section id="stories" className="section-ambient-in bg-background py-16 md:py-24 lg:py-28">
      <StoryModal story={openStory} t={t} onClose={() => setOpenStory(null)} />

      <SiteContainer>
        <div className="mb-10 max-w-3xl md:mb-14 lg:mb-16">
          <Reveal variant="text">
            <p className="label-sm mb-6 text-foreground/35">{t.stories.label}</p>
          </Reveal>
          <Reveal variant="text" delay={100}>
            <h2 className="display-xl max-w-full text-pretty text-[clamp(1.85rem,7vw,4.75rem)] leading-[0.92] text-foreground md:text-[clamp(2.25rem,7.5vw,5rem)]">
              {t.stories.title}
            </h2>
          </Reveal>
          <Reveal variant="text" delay={140}>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-foreground/48 md:text-base">
              {t.stories.subtitle}
            </p>
          </Reveal>
          <Reveal variant="line" delay={170}>
            <div className="mt-8 h-px w-12 bg-foreground/12" />
          </Reveal>
        </div>

        <div className="lg:hidden">
          <MobileSlider
            ariaLabel={t.stories.sliderAria}
            swipeHint={t.common.swipeHint}
            autoplayIntervalMs={2500}
            itemClassName="min-w-[min(88vw,26rem)] max-w-[min(88vw,26rem)]"
          >
            {stories.map((story, index) => {
              const copy = t.stories.items[story.id as keyof typeof t.stories.items]
              const title = copy?.title ?? story.title
              const description = copy?.description ?? story.description
              const category = copy?.category ?? story.category

              return (
                <Reveal key={story.id} delay={index * 60} variant="image">
                  <article className="flex flex-col gap-6">
                    <ScrollParallax
                      intensity={8}
                      className="group relative aspect-[16/10] overflow-hidden bg-card"
                    >
                        <StoryCoverImage
                          key={story.id}
                          story={story}
                          title={title}
                          sizes="(max-width: 1024px) 90vw, 60vw"
                        />
                      <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 [@media(hover:hover)]:group-hover:bg-foreground/[0.05]" />
                    </ScrollParallax>

                    <div className="px-0.5 text-center sm:text-left">
                      <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                        <span className="label-xs text-foreground/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="label-xs text-foreground/40">{category}</span>
                      </div>

                      <h3 className="display-md mb-3 text-pretty text-2xl leading-tight text-foreground">
                        {title}
                      </h3>

                      <p className="mb-6 max-w-prose text-pretty text-sm leading-relaxed text-foreground/50">
                        {description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setOpenStory(story)}
                        className="group/link inline-flex min-h-11 items-center gap-3 rounded-sm text-[11px] uppercase tracking-[0.1em] text-foreground transition-[color,transform,opacity] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:opacity-90 [@media(hover:hover)]:hover:text-foreground/90"
                      >
                        <span className="border-b border-foreground/25 pb-0.5 transition-[border-color,transform] duration-500 motion-safe:[@media(hover:hover)]:group-hover/link:translate-x-0.5 [@media(hover:hover)]:group-hover/link:border-foreground">
                          {t.stories.viewStory}
                        </span>
                        <span className="text-foreground/30 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] motion-safe:[@media(hover:hover)]:group-hover/link:translate-x-2">
                          &rarr;
                        </span>
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </MobileSlider>
        </div>

        <div className="hidden space-y-16 lg:block lg:space-y-28">
          {stories.map((story, index) => {
            const copy = t.stories.items[story.id as keyof typeof t.stories.items]
            const title = copy?.title ?? story.title
            const description = copy?.description ?? story.description
            const category = copy?.category ?? story.category

            return (
              <Reveal key={story.id} delay={index * 75} variant="image">
                <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={
                      index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6 lg:order-2"
                    }
                  >
                    <ScrollParallax
                      intensity={11}
                      className="group relative aspect-[16/10] overflow-hidden bg-card"
                    >
                      <StoryCoverImage
                        key={story.id}
                        story={story}
                        title={title}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 [@media(hover:hover)]:group-hover:bg-foreground/[0.05]" />
                    </ScrollParallax>
                  </div>

                  <div
                    className={
                      index % 2 === 0
                        ? "lg:col-span-4 lg:col-start-9"
                        : "lg:col-span-4 lg:col-start-1 lg:order-1"
                    }
                  >
                    <span className="label-xs mb-4 block text-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="label-xs mb-3 block text-foreground/40">{category}</span>

                    <h3 className="display-md mb-4 max-w-full text-pretty text-2xl text-foreground md:text-3xl">
                      {title}
                    </h3>

                    <p className="mb-6 max-w-md text-pretty text-sm leading-relaxed text-foreground/50">
                      {description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setOpenStory(story)}
                      className="group/link inline-flex min-h-11 items-center gap-3 rounded-sm text-[11px] uppercase tracking-[0.1em] text-foreground transition-[color,transform,opacity] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:opacity-90 [@media(hover:hover)]:hover:text-foreground/90"
                    >
                      <span className="border-b border-foreground/25 pb-0.5 transition-[border-color,transform] duration-500 motion-safe:[@media(hover:hover)]:group-hover/link:translate-x-0.5 [@media(hover:hover)]:group-hover/link:border-foreground">
                        {t.stories.viewStory}
                      </span>
                      <span className="text-foreground/30 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] motion-safe:[@media(hover:hover)]:group-hover/link:translate-x-2">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </SiteContainer>
    </section>
  )
}
