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
    <section id="about" className="py-28 md:py-36 lg:py-44 bg-dark text-dark-foreground">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Image */}
          <div className="lg:col-span-5">
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
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <Reveal>
              <p className="label-sm text-dark-foreground/35 mb-6">05 / About</p>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="display-xl text-[clamp(2.5rem,8vw,4.5rem)] text-dark-foreground mb-8">
                KATRINA
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="w-12 h-px bg-dark-foreground/20 mb-8" />
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-dark-foreground/70 leading-relaxed mb-10">
                Katrina Dragonfly is a model available for selected fashion, beauty, 
                studio and art nude projects. Her work is built around expressive posing, 
                soft cinematic presence and a refined visual language.
              </p>
            </Reveal>

            {/* Details */}
            <Reveal delay={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-dark-foreground/10 pt-8">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <span className="label-xs text-dark-foreground/30 block mb-2">
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
