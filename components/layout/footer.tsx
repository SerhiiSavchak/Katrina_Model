"use client"

import Link from "next/link"
import { useLocale } from "@/components/providers/app-providers"

export function Footer() {
  const { t } = useLocale()

  const navLinks = [
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#about", label: t.nav.about },
    { href: "#booking", label: t.nav.booking },
    { href: "#merch", label: t.nav.merch },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-6">
              <Link href="/" className="group inline-block">
                <span className="block font-[family-name:var(--font-display)] text-[clamp(1.35rem,3.2vw,1.85rem)] font-semibold uppercase tracking-[0.28em] text-foreground">
                  Katrina
                </span>
                <span className="mt-2 block font-[family-name:var(--font-display)] text-[clamp(1.15rem,2.6vw,1.45rem)] font-medium uppercase tracking-[0.42em] text-foreground/55 transition-colors duration-500 group-hover:text-foreground/75">
                  Dragonfly
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-[11px] uppercase tracking-[0.22em] leading-relaxed text-foreground/38">
                {t.footer.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <span className="mb-5 block text-[10px] uppercase tracking-[0.22em] text-foreground/28">
                {t.footer.navigation}
              </span>
              <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/48 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
            <p className="max-w-xl text-center text-[10px] leading-relaxed text-foreground/30 md:text-left">
              {t.footer.legal}
            </p>
            <p className="shrink-0 text-[10px] text-foreground/30">
              &copy; {new Date().getFullYear()} Katrina Dragonfly
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
