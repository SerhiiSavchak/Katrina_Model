"use client"

import { Reveal } from "@/components/ui/reveal"
import Image from "next/image"

export function IntroSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-sm text-foreground/35 mb-6">02 / Intro</p>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="display-md text-[clamp(1.75rem,4vw,3rem)] text-foreground leading-[1.15] mb-8">
                Soft presence. Sharp silhouette. Cinematic body language.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="line-h w-16 mb-8" />
            </Reveal>

            <Reveal delay={200}>
              <p className="text-foreground/55 text-base md:text-lg leading-relaxed max-w-xl">
                Katrina Dragonfly is an international model working across fashion, 
                studio, beauty and art nude photography — available for selected 
                creative and commercial projects across Ukraine and Europe.
              </p>
            </Reveal>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <Reveal delay={250}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/portfolio/portfolio-03.jpg"
                  alt="Katrina Dragonfly - Studio Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="label-xs text-foreground/30 mt-4">
                Studio Portrait, 2024
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
