"use client"

import { Reveal } from "@/components/ui/reveal"
import { modelStats } from "@/data/model-info"

export function ModelInfoSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background relative">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            06 / Stats
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <span className="editorial-italic text-xl md:text-2xl text-foreground/50 block mb-2">Model</span>
              <h2 className="editorial-display text-4xl md:text-5xl lg:text-6xl text-foreground">
                INFO
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Stats Grid - Editorial Style */}
        <Reveal delay={100}>
          <div className="border-t border-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {modelStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="border-b border-r border-foreground/10 p-6 md:p-8 lg:p-10 last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
                >
                  {/* Number indicator */}
                  <span className="text-[9px] font-mono text-foreground/20 block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  {/* Value - Large */}
                  <span className="editorial-display text-3xl md:text-4xl lg:text-5xl text-foreground block mb-2">
                    {stat.value}
                  </span>
                  
                  {/* Label */}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
