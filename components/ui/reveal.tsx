"use client"

import { cn } from "@/lib/cn"
import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealAnimation = "fade-up" | "fade-in" | "clip-up" | "stagger" | "scale"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: RevealAnimation
  duration?: number
}

export function Reveal({ 
  children, 
  className, 
  delay = 0,
  animation = "fade-up",
  duration = 800
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClasses = {
    "fade-up": isVisible 
      ? "opacity-100 translate-y-0" 
      : "opacity-0 translate-y-12",
    "fade-in": isVisible 
      ? "opacity-100" 
      : "opacity-0",
    "clip-up": isVisible 
      ? "opacity-100 [clip-path:inset(0_0_0_0)]" 
      : "opacity-0 [clip-path:inset(100%_0_0_0)]",
    "stagger": isVisible 
      ? "opacity-100 translate-y-0 rotate-0" 
      : "opacity-0 translate-y-16 rotate-1",
    "scale": isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-[cubic-bezier(0.22,1,0.36,1)]",
        animationClasses[animation],
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}

// Staggered children reveal
interface StaggerRevealProps {
  children: ReactNode[]
  className?: string
  childClassName?: string
  staggerDelay?: number
  animation?: RevealAnimation
}

export function StaggerReveal({
  children,
  className,
  childClassName,
  staggerDelay = 100,
  animation = "fade-up"
}: StaggerRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Reveal
          key={index}
          delay={index * staggerDelay}
          animation={animation}
          className={childClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  )
}
