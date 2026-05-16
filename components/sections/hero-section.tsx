"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/cn"

const POSTER_SHARP =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2880&q=88"

const VIDEO_MP4 = "/videos/hero-katrina.mp4"
/** Локальный loop: editorial fashion (Mixkit «Fashion model… white background», free license) — замените на свой ролик при необходимости */
const VIDEO_LOOP_LOCAL = "/videos/hero-loop.mp4"
/** Запасной тот же стиль — Mixkit, если локальный файл удалён */
const REMOTE_FALLBACK_MP4 =
  "https://assets.mixkit.co/videos/43276/43276-720.mp4"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    void v.play().catch(() => {})
  }, [])

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-neutral-950 text-background"
      aria-label="Hero"
    >
      {/* Десктоп: без translate (иначе слева «дыра» под bg). Шире слой + object-position — кадр заполняет весь хиро, сдвиг только за счёт crop. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute left-0 top-0 h-full min-h-[100svh] w-full object-cover object-[32%_27%] sm:object-[34%_27%] md:object-[38%_28%] lg:w-[132%] lg:max-w-none lg:object-[76%_30%] xl:w-[142%] xl:object-[80%_30%]"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster={POSTER_SHARP}
          aria-label="Hero background video"
        >
          <source src={VIDEO_MP4} type="video/mp4" />
          <source src={VIDEO_LOOP_LOCAL} type="video/mp4" />
          <source src={REMOTE_FALLBACK_MP4} type="video/mp4" />
        </video>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-black/65"
        aria-hidden
      />

      <div className="relative z-10 mx-auto box-border flex h-[100svh] min-h-[100svh] w-full max-w-[1440px] flex-col justify-center px-8 pb-16 pt-28 sm:px-10 md:pb-20 md:pt-32 lg:px-14 lg:pt-36">
        <div className="w-full max-w-2xl">
          <div className="mb-6 overflow-hidden">
            <p
              className={cn(
                "label-sm text-background/55",
                isLoaded ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: "120ms" }}
            >
              International Model
            </p>
          </div>

          <div className="mb-6 space-y-1">
            <div className="overflow-hidden">
              <h1
                className={cn(
                  "display-xl text-[clamp(2.75rem,12vw,7rem)] leading-[0.9] tracking-tight text-background",
                  isLoaded ? "animate-stagger" : "opacity-0"
                )}
                style={{ animationDelay: "220ms" }}
              >
                KATRINA
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className={cn(
                  "display-xl text-[clamp(2.75rem,12vw,7rem)] leading-[0.9] tracking-tight text-background",
                  isLoaded ? "animate-stagger" : "opacity-0"
                )}
                style={{ animationDelay: "320ms" }}
              >
                DRAGONFLY
              </h1>
            </div>
          </div>

          <div
            className={cn("mb-4", isLoaded ? "animate-fade-in" : "opacity-0")}
            style={{ animationDelay: "480ms" }}
          >
            <div className="mb-4 h-px w-14 bg-background/35" />
            <p className="label-sm text-background/60">
              Fashion · Studio · Beauty · Art Nude
            </p>
          </div>

          <p
            className={cn(
              "mb-10 text-base text-background/50 md:text-lg",
              isLoaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "560ms" }}
          >
            Based in Ukraine / Available in Europe
          </p>

          <div
            className={cn(
              "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
              isLoaded ? "animate-reveal-up" : "opacity-0"
            )}
            style={{ animationDelay: "680ms" }}
          >
            <Link
              href="#contact"
              className="inline-flex h-12 min-w-[12rem] items-center justify-center bg-background px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-background/90"
            >
              Book a shoot
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex h-12 min-w-[12rem] items-center justify-center border border-background/35 bg-transparent px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-background transition-all duration-300 hover:border-background/60 hover:bg-background/10"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3",
          isLoaded ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: "900ms" }}
      >
        <span className="label-xs text-background/40">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-background/40 to-transparent" />
      </div>
    </section>
  )
}
