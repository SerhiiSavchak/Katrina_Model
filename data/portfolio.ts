import { portfolioRemoteImages } from "@/data/remote-images"

export type PortfolioCategory = "All" | "Fashion" | "Studio" | "Beauty" | "Art Nude" | "Editorial"

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "All">
  image: string
  /** CSS object-position, e.g. "50% 20%" */
  objectPosition?: string
  aspectRatio: "portrait" | "landscape" | "square"
  year?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Soft Studio Light",
    category: "Studio",
    image: portfolioRemoteImages["1"].src,
    objectPosition: portfolioRemoteImages["1"].objectPosition,
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "2",
    title: "Berlin Editorial",
    category: "Editorial",
    image: portfolioRemoteImages["2"].src,
    objectPosition: portfolioRemoteImages["2"].objectPosition,
    aspectRatio: "landscape",
    year: "2024",
  },
  {
    id: "3",
    title: "Beauty Portrait",
    category: "Beauty",
    image: portfolioRemoteImages["3"].src,
    objectPosition: portfolioRemoteImages["3"].objectPosition,
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "4",
    title: "Body Study I",
    category: "Art Nude",
    image: portfolioRemoteImages["4"].src,
    objectPosition: portfolioRemoteImages["4"].objectPosition,
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "5",
    title: "Fashion Test",
    category: "Fashion",
    image: portfolioRemoteImages["5"].src,
    objectPosition: portfolioRemoteImages["5"].objectPosition,
    aspectRatio: "square",
    year: "2024",
  },
  {
    id: "6",
    title: "Morning Series",
    category: "Studio",
    image: portfolioRemoteImages["6"].src,
    objectPosition: portfolioRemoteImages["6"].objectPosition,
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "7",
    title: "Studio Form",
    category: "Art Nude",
    image: portfolioRemoteImages["7"].src,
    objectPosition: portfolioRemoteImages["7"].objectPosition,
    aspectRatio: "portrait",
    year: "2023",
  },
  {
    id: "8",
    title: "Kyiv Fashion Week",
    category: "Fashion",
    image: portfolioRemoteImages["8"].src,
    objectPosition: portfolioRemoteImages["8"].objectPosition,
    aspectRatio: "landscape",
    year: "2023",
  },
  {
    id: "9",
    title: "Editorial Figure",
    category: "Art Nude",
    image: portfolioRemoteImages["9"].src,
    objectPosition: portfolioRemoteImages["9"].objectPosition,
    aspectRatio: "portrait",
    year: "2023",
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
