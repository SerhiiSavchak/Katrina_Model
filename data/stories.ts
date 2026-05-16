import { storiesRemoteImages } from "@/data/remote-images"

export interface Story {
  id: string
  title: string
  description: string
  category: string
  image: string
  objectPosition: string
}

export const stories: Story[] = [
  {
    id: "1",
    title: "Soft Studio Session",
    description:
      "A refined study of light and form in a controlled studio environment.",
    category: "Studio",
    image: storiesRemoteImages["1"].src,
    objectPosition: storiesRemoteImages["1"].objectPosition,
  },
  {
    id: "2",
    title: "Berlin Editorial Mood",
    description: "Urban elegance captured in the streets and spaces of Berlin.",
    category: "Editorial",
    image: storiesRemoteImages["2"].src,
    objectPosition: storiesRemoteImages["2"].objectPosition,
  },
  {
    id: "3",
    title: "Art Nude Series",
    description: "Timeless artistic expression through classical form and modern vision.",
    category: "Art Nude",
    image: storiesRemoteImages["3"].src,
    objectPosition: storiesRemoteImages["3"].objectPosition,
  },
]
