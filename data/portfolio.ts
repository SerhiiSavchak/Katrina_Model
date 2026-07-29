export type PortfolioCategory =
  | "All"
  | "Fashion"
  | "Studio"
  | "Beauty"
  | "Art Nude"
  | "Editorial"

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "All">
  image: string
  alt: string
  /** CSS object-position, e.g. "50% 20%" */
  objectPosition?: string
  aspectRatio: "portrait" | "landscape" | "square"
  /** Wide editorial treatment in the desktop grid */
  featured?: boolean
  year?: string
  location?: string
}

const FINAL = "/images/final-photos" as const

/**
 * Visual hierarchy (editorial sequence):
 * fashion portrait → paint body → wide red sofa → beauty close-up →
 * paint landscape → honey silhouette → sushi overhead.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Red vase editorial",
    category: "Fashion",
    image: `${FINAL}/IMG_3461.JPG`,
    alt: "Fashion portrait of the model in a red cutout dress beside an ornate ceramic vase",
    objectPosition: "55% 18%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "2",
    title: "Paint form",
    category: "Editorial",
    image: `${FINAL}/IMG_3471.JPG`,
    alt: "Editorial portrait with expressive red and orange body paint against a maroon backdrop",
    objectPosition: "50% 16%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "3",
    title: "Red sofa lights",
    category: "Editorial",
    image: `${FINAL}/IMG_3464.JPG`,
    alt: "Wide editorial frame of the model in a red dress on a black sofa under a grid of warm lights",
    objectPosition: "50% 42%",
    aspectRatio: "landscape",
    featured: true,
    year: "2025",
    location: "Studio",
  },
  {
    id: "4",
    title: "Paint beauty",
    category: "Beauty",
    image: `${FINAL}/IMG_3470.JPG`,
    alt: "Beauty close-up with body paint, paintbrush, and bottles in soft foreground focus",
    objectPosition: "50% 22%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "5",
    title: "Paint still",
    category: "Editorial",
    image: `${FINAL}/IMG_3473.JPG`,
    alt: "Wide cinematic paint portrait with brush and colour bottles in the foreground",
    objectPosition: "50% 38%",
    aspectRatio: "landscape",
    featured: true,
    year: "2025",
    location: "Studio",
  },
  {
    id: "6",
    title: "Honey silhouette",
    category: "Art Nude",
    image: `${FINAL}/IMG_3468.JPG`,
    alt: "High-contrast art nude silhouette with honey dripping against a white backdrop",
    objectPosition: "72% 42%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "7",
    title: "Sushi still life",
    category: "Art Nude",
    image: `${FINAL}/IMG_3466.JPG`,
    alt: "Overhead art nude still life with sushi, chopsticks, and champagne on white fabric",
    objectPosition: "50% 48%",
    aspectRatio: "landscape",
    featured: true,
    year: "2025",
    location: "Studio",
  },
]

export const categories: PortfolioCategory[] = [
  "All",
  "Fashion",
  "Studio",
  "Beauty",
  "Art Nude",
  "Editorial",
]
