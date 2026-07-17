"use client"

import Image from "next/image"
import { useEffect, useId, useRef } from "react"
import { EditorialModal } from "@/components/ui/editorial-modal"
import type { Story } from "@/data/stories"
import type { TranslationTree } from "@/data/translations"
import { cn } from "@/lib/cn"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"

function StorySlideImage({
  src,
  pos,
  title,
  index,
}: {
  src: string
  pos: string
  title: string
  index: number
}) {
  return (
    <Image
      src={src}
      alt={`${title} — ${index + 1}`}
      fill
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      className="object-cover motion-safe:transition-transform motion-safe:duration-[1.25s] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ objectPosition: pos }}
      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 24vw, 220px"
    />
  )
}

type StoryModalProps = {
  story: Story | null
  t: TranslationTree
  onClose: () => void
}

export function StoryModal({ story, t, onClose }: StoryModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!story) return
    queueMicrotask(() => closeRef.current?.focus())
  }, [story])

  if (!story) return null

  const copy = t.stories.items[story.id as keyof typeof t.stories.items]
  const title = copy?.title ?? story.title
  const description = copy?.description ?? story.description
  const category = copy?.category ?? story.category
  const tags = copy?.tags ?? [category]
  const meta = [copy?.year, copy?.location].filter(Boolean).join(" · ")

  return (
    <EditorialModal
      open
      onClose={onClose}
      backdropLabel={t.stories.modalBackdropClose}
      aria-labelledby={titleId}
      panelClassName="max-w-[min(96vw,58rem)] sm:max-h-[min(94dvh,48rem)]"
    >
      <div className="relative flex min-h-0 max-h-[inherit] flex-col sm:h-[min(88dvh,42rem)] sm:overflow-hidden">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className={cn(
            "group/close absolute right-3 top-3 z-20 rounded-sm px-3 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/55 transition-[color,transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] hover:text-foreground motion-safe:hover:-translate-y-px active:scale-[0.98] sm:right-5 sm:top-4",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          <span className="absolute -inset-0.5" aria-hidden />

          <span className="relative border-b border-transparent pb-0.5 transition-[border-color] duration-500 group-hover/close:border-foreground/40 motion-safe:active:translate-y-px">
            {t.ui.close}
          </span>
        </button>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain max-sm:min-h-0 sm:overflow-hidden">
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 px-5 pb-5 pt-14 sm:min-h-0 sm:grid-cols-2 sm:grid-rows-[minmax(0,1fr)] sm:gap-5 sm:overflow-hidden sm:p-6 sm:pb-5 sm:pr-11 sm:pt-14">
            <div className="min-h-0 sm:col-start-2 sm:row-start-1 sm:flex sm:flex-col sm:justify-center sm:overflow-hidden sm:pr-1">
              <h2
                id={titleId}
                className="display-md max-w-full text-pretty text-2xl text-foreground sm:text-[clamp(1.35rem,2vw,1.85rem)]"
              >
                {title}
              </h2>

              {meta ? (
                <p className="label-xs mt-2 text-foreground/32 tabular-nums sm:mt-2">{meta}</p>
              ) : null}

              <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-foreground/52 sm:mt-3 sm:text-[0.875rem] sm:leading-relaxed">
                {description}
              </p>
            </div>

            <div
              className="min-h-0 sm:col-start-1 sm:row-start-1 sm:flex sm:items-center sm:overflow-hidden"
              role="region"
              aria-label={t.stories.collectionAria}
            >
              <div className="grid w-full grid-cols-2 gap-2 sm:max-h-[min(65vh,26rem)] sm:overflow-hidden">
                {story.images.map((src, index) => {
                  const pos = story.objectPositions[index] ?? "50% 28%"
                  return (
                    <div
                      key={`${story.id}-${index}`}
                      className="relative aspect-[4/5] min-h-0 w-full overflow-hidden bg-muted"
                    >
                      <StorySlideImage src={src} pos={pos} title={title} index={index} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {tags.length > 0 ? (
            <div className="shrink-0 border-t border-foreground/10 px-5 py-4 sm:px-6 sm:py-4">
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-foreground/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-foreground/45"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </EditorialModal>
  )
}
