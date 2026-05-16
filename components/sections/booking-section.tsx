"use client"

import { Reveal } from "@/components/ui/reveal"

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
    <section id="booking" className="py-28 md:py-36 lg:py-44 bg-card">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Header */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label-sm text-foreground/35 mb-6">07 / Booking</p>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="display-xl text-[clamp(2rem,6vw,4rem)] text-foreground mb-8">
                SELECTED PROJECTS
              </h2>
            </Reveal>
            
            <Reveal delay={150}>
              <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Professional collaborations with photographers, studios and brands across fashion, beauty and creative photography.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-foreground text-background text-[11px] uppercase tracking-[0.12em] h-12 px-7 hover:bg-foreground/90 transition-colors duration-300"
                >
                  Book via Instagram
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-foreground/15 text-foreground text-[11px] uppercase tracking-[0.12em] h-12 px-7 hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Contact on Telegram
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Services List */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={250}>
              <div className="border-t border-foreground/10">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="flex items-center justify-between py-5 border-b border-foreground/10 group cursor-default"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="label-xs text-foreground/25 w-5 tabular-nums">
                        {service.number}
                      </span>
                      <span className="text-foreground/70 text-base group-hover:text-foreground transition-colors duration-300">
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
