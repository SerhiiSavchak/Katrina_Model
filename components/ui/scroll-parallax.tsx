"use client"

import { cn } from "@/lib/cn"
import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react"

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", onChange)
  return () => mq.removeEventListener("change", onChange)
}

function reducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function reducedMotionServer() {
  return false
}

type ScrollParallaxProps = {
  children: ReactNode
  className?: string
  /** Peak vertical shift in px (subtle editorial motion) */
  intensity?: number
}

/**
 * Subtle scroll-linked parallax for image columns. Disabled when reduced motion is on.
 */
export function ScrollParallax({ children, className, intensity = 12 }: ScrollParallaxProps) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    reducedMotionSnapshot,
    reducedMotionServer
  )
  const rootRef = useRef<HTMLDivElement>(null)
  const moveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced) return
    const root = rootRef.current
    const move = moveRef.current
    if (!root || !move) return

    let raf = 0
    const update = () => {
      const rect = root.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const centerOffset = rect.top + rect.height / 2 - vh / 2
      const range = vh + rect.height
      const t = Math.max(-1, Math.min(1, -centerOffset / Math.max(1, range)))
      const y = t * intensity
      move.style.transform = `translate3d(0, ${y}px, 0)`
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [reduced, intensity])

  return (
    <div ref={rootRef} className={cn("overflow-hidden", className)}>
      <div
        ref={moveRef}
        className={cn(
          "relative h-[112%] w-full max-w-none will-change-transform motion-safe:transition-transform motion-safe:duration-0",
          reduced && "translate-y-0"
        )}
      >
        {children}
      </div>
    </div>
  )
}
