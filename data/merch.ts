import { contactChannels } from "@/data/contacts"

const telegramDefault =
  contactChannels.find((c) => c.id === "telegram")?.href ?? "https://t.me/dylanfoxi"

export interface MerchItem {
  id: string
  name: string
  description: string
  image: string
  objectPosition?: string
  telegramHref: string
  /** Temporary product mockup — replace with real merch photography when available. */
  isPlaceholder?: boolean
}

export const merchItems: MerchItem[] = [
  {
    id: "1",
    name: "Signature Print",
    description: "Limited edition fine art print, signed and numbered.",
    image: "/images/merch/merch-print.jpg",
    objectPosition: "50% 50%",
    telegramHref: telegramDefault,
    isPlaceholder: true,
  },
  {
    id: "2",
    name: "Photo Card Set",
    description: "Collectible set of 12 premium photo cards.",
    image: "/images/merch/merch-cards.jpg",
    objectPosition: "50% 50%",
    telegramHref: telegramDefault,
    isPlaceholder: true,
  },
  {
    id: "3",
    name: "Limited T-shirt",
    description: "Premium cotton tee with exclusive artwork.",
    image: "/images/merch/merch-tshirt.jpg",
    objectPosition: "50% 45%",
    telegramHref: telegramDefault,
    isPlaceholder: true,
  },
  {
    id: "4",
    name: "Poster Drop",
    description: "Large format poster from the latest editorial series.",
    image: "/images/merch/merch-poster.jpg",
    objectPosition: "50% 50%",
    telegramHref: telegramDefault,
    isPlaceholder: true,
  },
]
