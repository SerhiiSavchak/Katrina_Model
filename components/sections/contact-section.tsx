"use client"

import { Reveal } from "@/components/ui/reveal"
import { contactChannels, type ContactChannelId } from "@/data/contacts"
import { SiteContainer } from "@/components/layout/site-container"
import { useLocale } from "@/components/providers/app-providers"

const channelOrder: ContactChannelId[] = ["instagram", "telegram", "email", "phone"]

export function ContactSection() {
  const { t } = useLocale()

  const ordered = channelOrder
    .map((id) => contactChannels.find((c) => c.id === id))
    .filter((c): c is (typeof contactChannels)[number] => Boolean(c))

  return (
    <section
      id="contact"
      className="section-ambient-in relative overflow-x-clip bg-dark py-16 text-dark-foreground md:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -right-[4%] top-0 h-[min(70vw,30rem)] w-[min(70vw,30rem)] max-w-[min(100%,42rem)] rounded-full bg-[radial-gradient(circle_at_center,hsl(40_18%_96%/0.05),transparent_70%)]"
        aria-hidden
      />

      <SiteContainer className="relative">
        <div className="mb-10 md:mb-12 lg:mb-14">
          <Reveal variant="text">
            <p className="label-sm text-dark-foreground/38">{t.contact.label}</p>
          </Reveal>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-10 md:gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10 lg:items-start">
          <div className="min-w-0 lg:col-span-5 xl:col-span-5">
            <Reveal variant="text" delay={60}>
              <p className="label-xs mb-6 text-dark-foreground/45">{t.contact.hubMeta}</p>
            </Reveal>

            <Reveal variant="text" delay={100}>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.35rem,6.5vw,4.25rem)] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-dark-foreground">
                <span className="block">{t.contact.headlineLine1}</span>
                <span className="mt-3 block editorial-italic text-[clamp(1.85rem,5vw,3.25rem)] font-normal normal-case tracking-[-0.02em] text-dark-foreground/88">
                  {t.contact.headlineLine2}
                </span>
              </h2>
            </Reveal>

            <Reveal variant="line" delay={160}>
              <div className="mt-10 h-px w-16 bg-dark-foreground/18" />
            </Reveal>

            <Reveal variant="text" delay={200}>
              <p className="mt-10 max-w-md text-pretty text-base leading-relaxed text-dark-foreground/50 md:text-lg">
                {t.contact.sub}
              </p>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <Reveal variant="text" delay={140}>
              <div className="mx-auto w-full max-w-xl border border-dark-foreground/16 bg-dark-foreground/[0.025] p-px shadow-[inset_0_0_0_1px_hsl(40_18%_96%/0.05)] lg:mx-0">
                <div className="divide-y divide-dark-foreground/12">
                  {ordered.map((channel) => {
                    const label =
                      t.contact.channels[channel.id as ContactChannelId] ?? channel.id
                    const external = channel.href.startsWith("http")

                    return (
                      <a
                        key={channel.id}
                        href={channel.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group/contact relative flex min-h-[3.5rem] items-center gap-4 py-5 pl-5 pr-5 transition-[background-color,border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] before:pointer-events-none before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-dark-foreground/0 before:transition-colors before:duration-500 active:scale-[0.992] active:bg-dark-foreground/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-dark [@media(hover:hover)]:hover:bg-dark-foreground/[0.04] [@media(hover:hover)]:hover:before:bg-dark-foreground/28 md:min-h-[5.75rem] md:gap-6 md:py-7 md:pl-6 md:pr-7"
                      >
                      <div className="min-w-0 flex-1">
                        <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-dark-foreground/38 transition-colors duration-500 group-hover/contact:text-dark-foreground/55">
                          {label}
                        </span>
                        <span className="block break-words text-[clamp(0.95rem,2.2vw,1.1rem)] leading-snug text-dark-foreground/92 [overflow-wrap:anywhere] transition-[transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] motion-safe:[@media(hover:hover)]:group-hover/contact:translate-x-1 [@media(hover:hover)]:group-hover/contact:text-dark-foreground">
                          {channel.value}
                        </span>
                      </div>

                      <span
                        className="shrink-0 text-lg leading-none text-dark-foreground/28 transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] motion-safe:[@media(hover:hover)]:group-hover/contact:translate-x-1 [@media(hover:hover)]:group-hover/contact:text-dark-foreground/70"
                        aria-hidden
                      >
                        →
                      </span>
                    </a>
                  )
                })}
              </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}
