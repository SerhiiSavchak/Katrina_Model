"use client"

import { cn } from "@/lib/cn"
import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

const AUTOPLAY_MS = 2500
const SCROLL_RESUME_MS = 3500

type MobileSliderProps = {
  children: ReactNode
  className?: string
  trackClassName?: string
  /** Applied to each slide wrapper (width / snap). */
  itemClassName?: string
  showDots?: boolean
  ariaLabel: string
  /** Shown under dots on narrow screens (i18n). */
  swipeHint?: string
  /** Autoplay advance (mobile-only usage in this site). Respects prefers-reduced-motion. */
  autoplay?: boolean
  autoplayIntervalMs?: number
  /** Tighter footer (dots + hint) for sections where vertical rhythm should stay compact. */
  compactFooter?: boolean
}

export function MobileSlider({
  children,
  className,
  trackClassName,
  itemClassName = "min-w-[min(86vw,24rem)] max-w-[min(86vw,24rem)]",
  showDots = true,
  ariaLabel,
  swipeHint,
  autoplay = true,
  autoplayIntervalMs = AUTOPLAY_MS,
  compactFooter = false,
}: MobileSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pausedByUserRef = useRef(false)
  const items = Children.toArray(children).filter(Boolean)
  const count = items.length

  const updateActive = useCallback(() => {
    const root = trackRef.current
    if (!root) return
    const nodes = root.querySelectorAll<HTMLElement>("[data-slider-item]")
    if (!nodes.length) return
    const center = root.scrollLeft + root.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    nodes.forEach((node, i) => {
      const mid = node.offsetLeft + node.offsetWidth / 2
      const d = Math.abs(center - mid)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }, [])

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior) => {
      const root = trackRef.current
      if (!root) return
      const nodes = root.querySelectorAll<HTMLElement>("[data-slider-item]")
      const el = nodes[index]
      if (!el) return
      root.scrollTo({ left: el.offsetLeft, behavior })
    },
    []
  )

  useEffect(() => {
    const root = trackRef.current
    if (!root) return
    updateActive()
    root.addEventListener("scroll", updateActive, { passive: true })
    const ro = new ResizeObserver(() => updateActive())
    ro.observe(root)
    return () => {
      root.removeEventListener("scroll", updateActive)
      ro.disconnect()
    }
  }, [updateActive, count])

  useEffect(() => {
    if (!autoplay || count < 2) return
    const root = trackRef.current
    if (!root) return

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const clearResume = () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current)
        resumeTimerRef.current = null
      }
    }

    const markUserPause = () => {
      pausedByUserRef.current = true
      clearResume()
      resumeTimerRef.current = setTimeout(() => {
        pausedByUserRef.current = false
        resumeTimerRef.current = null
      }, SCROLL_RESUME_MS)
    }

    root.addEventListener("pointerdown", markUserPause, { passive: true })
    root.addEventListener("wheel", markUserPause, { passive: true })

    const id = window.setInterval(() => {
      if (pausedByUserRef.current || document.visibilityState !== "visible") return
      const nodes = root.querySelectorAll<HTMLElement>("[data-slider-item]")
      if (!nodes.length) return
      let best = 0
      let bestDist = Infinity
      const center = root.scrollLeft + root.clientWidth / 2
      nodes.forEach((node, i) => {
        const mid = node.offsetLeft + node.offsetWidth / 2
        const d = Math.abs(center - mid)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      const next = (best + 1) % count
      scrollToIndex(next, "smooth")
    }, autoplayIntervalMs)

    return () => {
      window.clearInterval(id)
      root.removeEventListener("pointerdown", markUserPause)
      root.removeEventListener("wheel", markUserPause)
      clearResume()
    }
  }, [autoplay, autoplayIntervalMs, count, scrollToIndex])

  if (count === 0) return null

  return (
    <div className={cn("w-full min-w-0", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        className={cn(
          "flex scroll-smooth snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x_pan-y] md:gap-5 [&::-webkit-scrollbar]:hidden",
          trackClassName
        )}
        style={{ scrollPaddingInline: 0 }}
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-slider-item
            className={cn("snap-start shrink-0", itemClassName, i === count - 1 && "pr-2")}
          >
            {child}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div
          className={cn(
            "flex flex-col items-center",
            compactFooter ? "mt-3 gap-2" : "mt-5 gap-3"
          )}
        >
          {showDots ? (
            <div className="flex justify-center gap-1.5" aria-hidden>
              {items.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    i === active ? "w-6 bg-foreground/35" : "w-1 bg-foreground/12"
                  )}
                />
              ))}
            </div>
          ) : null}
          {swipeHint ? (
            <p className="text-center text-[10px] uppercase tracking-[0.22em] text-foreground/28">
              {swipeHint}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
