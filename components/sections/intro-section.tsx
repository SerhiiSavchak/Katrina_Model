"use client"

import { Reveal } from "@/components/ui/reveal"
import Image from "next/image"

export function IntroSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            02 / Opening
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Quote */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <blockquote className="mb-10">
                <p className="editorial-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8">
                  <span className="text-foreground/30">&ldquo;</span>
                  Soft presence.
                  <br />
                  Sharp silhouette.
                  <br />
                  <span className="editorial-italic">Cinematic body language.</span>
                  <span className="text-foreground/30">&rdquo;</span>
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={150}>
              <div className="editorial-line w-24 mb-8" />
            </Reveal>

            <Reveal delay={200}>
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
                Katrina Dragonfly is an international model working across fashion, 
                studio, beauty and art nude photography — available for selected 
                creative and commercial projects across Ukraine and Europe.
              </p>
            </Reveal>
          </div>

          {/* Right: Image Detail */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={300}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/portfolio/portfolio-03.jpg"
                  alt="Katrina Dragonfly - Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Editorial caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Studio Portrait, 2024
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
