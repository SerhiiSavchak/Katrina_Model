"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { siteContainerClass } from "@/components/layout/site-container"
import { cn } from "@/lib/cn"
import { useLocale, useSiteReveal } from "@/components/providers/app-providers"
import { heroPosterImage, heroPosterJpg, heroVideoSrc } from "@/data/remote-images"

const SCROLL_HINT_HIDE_PX = 96

export function HeroSection() {
  const { t, locale } = useLocale()
  const { heroReveal, contentReveal, reducedMotion, notifyHeroReady } = useSiteReveal()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollHintVisible, setScrollHintVisible] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  // The muted ambient video stays mounted under prefers-reduced-motion too:
  // unmounting it entirely made the hero look "broken" on machines with the
  // OS-level "reduce animation" setting. UI motion is still reduced elsewhere.
  const showVideo = !videoFailed

  const markVideoReady = useCallback(() => {
    setVideoReady(true)
    notifyHeroReady()
  }, [notifyHeroReady])

  const handleVideoError = useCallback(() => {
    if (process.env.NODE_ENV === "development") {
      console.warn("[hero] video failed to load — falling back to poster")
    }
    setVideoFailed(true)
    setVideoReady(false)
    notifyHeroReady()
  }, [notifyHeroReady])

  useEffect(() => {
    if (reducedMotion) {
      notifyHeroReady()
    }
  }, [reducedMotion, notifyHeroReady])

  useEffect(() => {
    if (!showVideo) return
    const v = videoRef.current
    if (!v) return
    // React does not always reflect `muted` into the SSR attribute; set the
    // live property before play() so autoplay policies treat it as muted.
    v.muted = true
    v.defaultMuted = true
    v.setAttribute("fetchpriority", "high")
    // Guard against the canplay event firing before React handlers were live
    if (v.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) markVideoReady()
    void v.play().catch((err) => {
      // Autoplay rejection is non-fatal: poster (or the decoded first frame) stays visible
      if (process.env.NODE_ENV === "development") {
        console.warn("[hero] autoplay was blocked:", err)
      }
    })
  }, [showVideo, markVideoReady])

  useEffect(() => {
    const onScroll = () => {
      setScrollHintVisible(window.scrollY < SCROLL_HINT_HIDE_PX)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToIntro = useCallback(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const el = document.getElementById("intro")
    if (el) {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    }
  }, [])

  const mediaMotion = heroReveal && !reducedMotion
  const copyMotion = contentReveal && !reducedMotion
  const lines: string[] =
    Array.isArray(t.hero.titleLines) && t.hero.titleLines.length > 0
      ? [...t.hero.titleLines]
      : [t.hero.metaName]
  const titleLineStartMs = 140
  const titleLineStaggerMs = 95
  const titleBlockDelayEnd = titleLineStartMs + Math.max(0, lines.length - 1) * titleLineStaggerMs

  const titleSizeClass =
    locale === "ua"
      ? "text-[clamp(1.65rem,6.5vw,3.35rem)] sm:text-[clamp(2.1rem,7.5vw,4.1rem)] md:text-[clamp(2.45rem,5.2vw,5.25rem)] lg:text-[clamp(2.65rem,4.6vw,5.75rem)]"
      : "text-[clamp(1.95rem,7.5vw,4.75rem)] sm:text-[clamp(2.2rem,6.5vw,5.5rem)] md:text-[clamp(2.75rem,6.5vw,7rem)] lg:text-[clamp(3.1rem,6.5vw,8rem)]"

  const titleMaxClass = locale === "ua" ? "max-w-full" : "max-w-[min(100%,46rem)]"
  const lineLeading = locale === "ua" ? "leading-[0.94]" : "leading-[0.95]"

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-x-clip bg-neutral-950 text-background"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
        <div
          className={cn(
            "absolute inset-0",
            mediaMotion && "animate-hero-media-in",
            !heroReveal && !reducedMotion && "opacity-0"
          )}
        >
          {/* Poster layer: instant first paint, stays under the video (crossfade target) */}
          <Image
            src={heroPosterImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className={cn(
              "object-cover object-[50%_32%]",
              "transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
              showVideo && videoReady ? "opacity-0" : "opacity-100"
            )}
            onLoad={notifyHeroReady}
            aria-hidden
          />

          {showVideo ? (
            <video
              ref={videoRef}
              className={cn(
                "absolute left-0 top-0 z-[1] h-full min-h-[100svh] w-full object-cover object-[50%_20%]",
                "transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                videoReady ? "opacity-100" : "opacity-0"
              )}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              poster={heroPosterJpg}
              onLoadedData={markVideoReady}
              onCanPlay={markVideoReady}
              onPlaying={markVideoReady}
              onError={handleVideoError}
              aria-label="Hero background video"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          ) : null}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/50 via-black/30 to-black/65"
        aria-hidden
      />

      <div
        className={cn(
          siteContainerClass,
          "relative z-10 box-border flex min-h-[100svh] flex-col justify-center pt-24 pb-20 sm:pt-28 sm:pb-24 md:min-h-[100svh] md:pt-32 md:pb-16 lg:pt-36"
        )}
      >
        <div className={cn("w-full min-w-0", titleMaxClass)}>
          <h1
            className={cn(
              "m-0 mb-6 max-w-full text-pretty tracking-tight text-background break-words uppercase",
              titleMaxClass
            )}
          >
            <div className="space-y-1">
              {lines.map((line, index) => (
                <span
                  key={`${locale}-${index}`}
                  className={cn(
                    "display-xl block max-w-full tracking-tight",
                    locale === "ua"
                      ? "whitespace-nowrap"
                      : "text-pretty break-words [overflow-wrap:anywhere]",
                    titleSizeClass,
                    lineLeading,
                    copyMotion && "animate-hero-copy-in",
                    reducedMotion && contentReveal && "opacity-100",
                    !contentReveal && !reducedMotion && "opacity-0"
                  )}
                  style={{
                    animationDelay:
                      reducedMotion || !contentReveal
                        ? undefined
                        : `${titleLineStartMs + index * titleLineStaggerMs}ms`,
                  }}
                >
                  {line}
                </span>
              ))}
            </div>
          </h1>

          <div
            className={cn(
              "mb-4",
              copyMotion && "animate-hero-copy-in",
              reducedMotion && contentReveal && "opacity-100",
              !contentReveal && !reducedMotion && "opacity-0"
            )}
            style={{
              animationDelay:
                reducedMotion || !contentReveal ? undefined : `${titleBlockDelayEnd + 50}ms`,
            }}
          >
            <div className="mb-4 h-px w-14 bg-background/35" />
            <p className="label-sm text-background/60">{t.hero.disciplines}</p>
          </div>

          <p
            className={cn(
              "mb-6 max-w-xl text-base text-background/50 md:text-lg",
              copyMotion && "animate-hero-copy-in",
              reducedMotion && contentReveal && "opacity-100",
              !contentReveal && !reducedMotion && "opacity-0"
            )}
            style={{
              animationDelay:
                reducedMotion || !contentReveal ? undefined : `${titleBlockDelayEnd + 130}ms`,
            }}
          >
            {t.hero.location}
          </p>

          <div className="mb-8 overflow-hidden">
            <p
              className={cn(
                "label-sm text-background/55",
                copyMotion && "animate-hero-copy-in",
                reducedMotion && contentReveal && "opacity-100",
                !contentReveal && !reducedMotion && "opacity-0"
              )}
              style={{
                animationDelay:
                  reducedMotion || !contentReveal ? undefined : `${titleBlockDelayEnd + 210}ms`,
              }}
            >
              {t.hero.kicker}
            </p>
          </div>

          <div
            className={cn(
              "flex max-w-full flex-col gap-3 sm:flex-row sm:flex-wrap",
              copyMotion && "animate-hero-copy-in",
              reducedMotion && contentReveal && "opacity-100",
              !contentReveal && !reducedMotion && "opacity-0"
            )}
            style={{
              animationDelay:
                reducedMotion || !contentReveal ? undefined : `${titleBlockDelayEnd + 300}ms`,
            }}
          >
            <Link
              href="#contact"
              className="inline-flex h-12 min-w-[12rem] max-w-full shrink-0 items-center justify-center bg-background px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-[color,background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] active:bg-background/90 [@media(hover:hover)]:motion-safe:hover:-translate-y-0.5 [@media(hover:hover)]:hover:bg-background/88 [@media(hover:hover)]:hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08),0_12px_40px_-18px_rgba(0,0,0,0.35)]"
            >
              {t.hero.bookShoot}
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex h-12 min-w-[12rem] max-w-full shrink-0 items-center justify-center border border-background/35 bg-transparent px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-background transition-[color,background-color,border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] active:border-background/55 active:bg-background/10 [@media(hover:hover)]:motion-safe:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-background/60 [@media(hover:hover)]:hover:bg-background/14 [@media(hover:hover)]:hover:shadow-[0_12px_36px_-20px_rgba(0,0,0,0.45)]"
            >
              {t.hero.viewPortfolio}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-28 left-1/2 z-10 flex max-sm:bottom-32 -translate-x-1/2 flex-col items-center gap-2.5 sm:bottom-10 md:bottom-8",
          !contentReveal && !reducedMotion && "pointer-events-none opacity-0",
          reducedMotion && contentReveal && "opacity-100",
          reducedMotion && contentReveal && !scrollHintVisible && "pointer-events-none opacity-0"
        )}
      >
        <div
          className={cn(
            copyMotion && "animate-hero-copy-in",
            !reducedMotion &&
              contentReveal &&
              cn(
                "transition-[opacity,transform] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                scrollHintVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
              )
          )}
          style={{
            animationDelay:
              reducedMotion || !contentReveal ? undefined : `${titleBlockDelayEnd + 380}ms`,
          }}
        >
          <button
            type="button"
            onClick={scrollToIntro}
            className={cn(
              "group flex flex-col items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/45 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              reducedMotion && "pointer-events-auto"
            )}
            aria-label={t.hero.scroll}
          >
            <span className="label-xs text-background/45 transition-colors duration-300 group-hover:text-background/70">
              {t.hero.scroll}
            </span>
            <span className="relative flex h-9 w-px overflow-hidden">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-full w-px origin-top bg-gradient-to-b from-background/55 to-transparent",
                  !reducedMotion && "hero-scroll-line-motion"
                )}
                aria-hidden
              />
            </span>
            <span
              className={cn(
                "inline-block h-1.5 w-1.5 rotate-45 border-b border-r border-background/50",
                !reducedMotion && "hero-scroll-chevron-motion"
              )}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  )
}
