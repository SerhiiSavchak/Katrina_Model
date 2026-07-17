"use client"

import { Reveal } from "@/components/ui/reveal"
import { ScrollParallax } from "@/components/ui/scroll-parallax"
import { SiteContainer } from "@/components/layout/site-container"
import { introSectionImage } from "@/data/remote-images"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useLocale } from "@/components/providers/app-providers"

export function IntroSection() {
  const { t } = useLocale()

  return (
    <section id="intro" className="section-ambient-in relative bg-background py-16 md:py-24 lg:py-28">
      <SiteContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal variant="text">
              <p className="label-sm mb-6 text-foreground/35">{t.intro.label}</p>
            </Reveal>

            <Reveal variant="text" delay={100}>
              <h2 className="display-md mb-3 max-w-full text-pretty text-[clamp(1.5rem,4.2vw,2.85rem)] leading-[1.14] tracking-tight text-foreground md:leading-[1.1]">
                <span className="block">{t.intro.headlineLine1}</span>
                <span className="mt-2 block text-foreground/78">{t.intro.headlineLine2}</span>
              </h2>
            </Reveal>

            <Reveal variant="line" delay={150}>
              <div className="line-h my-8 w-14" />
            </Reveal>

            <Reveal variant="text" delay={200}>
              <p className="max-w-md text-base leading-relaxed text-foreground/55 md:max-w-xl md:text-lg">
                {t.intro.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="image" delay={220}>
              <ScrollParallax
                intensity={10}
                className="group relative aspect-[3/4] bg-muted shadow-[0_24px_80px_-32px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src={introSectionImage}
                  alt="Natural outdoor portrait of the model in a green garden"
                  fill
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR_DATA_URL}
                  className="object-cover transition-transform duration-[1.25s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  style={{ objectPosition: "50% 28%" }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/[0.05]" />
              </ScrollParallax>
              <p className="label-xs mt-4 text-foreground/30">{t.intro.caption}</p>
            </Reveal>
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}
