"use client"

import { cn } from "@/lib/cn"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-[11px] uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-foreground text-background hover:bg-foreground/90": variant === "primary",
            "bg-card text-foreground hover:bg-muted": variant === "secondary",
            "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground hover:text-background": variant === "outline",
            "bg-transparent text-foreground/60 hover:text-foreground": variant === "ghost",
          },
          {
            "px-4 py-2.5": size === "sm",
            "px-6 py-3": size === "md",
            "px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
