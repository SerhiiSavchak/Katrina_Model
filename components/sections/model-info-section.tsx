"use client"

import { Reveal } from "@/components/ui/reveal"
import { modelStats } from "@/data/model-info"

export function ModelInfoSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <Reveal>
            <p className="label-sm text-foreground/35 mb-6">06 / Stats</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-xl text-[clamp(2rem,6vw,4rem)] text-foreground">
              MODEL INFO
            </h2>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <Reveal delay={150}>
          <div className="border-t border-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {modelStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="border-b border-r border-foreground/10 p-6 md:p-8 last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
                >
                  <span className="label-xs text-foreground/25 block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  <span className="display-lg text-3xl md:text-4xl text-foreground block mb-2">
                    {stat.value}
                  </span>
                  
                  <span className="label-xs text-foreground/40">
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
