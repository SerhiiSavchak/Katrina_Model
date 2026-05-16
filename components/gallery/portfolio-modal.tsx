"use client"

import { EditorialModal } from "@/components/ui/editorial-modal"
import { cn } from "@/lib/cn"
import type { PortfolioItem } from "@/data/portfolio"
import type { TranslationTree } from "@/data/translations"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useCallback, useEffect, useId, useRef, useState } from "react"

const FALLBACK_IMAGE = "/images/portfolio/portfolio-01.jpg"

function PortfolioModalHeroImage({ item, title }: { item: PortfolioItem; title: string }) {
  const [useFallback, setUseFallback] = useState(false)
  return (
    <Image
      src={useFallback ? FALLBACK_IMAGE : item.image}
      alt={title}
      fill
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      className="object-cover motion-safe:transition-transform motion-safe:duration-[1.4s] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
      sizes="(max-width: 640px) 96vw, 56rem"
      priority
      onError={() => setUseFallback(true)}
    />
  )
}

type PortfolioModalProps = {
  item: PortfolioItem | null
  items: PortfolioItem[]
  t: TranslationTree
  onClose: () => void
  onNavigate: (id: string) => void
}

export function PortfolioModal({ item, items, t, onClose, onNavigate }: PortfolioModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  const index = item ? items.findIndex((i) => i.id === item.id) : -1

  const go = useCallback(
    (delta: number) => {
      if (!item || items.length === 0) return
      const next = (index + delta + items.length) % items.length
      const target = items[next]
      if (target) onNavigate(target.id)
    },
    [index, item, items, onNavigate]
  )

  useEffect(() => {
    if (!item) return
    queueMicrotask(() => closeRef.current?.focus())
  }, [item])

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        go(-1)
      }
      if (e.key === "ArrowRight") {
        e.preventDefault()
        go(1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [item, go])

  if (!item) return null

  const itemT = t.portfolio.items[item.id as keyof typeof t.portfolio.items]
  const displayTitle = itemT?.title ?? item.title
  const displayCategory = t.portfolio.categories[item.category]
  const description = itemT?.detail ?? ""
  const transLoc =
    itemT && typeof itemT === "object" && "location" in itemT
      ? (itemT as { location?: string }).location
      : undefined
  const loc = transLoc ?? item.location
  const meta = [item.year, loc].filter(Boolean).join(" · ")

  return (
    <EditorialModal
      open
      onClose={onClose}
      backdropLabel={t.portfolio.modalBackdropClose}
      panelClassName="max-w-[min(96vw,58rem)] sm:max-h-[min(94dvh,50rem)]"
      aria-labelledby={titleId}
    >
      <div className="flex min-h-0 max-h-[inherit] flex-col sm:h-[min(88dvh,44rem)] sm:overflow-hidden">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-foreground/10 px-5 py-4 sm:px-7 sm:py-4">
          <div className="min-w-0">
            <p className="label-xs text-foreground/35">{t.portfolio.modalLabel}</p>
            {meta ? (
              <p className="label-xs mt-2 text-foreground/40 tabular-nums">{meta}</p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className={cn(
              "group/close relative shrink-0 rounded-sm px-2 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/55 transition-colors duration-300 hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-75"
            )}
          >
            <span className="absolute -inset-1" aria-hidden />
            <span className="relative border-b border-transparent pb-0.5 transition-[border-color,letter-spacing] duration-500 group-hover/close:border-foreground/35">
              {t.ui.close}
            </span>
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain max-sm:min-h-0 sm:flex-row sm:overflow-hidden">
          <div className="relative aspect-[4/5] w-full shrink-0 bg-muted sm:h-full sm:w-[min(50%,26rem)] sm:min-w-0 sm:max-w-[52%] sm:flex-none sm:self-stretch sm:aspect-auto">
            <PortfolioModalHeroImage key={item.id} item={item} title={displayTitle} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent sm:h-16" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center px-5 pb-8 pt-6 sm:min-h-0 sm:overflow-hidden sm:border-l sm:border-foreground/10 sm:px-7 sm:pb-6 sm:pt-5">
            <p className="label-xs text-foreground/40">{displayCategory}</p>
            <h2
              id={titleId}
              className="display-md mt-3 max-w-full text-pretty text-2xl text-foreground sm:text-3xl"
            >
              {displayTitle}
            </h2>
            {description ? (
              <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-foreground/52 sm:mt-4 sm:text-[0.9375rem]">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        {items.length > 1 ? (
          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-foreground/10 px-5 py-4 sm:px-7">
            <button
              type="button"
              onClick={() => go(-1)}
              className="label-xs min-h-11 rounded-sm px-1 text-foreground/45 transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-70"
            >
              {t.ui.previous}
            </button>
            <span className="label-xs tabular-nums text-foreground/30">
              {String(Math.max(1, index + 1)).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="label-xs min-h-11 rounded-sm px-1 text-foreground/45 transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-70"
            >
              {t.ui.next}
            </button>
          </div>
        ) : null}
      </div>
    </EditorialModal>
  )
}
