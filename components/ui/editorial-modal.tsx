"use client"

import { cn } from "@/lib/cn"
import { useEffect, type ReactNode } from "react"

type EditorialModalProps = {
  open: boolean
  onClose: () => void
  backdropLabel: string
  children: ReactNode
  /** Panel width / max height */
  panelClassName?: string
  /** На узком экране по умолчанию панель снизу (sheet); `true` — по центру окна */
  centerOnMobile?: boolean
  "aria-labelledby"?: string
  "aria-label"?: string
}

export function EditorialModal({
  open,
  onClose,
  backdropLabel,
  children,
  panelClassName,
  centerOnMobile = false,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
}: EditorialModalProps) {
  useEffect(() => {
    if (!open) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[85] flex justify-center",
        centerOnMobile ? "items-center" : "items-end sm:items-center"
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#080808]/80 backdrop-blur-[3px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        aria-label={backdropLabel}
        onClick={onClose}
      />

      <div
        className={cn(
          "relative z-10 m-3 flex min-h-0 w-full max-w-[min(96vw,52rem)] flex-col overflow-hidden border border-foreground/12 bg-background shadow-[0_32px_120px_-40px_rgba(0,0,0,0.45)] motion-safe:animate-[editorial-modal-in_0.58s_cubic-bezier(0.22,1,0.36,1)_both] sm:m-6",
          "max-h-[min(92dvh,52rem)] sm:max-h-[min(90dvh,44rem)]",
          panelClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
