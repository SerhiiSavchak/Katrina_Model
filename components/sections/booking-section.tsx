"use client"

import { Reveal } from "@/components/ui/reveal"
import { contactChannels } from "@/data/contacts"
import { useLocale } from "@/components/providers/app-providers"

const serviceNumbers = ["01", "02", "03", "04", "05", "06", "07"] as const

const instagramHref =
  contactChannels.find((c) => c.id === "instagram")?.href ?? "https://www.instagram.com/katrina.dragonfly"
const telegramHref =
  contactChannels.find((c) => c.id === "telegram")?.href ?? "https://t.me/katrinadragonfly"

export function BookingSection() {
  const { t } = useLocale()

  return (
    <section id="booking" className="section-ambient-in bg-card py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal variant="text">
              <p className="label-sm mb-6 text-foreground/35">{t.booking.label}</p>
            </Reveal>

            <Reveal variant="text" delay={100}>
              <h2 className="display-xl mb-6 max-w-full text-pretty text-[clamp(1.75rem,5.5vw,3.5rem)] leading-[0.95] text-foreground">
                {t.booking.title}
              </h2>
            </Reveal>

            <Reveal variant="line" delay={140}>
              <div className="mb-8 h-px w-11 bg-foreground/12" />
            </Reveal>

            <Reveal variant="text" delay={180}>
              <p className="mb-10 max-w-sm text-sm leading-relaxed text-foreground/50 md:max-w-md md:text-base">
                {t.booking.body}
              </p>
            </Reveal>

            <Reveal variant="text" delay={220}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/bk inline-flex h-12 min-h-12 items-center justify-center bg-foreground px-8 text-[11px] uppercase tracking-[0.12em] text-background transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground/88"
                >
                  <span className="transition-transform duration-500 group-hover/bk:-translate-y-px">
                    {t.booking.instagram}
                  </span>
                </a>
                <a
                  href={telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/bk inline-flex h-12 min-h-12 items-center justify-center border border-foreground/15 px-8 text-[11px] uppercase tracking-[0.12em] text-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-foreground/30 hover:bg-foreground hover:text-background"
                >
                  <span className="transition-transform duration-500 group-hover/bk:-translate-y-px">
                    {t.booking.telegram}
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-foreground/10 pt-10 lg:col-span-6 lg:col-start-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Reveal variant="text" delay={200}>
              <div>
                {serviceNumbers.map((num) => (
                  <div
                    key={num}
                    className="group flex cursor-default items-center justify-between border-b border-foreground/10 py-5 transition-colors duration-500 hover:border-foreground/20"
                  >
                    <div className="flex min-w-0 items-baseline gap-5">
                      <span className="label-xs w-5 shrink-0 text-foreground/25 tabular-nums">{num}</span>
                      <span className="text-base text-foreground/70 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-foreground">
                        {t.booking.services[num]}
                      </span>
                    </div>
                    <span className="shrink-0 text-foreground/20 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
