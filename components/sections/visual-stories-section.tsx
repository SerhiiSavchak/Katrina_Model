"use client"

import { Reveal } from "@/components/ui/reveal"
import { stories } from "@/data/stories"
import Image from "next/image"
import Link from "next/link"

export function VisualStoriesSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <Reveal>
            <p className="label-sm text-foreground/35 mb-6">04 / Stories</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-xl text-[clamp(2.5rem,8vw,5rem)] text-foreground">
              VISUAL STORIES
            </h2>
          </Reveal>
        </div>

        {/* Story Blocks */}
        <div className="space-y-20 md:space-y-28 lg:space-y-36">
          {stories.map((story, index) => (
            <Reveal key={story.id} delay={index * 75}>
              <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                {/* Image */}
                <div className={`${
                  index % 2 === 0 
                    ? "lg:col-span-7" 
                    : "lg:col-span-7 lg:col-start-6 lg:order-2"
                }`}>
                  <div className="relative aspect-[16/10] overflow-hidden group">
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
                <div className={`${
                  index % 2 === 0 
                    ? "lg:col-span-4 lg:col-start-9" 
                    : "lg:col-span-4 lg:col-start-1 lg:order-1"
                }`}>
                  <span className="label-xs text-foreground/30 block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  <span className="label-xs text-foreground/40 block mb-3">
                    {story.category}
                  </span>
                  
                  <h3 className="display-md text-2xl md:text-3xl text-foreground mb-4">
                    {story.title}
                  </h3>
                  
                  <p className="text-foreground/50 text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                  
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.1em] text-foreground group/link"
                  >
                    <span className="border-b border-foreground/25 group-hover/link:border-foreground transition-colors pb-0.5">
                      View story
                    </span>
                    <span className="text-foreground/30 group-hover/link:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
