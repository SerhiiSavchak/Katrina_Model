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
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center pt-24 pb-12 lg:py-0">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Meta */}
            <div className="overflow-hidden mb-6">
              <p 
                className={`label-sm text-foreground/40 ${
                  isLoaded ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                International Model
              </p>
            </div>

            {/* Name */}
            <div className="mb-6">
              <div className="overflow-hidden">
                <h1 
                  className={`display-xl text-[clamp(2.5rem,10vw,6rem)] text-foreground ${
                    isLoaded ? "animate-stagger" : "opacity-0"
                  }`}
                  style={{ animationDelay: "350ms" }}
                >
                  KATRINA
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 
                  className={`display-xl text-[clamp(2.5rem,10vw,6rem)] text-foreground ${
                    isLoaded ? "animate-stagger" : "opacity-0"
                  }`}
                  style={{ animationDelay: "450ms" }}
                >
                  DRAGONFLY
                </h1>
              </div>
            </div>

            {/* Direction Line */}
            <div 
              className={`mb-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "600ms" }}
            >
              <div className="line-h w-12 mb-4" />
              <p className="label-sm text-foreground/50">
                Fashion · Studio · Beauty · Art Nude
              </p>
            </div>

            {/* Location */}
            <div 
              className={`mb-10 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "700ms" }}
            >
              <p className="text-sm text-foreground/40">
                Based in Ukraine / Available in Europe
              </p>
            </div>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 ${
                isLoaded ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "850ms" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-foreground text-background text-[11px] uppercase tracking-[0.12em] h-12 px-7 hover:bg-foreground/90 transition-colors duration-300"
              >
                Book a shoot
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center border border-foreground/15 text-foreground text-[11px] uppercase tracking-[0.12em] h-12 px-7 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View portfolio
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2">
            <div 
              className={`relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden ${
                isLoaded ? "animate-reveal-clip-left" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <Image
                src="/images/hero-katrina.jpg"
                alt="Katrina Dragonfly - International fashion and editorial model"
                fill
                priority
                className={`object-cover object-center transition-transform duration-[1.5s] ease-out ${
                  isLoaded ? "scale-100" : "scale-105"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Image Caption */}
            <div 
              className={`absolute bottom-4 right-4 ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "1200ms" }}
            >
              <p className="label-xs text-foreground/30">
                Editorial 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "1400ms" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="label-xs text-foreground/25">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/25 to-transparent" />
        </div>
      </div>
    </section>
  )
}
