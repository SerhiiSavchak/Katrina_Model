"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/cn"
import { useSiteReveal } from "@/components/providers/app-providers"

export function SiteLoader() {
  const { phase, reducedMotion, loaderMounted } = useSiteReveal()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reducedMotion || !loaderMounted) return
    const start = performance.now()
    const duration = 1200
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(p)
      if (p < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion, loaderMounted])

  if (!loaderMounted) return null

  const fading = phase === "reveal" || phase === "ready"

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f5f4f2] transition-opacity duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        fading ? "pointer-events-none opacity-0" : "opacity-100"
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
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      <p className="mt-6 text-[9px] uppercase tracking-[0.28em] text-[#f5f4f2]/35 tabular-nums">
        {progress}%
      </p>
    </div>
  )
}
