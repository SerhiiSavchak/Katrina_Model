export interface Story {
  id: string
  title: string
  description: string
  category: string
  image: string
}

export const stories: Story[] = [
  {
    id: "1",
    title: "Soft Studio Session",
    description: "An intimate exploration of light and form in controlled studio environment.",
    category: "Studio",
    image: "/images/stories/story-01.jpg",
  },
  {
    id: "2",
    title: "Berlin Editorial Mood",
    description: "Urban elegance captured in the streets and spaces of Berlin.",
    category: "Editorial",
    image: "/images/stories/story-02.jpg",
  },
  {
    id: "3",
    title: "Art Nude Series",
    description: "Timeless artistic expression through classical form and modern vision.",
    category: "Art Nude",
    image: "/images/stories/story-03.jpg",
  },
]
