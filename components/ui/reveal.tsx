"use client"

import { cn } from "@/lib/cn"
import {
  Children,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react"

type RevealAnimation =
  | "fade-up"
  | "fade-in"
  | "clip-up"
  | "stagger"
  | "scale"
  | "text-soft"
  | "image-clip"
  | "line-reveal"

/** Editorial presets — map to motion classes unless `animation` is set explicitly. */
export type RevealVariant = "text" | "image" | "line" | "stagger"

const variantDefaults: Record<
  RevealVariant,
  { animation: RevealAnimation; duration: number }
> = {
  text: { animation: "text-soft", duration: 1100 },
  image: { animation: "image-clip", duration: 1300 },
  line: { animation: "line-reveal", duration: 1000 },
  stagger: { animation: "fade-up", duration: 1050 },
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: RevealAnimation
  /** Preset motion language (ignored if `animation` is passed). */
  variant?: RevealVariant
  duration?: number
}

const ease = "cubic-bezier(0.16, 1, 0.3, 1)"

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", onChange)
  return () => mq.removeEventListener("change", onChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
  animation: animationProp,
  variant,
  duration: durationProp,
}: RevealProps) {
  const resolvedFromVariant =
    variant && !animationProp ? variantDefaults[variant] : null
  const animation = animationProp ?? resolvedFromVariant?.animation ?? "fade-up"
  const duration =
    durationProp ?? resolvedFromVariant?.duration ?? (animation === "fade-in" ? 900 : 1050)

  const prefersReducedMotion = usePrefersReducedMotion()
  const [revealed, setRevealed] = useState(false)
  const visible = prefersReducedMotion || revealed
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -72px 0px" }
    )

    const node = ref.current
    if (node) observer.observe(node)

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  const animationClasses: Record<RevealAnimation, string> = {
    "fade-up": visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10",
    "fade-in": visible ? "opacity-100" : "opacity-0",
    "clip-up": visible
      ? "opacity-100 [clip-path:inset(0_0_0_0)]"
      : "opacity-0 [clip-path:inset(100%_0_0_0)]",
    stagger: visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10",
    scale: visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]",
    "text-soft": visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-7",
    "image-clip": visible
      ? "opacity-100 scale-100 [clip-path:inset(0_0_0_0)]"
      : "opacity-0 scale-[1.045] [clip-path:inset(10%_7%_12%_7%)]",
    "line-reveal": visible
      ? "opacity-100 [transform:scaleX(1)]"
      : "opacity-0 [transform:scaleX(0)]",
  }

  const originClass = animation === "line-reveal" ? "origin-left" : ""

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-[transform,opacity,clip-path]",
        originClass,
        animationClasses[animation],
        className
      )}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transitionProperty: "transform, opacity, clip-path",
              transitionTimingFunction: ease,
              transitionDelay: `${delay}ms`,
              transitionDuration: `${duration}ms`,
            }
      }
    >
      {children}
    </div>
  )
}

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  childClassName?: string
  staggerDelay?: number
  animation?: RevealAnimation
  variant?: RevealVariant
}

export function StaggerReveal({
  children,
  className,
  childClassName,
  staggerDelay = 110,
  animation,
  variant = "stagger",
}: StaggerRevealProps) {
  const items = Children.toArray(children)
  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal
          key={index}
          delay={index * staggerDelay}
          animation={animation}
          variant={animation ? undefined : variant}
          className={childClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  )
}
