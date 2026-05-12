"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-katrina.jpg"
          alt="Katrina Dragonfly - International Model"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-32">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in">
            International Model
          </p>

          {/* Name */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground mb-6 animate-reveal-up">
            Katrina
            <br />
            <span className="italic">Dragonfly</span>
          </h1>

          {/* Positioning */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-lg animate-reveal-up animation-delay-200">
            Fashion, studio, beauty and art nude projects across Ukraine and Europe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-reveal-up animation-delay-300">
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book a shoot
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View portfolio
              </Button>
            </Link>
          </div>

          {/* Location */}
          <p className="text-sm text-muted-foreground animate-fade-in animation-delay-500">
            Based in Ukraine · Available in Europe
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in animation-delay-500">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-foreground/30" />
      </div>
    </section>
  )
}
