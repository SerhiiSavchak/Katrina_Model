"use client"

import { Reveal } from "@/components/ui/reveal"
import { merchItems } from "@/data/merch"
import Image from "next/image"

export function MerchSection() {
  return (
    <section id="merch" className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <Reveal>
            <p className="label-sm text-foreground/35 mb-6">08 / Merch</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-xl text-[clamp(2rem,6vw,4rem)] text-foreground mb-4">
              MERCH
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-foreground/50 text-sm md:text-base max-w-lg">
              Small personal drops inspired by Katrina&apos;s visual world
            </p>
          </Reveal>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {merchItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 75}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-card mb-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                <div className="mb-4">
                  <span className="label-xs text-foreground/30 block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-foreground/50">
                    {item.description}
                  </p>
                </div>
                
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  <span className="border-b border-foreground/25 hover:border-foreground pb-0.5">
                    Order via Telegram
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
