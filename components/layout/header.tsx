"use client"

import { cn } from "@/lib/cn"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Booking" },
  { href: "#merch", label: "Merch" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-background/95 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        {/* Thin line */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-foreground/10 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              className="relative group"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-foreground font-medium">
                Katrina Dragonfly
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <ul className="flex items-center gap-8 lg:gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Book CTA */}
              <Link
                href="#contact"
                className="text-[11px] uppercase tracking-[0.2em] text-foreground border border-foreground/20 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Book
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-500",
                  isMobileMenuOpen && "rotate-45 translate-y-[4px]"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-500",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[4px]"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen Editorial */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-700 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col justify-center h-full px-8">
          {/* Large Editorial Links */}
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "overflow-hidden transition-all duration-700",
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 80 + 200}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="editorial-display text-5xl sm:text-6xl text-foreground hover:text-foreground/50 transition-colors duration-300 block py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Info */}
          <div className={cn(
            "absolute bottom-12 left-8 right-8 transition-all duration-700",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "600ms" }}
          >
            <div className="editorial-line w-full mb-6" />
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-1">International Model</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">Ukraine / Europe</p>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.2em] text-foreground border border-foreground/20 px-5 py-2.5"
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
