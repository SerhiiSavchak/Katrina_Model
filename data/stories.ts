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

const FINAL = "/images/final-photos" as const

/**
 * Visual stories grouped by shoot — approved final frames only.
 * Covers reuse portfolio assets as narrative collections.
 */
export const stories: Story[] = [
  {
    id: "1",
    title: "Paint series",
    description:
      "A body-paint editorial sequence — colour, brushwork, and contemplative posture.",
    category: "Editorial",
    images: [
      `${FINAL}/IMG_3470.JPG`,
      `${FINAL}/IMG_3471.JPG`,
      `${FINAL}/IMG_3473.JPG`,
    ],
    objectPositions: ["50% 22%", "50% 16%", "50% 38%"],
    year: "2025",
    location: "Studio",
  },
  {
    id: "2",
    title: "Red editorial",
    description:
      "Cinematic red against warm studio light — fashion portrait and sofa frame from the same set.",
    category: "Editorial",
    images: [`${FINAL}/IMG_3461.JPG`, `${FINAL}/IMG_3464.JPG`],
    objectPositions: ["55% 18%", "50% 42%"],
    year: "2025",
    location: "Studio",
  },
  {
    id: "3",
    title: "Form & still life",
    description:
      "Conceptual art nude — honey silhouette and overhead sushi still life.",
    category: "Art Nude",
    images: [`${FINAL}/IMG_3468.JPG`, `${FINAL}/IMG_3466.JPG`],
    objectPositions: ["72% 42%", "50% 48%"],
    year: "2025",
    location: "Studio",
  },
]
