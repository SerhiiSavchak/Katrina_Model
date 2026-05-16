import { unsplashEditorial } from "@/data/remote-images"

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

export const stories: Story[] = [
  {
    id: "1",
    title: "Soft Studio Session",
    description:
      "A refined study of light and form in a controlled studio environment.",
    category: "Studio",
    images: [
      "/images/stories/story-01.jpg",
      unsplashEditorial("photo-1534528741775-53994a69daeb", 2000),
      unsplashEditorial("photo-1490481651871-ab68de25d43d", 2000),
      unsplashEditorial("photo-1469334031218-e382a71b716b", 2000),
    ],
    objectPositions: ["48% 26%", "50% 22%", "50% 20%", "50% 28%"],
    year: "2024",
    location: "Kyiv studio",
  },
  {
    id: "2",
    title: "Berlin Editorial Mood",
    description: "Urban elegance captured in the streets and spaces of Berlin.",
    category: "Editorial",
    images: [
      "/images/stories/story-02.jpg",
      unsplashEditorial("photo-1516576335081-94887d1346cc", 2000),
      unsplashEditorial("photo-1539109136881-3ba061e47872", 2000),
      unsplashEditorial("photo-1509631179647-b0176f404ebb", 2000),
    ],
    objectPositions: ["50% 28%", "50% 30%", "52% 26%", "50% 24%"],
    year: "2024",
    location: "Berlin",
  },
  {
    id: "3",
    title: "Art Nude Series",
    description:
      "Timeless artistic expression through classical form and modern vision.",
    category: "Art Nude",
    images: [
      "/images/stories/story-03.jpg",
      unsplashEditorial("photo-1503342217505-b0a15ec326c7", 2000),
      unsplashEditorial("photo-1517841905240-472988babdf9", 2000),
      unsplashEditorial("photo-1483985988355-763728e1935b", 2000),
    ],
    objectPositions: ["48% 28%", "48% 30%", "50% 26%", "45% 28%"],
    year: "2023",
    location: "Studio",
  },
]
