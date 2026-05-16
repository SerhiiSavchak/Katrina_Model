"use client"

import { cn } from "@/lib/cn"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLocale } from "@/components/providers/app-providers"
import type { Locale } from "@/data/translations"

export function Header() {
  const { t, locale, setLocale } = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [onHero, setOnHero] = useState(true)

  const navLinks = [
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#about", label: t.nav.about },
    { href: "#booking", label: t.nav.booking },
    { href: "#merch", label: t.nav.merch },
    { href: "#contact", label: t.nav.contact },
  ]

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
    if (!isMobileMenuOpen) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
    }
  }, [isMobileMenuOpen])

  const langBtn = (code: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={cn(
        "min-h-9 min-w-9 rounded-none px-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        onHero
          ? locale === code
            ? "text-white"
            : "text-white/40 hover:text-white/75"
          : locale === code
            ? "text-foreground"
            : "text-foreground/40 hover:text-foreground/70"
      )}
      aria-pressed={locale === code}
      aria-label={code === "en" ? "English" : "Українська"}
    >
      {label}
    </button>
  )

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
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
            "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            onHero ? "bg-white/15" : "bg-foreground/8",
            isScrolled || !onHero ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] items-center gap-3 px-6 sm:px-8 md:h-[4.5rem] md:gap-4 md:px-10 lg:px-14">
          <Link href="/" className="relative z-[60] justify-self-start">
            <span
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.15em] md:text-[12px]",
                onHero && !isMobileMenuOpen ? "text-white" : "text-foreground"
              )}
            >
              Katrina Dragonfly
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="relative z-10 hidden min-w-0 justify-self-center md:flex"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:gap-x-12 xl:gap-x-14">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group/nav relative inline-block whitespace-nowrap py-1 text-[11px] uppercase tracking-[0.1em] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      onHero
                        ? "text-white/65 hover:text-white"
                        : "text-foreground/50 hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={cn(
                        "pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/nav:scale-x-100",
                        onHero ? "bg-white/50" : "bg-foreground/30"
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-[60] hidden items-center gap-3 justify-self-end md:flex md:gap-4">
            <div
              className={cn(
                "flex h-9 items-center border px-0.5",
                onHero ? "border-white/25" : "border-foreground/15"
              )}
              role="group"
              aria-label="Language"
            >
              {langBtn("en", t.lang.en)}
              <span
                className={cn(
                  "text-[10px] font-light",
                  onHero ? "text-white/25" : "text-foreground/25"
                )}
                aria-hidden
              >
                /
              </span>
              {langBtn("ua", t.lang.ua)}
            </div>

            <Link
              href="#contact"
              className={cn(
                "inline-flex h-9 min-h-9 shrink-0 items-center justify-center whitespace-nowrap border px-5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-[color,background,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px",
                onHero
                  ? "border-white/40 text-white hover:bg-white hover:text-neutral-950"
                  : "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
              )}
            >
              {t.nav.bookCta}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[60] col-start-3 flex h-11 w-11 flex-col items-center justify-center gap-1.5 justify-self-end md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "h-px w-5 transition-all duration-300",
                onHero && !isMobileMenuOpen ? "bg-white" : "bg-foreground",
                isMobileMenuOpen && "translate-y-[4px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-5 transition-all duration-300",
                onHero && !isMobileMenuOpen ? "bg-white" : "bg-foreground",
                isMobileMenuOpen && "-translate-y-[4px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background transition-[opacity,visibility,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-3 opacity-0"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav
          className="flex min-h-0 flex-1 flex-col justify-center px-6 pt-[calc(4.25rem+env(safe-area-inset-top))]"
          aria-label="Mobile"
        >
          <ul className="mx-auto w-full max-w-md space-y-1 text-center">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: `${index * 55 + 120}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="display-lg block py-3.5 text-[clamp(2rem,9vw,3.25rem)] leading-none text-foreground transition-colors duration-300 hover:text-foreground/55"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "mx-auto mt-12 flex w-full max-w-md flex-col items-center gap-5 transition-all duration-500",
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: "380ms" }}
          >
            <div
              className="flex items-center border border-foreground/15"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                className={cn(
                  "min-h-11 min-w-[3.25rem] px-3 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300",
                  locale === "en" ? "bg-foreground text-background" : "text-foreground/55 hover:text-foreground"
                )}
                onClick={() => setLocale("en")}
              >
                {t.lang.en}
              </button>
              <span className="h-6 w-px bg-foreground/12" aria-hidden />
              <button
                type="button"
                className={cn(
                  "min-h-11 min-w-[3.25rem] px-3 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300",
                  locale === "ua" ? "bg-foreground text-background" : "text-foreground/55 hover:text-foreground"
                )}
                onClick={() => setLocale("ua")}
              >
                {t.lang.ua}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={cn(
            "shrink-0 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] transition-all duration-500",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: "440ms" }}
        >
          <div className="line-h mx-auto mb-6 max-w-md" />
          <div className="mx-auto flex max-w-md flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="label-xs mb-1 text-foreground/35">{t.mobileMenu.meta1}</p>
              <p className="label-xs text-foreground/35">{t.mobileMenu.meta2}</p>
            </div>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 min-h-12 w-full max-w-xs items-center justify-center border border-foreground/15 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:border-foreground/30 hover:bg-foreground hover:text-background sm:w-auto sm:min-w-[10.5rem]"
            >
              {t.nav.bookCta}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
