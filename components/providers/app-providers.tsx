"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  defaultLocale,
  STORAGE_KEY,
  translations,
  type Locale,
  type TranslationTree,
} from "@/data/translations"

/* -------------------------------------------------------------------------- */
/* Locale                                                                     */
/* -------------------------------------------------------------------------- */

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: TranslationTree
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored === "en" || stored === "ua") setLocaleState(stored)
    }, 0)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "ua" ? "uk" : "en"
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/* -------------------------------------------------------------------------- */
/* Site loader + hero reveal                                                  */
/* -------------------------------------------------------------------------- */

type SitePhase = "loading" | "reveal" | "ready"

type SiteRevealContextValue = {
  phase: SitePhase
  /** True when hero should run its entrance (loader fading / done). */
  heroReveal: boolean
  /** True while loader overlay is mounted (including fade-out). */
  loaderMounted: boolean
  reducedMotion: boolean
}

const SiteRevealContext = createContext<SiteRevealContextValue | null>(null)

export function useSiteReveal() {
  const ctx = useContext(SiteRevealContext)
  if (!ctx) throw new Error("useSiteReveal must be used within SiteRevealProvider")
  return ctx
}

const LOADER_HOLD_MS = 1450
const LOADER_FADE_MS = 520

export function SiteRevealProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<SitePhase>("loading")
  const [reducedMotion, setReducedMotion] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!mq.matches) return
    const id = window.setTimeout(() => {
      setReducedMotion(true)
      setPhase("ready")
    }, 0)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => {
      if (!mq.matches) return
      window.setTimeout(() => {
        setReducedMotion(true)
        setPhase("ready")
      }, 0)
    }
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const tHold = window.setTimeout(() => setPhase("reveal"), LOADER_HOLD_MS)
    return () => window.clearTimeout(tHold)
  }, [reducedMotion])

  useEffect(() => {
    if (phase !== "reveal" || reducedMotion) return
    const tDone = window.setTimeout(() => setPhase("ready"), LOADER_FADE_MS)
    return () => window.clearTimeout(tDone)
  }, [phase, reducedMotion])

  const value = useMemo<SiteRevealContextValue>(() => {
    const heroReveal = phase !== "loading"
    const loaderMounted = phase !== "ready"
    return { phase, heroReveal, loaderMounted, reducedMotion }
  }, [phase, reducedMotion])

  return (
    <SiteRevealContext.Provider value={value}>{children}</SiteRevealContext.Provider>
  )
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SiteRevealProvider>{children}</SiteRevealProvider>
    </LocaleProvider>
  )
}
