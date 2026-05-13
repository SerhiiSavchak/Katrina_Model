"use client"

import { Reveal } from "@/components/ui/reveal"
import Image from "next/image"

const details = [
  { label: "Location", value: "Ukraine / Europe" },
  { label: "Availability", value: "Selected Bookings" },
  { label: "Direction", value: "Fashion · Beauty · Studio · Art Nude" },
  { label: "Collaboration", value: "Photographers, Studios, Brands" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40 lg:py-52 bg-dark text-dark-foreground relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-dark-foreground/30">
            05 / About
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Image */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/portfolio/portfolio-01.jpg"
                  alt="Katrina Dragonfly Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <Reveal delay={100}>
              <div className="mb-8">
                <span className="editorial-italic text-xl md:text-2xl text-dark-foreground/50 block mb-2">About</span>
                <h2 className="editorial-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-dark-foreground">
                  KATRINA
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="w-16 h-px bg-dark-foreground/20 mb-8" />
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-dark-foreground/70 leading-relaxed mb-12">
                Katrina Dragonfly is a model available for selected fashion, beauty, 
                studio and art nude projects. Her work is built around expressive posing, 
                soft cinematic presence and a refined visual language.
              </p>
            </Reveal>

            {/* Details Grid */}
            <Reveal delay={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-dark-foreground/10 pt-8">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-dark-foreground/30 block mb-2">
                      {detail.label}
                    </span>
                    <span className="text-dark-foreground/80 text-sm">
                      {detail.value}
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
