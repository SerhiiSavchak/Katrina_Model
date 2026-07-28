export interface Story {
  id: string
  title: string
  description: string
  category: string
  /** Cover + collection (3–4 frames) */
  images: string[]
  /** Per-image object-position, aligned with `images` */
  objectPositions: string[]
  year?: string
  location?: string
}

/**
 * Visual stories grouped by shoot — local model frames only (no stock).
 * Covers reuse portfolio assets as narrative collections.
 */
export const stories: Story[] = [
  {
    id: "1",
    title: "Rain editorial",
    description:
      "A moody studio sequence with rain, electric guitar, and cool blue light.",
    category: "Editorial",
    images: [
      "/images/model/portfolio/rain-guitar-full-body.jpg",
      "/images/model/portfolio/rain-guitar-portrait.jpg",
      "/images/model/portfolio/wet-beauty-portrait.jpg",
      "/images/model/art-nude/rain-art-nude.jpg",
    ],
    objectPositions: ["50% 18%", "50% 22%", "50% 18%", "50% 22%"],
    year: "2025",
    location: "Studio",
  },
  {
    id: "2",
    title: "Red sofa series",
    description:
      "Cinematic red against quilted black leather — wide editorial frames from the same set.",
    category: "Editorial",
    images: [
      "/images/model/portfolio/red-dress-sofa-featured.jpg",
      "/images/model/portfolio/red-dress-sofa-seated.jpg",
      "/images/model/portfolio/red-dress-reclining.jpg",
      "/images/model/portfolio/white-bolero-chair.jpg",
    ],
    objectPositions: ["50% 42%", "52% 40%", "50% 45%", "48% 20%"],
    year: "2025",
    location: "Studio",
  },
  {
    id: "3",
    title: "Paint & form",
    description:
      "Experimental body paint and lingerie editorial — colour, texture, and posture.",
    category: "Art Nude",
    images: [
      "/images/model/portfolio/body-paint-editorial.jpg",
      "/images/model/portfolio/paint-brush-portrait.jpg",
      "/images/model/portfolio/paint-studio-wide.jpg",
      "/images/model/portfolio/white-lingerie-chair.jpg",
    ],
    objectPositions: ["50% 16%", "50% 30%", "45% 35%", "50% 16%"],
    year: "2025",
    location: "Studio",
  },
  {
    id: "4",
    title: "Body still life",
    description:
      "Sushi, honey, and light — the body as a quiet still-life canvas in high-key frames.",
    category: "Editorial",
    images: [
      "/images/model/portfolio/sushi-body-still.jpg",
      "/images/model/art-nude/honey-silhouette.jpg",
    ],
    objectPositions: ["45% 50%", "50% 45%"],
    year: "2025",
    location: "Studio",
  },
]
