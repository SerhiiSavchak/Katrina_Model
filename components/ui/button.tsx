"use client"

import { cn } from "@/lib/cn"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 disabled:pointer-events-none disabled:opacity-50",
          "text-[11px] uppercase tracking-[0.12em]",
          {
            "bg-foreground text-background hover:bg-foreground/90": variant === "primary",
            "bg-card text-foreground hover:bg-muted": variant === "secondary",
            "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground hover:text-background": variant === "outline",
            "bg-transparent text-foreground/60 hover:text-foreground": variant === "ghost",
            "bg-dark-foreground text-dark hover:bg-dark-foreground/90": variant === "dark",
          },
          {
            "h-10 px-5": size === "sm",
            "h-12 px-7": size === "md",
            "h-14 px-9": size === "lg",
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
