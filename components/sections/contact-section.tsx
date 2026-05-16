"use client"

import { Reveal } from "@/components/ui/reveal"
import { contactChannels, type ContactChannelId } from "@/data/contacts"
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
      className="section-ambient-in relative overflow-hidden bg-dark py-28 text-dark-foreground md:py-36 lg:py-44"
    >
      <div
        className="pointer-events-none absolute -right-[20%] top-0 h-[min(90vw,42rem)] w-[min(90vw,42rem)] rounded-full bg-[radial-gradient(circle_at_center,hsl(40_18%_96%/0.06),transparent_68%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-12">
        <div className="mb-14 md:mb-16 lg:mb-20">
          <Reveal variant="text">
            <p className="label-sm text-dark-foreground/38">{t.contact.label}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-6">
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

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal variant="text" delay={140}>
              <div className="divide-y divide-dark-foreground/12 border-y border-dark-foreground/12">
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
                      className="group/contact flex min-h-[5.25rem] items-center gap-6 py-6 transition-colors duration-500 md:min-h-[5.5rem] md:gap-8 md:py-7"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-dark-foreground/38 transition-colors duration-500 group-hover/contact:text-dark-foreground/55">
                          {label}
                        </span>
                        <span className="block text-[clamp(1rem,2.8vw,1.2rem)] text-dark-foreground/92 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/contact:translate-x-1">
                          {channel.value}
                        </span>
                      </div>

                      <span
                        className="shrink-0 text-lg leading-none text-dark-foreground/28 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/contact:translate-x-1 group-hover/contact:text-dark-foreground/70"
                        aria-hidden
                      >
                        →
                      </span>
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
