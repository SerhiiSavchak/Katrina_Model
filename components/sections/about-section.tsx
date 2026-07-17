"use client"

import { Reveal } from "@/components/ui/reveal"
import { ScrollParallax } from "@/components/ui/scroll-parallax"
import { SiteContainer } from "@/components/layout/site-container"
import { aboutSectionImage } from "@/data/remote-images"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useLocale } from "@/components/providers/app-providers"

export function AboutSection() {
  const { t } = useLocale()

  const details = [
    t.about.details.location,
    t.about.details.availability,
    t.about.details.direction,
    t.about.details.collaboration,
  ]

  return (
    <section
      id="about"
      className="section-ambient-in relative overflow-hidden bg-dark py-16 text-dark-foreground md:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 0%, hsl(40 20% 96% / 0.35), transparent 55%)",
        }}
        aria-hidden
      />

      <SiteContainer className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal variant="image">
              <div className="relative">
                <div className="absolute -left-4 top-10 hidden h-32 w-px bg-dark-foreground/15 lg:block" aria-hidden />
                <ScrollParallax
                  intensity={14}
                  className="group relative aspect-[3/4] max-h-[min(78vh,52rem)] overflow-hidden bg-neutral-950/80 shadow-[0_40px_120px_-48px_rgba(0,0,0,0.65)]"
                >
                  <Image
                    src={aboutSectionImage}
                    alt="Portrait of the model in a red editorial dress"
                    fill
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                    className="object-cover transition-transform duration-[1.35s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                    style={{ objectPosition: "56% 18%" }}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </ScrollParallax>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7 lg:min-h-[min(78vh,52rem)] lg:pl-4">
            <Reveal variant="text">
              <p className="label-sm mb-5 text-dark-foreground/38">{t.about.label}</p>
            </Reveal>

            <Reveal variant="text" delay={80}>
              <p className="label-xs mb-4 text-dark-foreground/45">{t.about.lede}</p>
            </Reveal>

            <Reveal variant="text" delay={120}>
              <h2 className="display-xl mb-6 max-w-full text-pretty text-[clamp(1.85rem,5.5vw,3.75rem)] leading-[0.96] tracking-tight text-dark-foreground">
                {t.about.title}
              </h2>
            </Reveal>

            <Reveal variant="line" delay={160}>
              <div className="mb-8 h-px w-16 bg-dark-foreground/22" />
            </Reveal>

            <Reveal variant="text" delay={200}>
              <p className="mb-12 max-w-lg text-pretty text-lg leading-[1.65] text-dark-foreground/72 md:text-xl">
                {t.about.body}
              </p>
            </Reveal>

            <Reveal variant="text" delay={260}>
              <ul className="max-w-xl divide-y divide-dark-foreground/12 border-y border-dark-foreground/12">
                {details.map((detail, i) => (
                  <li key={detail.label} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-8">
                    <span className="label-xs text-dark-foreground/32">
                      {String(i + 1).padStart(2, "0")} — {detail.label}
                    </span>
                    <span className="text-[15px] leading-relaxed text-dark-foreground/84">{detail.value}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}
