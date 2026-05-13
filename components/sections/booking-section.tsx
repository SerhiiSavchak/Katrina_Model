"use client"

import { Reveal } from "@/components/ui/reveal"
import Link from "next/link"

const services = [
  { name: "Fashion shoots", number: "01" },
  { name: "Studio sessions", number: "02" },
  { name: "Beauty campaigns", number: "03" },
  { name: "Lingerie / boudoir", number: "04" },
  { name: "Art nude projects", number: "05" },
  { name: "Brand collaborations", number: "06" },
  { name: "Creative photo & video", number: "07" },
]

export function BookingSection() {
  return (
    <section id="booking" className="py-32 md:py-40 lg:py-52 bg-card relative">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            07 / Booking
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Header */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <span className="editorial-italic text-xl md:text-2xl text-foreground/50 block mb-2">Available for</span>
              <h2 className="editorial-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8">
                SELECTED PROJECTS
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Professional collaborations with photographers, studios and brands across fashion, beauty and creative photography.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-foreground text-background text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-foreground/90 transition-colors duration-300"
                >
                  Book via Instagram
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-foreground/20 text-foreground text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Contact on Telegram
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Services List */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal delay={200}>
              <div className="border-t border-foreground/10">
                {services.map((service, index) => (
                  <div
                    key={service.number}
                    className="flex items-center justify-between py-5 md:py-6 border-b border-foreground/10 group cursor-default"
                  >
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="text-[10px] font-mono text-foreground/20 w-6">
                        {service.number}
                      </span>
                      <span className="text-foreground/80 text-base md:text-lg group-hover:text-foreground transition-colors duration-300">
                        {service.name}
                      </span>
                    </div>
                    <span className="text-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
