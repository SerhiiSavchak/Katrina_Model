"use client"

import { siteContainerClass } from "@/components/layout/site-container"
import { cn } from "@/lib/cn"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react"
import { useLocale } from "@/components/providers/app-providers"
import type { Locale } from "@/data/translations"

export function Header() {
  const { t, locale, setLocale } = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [mobileMenuAnimOpen, setMobileMenuAnimOpen] = useState(false)
  const [onHero, setOnHero] = useState(true)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wasAnimOpenRef = useRef(false)

  const navLinks = [
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#stories", label: t.nav.stories },
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

  const clearMobileCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  useEffect(() => {
    if (!mobileMenuMounted) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
    }
  }, [mobileMenuMounted])

  useEffect(() => {
    if (!mobileMenuMounted) {
      const id = requestAnimationFrame(() => setMobileMenuAnimOpen(false))
      return () => cancelAnimationFrame(id)
    }
    clearMobileCloseTimer()
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileMenuAnimOpen(true))
    })
    return () => cancelAnimationFrame(id)
  }, [mobileMenuMounted])

  useEffect(() => {
    if (!mobileMenuMounted) {
      wasAnimOpenRef.current = false
      return
    }
    if (mobileMenuAnimOpen) {
      wasAnimOpenRef.current = true
      return
    }
    if (!wasAnimOpenRef.current) return
    wasAnimOpenRef.current = false
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const ms = reduced ? 80 : 460
    clearMobileCloseTimer()
    closeTimerRef.current = setTimeout(() => {
      setMobileMenuMounted(false)
      closeTimerRef.current = null
    }, ms)
    return () => clearMobileCloseTimer()
  }, [mobileMenuAnimOpen, mobileMenuMounted])

  useEffect(() => {
    if (!mobileMenuMounted || !mobileMenuAnimOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        clearMobileCloseTimer()
        setMobileMenuAnimOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mobileMenuMounted, mobileMenuAnimOpen])

  const toggleMobileMenu = () => {
    clearMobileCloseTimer()
    if (!mobileMenuMounted) {
      setMobileMenuMounted(true)
      return
    }
    if (!mobileMenuAnimOpen) {
      setMobileMenuAnimOpen(true)
      return
    }
    setMobileMenuAnimOpen(false)
  }

  const closeMobileMenu = () => {
    clearMobileCloseTimer()
    if (mobileMenuMounted && mobileMenuAnimOpen) setMobileMenuAnimOpen(false)
  }

  /** Пока мобильное меню смонтировано (и открытие, и закрытие) — логотип и крестик тёмные на светлом фоне */
  const mobileHeaderDark = mobileMenuMounted

  const scrollToTop = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const hero = document.getElementById("top")
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (hero) {
      hero.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    } else {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
    }
  }, [])

  const langBtn = (code: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={cn(
        "min-h-9 min-w-9 rounded-none px-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-[color,transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.96]",
        onHero
          ? locale === code
            ? "text-white"
            : "text-white/40 [@media(hover:hover)]:hover:text-white/80"
          : locale === code
            ? "text-foreground"
            : "text-foreground/40 [@media(hover:hover)]:hover:text-foreground/75"
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

        <div
          className={cn(
            siteContainerClass,
            "grid h-16 grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] items-center gap-3 md:h-[4.5rem] md:gap-4"
          )}
        >
          <a
            href="#top"
            onClick={scrollToTop}
            className={cn(
              "relative z-[60] justify-self-start rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-safe:transition-[color,opacity] duration-300 active:opacity-85",
              mobileHeaderDark
                ? "text-foreground focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                : onHero
                  ? "text-white focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  : "text-foreground focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
            aria-label={t.nav.scrollToTop}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] md:text-[12px]">
              Katrina Dragonfly
            </span>
          </a>

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
                      "group/nav relative inline-block whitespace-nowrap rounded-sm py-2 text-[11px] uppercase tracking-[0.1em] transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] active:scale-[0.98] [@media(hover:hover)]:motion-safe:hover:-translate-y-0.5",
                      onHero
                        ? "text-white/65 [@media(hover:hover)]:hover:text-white"
                        : "text-foreground/50 [@media(hover:hover)]:hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={cn(
                        "pointer-events-none absolute bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] [@media(hover:hover)]:group-hover/nav:scale-x-100",
                        onHero ? "bg-white/60" : "bg-foreground/40"
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
                "inline-flex h-9 min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-sm border px-5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-[color,background-color,border-color,transform,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] active:scale-[0.97] active:opacity-90 [@media(hover:hover)]:motion-safe:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]",
                onHero
                  ? "border-white/40 text-white [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:text-neutral-950 [@media(hover:hover)]:hover:shadow-[0_10px_36px_-16px_rgba(0,0,0,0.45)]"
                  : "border-foreground/20 text-foreground [@media(hover:hover)]:hover:bg-foreground [@media(hover:hover)]:hover:text-background [@media(hover:hover)]:hover:shadow-[0_10px_32px_-18px_rgba(0,0,0,0.2)]"
              )}
            >
              {t.nav.bookCta}
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className={cn(
              "relative z-[60] col-start-3 flex h-12 w-12 min-h-12 min-w-12 flex-col items-center justify-center gap-2 justify-self-end rounded-sm md:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-safe:transition-[transform,opacity] motion-safe:duration-[400ms] motion-safe:ease-[cubic-bezier(0.22,1,0.32,1)] motion-reduce:duration-100",
              "active:opacity-90 motion-safe:active:scale-[0.96]",
              mobileHeaderDark
                ? "focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                : onHero
                  ? "focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  : "focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
            aria-expanded={mobileMenuMounted}
            aria-label={mobileMenuMounted ? t.nav.closeMenu : t.nav.openMenu}
          >
            <span
              className={cn(
                "h-[2px] w-7 origin-center motion-safe:transition-all motion-safe:duration-[400ms] motion-safe:ease-[cubic-bezier(0.22,1,0.32,1)] motion-reduce:duration-100",
                mobileHeaderDark ? "bg-foreground" : onHero ? "bg-white" : "bg-foreground",
                mobileMenuMounted && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-[2px] w-7 origin-center motion-safe:transition-all motion-safe:duration-[400ms] motion-safe:ease-[cubic-bezier(0.22,1,0.32,1)] motion-reduce:duration-100",
                mobileHeaderDark ? "bg-foreground" : onHero ? "bg-white" : "bg-foreground",
                mobileMenuMounted && "-translate-y-[5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {mobileMenuMounted ? (
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-background md:hidden",
            "motion-safe:transition-[opacity,transform] motion-safe:duration-[420ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity motion-reduce:duration-100",
            mobileMenuAnimOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-[0.985] opacity-0"
          )}
          aria-hidden={!mobileMenuAnimOpen}
        >
          <nav
            className="flex min-h-0 flex-1 flex-col justify-center px-6 pt-[calc(4.25rem+env(safe-area-inset-top))] pb-4"
            aria-label="Mobile"
          >
            <ul className="mx-auto w-full max-w-md space-y-2 text-center">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={cn(
                    "transition-opacity motion-safe:duration-[380ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-100",
                    mobileMenuAnimOpen ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    transitionDelay: mobileMenuAnimOpen ? `${index * 44 + 72}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="display-lg flex min-h-[52px] items-center justify-center rounded-sm py-2 text-[clamp(2rem,9vw,3.25rem)] leading-none text-foreground transition-[color,transform,opacity] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-80 motion-safe:active:scale-[0.99] [@media(hover:hover)]:hover:text-foreground/55"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "mx-auto mt-14 flex w-full max-w-md flex-col items-center gap-6 transition-opacity motion-safe:duration-[380ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-100",
                mobileMenuAnimOpen ? "opacity-100" : "opacity-0"
              )}
              style={{
                transitionDelay: mobileMenuAnimOpen ? "280ms" : "0ms",
              }}
            >
              <div
                className="flex items-stretch overflow-hidden border border-foreground/15"
                role="group"
                aria-label="Language"
              >
                <button
                  type="button"
                  className={cn(
                    "min-h-12 min-w-[3.5rem] px-4 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/25 active:opacity-80 motion-safe:active:scale-[0.98]",
                    locale === "en" ? "bg-foreground text-background" : "text-foreground/55 [@media(hover:hover)]:hover:text-foreground"
                  )}
                  onClick={() => setLocale("en")}
                >
                  {t.lang.en}
                </button>
                <span className="w-px shrink-0 self-stretch bg-foreground/12" aria-hidden />
                <button
                  type="button"
                  className={cn(
                    "min-h-12 min-w-[3.5rem] px-4 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/25 active:opacity-80 motion-safe:active:scale-[0.98]",
                    locale === "ua" ? "bg-foreground text-background" : "text-foreground/55 [@media(hover:hover)]:hover:text-foreground"
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
              "shrink-0 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] transition-opacity motion-safe:duration-[380ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-100",
              mobileMenuAnimOpen ? "opacity-100" : "opacity-0"
            )}
            style={{
              transitionDelay: mobileMenuAnimOpen ? "320ms" : "0ms",
            }}
          >
            <div className="line-h mx-auto mb-6 max-w-md" />
            <div className="mx-auto flex max-w-md flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <p className="label-xs mb-1 text-foreground/35">{t.mobileMenu.meta1}</p>
                <p className="label-xs text-foreground/35">{t.mobileMenu.meta2}</p>
              </div>
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="inline-flex h-14 min-h-14 w-full max-w-sm items-center justify-center border border-foreground bg-foreground px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-background transition-[color,background-color,border-color,transform,opacity] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-90 motion-safe:active:scale-[0.99] [@media(hover:hover)]:hover:border-foreground [@media(hover:hover)]:hover:bg-background [@media(hover:hover)]:hover:text-foreground sm:w-auto sm:min-w-[11.5rem]"
              >
                {t.nav.bookCta}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
