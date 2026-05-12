export interface MerchItem {
  id: string
  name: string
  description: string
  image: string
}

export const merchItems: MerchItem[] = [
  {
    id: "1",
    name: "Signature Print",
    description: "Limited edition fine art print, signed and numbered.",
    image: "/images/merch/merch-01.jpg",
  },
  {
    id: "2",
    name: "Photo Card Set",
    description: "Collectible set of 12 premium photo cards.",
    image: "/images/merch/merch-02.jpg",
  },
  {
    id: "3",
    name: "Limited T-shirt",
    description: "Premium cotton tee with exclusive artwork.",
    image: "/images/merch/merch-01.jpg",
  },
  {
    id: "4",
    name: "Poster Drop",
    description: "Large format poster from the latest editorial series.",
    image: "/images/merch/merch-02.jpg",
  },
]
