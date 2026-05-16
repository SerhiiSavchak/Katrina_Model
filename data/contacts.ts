/**
 * Central place for public contact endpoints and display strings.
 * Update handles / email / phone here; labels stay in translations.
 */
export type ContactChannelId = "instagram" | "telegram" | "email" | "phone"

export const contactChannels = [
  {
    id: "instagram" as const,
    href: "https://www.instagram.com/katrina.dragonfly",
    value: "@katrina.dragonfly",
  },
  {
    id: "telegram" as const,
    href: "https://t.me/katrinadragonfly",
    value: "@katrinadragonfly",
  },
  {
    id: "email" as const,
    href: "mailto:booking@katrinadragonfly.com",
    value: "booking@katrinadragonfly.com",
  },
  {
    id: "phone" as const,
    href: "tel:+380501112233",
    value: "+380 XX XXX XX XX",
  },
] as const
