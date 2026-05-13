"use client"

import { Reveal } from "@/components/ui/reveal"
import { merchItems } from "@/data/merch"
import Image from "next/image"

export function MerchSection() {
  return (
    <section id="merch" className="py-32 md:py-40 lg:py-52 bg-background relative">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            08 / Merch
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <span className="editorial-italic text-xl md:text-2xl text-foreground/50 block mb-2">Limited</span>
              <h2 className="editorial-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4">
                MERCH
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-foreground/50 text-sm md:text-base max-w-lg">
                Small personal drops inspired by Katrina&apos;s visual world
              </p>
            </Reveal>
          </div>
        </div>

        {/* Products Grid - Lookbook Style */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {merchItems.map((item, index) => {
            // Asymmetric layout
            const layouts = [
              "col-span-12 sm:col-span-6 lg:col-span-3",
              "col-span-12 sm:col-span-6 lg:col-span-3 lg:mt-16",
              "col-span-12 sm:col-span-6 lg:col-span-3",
              "col-span-12 sm:col-span-6 lg:col-span-3 lg:mt-8",
            ]
            
            return (
              <div key={item.id} className={layouts[index % layouts.length]}>
                <Reveal delay={index * 75}>
                  <article className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-card mb-5">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="mb-4">
                      <span className="text-[9px] font-mono text-foreground/30 block mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="editorial-heading text-lg text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Order Link */}
                    <a
                      href="https://telegram.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      <span className="border-b border-foreground/30 hover:border-foreground pb-0.5">
                        Order via Telegram
                      </span>
                    </a>
                  </article>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
