"use client"

import { Reveal } from "@/components/ui/reveal"
import { stories } from "@/data/stories"
import Image from "next/image"
import Link from "next/link"

export function VisualStoriesSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background relative">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            04 / Stories
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-20 md:mb-32">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="editorial-italic text-2xl md:text-3xl text-foreground/50">Selected</span>
              </div>
              <h2 className="editorial-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
                VISUAL STORIES
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Editorial Story Blocks */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {stories.map((story, index) => (
            <Reveal key={story.id} delay={index * 100}>
              <article className={`grid grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "direction-rtl" : ""
              }`}>
                {/* Image */}
                <div className={`col-span-12 ${
                  index % 2 === 0 
                    ? "lg:col-span-7" 
                    : "lg:col-span-7 lg:col-start-6 lg:order-2"
                }`}>
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden group">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`col-span-12 ${
                  index % 2 === 0 
                    ? "lg:col-span-4 lg:col-start-9" 
                    : "lg:col-span-4 lg:col-start-1 lg:order-1"
                }`}>
                  <div className="py-6 lg:py-0">
                    {/* Number */}
                    <span className="text-[10px] font-mono text-foreground/30 block mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    
                    {/* Category */}
                    <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 block mb-3">
                      {story.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="editorial-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                      {story.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-foreground/50 text-sm leading-relaxed mb-6">
                      {story.description}
                    </p>
                    
                    {/* Link */}
                    <Link
                      href="#"
                      className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground group/link"
                    >
                      <span className="border-b border-foreground/30 group-hover/link:border-foreground transition-colors pb-0.5">
                        View story
                      </span>
                      <span className="text-foreground/30 group-hover/link:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
