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
          "inline-flex items-center justify-center whitespace-nowrap font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]",
          "text-[11px] uppercase tracking-[0.12em]",
          {
            "bg-foreground text-background [@media(hover:hover)]:hover:bg-foreground/88 [@media(hover:hover)]:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]": variant === "primary",
            "bg-card text-foreground [@media(hover:hover)]:hover:bg-muted": variant === "secondary",
            "border border-foreground/20 bg-transparent text-foreground [@media(hover:hover)]:hover:bg-foreground [@media(hover:hover)]:hover:text-background": variant === "outline",
            "bg-transparent text-foreground/60 [@media(hover:hover)]:hover:text-foreground": variant === "ghost",
            "bg-dark-foreground text-dark [@media(hover:hover)]:hover:bg-dark-foreground/88": variant === "dark",
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
