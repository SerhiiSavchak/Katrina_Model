import { cn } from "@/lib/cn"
import type { ReactNode } from "react"

/** Единая ширина и горизонтальные отступы для хедера, секций и футера */
export const siteContainerClass =
  "mx-auto w-full min-w-0 max-w-[1440px] px-6 md:px-10 lg:px-12"

export function SiteContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn(siteContainerClass, className)}>{children}</div>
}
