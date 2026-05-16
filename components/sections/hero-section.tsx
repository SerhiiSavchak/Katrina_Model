"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/cn"
import { useLocale, useSiteReveal } from "@/components/providers/app-providers"

const POSTER_SHARP =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2880&q=88"

const VIDEO_MP4 = "/videos/hero-katrina.mp4"
/** Локальный loop: editorial fashion (Mixkit «Fashion model… white background», free license) — замените на свой ролик при необходимости */
const VIDEO_LOOP_LOCAL = "/videos/hero-loop.mp4"
/** Запасной тот же стиль — Mixkit, если локальный файл удалён */
const REMOTE_FALLBACK_MP4 =
  "https://assets.mixkit.co/videos/43276/43276-720.mp4"

export function HeroSection() {
  const { t, locale } = useLocale()
  const { heroReveal, reducedMotion } = useSiteReveal()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    void v.play().catch(() => {})
  }, [])

  const motionOn = heroReveal && !reducedMotion

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-neutral-950 text-background"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className={cn(
            "absolute left-0 top-0 h-full min-h-[100svh] w-full object-cover object-[32%_27%] sm:object-[34%_27%] md:object-[38%_28%] lg:w-[132%] lg:max-w-none lg:object-[76%_30%] xl:w-[142%] xl:object-[80%_30%]",
            motionOn && "animate-hero-media-in",
            !motionOn && !reducedMotion && "opacity-0",
            reducedMotion && heroReveal && "opacity-100"
          )}
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
        <div className="w-full max-w-[min(42rem,100%)]">
          <div className="mb-5 overflow-hidden">
            <p
              className={cn(
                "label-sm text-background/55",
                motionOn && "animate-hero-rise-soft",
                reducedMotion && heroReveal && "opacity-100",
                !heroReveal && "opacity-0"
              )}
              style={{ animationDelay: reducedMotion ? undefined : "40ms" }}
            >
              {t.hero.kicker}
            </p>
          </div>

          <div className="mb-6 overflow-hidden">
            <p
              className={cn(
                "label-xs text-background/45",
                motionOn && "animate-hero-rise-soft",
                reducedMotion && heroReveal && "opacity-100",
                !heroReveal && "opacity-0"
              )}
              style={{ animationDelay: reducedMotion ? undefined : "120ms" }}
            >
              {t.hero.metaName}
            </p>
          </div>

          <div className="mb-6 max-w-full space-y-1">
            <div className="overflow-hidden">
              <h1
                className={cn(
                  "display-xl max-w-full text-pretty leading-[0.92] tracking-tight text-background break-words",
                  locale === "ua"
                    ? "text-[clamp(1.55rem,7.2vw,5.25rem)]"
                    : "text-[clamp(2.1rem,9vw,6.25rem)]",
                  motionOn && "animate-stagger",
                  reducedMotion && heroReveal && "opacity-100",
                  !heroReveal && "opacity-0"
                )}
                style={{ animationDelay: reducedMotion ? undefined : "200ms" }}
              >
                {t.hero.titleLine1}
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className={cn(
                  "display-xl max-w-full text-pretty leading-[0.92] tracking-tight text-background break-words",
                  locale === "ua"
                    ? "text-[clamp(1.55rem,7.2vw,5.25rem)]"
                    : "text-[clamp(2.1rem,9vw,6.25rem)]",
                  motionOn && "animate-stagger",
                  reducedMotion && heroReveal && "opacity-100",
                  !heroReveal && "opacity-0"
                )}
                style={{ animationDelay: reducedMotion ? undefined : "300ms" }}
              >
                {t.hero.titleLine2}
              </h1>
            </div>
          </div>

          <div
            className={cn(
              "mb-4",
              motionOn && "animate-hero-rise-soft",
              reducedMotion && heroReveal && "opacity-100",
              !heroReveal && "opacity-0"
            )}
            style={{ animationDelay: reducedMotion ? undefined : "420ms" }}
          >
            <div className="mb-4 h-px w-14 bg-background/35" />
            <p className="label-sm text-background/60">{t.hero.disciplines}</p>
          </div>

          <p
            className={cn(
              "mb-10 max-w-xl text-base text-background/50 md:text-lg",
              motionOn && "animate-hero-rise-soft",
              reducedMotion && heroReveal && "opacity-100",
              !heroReveal && "opacity-0"
            )}
            style={{ animationDelay: reducedMotion ? undefined : "500ms" }}
          >
            {t.hero.location}
          </p>

          <div
            className={cn(
              "flex max-w-full flex-col gap-3 sm:flex-row sm:flex-wrap",
              motionOn && "animate-hero-rise-soft",
              reducedMotion && heroReveal && "opacity-100",
              !heroReveal && "opacity-0"
            )}
            style={{ animationDelay: reducedMotion ? undefined : "620ms" }}
          >
            <Link
              href="#contact"
              className="inline-flex h-12 min-w-[12rem] max-w-full shrink-0 items-center justify-center bg-background px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-background/90"
            >
              {t.hero.bookShoot}
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex h-12 min-w-[12rem] max-w-full shrink-0 items-center justify-center border border-background/35 bg-transparent px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-background transition-all duration-300 hover:border-background/60 hover:bg-background/10"
            >
              {t.hero.viewPortfolio}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3",
          motionOn && "animate-hero-rise-soft",
          reducedMotion && heroReveal && "opacity-100",
          !heroReveal && "opacity-0"
        )}
        style={{ animationDelay: reducedMotion ? undefined : "780ms" }}
      >
        <span className="label-xs text-background/40">{t.hero.scroll}</span>
        <div className="h-8 w-px bg-gradient-to-b from-background/40 to-transparent" />
      </div>
    </section>
  )
}
