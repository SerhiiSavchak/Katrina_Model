"use client"

import { cn } from "@/lib/cn"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Booking" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [onHero, setOnHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 50)
      const hero = document.getElementById("top")
      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom
        setOnHero(bottom > 72)
      } else {
        setOnHero(y < window.innerHeight * 0.85)
      }
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          onHero && !isScrolled
            ? "bg-transparent"
            : onHero && isScrolled
              ? "bg-black/35 backdrop-blur-md"
              : isScrolled
                ? "bg-background/90 backdrop-blur-md"
                : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500",
            onHero ? "bg-white/15" : "bg-foreground/8",
            isScrolled || !onHero ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="max-w-[1440px] mx-auto px-8 sm:px-10 lg:px-14">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <span
                className={cn(
                  "text-[11px] font-medium uppercase tracking-[0.15em] md:text-[12px]",
                  onHero ? "text-white" : "text-foreground"
                )}
              >
                Katrina Dragonfly
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[11px] uppercase tracking-[0.1em] transition-colors duration-300",
                        onHero
                          ? "text-white/65 hover:text-white"
                          : "text-foreground/50 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={cn(
                  "flex h-10 items-center border px-5 text-[11px] uppercase tracking-[0.1em] transition-all duration-300",
                  onHero
                    ? "border-white/35 text-white hover:bg-white hover:text-neutral-950"
                    : "border-foreground/15 text-foreground hover:bg-foreground hover:text-background"
                )}
              >
                Book
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "h-px w-5 transition-all duration-300",
                  onHero ? "bg-white" : "bg-foreground",
                  isMobileMenuOpen && "translate-y-[4px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-5 transition-all duration-300",
                  onHero ? "bg-white" : "bg-foreground",
                  isMobileMenuOpen && "-translate-y-[4px] -rotate-45"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col justify-center h-full px-6">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${index * 60 + 150}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="display-lg text-4xl sm:text-5xl text-foreground hover:text-foreground/50 transition-colors duration-300 block py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={cn(
            "absolute bottom-10 left-6 right-6 transition-all duration-500",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "400ms" }}
          >
            <div className="line-h w-full mb-6" />
            <div className="flex justify-between items-end">
              <div>
                <p className="label-xs text-foreground/35 mb-1">International Model</p>
                <p className="label-xs text-foreground/35">Ukraine / Europe</p>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.1em] text-foreground border border-foreground/15 px-5 h-10 flex items-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
