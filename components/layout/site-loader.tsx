"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/cn"
import { useSiteReveal } from "@/components/providers/app-providers"

const PROGRESS_CAP_UNTIL_REVEAL = 94

export function SiteLoader() {
  const { phase, reducedMotion, loaderMounted } = useSiteReveal()
  const [progress, setProgress] = useState(0)
  const loading = phase === "loading"
  const fading = phase === "reveal" || phase === "ready"
  const shownProgress = fading ? 100 : progress

  useEffect(() => {
    if (reducedMotion || !loaderMounted || !loading) return

    const start = performance.now()

    let raf = 0
    const tick = (now: number) => {
      const elapsed = now - start
      const target = Math.min(
        PROGRESS_CAP_UNTIL_REVEAL,
        Math.floor(PROGRESS_CAP_UNTIL_REVEAL * (1 - Math.exp(-elapsed / 580)))
      )
      setProgress((prev) => Math.max(prev, target))
      if (target < PROGRESS_CAP_UNTIL_REVEAL - 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion, loaderMounted, loading])

  if (!loaderMounted) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f5f4f2]",
        "transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        fading ? "pointer-events-none translate-y-[-6px] scale-[0.992] opacity-0" : "translate-y-0 scale-100 opacity-100"
      )}
      aria-hidden
      aria-busy={!fading}
    >
      <div
        className={cn(
          "loader-wordmark-in mb-10 text-center",
          reducedMotion ? "opacity-100" : "opacity-0"
        )}
        style={reducedMotion ? undefined : { animationDelay: "80ms" }}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#f5f4f2]/55">
          Katrina Dragonfly
        </p>
        <p
          className="mt-3 text-2xl font-semibold tracking-[0.35em] text-[#f5f4f2]/90"
          style={{ fontFamily: "var(--font-display)" }}
        >
          KD
        </p>
      </div>

      <div className="relative h-px w-[min(18rem,72vw)] overflow-hidden bg-[#f5f4f2]/12">
        <div
          className="absolute left-0 top-0 h-full origin-left bg-[#f5f4f2]/75 transition-[transform] duration-100 ease-out"
          style={{ transform: `scaleX(${shownProgress / 100})` }}
        />
      </div>

      <p className="mt-6 text-[9px] uppercase tracking-[0.28em] text-[#f5f4f2]/35 tabular-nums">
        {shownProgress}%
      </p>
    </div>
  )
}
