"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1200px] overflow-hidden bg-background">
      {/* Editorial Frame Lines */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Top line */}
        <div 
          className={`absolute top-6 left-6 right-6 h-px bg-foreground/10 origin-left ${
            isLoaded ? "animate-line-grow" : "scale-x-0"
          }`}
          style={{ animationDelay: "1200ms" }}
        />
        {/* Bottom line */}
        <div 
          className={`absolute bottom-6 left-6 right-6 h-px bg-foreground/10 origin-left ${
            isLoaded ? "animate-line-grow" : "scale-x-0"
          }`}
          style={{ animationDelay: "1300ms" }}
        />
        {/* Left line */}
        <div 
          className={`absolute top-6 bottom-6 left-6 w-px bg-foreground/10 origin-top ${
            isLoaded ? "animate-reveal-clip" : "opacity-0"
          }`}
          style={{ animationDelay: "1400ms" }}
        />
        {/* Right line */}
        <div 
          className={`absolute top-6 bottom-6 right-6 w-px bg-foreground/10 origin-top ${
            isLoaded ? "animate-reveal-clip" : "opacity-0"
          }`}
          style={{ animationDelay: "1500ms" }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative h-full z-10">
        <div className="h-full grid grid-cols-12 lg:grid-cols-24">
          
          {/* Left Side - Typography */}
          <div className="col-span-12 lg:col-span-11 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-24 lg:pt-0 relative z-20">
            
            {/* Page Indicator */}
            <div className="overflow-hidden mb-8 lg:mb-12">
              <p 
                className={`text-[10px] uppercase tracking-[0.4em] text-foreground/40 ${
                  isLoaded ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                01 / Cover
              </p>
            </div>

            {/* International Model Label */}
            <div className="overflow-hidden mb-4 lg:mb-6">
              <p 
                className={`text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-foreground/50 ${
                  isLoaded ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "350ms" }}
              >
                International Model
              </p>
            </div>

            {/* Main Name - KATRINA */}
            <div className="overflow-hidden">
              <h1 
                className={`editorial-display text-[18vw] md:text-[14vw] lg:text-[11vw] xl:text-[10vw] text-foreground leading-[0.8] ${
                  isLoaded ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "500ms" }}
              >
                KATRINA
              </h1>
            </div>

            {/* Main Name - DRAGONFLY */}
            <div className="overflow-hidden -mt-2 lg:-mt-4">
              <h1 
                className={`editorial-display text-[18vw] md:text-[14vw] lg:text-[11vw] xl:text-[10vw] text-foreground leading-[0.8] ${
                  isLoaded ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "650ms" }}
              >
                DRAGONFLY
              </h1>
            </div>

            {/* Direction Line */}
            <div className="overflow-hidden mt-6 lg:mt-10">
              <p 
                className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-foreground/50 ${
                  isLoaded ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "800ms" }}
              >
                Fashion · Studio · Beauty · Art Nude
              </p>
            </div>

            {/* Location */}
            <div 
              className={`flex items-center gap-4 mt-4 lg:mt-6 ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "950ms" }}
            >
              <span className="w-8 h-px bg-foreground/20" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                Ukraine / Europe
              </p>
            </div>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 mt-10 lg:mt-14 ${
                isLoaded ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "1100ms" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-foreground text-background text-[10px] md:text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-foreground/85 transition-colors duration-500"
              >
                Book a shoot
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center border border-foreground/25 text-foreground text-[10px] md:text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
              >
                View portfolio
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-span-12 lg:col-span-13 relative">
            {/* Image Container with asymmetric positioning */}
            <div 
              className={`absolute inset-0 lg:left-[-20%] lg:right-0 lg:top-[8%] lg:bottom-[8%] ${
                isLoaded ? "animate-reveal-clip-left" : "opacity-0"
              }`}
              style={{ 
                animationDelay: "300ms",
                clipPath: isLoaded ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/hero-katrina.jpg"
                  alt="Katrina Dragonfly - International fashion and editorial model from Ukraine"
                  fill
                  priority
                  className={`object-cover object-center transition-transform duration-[2s] ease-out ${
                    isLoaded ? "scale-100" : "scale-110"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Subtle gradient overlay for text contrast on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:hidden" />
              </div>
            </div>

            {/* Overlapping Typography Element */}
            <div 
              className={`hidden lg:block absolute left-[-25%] bottom-[15%] z-30 pointer-events-none ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "1400ms" }}
            >
              <p className="editorial-italic text-[8vw] text-foreground/[0.07] leading-none">
                Model
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Side Label - Left */}
      <div 
        className={`hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "1600ms" }}
      >
        <div className="w-px h-16 bg-foreground/15" />
        <p 
          className="text-[9px] uppercase tracking-[0.4em] text-foreground/30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Editorial Portfolio
        </p>
        <div className="w-px h-16 bg-foreground/15" />
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-30 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "1800ms" }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[8px] uppercase tracking-[0.4em] text-foreground/30">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-foreground/30 to-transparent animate-float" />
        </div>
      </div>

      {/* Bottom Right Meta */}
      <div 
        className={`hidden md:block absolute bottom-10 right-10 lg:right-16 z-30 text-right ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "1700ms" }}
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30">
          Est. 2024
        </p>
      </div>
    </section>
  )
}
