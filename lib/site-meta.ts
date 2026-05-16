import type { Metadata } from "next"

/** Canonical site URL for Open Graph / metadata (optional). Example: `https://example.com` */
export function getSiteMetadataBase(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!raw) return undefined
  try {
    const normalized = raw.endsWith("/") ? raw.slice(0, -1) : raw
    return new URL(normalized)
  } catch {
    return undefined
  }
}

export const SITE_TITLE = "Katrina Dragonfly — International Model"

export const SITE_DESCRIPTION =
  "International model portfolio of Katrina Dragonfly. Fashion, studio, beauty and art nude projects across Ukraine and Europe."

export const SITE_KEYWORDS: Metadata["keywords"] = [
  "model",
  "fashion model",
  "beauty",
  "editorial",
  "studio photography",
  "art nude",
  "Ukraine",
  "Europe",
]
