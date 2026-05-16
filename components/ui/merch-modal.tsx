"use client"

import { EditorialModal } from "@/components/ui/editorial-modal"
import type { MerchItem } from "@/data/merch"
import type { TranslationTree } from "@/data/translations"
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur"
import Image from "next/image"
import { useEffect, useId, useRef, useState } from "react"

const FALLBACK = "/images/merch/merch-01.jpg"

function MerchModalImage({ item, name }: { item: MerchItem; name: string }) {
  const [useFallback, setUseFallback] = useState(false)
  return (
    <Image
      src={useFallback ? FALLBACK : item.image}
      alt={name}
      fill
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      className="object-cover"
      style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
      sizes="(max-width: 640px) 96vw, (max-width: 1024px) 70vw, 36rem"
      priority
      onError={() => setUseFallback(true)}
    />
  )
}

type MerchModalProps = {
  item: MerchItem | null
  t: TranslationTree
  onClose: () => void
}

export function MerchModal({ item, t, onClose }: MerchModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!item) return
    queueMicrotask(() => closeRef.current?.focus())
  }, [item])

  if (!item) return null

  const copy = t.merch.items[item.id as keyof typeof t.merch.items]
  const name = copy?.name ?? item.name
  const description = copy?.description ?? item.description

  return (
    <EditorialModal
      open
      onClose={onClose}
      backdropLabel={t.merch.modalBackdropClose}
      aria-labelledby={titleId}
      centerOnMobile
      panelClassName="max-w-[min(calc(100vw-1.75rem),40rem)] sm:max-w-[min(96vw,44rem)]"
    >
      <div className="flex min-h-0 max-h-[inherit] flex-col">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-foreground/10 px-4 py-3.5 sm:px-6 sm:py-5">
          <p className="label-xs text-foreground/35">{t.merch.title}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="group/close relative shrink-0 px-1 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/55 transition-colors duration-300 hover:text-foreground"
          >
            <span className="absolute -inset-2" aria-hidden />
            <span className="relative border-b border-transparent pb-0.5 transition-[border-color] duration-500 group-hover/close:border-foreground/35">
              {t.ui.close}
            </span>
          </button>
        </div>

        <div className="relative h-[min(30svh,13rem)] w-full shrink-0 overflow-hidden bg-muted sm:h-auto sm:aspect-[3/4] sm:max-h-[min(52vh,28rem)]">
          <MerchModalImage key={item.id} item={item} name={name} />
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-5 sm:space-y-5 sm:px-6 sm:py-8">
          <div>
            <h2 id={titleId} className="display-md text-lg leading-snug text-foreground sm:text-2xl">
              {name}
            </h2>
            <p className="mt-2.5 text-sm leading-snug text-foreground/52 sm:mt-4 sm:text-base sm:leading-relaxed">
              {description}
            </p>
          </div>

          <p className="label-xs leading-snug text-foreground/40 sm:leading-relaxed">{t.merch.availability}</p>

          <a
            href={item.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 w-full shrink-0 items-center justify-center border border-foreground/18 bg-foreground/[0.03] px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-[background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] active:scale-[0.99] sm:min-h-12 sm:px-6 [@media(hover:hover)]:hover:border-foreground/28 [@media(hover:hover)]:hover:bg-foreground/[0.07]"
          >
            {t.merch.order}
          </a>
        </div>
      </div>
    </EditorialModal>
  )
}
