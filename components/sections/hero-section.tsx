"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Clip Reveal */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 transition-all duration-[1.5s] ease-out ${
            isLoaded ? "clip-path-full" : "clip-path-hidden"
          }`}
          style={{
            clipPath: isLoaded ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"
          }}
        >
          <Image
            src="/images/hero-katrina.jpg"
            alt="Katrina Dragonfly - International Model"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Editorial Grid Layout */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-6">
            {/* Section Number */}
            <div className={`overflow-hidden mb-8 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <p 
                className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 animate-reveal-up"
                style={{ animationDelay: "200ms" }}
              >
                01 / Cover
              </p>
            </div>

            {/* Main Name - Split Typography */}
            <div className="mb-8 md:mb-12">
              <div className="overflow-hidden">
                <h1 
                  className={`editorial-display text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] text-foreground leading-[0.85] ${
                    isLoaded ? "animate-stagger" : "opacity-0"
                  }`}
                  style={{ animationDelay: "300ms" }}
                >
                  KATRINA
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 
                  className={`editorial-italic text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] text-foreground leading-[0.9] ${
                    isLoaded ? "animate-stagger" : "opacity-0"
                  }`}
                  style={{ animationDelay: "450ms" }}
                >
                  Dragonfly
                </h1>
              </div>
            </div>

            {/* Meta Info Row */}
            <div 
              className={`flex flex-wrap items-center gap-6 md:gap-8 mb-10 md:mb-14 ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "700ms" }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                International Model
              </span>
              <span className="w-8 h-px bg-foreground/20 hidden sm:block" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                Fashion · Studio · Beauty · Art Nude
              </span>
            </div>

            {/* Location */}
            <div 
              className={`mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "850ms" }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-2">
                Based in
              </p>
              <p className="text-sm tracking-wide text-foreground/70">
                Ukraine / Europe
              </p>
            </div>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 ${
                isLoaded ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "1000ms" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-foreground text-background text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-foreground/90 transition-colors duration-300"
              >
                Book a shoot
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center border border-foreground/20 text-foreground text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Side Label */}
      <div 
        className={`hidden lg:block absolute right-10 xl:right-16 top-1/2 -translate-y-1/2 z-10 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "1200ms" }}
      >
        <p 
          className="text-[10px] uppercase tracking-[0.3em] text-foreground/30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Fashion · Editorial · Art
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "1400ms" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
