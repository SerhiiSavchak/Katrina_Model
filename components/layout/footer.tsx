"use client"

import { SiteContainer } from "@/components/layout/site-container"
import Link from "next/link"
import { useLocale } from "@/components/providers/app-providers"

export function Footer() {
  const { t } = useLocale()

  const navLinks = [
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#stories", label: t.nav.stories },
    { href: "#about", label: t.nav.about },
    { href: "#booking", label: t.nav.booking },
    { href: "#merch", label: t.nav.merch },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <SiteContainer>
        <div className="py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/#top" className="group inline-block">
              <span className="block font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.8vw,1.65rem)] font-semibold uppercase tracking-[0.32em] text-foreground">
                Katrina
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-[clamp(1rem,2.2vw,1.35rem)] font-medium uppercase tracking-[0.46em] text-foreground/52 transition-colors duration-500 group-hover:text-foreground/72">
                Dragonfly
              </span>
            </Link>
            <p className="mx-auto mt-8 max-w-md text-[10px] uppercase leading-relaxed tracking-[0.24em] text-foreground/36">
              {t.footer.tagline}
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl md:mt-16">
            <div className="h-px w-full bg-foreground/10" />
            <nav
              className="flex flex-col items-center gap-y-5 py-12 md:flex-row md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-6 md:py-14"
              aria-label={t.footer.navigation}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/nav relative rounded-sm py-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/42 transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] active:scale-[0.98] [@media(hover:hover)]:hover:text-foreground md:text-[13px] md:tracking-[0.22em]"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="pointer-events-none absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-foreground/40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.32,1)] [@media(hover:hover)]:group-hover/nav:scale-x-100"
                    aria-hidden
                  />
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-foreground/10" />
          </div>
        </div>

        <div className="border-t border-foreground/10 py-9 md:py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start md:gap-8">
            <p className="max-w-2xl text-center text-[10px] leading-relaxed text-foreground/32 md:text-left">
              {t.footer.legal}
            </p>
            <p className="shrink-0 text-[10px] text-foreground/30">
              &copy; {new Date().getFullYear()} Katrina Dragonfly
            </p>
          </div>
        </div>
      </SiteContainer>
    </footer>
  )
}
