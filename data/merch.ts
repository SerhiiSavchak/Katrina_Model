import { contactChannels } from "@/data/contacts"
import { unsplashEditorial } from "@/data/remote-images"

const telegramDefault =
  contactChannels.find((c) => c.id === "telegram")?.href ?? "https://t.me/dylanfoxi"

export interface MerchItem {
  id: string
  name: string
  description: string
  image: string
  objectPosition?: string
  telegramHref: string
}

export const merchItems: MerchItem[] = [
  {
    id: "1",
    name: "Signature Print",
    description: "Limited edition fine art print, signed and numbered.",
    image: "/images/merch/merch-01.jpg",
    objectPosition: "50% 22%",
    telegramHref: telegramDefault,
  },
  {
    id: "2",
    name: "Photo Card Set",
    description: "Collectible set of 12 premium photo cards.",
    image: "/images/merch/merch-02.jpg",
    objectPosition: "50% 28%",
    telegramHref: telegramDefault,
  },
  {
    id: "3",
    name: "Limited T-shirt",
    description: "Premium cotton tee with exclusive artwork.",
    image: unsplashEditorial("photo-1550614000-4895a10e339e", 1600),
    objectPosition: "50% 24%",
    telegramHref: telegramDefault,
  },
  {
    id: "4",
    name: "Poster Drop",
    description: "Large format poster from the latest editorial series.",
    image: unsplashEditorial("photo-1558171813-48579e6a5f5a", 1600),
    objectPosition: "50% 20%",
    telegramHref: telegramDefault,
  },
]
