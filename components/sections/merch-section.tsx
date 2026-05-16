"use client"

import { Reveal } from "@/components/ui/reveal"
import { MobileSlider } from "@/components/ui/mobile-slider"
import { merchItems } from "@/data/merch"
import { contactChannels } from "@/data/contacts"
import Image from "next/image"
import { useLocale } from "@/components/providers/app-providers"

const telegramHref =
  contactChannels.find((c) => c.id === "telegram")?.href ?? "https://t.me/katrinadragonfly"

export function MerchSection() {
  const { t } = useLocale()

  return (
    <section id="merch" className="section-ambient-in bg-background py-28 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <div className="mb-16 max-w-3xl md:mb-20">
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
            itemClassName="min-w-[min(86vw,20rem)] max-w-[min(86vw,20rem)]"
          >
            {merchItems.map((item, index) => {
              const copy = t.merch.items[item.id as keyof typeof t.merch.items]
              const name = copy?.name ?? item.name
              const description = copy?.description ?? item.description

              return (
                <Reveal key={item.id} delay={index * 55} variant="image">
                  <article className="group">
                    <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-card">
                      <Image
                        src={item.image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-[1.15s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 86vw, 25vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/[0.06]" />
                    </div>

                    <div className="mb-4">
                      <span className="label-xs mb-2 block text-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mb-1 text-base text-foreground">{name}</h3>
                      <p className="text-sm text-foreground/50">{description}</p>
                    </div>

                    <a
                      href={telegramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/order inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-foreground/60 transition-colors duration-500 hover:text-foreground"
                    >
                      <span className="border-b border-foreground/25 pb-0.5 transition-[border-color,transform] duration-500 group-hover/order:border-foreground group-hover/order:translate-x-0.5">
                        {t.merch.order}
                      </span>
                      <span className="text-foreground/25 transition-transform duration-500 group-hover/order:translate-x-1">
                        &rarr;
                      </span>
                    </a>
                  </article>
                </Reveal>
              )
            })}
          </MobileSlider>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {merchItems.map((item, index) => {
            const copy = t.merch.items[item.id as keyof typeof t.merch.items]
            const name = copy?.name ?? item.name
            const description = copy?.description ?? item.description

            return (
              <Reveal key={item.id} delay={index * 75} variant="image">
                <article className="group">
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-card">
                    <Image
                      src={item.image}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-[1.15s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/[0.06]" />
                  </div>

                  <div className="mb-4">
                    <span className="label-xs mb-2 block text-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-1 text-base text-foreground">{name}</h3>
                    <p className="text-sm text-foreground/50">{description}</p>
                  </div>

                  <a
                    href={telegramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/order inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-foreground/60 transition-colors duration-500 hover:text-foreground"
                  >
                    <span className="border-b border-foreground/25 pb-0.5 transition-[border-color,transform] duration-500 group-hover/order:border-foreground group-hover/order:translate-x-0.5">
                      {t.merch.order}
                    </span>
                    <span className="text-foreground/25 transition-transform duration-500 group-hover/order:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
