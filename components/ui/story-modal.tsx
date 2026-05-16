"use client"

import { cn } from "@/lib/cn"
import type { Story } from "@/data/stories"
import type { TranslationTree } from "@/data/translations"
import Image from "next/image"
import { useEffect, useId, useRef } from "react"

type StoryModalProps = {
  story: Story | null
  t: TranslationTree
  onClose: () => void
}

export function StoryModal({ story, t, onClose }: StoryModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!story) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    queueMicrotask(() => closeRef.current?.focus())

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
      window.removeEventListener("keydown", onKey)
    }
  }, [story, onClose])

  if (!story) return null

  const copy = t.stories.items[story.id as keyof typeof t.stories.items]
  const title = copy?.title ?? story.title
  const description = copy?.description ?? story.description
  const category = copy?.category ?? story.category
  const tags = copy?.tags ?? [category]

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-label={t.stories.modalBackdropClose}
        onClick={onClose}
      />

      <div
        className={cn(
          "relative z-10 m-4 flex max-h-[min(90dvh,44rem)] w-full max-w-lg flex-col overflow-y-auto border border-foreground/12 bg-background",
          "pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] shadow-[0_28px_90px_-36px_rgba(0,0,0,0.4)] sm:m-6 sm:max-w-2xl"
        )}
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-4 sm:px-7 sm:pt-5">
          <div className="min-w-0">
            <p className="label-xs text-foreground/35">{t.stories.modalLabel}</p>
            <p className="label-xs mt-2 text-foreground/45">{category}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 border border-foreground/15 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-foreground/35 hover:bg-foreground/[0.04]"
          >
            {t.stories.modalClose}
          </button>
        </div>

        <div className="relative mx-5 mt-5 aspect-[16/10] overflow-hidden bg-card sm:mx-7 sm:mt-6">
          <Image
            src={story.image}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition: story.objectPosition }}
            sizes="(max-width: 640px) 92vw, 36rem"
          />
        </div>

        <div className="px-5 pb-6 pt-6 sm:px-7 sm:pb-8">
          <h3 id={titleId} className="display-md text-pretty text-2xl text-foreground sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-foreground/55 sm:text-base">
            {description}
          </p>
          {tags.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-foreground/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-foreground/45"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  )
}
