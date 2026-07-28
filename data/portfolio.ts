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

/**
 * Visual hierarchy (editorial sequence), desktop grid rows of three portraits
 * separated by wide featured landscapes:
 * rain full-body → body paint → fashion full-body | red sofa (wide) |
 * rain beauty → paint session → lingerie | red reclining (wide) |
 * wet beauty → honey still → art nude | paint studio (wide, closing frame).
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Rain guitar",
    category: "Editorial",
    image: "/images/model/portfolio/rain-guitar-full-body.jpg",
    alt: "Full-body editorial portrait of the model holding a pink guitar in the rain",
    objectPosition: "50% 18%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "2",
    title: "Body paint",
    category: "Editorial",
    image: "/images/model/portfolio/body-paint-editorial.jpg",
    alt: "Experimental body-paint editorial portrait",
    objectPosition: "50% 16%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "5",
    title: "White bolero",
    category: "Fashion",
    image: "/images/model/portfolio/white-bolero-chair.jpg",
    alt: "Full-body fashion portrait of the model posing with a wooden chair",
    objectPosition: "48% 20%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "3",
    title: "Red sofa editorial",
    category: "Editorial",
    image: "/images/model/portfolio/red-dress-sofa-featured.jpg",
    alt: "Editorial portrait of the model in a red dress on a black sofa",
    objectPosition: "50% 42%",
    aspectRatio: "landscape",
    featured: true,
    year: "2025",
    location: "Studio",
  },
  {
    id: "4",
    title: "Rain beauty",
    category: "Beauty",
    image: "/images/model/portfolio/rain-guitar-portrait.jpg",
    alt: "Rain editorial portrait of the model with a pink electric guitar",
    objectPosition: "50% 22%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "10",
    title: "Paint session",
    category: "Studio",
    image: "/images/model/portfolio/paint-brush-portrait.jpg",
    alt: "Creative studio portrait of the model with a paintbrush and paint bottles",
    objectPosition: "50% 30%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "8",
    title: "White lingerie",
    category: "Fashion",
    image: "/images/model/portfolio/white-lingerie-chair.jpg",
    alt: "Studio lingerie editorial portrait on a red chair",
    objectPosition: "50% 16%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "6",
    title: "Red reclining",
    category: "Editorial",
    image: "/images/model/portfolio/red-dress-reclining.jpg",
    alt: "Model reclining on a black sofa in a red dress",
    objectPosition: "50% 45%",
    aspectRatio: "landscape",
    featured: true,
    year: "2025",
    location: "Studio",
  },
  {
    id: "7",
    title: "Wet beauty",
    category: "Beauty",
    image: "/images/model/portfolio/wet-beauty-portrait.jpg",
    alt: "Wet beauty portrait under blue studio lighting",
    objectPosition: "50% 18%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "11",
    title: "Honey silhouette",
    category: "Art Nude",
    image: "/images/model/art-nude/honey-silhouette.jpg",
    alt: "High-key art nude still of dripping honey on a silhouetted torso",
    objectPosition: "50% 45%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "9",
    title: "Rain art nude",
    category: "Art Nude",
    image: "/images/model/art-nude/rain-art-nude.jpg",
    alt: "Art nude editorial portrait photographed in the rain",
    objectPosition: "50% 22%",
    aspectRatio: "portrait",
    year: "2025",
    location: "Studio",
  },
  {
    id: "12",
    title: "Paint studio",
    category: "Studio",
    image: "/images/model/portfolio/paint-studio-wide.jpg",
    alt: "Wide creative studio frame of the model behind a table of paint bottles",
    objectPosition: "50% 32%",
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
