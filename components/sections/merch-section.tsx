"use client"

import { useState } from "react"
import { SiteContainer } from "@/components/layout/site-container"
import { Reveal } from "@/components/ui/reveal"
import { MobileSlider } from "@/components/ui/mobile-slider"
import { MerchModal } from "@/components/ui/merch-modal"
import { merchItems, type MerchItem } from "@/data/merch"
import { contactChannels } from "@/data/contacts"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useLocale } from "@/components/providers/app-providers"

const telegramHref =
  contactChannels.find((c) => c.id === "telegram")?.href ?? "https://t.me/dylanfoxi"

function MerchCoverImage({ item, name, sizes }: { item: MerchItem; name: string; sizes: string }) {
  return (
    <Image
      src={item.image}
      alt={name}
      fill
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      className="object-cover motion-safe:transition-transform motion-safe:duration-[1.15s] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] [@media(hover:hover)]:motion-safe:group-hover:scale-[1.04]"
      style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
      sizes={sizes}
    />
  )
}

export function MerchSection() {
  const { t } = useLocale()
  const [openId, setOpenId] = useState<string | null>(null)
  const openItem = openId ? (merchItems.find((i) => i.id === openId) ?? null) : null

  return (
    <section id="merch" className="section-ambient-in bg-background py-16 md:py-24 lg:py-28">
      <MerchModal item={openItem} t={t} onClose={() => setOpenId(null)} />

      <SiteContainer>
        <div className="mb-12 max-w-3xl md:mb-14">
          <Reveal variant="text">
            <p className="label-sm mb-6 text-foreground/35">{t.merch.label}</p>
          </Reveal>
          <Reveal variant="text" delay={100}>
            <h2 className="display-xl mb-5 text-[clamp(2rem,6vw,4rem)] text-foreground">
              {t.merch.title}
            </h2>
          </Reveal>
          <Reveal variant="line" delay={140}>
            <div className="mb-5 h-px w-10 bg-foreground/12" />
          </Reveal>
          <Reveal variant="text" delay={170}>
            <p className="max-w-lg text-sm leading-relaxed text-foreground/50 md:text-base">
              {t.merch.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="md:hidden">
          <MobileSlider
            ariaLabel={t.merch.sliderAria}
            swipeHint={t.common.swipeHint}
            autoplayIntervalMs={2500}
            trackClassName="items-stretch"
            itemClassName="flex min-h-0 min-w-[min(86vw,20rem)] max-w-[min(86vw,20rem)] flex-col"
          >
            {merchItems.map((item, index) => {
              const copy = t.merch.items[item.id as keyof typeof t.merch.items]
              const name = copy?.name ?? item.name
              const description = copy?.description ?? item.description

              return (
                <Reveal
                  key={item.id}
                  delay={index * 55}
                  variant="image"
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <article className="group flex min-h-0 flex-1 flex-col">
                    <button
                      type="button"
                      onClick={() => setOpenId(item.id)}
                      className="flex min-h-0 flex-1 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <div className="relative mb-5 aspect-[4/5] shrink-0 overflow-hidden bg-card">
                        <MerchCoverImage
                          key={item.id}
                          item={item}
                          name={name}
                          sizes="(max-width: 768px) 86vw, 25vw"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/[0.06]" />
                      </div>

                      <div className="flex min-h-0 flex-1 flex-col">
                        <span className="label-xs mb-2 block text-foreground/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mb-2 shrink-0 text-base text-foreground">{name}</h3>
                        <p className="min-h-0 flex-1 text-pretty text-sm leading-relaxed text-foreground/50">
                          {description}
                        </p>
                      </div>
                    </button>

                    <div className="mt-auto flex shrink-0 flex-col gap-3 border-t border-foreground/[0.07] pt-5 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setOpenId(item.id)}
                        className="group/details inline-flex min-h-11 shrink-0 items-center text-left text-[11px] uppercase tracking-[0.12em] text-foreground/50 underline decoration-foreground/20 decoration-1 underline-offset-[5px] transition-[color,transform,opacity] duration-500 active:scale-[0.98] active:opacity-90 [@media(hover:hover)]:hover:text-foreground [@media(hover:hover)]:hover:decoration-foreground/45 motion-safe:[@media(hover:hover)]:hover:translate-x-0.5"
                      >
                        {t.ui.details}
                      </button>

                      <a
                        href={item.telegramHref ?? telegramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/order inline-flex min-h-11 shrink-0 items-center gap-2.5 self-start text-[11px] uppercase tracking-[0.12em] text-foreground/65 transition-[color,transform,opacity] duration-500 active:scale-[0.98] active:opacity-90 sm:self-auto [@media(hover:hover)]:hover:text-foreground"
                      >
                        <span className="border-b border-foreground/30 pb-0.5 transition-[border-color,transform] duration-500 [@media(hover:hover)]:group-hover/order:border-foreground motion-safe:[@media(hover:hover)]:group-hover/order:translate-x-0.5">
                          {t.merch.order}
                        </span>
                        <span className="text-foreground/30 transition-transform duration-500 motion-safe:[@media(hover:hover)]:group-hover/order:translate-x-1">
                          &rarr;
                        </span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </MobileSlider>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:items-stretch md:gap-8 lg:grid-cols-4">
          {merchItems.map((item, index) => {
            const copy = t.merch.items[item.id as keyof typeof t.merch.items]
            const name = copy?.name ?? item.name
            const description = copy?.description ?? item.description

            return (
              <Reveal
                key={item.id}
                delay={index * 75}
                variant="image"
                className="flex h-full min-h-0 flex-col"
              >
                <article className="group flex h-full min-h-0 flex-col">
                  <button
                    type="button"
                    onClick={() => setOpenId(item.id)}
                    className="flex w-full min-h-0 flex-1 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <div className="relative mb-5 aspect-[4/5] shrink-0 overflow-hidden bg-card">
                      <MerchCoverImage
                        key={item.id}
                        item={item}
                        name={name}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/[0.06]" />
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col">
                      <span className="label-xs mb-2 block text-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mb-2 shrink-0 text-base text-foreground">{name}</h3>
                      <p className="min-h-0 flex-1 text-pretty text-sm leading-relaxed text-foreground/50">
                        {description}
                      </p>
                    </div>
                  </button>

                  <div className="mt-auto flex shrink-0 flex-col gap-3 border-t border-foreground/[0.07] pt-5 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setOpenId(item.id)}
                      className="group/details inline-flex min-h-11 shrink-0 items-center text-left text-[11px] uppercase tracking-[0.12em] text-foreground/50 underline decoration-foreground/20 decoration-1 underline-offset-[5px] transition-[color,transform,opacity] duration-500 active:scale-[0.98] active:opacity-90 [@media(hover:hover)]:hover:text-foreground [@media(hover:hover)]:hover:decoration-foreground/45 motion-safe:[@media(hover:hover)]:hover:translate-x-0.5"
                    >
                      {t.ui.details}
                    </button>

                    <a
                      href={item.telegramHref ?? telegramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/order inline-flex min-h-11 shrink-0 items-center gap-2.5 self-start text-[11px] uppercase tracking-[0.12em] text-foreground/65 transition-[color,transform,opacity] duration-500 active:scale-[0.98] active:opacity-90 sm:self-auto [@media(hover:hover)]:hover:text-foreground"
                    >
                      <span className="border-b border-foreground/30 pb-0.5 transition-[border-color,transform] duration-500 [@media(hover:hover)]:group-hover/order:border-foreground motion-safe:[@media(hover:hover)]:group-hover/order:translate-x-0.5">
                        {t.merch.order}
                      </span>
                      <span className="text-foreground/30 transition-transform duration-500 motion-safe:[@media(hover:hover)]:group-hover/order:translate-x-1">
                        &rarr;
                      </span>
                    </a>
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
