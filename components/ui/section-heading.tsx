import { cn } from "@/lib/cn"

interface SectionHeadingProps {
  number?: string
  label?: string
  title: string
  italicTitle?: string
  subtitle?: string
  align?: "left" | "center"
  size?: "default" | "large" | "huge"
  className?: string
  dark?: boolean
}

export function SectionHeading({ 
  number,
  label,
  title, 
  italicTitle,
  subtitle, 
  align = "left", 
  size = "default",
  className,
  dark = false
}: SectionHeadingProps) {
  const sizeClasses = {
    default: "text-4xl md:text-5xl lg:text-6xl",
    large: "text-5xl md:text-6xl lg:text-7xl",
    huge: "text-6xl md:text-8xl lg:text-[10vw]"
  }

  return (
    <div className={cn(
      align === "center" ? "text-center" : "text-left", 
      className
    )}>
      {/* Section number */}
      {number && (
        <p className={cn(
          "text-[10px] uppercase tracking-[0.3em] mb-6",
          dark ? "text-dark-foreground/40" : "text-foreground/40"
        )}>
          {number}
        </p>
      )}
      
      {/* Label */}
      {label && (
        <p className={cn(
          "text-[10px] uppercase tracking-[0.25em] mb-4",
          dark ? "text-dark-foreground/60" : "text-foreground/60"
        )}>
          {label}
        </p>
      )}
      
      {/* Main title */}
      <h2 className={cn(
        "editorial-display leading-[0.95]",
        sizeClasses[size],
        dark ? "text-dark-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      
      {/* Italic secondary title */}
      {italicTitle && (
        <h2 className={cn(
          "editorial-italic leading-[1]",
          size === "huge" ? "text-5xl md:text-7xl lg:text-[8vw]" : "text-3xl md:text-4xl lg:text-5xl",
          dark ? "text-dark-foreground/90" : "text-foreground/90"
        )}>
          {italicTitle}
        </h2>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          "text-sm md:text-base leading-relaxed mt-6 max-w-xl",
          align === "center" && "mx-auto",
          dark ? "text-dark-foreground/60" : "text-foreground/60"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
