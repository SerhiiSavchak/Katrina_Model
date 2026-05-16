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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-foreground/8 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <span className="text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-foreground font-medium">
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
                      className="text-[11px] uppercase tracking-[0.1em] text-foreground/50 hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="text-[11px] uppercase tracking-[0.1em] text-foreground border border-foreground/15 px-5 h-10 flex items-center hover:bg-foreground hover:text-background transition-all duration-300"
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
                  "w-5 h-px bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-[4px]"
                )}
              />
              <span
                className={cn(
                  "w-5 h-px bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[4px]"
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
